import { Candidate } from '../app/candidates';

describe('Testing candidate', (): void => {
  it('Must instantiate candidate', () => {
    expect(new Candidate('Jose', '01232')).toBeInstanceOf(Candidate);
  });

  it('Must return the name', (): void => {
    const candidate = new Candidate('Chuck', '01232');
    const name = candidate.getName();
    expect(name).toBe('Chuck');
    expect(name).not.toBeNull();
  });

  it('Must return the number', (): void => {
    const candidate = new Candidate('Jhon', '01232');
    const number = candidate.getNumber();
    expect(number).toBe('01232');
    expect(number).not.toBeNull();
  });

  it('Must modify the name', (): void => {
    const candidate = new Candidate('Elvira', '01232');
    candidate.setName('Jhon');
    const name = candidate.getName();
    expect(name).toBe('Jhon');
    expect(name).not.toBeNull();
  });

  it('Must modify the number correctly', (): void => {
    const candidate = new Candidate('Jose', '01232');
    expect((): void => candidate.setNumber('A(lad*')).toThrow('Invalid number!');
    candidate.setNumber('A666l');
    const number = candidate.getNumber();
    expect(number).toBe('666');
    expect(number).not.toBeNull();
  });

});