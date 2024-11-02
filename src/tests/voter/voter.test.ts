import { it, describe, expect } from 'vitest';
import { Voter } from '../../shared/models/voters';

describe('Voter Class Tests', (): void => {
  let voter: Voter;

  describe('Instantiation Tests', () => {
    it('Should instantiate a Voter object correctly', (): void => {
      voter = new Voter('Tonny', '867.576.978.01');
      expect(voter).toBeInstanceOf(Voter);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      voter = new Voter('Lenny', '98623410681');
      expect(voter.getName()).toBe('Lenny');
    });

    it('Should return the formatted CPF correctly', (): void => {
      voter = new Voter('Linus', '18283629085');
      expect(voter.getCpf()).toBe('182.836.290-85');
    });

    it('Should sanitize and return a valid CPF', (): void => {
      voter = new Voter('Torwalds', '182"836o290-85A&');
      expect(voter.getCpf()).toBe('182.836.290-85');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      voter = new Voter('Jhon', '18384634488');
      voter.setName('Doe');
      expect(voter.getName()).toBe('Doe');
    });

    it('Should throw an error when trying to set an invalid CPF', (): void => {
      voter = new Voter('Bill', '56098456822');
      expect(() => voter.setCpf('0384jdniq')).toThrow('Invalid CPF!');
    });

    it('Should modify the CPF correctly when valid', (): void => {
      voter = new Voter('Bill', '56098456822');
      voter.setCpf('54857496911');
      expect(voter.getCpf()).toBe('548.574.969-11');
    });
  });
});
