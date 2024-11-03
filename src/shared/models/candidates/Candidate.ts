import { Party } from '../parties';

export abstract class Candidate {
  protected name: string;
  protected number: string;
  protected party: Party;

  constructor(name: string, number: string, party: Party) {
    this.name = name;
    this.number = this.validateNumber(number);
    this.party = party;
  }

  protected abstract validateNumber(number: string): string;

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
