import { Party } from '../parties';
import { Candidate } from './Candidate';

export class Senator extends Candidate {
  constructor(name: string, number: string, party: Party) {
    super(name, number, party);
    this.number = this.validateNumber(number);
  }

  protected validateNumber(number: string): string {
    const numericString = number.replace(/\D/g, '');
    if (
      numericString &&
      numericString.length === 3 &&
      Number(numericString) !== 0
    ) {
      return numericString;
    }
    throw new Error('Invalid number for Senator!');
  }
}
