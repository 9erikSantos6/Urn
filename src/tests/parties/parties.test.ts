import { it, describe, expect } from 'vitest';
import { Party } from '../../app/parties';


describe('Parties class tests', () => {
  it('Should instantiate Party correctly', () => {
    expect(new Party('Partido Progressista', 'PP')).toBeInstanceOf(Party);
  });

  it('Should return the party name', () => {
    const party: Party = new Party('Novo', 'NOVO');
    expect(party.getName()).toBe('Novo');
  });

  it('Should return the pary acronym', () => {
    const party: Party = new Party('Movimento Democrático Brasileiro', 'MDB');
    expect(party.getAcronym()).toBe('MDB');
  })
}); 