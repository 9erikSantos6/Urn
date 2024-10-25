import { Candidate } from '../../app/candidates';

export interface VotesResults {
  validVotes: Map<Candidate, number>;
  blankVotes: number;
  nullVotes: number;
};