import { captalize } from '../../utils/string';

export class Party {
  private name: string;
  private acronym: string;

  constructor(name: string, acronym: string) {
    this.name = name;
    this.acronym = acronym;
  }

  public getName(): string {
    return captalize(this.name);
  }

  public setName(name: string) {
    this.name = name;
  }

  public getAcronym(): string {
    return this.acronym.toUpperCase();
  }

  public setAcronym(acronym: string) {
    this.acronym = acronym;
  }
}
