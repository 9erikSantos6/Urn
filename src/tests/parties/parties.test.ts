import { it, describe, expect } from 'vitest';
import { Party } from '../../shared/models/parties';

describe('Parties class tests', () => {
  it('Should instantiate Party correctly', () => {
    expect(new Party('Partido Progressista', 'PP')).toBeInstanceOf(Party);
  });

  describe('Getter tests', () => {
    it('Should return the party name', () => {
      const party: Party = new Party('Novo', 'NOVO');
      expect(party.getName()).toBe('Novo');
    });

    it('Should return the pary acronym', () => {
      const party: Party = new Party('Movimento Democrático Brasileiro', 'MDB');
      expect(party.getAcronym()).toBe('MDB');
    });
  });

  describe('Setter tests', () => {
    it('Should modify the party name correctly', () => {
      const party: Party = new Party('Partido Progressista', 'PP');
      party.setName('new name');
      expect(party.getName()).toBe('New Name');
    });

    it('Should modify the party acronym corrctly', () => {
      const party: Party = new Party('Party Name', 'PN');
      party.setAcronym('NP');
      expect(party.getAcronym()).toBe('NP');
    });
  });
});
