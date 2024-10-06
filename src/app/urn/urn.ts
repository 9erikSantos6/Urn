import { Candidate } from "../candidates";
import { Voter } from "../../app/voters";
export class Urn {
    private candidates: Set<Candidate> = new Set();
    private votersCpf: Set<string> = new Set();
    private votes: Map<Candidate, number> = new Map();

    public addCandidate(candidate: Candidate): void {
        const existingCandidate = this.searchByNumber(candidate.getNumber());
        if (!existingCandidate) {
            this.candidates.add(candidate);
            this.votes.set(candidate, 0);
            return;
        }
        throw new Error('Candidate already exists!');
    }

    public delCandidate(number: string): void {
        const candidate = this.searchByNumber(number);
        if (candidate) {
            this.candidates.delete(candidate);
            this.votes.delete(candidate);
            return;
        }
        throw new Error('This candidate does not exist!');
    }

    public searchByNumber(number: string): Candidate | undefined {
        return Array.from(this.candidates).find((candidate) => candidate.getNumber() == number);
    }

    public listCandidates(): Candidate[] {
        return Array.from(this.candidates);
    }

    public registerVote(voter: Voter, candidate: Candidate): void {
        const cpfVoter: string = voter.getCpf();
        if (!this.votersCpf.has(cpfVoter) && this.votes.has(candidate)) {
            this.votersCpf.add(cpfVoter);
            this.votes.set(candidate, ((this.votes.get(candidate) || 0 ) + 1));
            return;
        } 
        throw new Error('Vote denied!');
    }

    public getVoteResults(): Map<Candidate, number> {
        return this.votes
    }
}
