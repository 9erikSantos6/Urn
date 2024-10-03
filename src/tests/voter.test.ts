import { Voter } from '../app/voters';

describe('Testing Voter Class', (): void => {
    it('Deve instanciar um Voter', (): void => {
        expect(new Voter('Tonny', '867.576.978.01')).toBeInstanceOf(Voter);
    });

    it('Must return the name', (): void => {
        const voter: Voter = new Voter('Lenny', '98623410681');
        expect(voter.getName()).toBe('Lenny');
    });

    it('Must return the CPF correctly', (): void => {
        let voter = new Voter('Linus', '18283629085');
        let cpf = voter.getCpf();
        expect(cpf).toBe('182.836.290-85');

        voter = new Voter('Torwalds', '182"836o290-85A&');
        cpf = voter.getCpf();
        expect(cpf).toBe('182.836.290-85');
    });

    it('Must modify the name correctly', (): void => {
        const voter: Voter = new Voter('Jhon', '18384634488')
        voter.setName('Doe');
        expect(voter.getName()).toBe('Doe');
    });

    it('Must modify the CPF corrtctly', (): void => {
        const voter: Voter = new Voter('Bill', '56098456822');
        expect(() => voter.setCpf('0384jdniq')).toThrow('Invalid CPF!');
        voter.setCpf('54857496911');
        const cpf: string = voter.getCpf();
        expect(cpf).toBe('548.574.969-11');
    });
});