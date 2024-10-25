import { it, expect, describe } from 'vitest';
import { Mayor } from '../../app/candidates';

describe('Mayor Class Tests', (): void => {
  let mayor: Mayor;

  describe('Instantiation Tests', () => {
    it('Should instantiate a Mayor object correctly', () => {
      mayor = new Mayor('Jose', '99');
      expect(mayor).toBeInstanceOf(Mayor);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      mayor = new Mayor('Chuck', '88');
      expect(mayor.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      mayor = new Mayor('Jhon', '32');
      expect(mayor.getNumber()).toBe('32');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      mayor = new Mayor('Elvira', '12');
      mayor.setName('Jhon');
      expect(mayor.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const mayor = new Mayor('Ozzy', '66');

      expect(() => new Mayor('Jose', '01766')).toThrow(
        'Invalid number for Mayor!',
      );
      expect(() => mayor.setNumber('A(lad*')).toThrow(
        'Invalid number for Mayor!',
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      mayor = new Mayor('Jose', '32');
      mayor.setNumber('A66l');
      expect(mayor.getNumber()).toBe('66');
    });
  });
});
