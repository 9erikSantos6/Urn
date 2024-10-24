export class Candidate {
  protected name: string;
  protected number: string;

  constructor(name: string, number: string) {
    this.name = name;
    this.number = this.validateNumber(number);
  }

  protected validateNumber(number: string): string {
    const numericString = number.replace(/\D/g, '');
    if (numericString) {
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
}
