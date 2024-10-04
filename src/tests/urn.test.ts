import { Candidate } from "../app/candidates";
import { Urn } from "../app/urn";


describe('Testing Urn', (): void => {
    it('Must return the Urn', () => {
        const urn: Urn = new Urn();
        expect(urn).toBeInstanceOf(Urn);
    });

    it('Must add Candidate correctly', (): void => {
        const candidate: Candidate = new Candidate('Eneas', '00');
        const urn: Urn = new Urn();
        urn.addCandidate(candidate);
        expect(urn.listCandidates()).toContain(candidate);
    });

    it('Must retrun a Candiate list correctly', (): void => {
        const candidate1: Candidate = new Candidate('Eneas', '00');
        const candidate2: Candidate = new Candidate('THC', '22');
        const urn: Urn = new Urn();

        urn.addCandidate(candidate1);
        urn.addCandidate(candidate2);

        const candidatesList = urn.listCandidates();
        expect(candidatesList).toBeInstanceOf(Array);
        candidatesList.forEach((candidate) => {
            expect(candidate).toBeInstanceOf(Candidate);
        })
    });

    it('Must delete Candidate', (): void => {
        const candidate1: Candidate = new Candidate('Eneas', '00');
        const candidate2: Candidate = new Candidate('THC', '22');
        const urn: Urn = new Urn();

        urn.addCandidate(candidate1);
        urn.addCandidate(candidate2);

        urn.delCandidate('22');
        
        const candidatesList = urn.listCandidates();

        expect(candidatesList).toContain(candidate1);
        expect(candidatesList).not.toContain(candidate2);
    });
});