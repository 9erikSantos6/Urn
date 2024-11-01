export class Party {
  private name: string;
  private acronym: string;

  constructor(name: string, acronym: string) {
    this.name = name;
    this.acronym = acronym;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getAcronym(): string {
    return this.acronym;
  }

  public setAcronym(acronym: string) {
    this.acronym = acronym;
  }
}