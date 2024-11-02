import { it, expect, describe } from 'vitest';
import { FederalDeputy } from '../../shared/models/candidates';
import { Party } from '../../shared/models/parties';

describe('FederalDeputy Class Tests', (): void => {
  let federalDeputy: FederalDeputy;
  const party: Party = new Party('nulo', 'N');

  describe('Instantiation Tests', () => {
    it('Should instantiate a FederalDeputy object correctly', () => {
      federalDeputy = new FederalDeputy('Jose', '9999', party);
      expect(federalDeputy).toBeInstanceOf(FederalDeputy);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      federalDeputy = new FederalDeputy('Chuck', '8889', party);
      expect(federalDeputy.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      federalDeputy = new FederalDeputy('Jhon', '3882', party);
      expect(federalDeputy.getNumber()).toBe('3882');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      federalDeputy = new FederalDeputy('Elvira', '1002', party);
      federalDeputy.setName('Jhon');
      expect(federalDeputy.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      const federalDeputy = new FederalDeputy('Ozzy', '6666', party);

      expect(() => new FederalDeputy('Jose', '01232', party)).toThrow(
        'Invalid number for Federal Deputy!'
      );
      expect(() => federalDeputy.setNumber('A(lad*8')).toThrow(
        'Invalid number for Federal Deputy!'
      );
    });

    it('Should modify the number correctly when valid', (): void => {
      federalDeputy = new FederalDeputy('Jose', '3882', party);
      federalDeputy.setNumber('A66l88');
      expect(federalDeputy.getNumber()).toBe('6688');
    });
  });
});
