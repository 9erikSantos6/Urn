import { it, describe, beforeEach, expect } from 'vitest';
import {
  Candidate,
  Governor,
  Mayor,
  President,
} from '../../shared/models/candidates';
import { Voter } from '../../shared/models/voters';
import { Urn } from '../../shared/models/urn';
import { VotesResults } from '../../shared/interfaces/votation';
import { Party } from '../../shared/models/parties';

describe('Urn Class Tests', (): void => {
  let urn: Urn;
  const party: Party = new Party('new party', 'np');

  beforeEach(() => {
    urn = new Urn();
  });

  it('Should instantiate Urn correctly', () => {
    expect(urn).toBeInstanceOf(Urn);
  });

  describe('Candidate-related tests', (): void => {
    it('Should add Candidate correctly', (): void => {
      const candidate: Mayor = new Mayor('Eneas', '55', party);
      urn.addCandidate(candidate);
      expect(urn.listCandidates()).toContain(candidate);
    });

    it('Should deny adding candidates after voting start', (): void => {
      const candidate: President = new President('Eneas', '55', party);
      urn.startVoting();
      expect((): void => urn.addCandidate(candidate)).toThrow(
        `Operation denied, voting status is: OCCURRING`
      );
    });

    it('Should deny adding duplicate candidates', (): void => {
      const candidate1: Governor = new Governor('Eneas', '55', party);
      const candidate2: Governor = new Governor('Eneas', '55', party);
      urn.addCandidate(candidate1);
      expect(() => urn.addCandidate(candidate2)).toThrow(
        'Candidate already exists!'
      );
    });

    it('Should return a candidate list as an array', (): void => {
      const candidate1: Candidate = new President('Eneas', '55', party);
      const candidate2: Candidate = new President('THC', '22', party);
      urn.addCandidate(candidate1);
      urn.addCandidate(candidate2);

      const candidatesList = urn.listCandidates();
      expect(candidatesList).toBeInstanceOf(Array);
      expect(candidatesList.length).toBe(2);
      candidatesList.forEach((candidate) => {
        expect(candidate).toBeInstanceOf(Candidate);
      });
    });

    it('Should delete a Candidate by number', (): void => {
      const candidate1: Candidate = new President('Eneas', '55', party);
      const candidate2: Candidate = new President('THC', '22', party);
      urn.addCandidate(candidate1);
      urn.addCandidate(candidate2);

      urn.delCandidate('22');

      const candidatesList = urn.listCandidates();
      expect(candidatesList).toContain(candidate1);
      expect(candidatesList).not.toContain(candidate2);
    });

    it('Should throw an error when trying to delete a non-existent Candidate', (): void => {
      const candidate1: Candidate = new Mayor('Eneas', '11', party);
      const candidate2: Candidate = new Mayor('THC', '22', party);
      urn.addCandidate(candidate1);
      urn.addCandidate(candidate2);

      expect(() => urn.delCandidate('27')).toThrow(
        'This candidate does not exist!'
      );

      const candidatesList = urn.listCandidates();
      expect(candidatesList).toContain(candidate1);
      expect(candidatesList).toContain(candidate2);
    });
  });

  describe('Vote-related tests', () => {
    it('Should register a vote for a candidate', (): void => {
      const candidate1: Candidate = new President('Eneas', '55', party);
      const candidate2: Candidate = new President('THC', '22', party);
      const voter = new Voter('Jhon', '35417396725');

      urn.addCandidate(candidate1);
      urn.addCandidate(candidate2);

      urn.startVoting();

      urn.registerVote(voter, '55');

      const votationResults: VotesResults = urn.getVotationResults();

      expect(votationResults.validVotes.get(candidate1)).toBe(1);
      expect(votationResults.validVotes.get(candidate2)).toBe(0);
      expect(votationResults.blankVotes).toBe(0);
      expect(votationResults.nullVotes).toBe(0);
    });

    it('Should return an error when trying to vote without the vote not taking place.', () => {
      const candidate1: Candidate = new President('Eneas', '55', party);
      const candidate2: Candidate = new President('THC', '22', party);
      const voter = new Voter('Jhon', '35417396725');

      urn.addCandidate(candidate1);
      urn.addCandidate(candidate2);

      expect((): void => urn.registerVote(voter, '55')).toThrow(
        'Operation denied, voting status is: SUSPENDED'
      );
      const votationResults: VotesResults = urn.getVotationResults();
      expect(votationResults.validVotes.get(candidate1)).toBe(0);
      expect(votationResults.validVotes.get(candidate2)).toBe(0);
      expect(votationResults.blankVotes).toBe(0);
      expect(votationResults.nullVotes).toBe(0);
    });

    it('Should deny duplicate votes by the same voter', (): void => {
      const candidate1: Candidate = new Governor('Eneas', '55', party);
      const candidate2: Candidate = new Governor('THC', '22', party);
      const voter = new Voter('Jhon', '35417396725');

      urn.addCandidate(candidate1);
      urn.addCandidate(candidate2);

      urn.startVoting();

      urn.registerVote(voter, '55');

      expect(() => urn.registerVote(voter, '55')).toThrow('Vote denied!');

      const votationResults: VotesResults = urn.getVotationResults();

      expect(votationResults.validVotes.get(candidate1)).toBe(1);
      expect(votationResults.validVotes.get(candidate2)).toBe(0);
      expect(votationResults.blankVotes).toBe(0);
      expect(votationResults.nullVotes).toBe(0);
    });

    it('Should register a blank vote', (): void => {
      const candidate1: Candidate = new President('Eneas', '55', party);
      const candidate2: Candidate = new President('THC', '22', party);
      const voter = new Voter('Jhon', '35417396725');

      urn.addCandidate(candidate1);
      urn.addCandidate(candidate2);

      urn.startVoting();

      urn.registerVote(voter, 'blank');

      const votationResults: VotesResults = urn.getVotationResults();

      expect(votationResults.validVotes.get(candidate1)).toBe(0);
      expect(votationResults.validVotes.get(candidate2)).toBe(0);
      expect(votationResults.blankVotes).toBe(1);
      expect(votationResults.nullVotes).toBe(0);
    });

    it('Should register a null vote', (): void => {
      const candidate1: Candidate = new Mayor('Eneas', '55', party);
      const candidate2: Candidate = new Mayor('THC', '22', party);
      const voter = new Voter('Jhon', '35417396725');

      urn.addCandidate(candidate1);
      urn.addCandidate(candidate2);

      urn.startVoting();

      urn.registerVote(voter, '00');

      const votationResults: VotesResults = urn.getVotationResults();

      expect(votationResults.validVotes.get(candidate1)).toBe(0);
      expect(votationResults.validVotes.get(candidate2)).toBe(0);
      expect(votationResults.blankVotes).toBe(0);
      expect(votationResults.nullVotes).toBe(1);
    });

    it('Should close the voting', (): void => {
      urn.closeVoting();
      expect(urn.getVotingStatus()).toBe('suspended');
    });
  });
});
