// import { Candidate } from '@app/candidates';
// import { Voter } from '@app/voters';
import { Candidate } from "../candidates";
import { Voter } from "../voters";

export class Vote {
    private candidate: Candidate;
    private voter: Voter;

    constructor(candidate: Candidate, voter: Voter) {
        this.candidate = candidate;
        this.voter = voter;
    }

    public getCandidate(): Candidate {
        return this.candidate;
    }

    public setCandidate(candidate: Candidate): void {
        this.candidate = candidate;
    }

    public getVoter(): Voter {
        return this.voter;
    }

    public setVoter(voter: Voter): void {
        this.voter = voter;
    }
}
