import { expect } from 'chai';
import 'mocha';

import { AggregateRootException } from '../aggregate-root.exception';

describe('AggregateRootException', () => {
  it('should be defined', () => {
    expect(AggregateRootException).to.be.not.undefined;
  });

  it('should throw an error', () => {
    expect(() => {
      throw new AggregateRootException('Error message');
    }).to.throw('Error message');
  });
});
