import { Candidate } from './candidate';

export class Mayor extends Candidate {
  constructor(name: string, number: string) {
    super(name, number);
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
