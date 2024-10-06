import { Candidate } from '../app/candidates';

describe('Candidate Class Tests', (): void => {
  
  let candidate: Candidate;

  describe('Instantiation Tests', () => {
    it('Should instantiate a Candidate object correctly', () => {
      candidate = new Candidate('Jose', '01232');
      expect(candidate).toBeInstanceOf(Candidate);
    });
  });

  describe('Getter Tests', () => {
    it('Should return the correct name', (): void => {
      candidate = new Candidate('Chuck', '01232');
      expect(candidate.getName()).toBe('Chuck');
    });

    it('Should return the correct number', (): void => {
      candidate = new Candidate('Jhon', '01232');
      expect(candidate.getNumber()).toBe('01232');
    });
  });

  describe('Setter Tests', () => {
    it('Should modify the name correctly', (): void => {
      candidate = new Candidate('Elvira', '01232');
      candidate.setName('Jhon');
      expect(candidate.getName()).toBe('Jhon');
    });

    it('Should throw an error when trying to set an invalid number', (): void => {
      candidate = new Candidate('Jose', '01232');
      expect(() => candidate.setNumber('A(lad*')).toThrow('Invalid number!');
    });

    it('Should modify the number correctly when valid', (): void => {
      candidate = new Candidate('Jose', '01232');
      candidate.setNumber('A666l');
      expect(candidate.getNumber()).toBe('666');
    });
  });
});
