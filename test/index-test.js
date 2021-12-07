import { expect as _expect, should } from 'chai';
import { describe as _describe } from 'mocha';
let describe = _describe;
let expect = _expect;

should();

import Index from '../index.js';

describe('Index', () => {
  describe('test the VALID return value', () => {
    let fib;
    beforeEach(() => {
      fib = new Index();
    });
    it('should return 0', () => {
      expect(fib.fibonacci(0)).to.eql([0]);
    });
    it('should return 0, 1', () => {
      expect(fib.fibonacci(1)).to.eql([0, 1]);
    });
    it('should return 0, 1, 1', () => {
      expect(fib.fibonacci(2)).to.eql([0, 1, 1]);
    });
    it('should return 0, 1, 1, 2, 3, 5, 8, 13, 21, 34', () => {
      expect(fib.fibonacci(9)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    it('should return 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025', () => {
      expect(fib.fibonacci(25)).to.eql([0,     1,     1,     2,     3,
            5,     8,    13,    21,    34,
           55,    89,   144,   233,   377,
          610,   987,  1597,  2584,  4181,
         6765, 10946, 17711, 28657, 46368,
        75025]);
    });
  });

  describe('test the VALID input value', () => {
    let fib;
    beforeEach(() => {
      fib = new Index();
    });
    it('should throw the exception: "The Parameter must be positive!"', () => {
      expect(() => fib.fibonacci(-1)).to.throw('The Parameter must be positive!');
    });
    it('should not throw the exception: "The Parameter must be positive!"', () => {
      expect(() => fib.fibonacci(0)).to.not.throw('The Parameter must be positive!');
    });
    it('should throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci(' ')).to.throw('The Parameter must be an integer!');
    });
    it('should throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci(['A'])).to.throw('The Parameter must be an integer!');
    });
    it('should throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci(['10'])).to.throw('The Parameter must be an integer!');
    });
    it('should throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci(1.100)).to.throw('The Parameter must be an integer!');
    });
    it('should NOT throw the exception: "The Parameter must be an Integer!"', () => {
      expect(() => fib.fibonacci(10)).to.not.throw('The Parameter must be an integer!');
    });
  });
});
