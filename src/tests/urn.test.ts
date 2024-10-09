import { Candidate } from "../app/candidates";
import { Voter } from "../app/voters";
import { Urn } from "../app/urn";
import { VotesResults } from "shared/types/votation";

describe('Urn Class Tests', (): void => {
    let urn: Urn;

    beforeEach(() => {
        urn = new Urn();
    });

    describe('Candidate-related tests', (): void => {
        it('Should instantiate Urn correctly', () => {
            expect(urn).toBeInstanceOf(Urn);
        });

        it('Should add Candidate correctly', (): void => {
            const candidate: Candidate = new Candidate('Eneas', '00');
            urn.addCandidate(candidate);
            expect(urn.listCandidates()).toContain(candidate);
        });

        it('Should deny adding duplicate candidates', (): void => {
            const candidate1: Candidate = new Candidate('Eneas', '55');
            const candidate2: Candidate = new Candidate('Eneas', '55');
            urn.addCandidate(candidate1);
            expect(() => urn.addCandidate(candidate2)).toThrow('Candidate already exists!');
        });

        it('Should return a candidate list as an array', (): void => {
            const candidate1: Candidate = new Candidate('Eneas', '00');
            const candidate2: Candidate = new Candidate('THC', '22');
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
            const candidate1: Candidate = new Candidate('Eneas', '00');
            const candidate2: Candidate = new Candidate('THC', '22');
            urn.addCandidate(candidate1);
            urn.addCandidate(candidate2);
            
            urn.delCandidate('22');
            
            const candidatesList = urn.listCandidates();
            expect(candidatesList).toContain(candidate1);
            expect(candidatesList).not.toContain(candidate2);
        });

        it('Should throw an error when trying to delete a non-existent Candidate', (): void => {
            const candidate1: Candidate = new Candidate('Eneas', '00');
            const candidate2: Candidate = new Candidate('THC', '22');
            urn.addCandidate(candidate1);
            urn.addCandidate(candidate2);
            
            expect(() => urn.delCandidate('27')).toThrow('This candidate does not exist!');
            
            const candidatesList = urn.listCandidates();
            expect(candidatesList).toContain(candidate1);
            expect(candidatesList).toContain(candidate2);
        });
    });

    describe('Vote-related tests', () => {
        it('Should register a vote for a candidate', (): void => {
            const candidate1: Candidate = new Candidate('Eneas', '55');
            const candidate2: Candidate = new Candidate('THC', '22');
            const voter = new Voter('Jhon', '35417396725');

            urn.addCandidate(candidate1);
            urn.addCandidate(candidate2);
            urn.registerVote(voter, '55');

            const votationResults: VotesResults = urn.getVotationResults();

            expect(votationResults.validVotes.get(candidate1)).toBe(1);
            expect(votationResults.validVotes.get(candidate2)).toBe(0);
            expect(votationResults.blankVotes).toBe(0);
            expect(votationResults.nullVotes).toBe(0);
        });

        it('Should deny duplicate votes by the same voter', (): void => {
            const candidate1: Candidate = new Candidate('Eneas', '55');
            const candidate2: Candidate = new Candidate('THC', '22');
            const voter = new Voter('Jhon', '35417396725');
            
            urn.addCandidate(candidate1);
            urn.addCandidate(candidate2);
            urn.registerVote(voter, '55');
            
            expect(() => urn.registerVote(voter, '55')).toThrow('Vote denied!');

            const votationResults: VotesResults = urn.getVotationResults();

            expect(votationResults.validVotes.get(candidate1)).toBe(1);
            expect(votationResults.validVotes.get(candidate2)).toBe(0);
            expect(votationResults.blankVotes).toBe(0);
            expect(votationResults.nullVotes).toBe(0);
        });

        it('Should register a blank vote', (): void => {
            const candidate1: Candidate = new Candidate('Eneas', '55');
            const candidate2: Candidate = new Candidate('THC', '22');
            const voter = new Voter('Jhon', '35417396725');

            urn.addCandidate(candidate1);
            urn.addCandidate(candidate2);
            urn.registerVote(voter, 'blank');

            const votationResults: VotesResults = urn.getVotationResults();

            expect(votationResults.validVotes.get(candidate1)).toBe(0);
            expect(votationResults.validVotes.get(candidate2)).toBe(0);
            expect(votationResults.blankVotes).toBe(1);
            expect(votationResults.nullVotes).toBe(0);
        });

        it('Should register a null vote', (): void => {
            const candidate1: Candidate = new Candidate('Eneas', '55');
            const candidate2: Candidate = new Candidate('THC', '22');
            const voter = new Voter('Jhon', '35417396725');

            urn.addCandidate(candidate1);
            urn.addCandidate(candidate2);
            urn.registerVote(voter, '00');

            const votationResults: VotesResults = urn.getVotationResults();

            expect(votationResults.validVotes.get(candidate1)).toBe(0);
            expect(votationResults.validVotes.get(candidate2)).toBe(0);
            expect(votationResults.blankVotes).toBe(0);
            expect(votationResults.nullVotes).toBe(1);
        });
    });
});
