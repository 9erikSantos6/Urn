import { it, expect, describe } from 'vitest';
import { Governor } from '../../shared/models/candidates';
import { Party } from '../../shared/models/parties';

describe('Governor Class Tests', (): void => {
  let governor: Governor;
  const party: Party = new Party('nulo', 'nulo');

  describe('Instantiation Tests', () => {
    it('Should instantiate a Governor object correctly', () => {
      governor = new Governor('Jose', '99', party);
      expect(governor).toBeInstanceOf(Governor);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      governor = new Governor('Chuck', '88', party);
      expect(governor.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      governor = new Governor('Jhon', '32', party);
      expect(governor.getNumber()).toBe('32');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      governor = new Governor('Elvira', '12', party);
      governor.setName('Jhon');
      expect(governor.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const governor = new Governor('Ozzy', '66', party);

      expect(() => new Governor('Jose', '01766', party)).toThrow(
        'Invalid number for Governor!'
      );
      expect(() => governor.setNumber('A(lad*')).toThrow(
        'Invalid number for Governor!'
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      governor = new Governor('Jose', '32', party);
      governor.setNumber('A66l');
      expect(governor.getNumber()).toBe('66');
    });
  });
});
