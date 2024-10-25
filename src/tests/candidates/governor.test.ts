import { it, expect, describe } from 'vitest';
import { Governor } from '../../app/candidates';

describe('Governor Class Tests', (): void => {
  let governor: Governor;

  describe('Instantiation Tests', () => {
    it('Should instantiate a Governor object correctly', () => {
      governor = new Governor('Jose', '99');
      expect(governor).toBeInstanceOf(Governor);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      governor = new Governor('Chuck', '88');
      expect(governor.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      governor = new Governor('Jhon', '32');
      expect(governor.getNumber()).toBe('32');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      governor = new Governor('Elvira', '12');
      governor.setName('Jhon');
      expect(governor.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const governor = new Governor('Ozzy', '66');

      expect(() => new Governor('Jose', '01766')).toThrow(
        'Invalid number for Governor!'
      );
      expect(() => governor.setNumber('A(lad*')).toThrow(
        'Invalid number for Governor!'
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      governor = new Governor('Jose', '32');
      governor.setNumber('A66l');
      expect(governor.getNumber()).toBe('66');
    });
  });
});
