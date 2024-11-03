import { it, expect, describe } from 'vitest';
import { Senator } from '../../shared/models/candidates';
import { Party } from '../../shared/models/parties';

describe('Senator Class Tests', (): void => {
  let senator: Senator;
  const party: Party = new Party('nulo', 'N');

  describe('Instantiation Tests', () => {
    it('Should instantiate a Senator object correctly', () => {
      senator = new Senator('Jose', '999', party);
      expect(senator).toBeInstanceOf(Senator);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      senator = new Senator('Chuck', '888', party);
      expect(senator.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      senator = new Senator('Jhon', '323', party);
      expect(senator.getNumber()).toBe('323');
    });

    it('Should return the party', () => {
      senator = new Senator('Jhon', '328', party);
      expect(senator.getParty()).toBeInstanceOf(Party);
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      senator = new Senator('Elvira', '121', party);
      senator.setName('Jhon');
      expect(senator.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const senator = new Senator('Ozzy', '666', party);

      expect(() => new Senator('Jose', '01766', party)).toThrow(
        'Invalid number for Senator!'
      );
      expect(() => senator.setNumber('A(lad*76')).toThrow(
        'Invalid number for Senator!'
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      senator = new Senator('Jose', '323', party);
      senator.setNumber('A66l6');
      expect(senator.getNumber()).toBe('666');
    });

    it('Should modify the candidate party correctly', () => {
      senator = new Senator('Jose', '428', party);

      const newParty: Party = new Party('Nulo', 'NULO');
      senator.setParty(newParty);

      expect(senator.getParty()).toBeInstanceOf(Party);
      expect(senator.getParty().getName()).toBe('Nulo');
      expect(senator.getParty().getAcronym()).toBe('NULO');
    });
  });
});
