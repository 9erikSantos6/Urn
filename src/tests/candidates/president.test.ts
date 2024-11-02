import { it, expect, describe } from 'vitest';
import { President } from '../../shared/models/candidates';
import { Party } from '../../shared/models/parties';

describe('President Class Tests', (): void => {
  let president: President;
  const party: Party = new Party('nulo', 'N');

  describe('Instantiation Tests', () => {
    it('Should instantiate a President object correctly', () => {
      president = new President('Jose', '99', party);
      expect(president).toBeInstanceOf(President);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      president = new President('Chuck', '88', party);
      expect(president.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      president = new President('Jhon', '32', party);
      expect(president.getNumber()).toBe('32');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      president = new President('Elvira', '12', party);
      president.setName('Jhon');
      expect(president.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const president = new President('Ozzy', '66', party);

      expect(() => new President('Jose', '01766', party)).toThrow(
        'Invalid number for President!'
      );
      expect(() => president.setNumber('A(lad*')).toThrow(
        'Invalid number for President!'
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      president = new President('Jose', '32', party);
      president.setNumber('A66l');
      expect(president.getNumber()).toBe('66');
    });
  });
});
