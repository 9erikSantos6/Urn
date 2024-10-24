import { Candidate } from './candidate';

export class EstateDeputy extends Candidate {
  constructor(name: string, number: string) {
    super(name, number);
    this.number = this.validateNumber(number);
  }

  protected validateNumber(number: string): string {
    const numericString = number.replace(/\D/g, '');
    if (
      numericString &&
      numericString.length === 5 &&
      Number(numericString) !== 0
    ) {
      return numericString;
    }
    throw new Error('Invalid number for Estate Deputy!');
  }
}
