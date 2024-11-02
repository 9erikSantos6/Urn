import { Party } from '../parties';
import { Candidate } from './Candidate';

export class Mayor extends Candidate {
  constructor(name: string, number: string, party: Party) {
    super(name, number, party);
    this.number = this.validateNumber(number);
  }

  protected validateNumber(number: string): string {
    const numericString = number.replace(/\D/g, '');
    if (
      numericString &&
      numericString.length === 2 &&
      Number(numericString) !== 0
    ) {
      return numericString;
    }
    throw new Error('Invalid number for Mayor!');
  }
}