import { it, expect, describe } from 'vitest';
import { StateDeputy } from '../../app/candidates';
import { Party } from '../../app/parties';


describe('StateDeputy Class Tests', (): void => {
  let stateDeputy: StateDeputy;
  const party: Party = new Party('nulo', 'N');

  describe('Instantiation Tests', () => {
    it('Should instantiate a StateDeputy object correctly', () => {
      stateDeputy = new StateDeputy('Jose', '99999', party);
      expect(stateDeputy).toBeInstanceOf(StateDeputy);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      stateDeputy = new StateDeputy('Chuck', '88888', party);
      expect(stateDeputy.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      stateDeputy = new StateDeputy('Jhon', '32323', party);
      expect(stateDeputy.getNumber()).toBe('32323');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      stateDeputy = new StateDeputy('Elvira', '12121', party);
      stateDeputy.setName('Jhon');
      expect(stateDeputy.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const stateDeputy = new StateDeputy('Ozzy', '66666', party);

      expect(() => new StateDeputy('Jose', '0176466', party)).toThrow(
        'Invalid number for State Deputy!'
      );
      expect(() => stateDeputy.setNumber('A(lad*66')).toThrow(
        'Invalid number for State Deputy!'
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      stateDeputy = new StateDeputy('Jose', '32323', party);
      stateDeputy.setNumber('A66l668');
      expect(stateDeputy.getNumber()).toBe('66668');
    });
  });
});
