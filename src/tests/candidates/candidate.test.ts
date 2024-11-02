import { it, expect, describe } from 'vitest';
import { Candidate } from '../../shared/models/candidates';
import { Party } from '../../shared/models/parties';

describe('Candidate Class Tests', (): void => {
  let candidate: Candidate;
  const party: Party = new Party('independente', 'independente');

  describe('Instantiation Tests', () => {
    it('Should instantiate a Candidate object correctly', () => {
      candidate = new Candidate('Jose', '01232', party);
      expect(candidate).toBeInstanceOf(Candidate);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      candidate = new Candidate('Chuck', '01232', party);
      expect(candidate.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      candidate = new Candidate('Jhon', '01232', party);
      expect(candidate.getNumber()).toBe('01232');
    });

    it('Should return the party', () => {
      candidate = new Candidate('Jhon', '01232', party);
      expect(candidate.getParty()).toBeInstanceOf(Party);
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      candidate = new Candidate('Elvira', '01232', party);
      candidate.setName('Jhon');
      expect(candidate.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      candidate = new Candidate('Jose', '01232', party);
      expect(() => candidate.setNumber('A(lad*')).toThrow('Invalid number!');
    });

    it('Should modify the number correctly when valid', (): void => {
      candidate = new Candidate('Jose', '01232', party);
      candidate.setNumber('A666l');
      expect(candidate.getNumber()).toBe('666');
    });

    it('Should modify the candidate party correctly', () => {
      candidate = new Candidate('Jose', '01232', party);

      const newParty: Party = new Party('Nulo', 'NULO');
      candidate.setParty(newParty);

      expect(candidate.getParty()).toBeInstanceOf(Party);
      expect(candidate.getParty().getName()).toBe('Nulo');
      expect(candidate.getParty().getAcronym()).toBe('NULO');
    });
  });
});
