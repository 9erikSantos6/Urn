import { Candidate } from '../../app/candidates';

export type VotesResults = {
    validVotes: Map<Candidate, number>;
    blankVotes: number;
    nullVotes: number;
}

export type VotationSatus = 'occurring' | 'suspended';
