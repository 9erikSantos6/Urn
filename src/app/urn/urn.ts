import { Candidate } from "../candidates";
export class Urn {
    private candidates: Set<Candidate> = new Set();

    public addCandidate(candidate: Candidate): void {
        this.candidates.add(candidate);
    }

    public delCandidate(number: string) {
        const candidate = this.searchByNumber(number);
        if (candidate) {
            this.candidates.delete(candidate);
        }
    }

    public searchByNumber(number: string): Candidate | undefined {
        const candidate = Array.from(this.candidates).find((candidate) => candidate.getNumber() == number);
        return candidate
    }

    public listCandidates(): Candidate[] {
        return Array.from(this.candidates);
    }
}
