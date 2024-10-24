import { Candidate } from '../candidates';
import { Voter } from '../../app/voters';
import { VotationSatus, VotesResults } from '../../shared/types/votation';

export class Urn {
  private votingSatus: VotationSatus = 'suspended';
  private candidates: Set<Candidate> = new Set();
  private CPFrecords: Set<string> = new Set();
  private votes: VotesResults = {
    validVotes: new Map(),
    blankVotes: 0,
    nullVotes: 0,
  };

  private confirmVotingStatusIn(votationSatus: VotationSatus): void {
    if (this.votingSatus === votationSatus) return;
    throw new Error(
      `Operation denied, voting status is: ${this.votingSatus.toUpperCase()}`,
    );
  }

  public addCandidate(candidate: Candidate): void {
    this.confirmVotingStatusIn('suspended');
    const existingCandidate = this.searchByNumber(candidate.getNumber());
    if (!existingCandidate) {
      this.candidates.add(candidate);
      this.votes.validVotes.set(candidate, 0);
      return;
    }
    throw new Error('Candidate already exists!');
  }

  public delCandidate(number: string): void {
    this.confirmVotingStatusIn('suspended');
    const candidate = this.searchByNumber(number);
    if (candidate) {
      this.candidates.delete(candidate);
      this.votes.validVotes.delete(candidate);
      return;
    }
    throw new Error('This candidate does not exist!');
  }

  public searchByNumber(number: string): Candidate | undefined {
    return Array.from(this.candidates).find(
      (candidate) => candidate.getNumber() == number,
    );
  }

  public listCandidates(): Candidate[] {
    return Array.from(this.candidates);
  }

  public registerVote(voter: Voter, vote: string): void {
    this.confirmVotingStatusIn('occurring');
    const voterCPF = voter.getCpf();

    if (this.CPFrecords.has(voterCPF)) {
      throw new Error('Vote denied!');
    }
    if (vote.toLocaleLowerCase() == 'blank') {
      this.CPFrecords.add(voterCPF);
      this.votes.blankVotes += 1;
      return;
    }
    const candidateNumber = vote;
    const candidate: Candidate | undefined =
      this.searchByNumber(candidateNumber);
    if (candidate) {
      this.CPFrecords.add(voterCPF);
      this.votes.validVotes.set(
        candidate,
        (this.votes.validVotes.get(candidate) || 0) + 1,
      );
      return;
    }
    this.CPFrecords.add(voterCPF);
    this.votes.nullVotes += 1;
  }

  public closeVoting(): void {
    this.votingSatus = 'suspended';
  }

  public startVoting(): void {
    this.votingSatus = 'occurring';
  }

  public getVotationResults(): VotesResults {
    return this.votes;
  }

  public getVotingStatus(): VotationSatus {
    return this.votingSatus;
  }
}
