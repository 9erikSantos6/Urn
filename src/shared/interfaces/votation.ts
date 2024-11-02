import { Candidate } from '../models/candidates';

export interface VotesResults {
  validVotes: Map<Candidate, number>;
  blankVotes: number;
  nullVotes: number;
}
