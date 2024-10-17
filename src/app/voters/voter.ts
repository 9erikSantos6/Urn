export class Voter {
  private name: string;
  private cpf: string;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = this.validateCPF(cpf);
  }

  private toCpfFormat(value: string): string {
    return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(
      6,
      9
    )}-${value.slice(9, 11)}`;
  }

  private validateCPF(value: string): string {
    const cpf: string = value.replace(/\D/g, "");
    if (cpf.length === 11 && !isNaN(cpf as any) && !isNaN(parseFloat(cpf))) {
      return this.toCpfFormat(cpf);
    }
    throw new Error("Invalid CPF!");
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string): void {
    this.cpf = this.validateCPF(cpf);
  }
}
