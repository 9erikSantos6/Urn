import { it, expect, describe } from 'vitest';
import { Senator } from '../../app/candidates';

describe('Senator Class Tests', (): void => {
  let senator: Senator;

  describe('Instantiation Tests', () => {
    it('Should instantiate a Senator object correctly', () => {
      senator = new Senator('Jose', '999');
      expect(senator).toBeInstanceOf(Senator);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      senator = new Senator('Chuck', '888');
      expect(senator.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      senator = new Senator('Jhon', '323');
      expect(senator.getNumber()).toBe('323');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      senator = new Senator('Elvira', '121');
      senator.setName('Jhon');
      expect(senator.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const senator = new Senator('Ozzy', '666');

      expect(() => new Senator('Jose', '01766')).toThrow(
        'Invalid number for Senator!'
      );
      expect(() => senator.setNumber('A(lad*76')).toThrow(
        'Invalid number for Senator!'
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      senator = new Senator('Jose', '323');
      senator.setNumber('A66l6');
      expect(senator.getNumber()).toBe('666');
    });
  });
});
