import { it, expect, describe } from 'vitest';
import { StateDeputy } from '../../app/candidates';

describe('StateDeputy Class Tests', (): void => {
  let stateDeputy: StateDeputy;

  describe('Instantiation Tests', () => {
    it('Should instantiate a StateDeputy object correctly', () => {
      stateDeputy = new StateDeputy('Jose', '99999');
      expect(stateDeputy).toBeInstanceOf(StateDeputy);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      stateDeputy = new StateDeputy('Chuck', '88888');
      expect(stateDeputy.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      stateDeputy = new StateDeputy('Jhon', '32323');
      expect(stateDeputy.getNumber()).toBe('32323');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      stateDeputy = new StateDeputy('Elvira', '12121');
      stateDeputy.setName('Jhon');
      expect(stateDeputy.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const stateDeputy = new StateDeputy('Ozzy', '66666');

      expect(() => new StateDeputy('Jose', '0176466')).toThrow(
        'Invalid number for State Deputy!'
      );
      expect(() => stateDeputy.setNumber('A(lad*66')).toThrow(
        'Invalid number for State Deputy!'
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      stateDeputy = new StateDeputy('Jose', '32323');
      stateDeputy.setNumber('A66l668');
      expect(stateDeputy.getNumber()).toBe('66668');
    });
  });
});
