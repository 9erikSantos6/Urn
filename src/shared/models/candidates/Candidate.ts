import { Party } from '../parties';

export class Candidate {
  protected name: string;
  protected number: string;
  protected party: Party;

  constructor(name: string, number: string, party: Party) {
    this.name = name;
    this.number = this.validateNumber(number);
    this.party = party;
  }

  protected validateNumber(number: string): string {
    const numericString = number.replace(/\D/g, '');
    if (
      numericString &&
      numericString.length <= 5 &&
      Number(numericString) !== 0
    ) {
      return numericString;
    }
    throw new Error('Invalid number!');
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getNumber(): string {
    return this.number;
  }

  public setNumber(number: string): void {
    this.number = this.validateNumber(number);
  }

  public getParty(): Party {
    return this.party;
  }

  public setParty(party: Party) {
    this.party = party;
  }
}
