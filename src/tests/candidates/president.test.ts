import { it, expect, describe } from 'vitest';
import { President } from '../../app/candidates';

describe('President Class Tests', (): void => {
  let president: President;

  describe('Instantiation Tests', () => {
    it('Should instantiate a President object correctly', () => {
      president = new President('Jose', '99');
      expect(president).toBeInstanceOf(President);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      president = new President('Chuck', '88');
      expect(president.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      president = new President('Jhon', '32');
      expect(president.getNumber()).toBe('32');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      president = new President('Elvira', '12');
      president.setName('Jhon');
      expect(president.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const president = new President('Ozzy', '66');

      expect(() => new President('Jose', '01232')).toThrow(
        'Invalid number for President!',
      );
      expect(() => president.setNumber('A(lad*')).toThrow(
        'Invalid number for President!',
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      president = new President('Jose', '32');
      president.setNumber('A66l');
      expect(president.getNumber()).toBe('66');
    });
  });
});
