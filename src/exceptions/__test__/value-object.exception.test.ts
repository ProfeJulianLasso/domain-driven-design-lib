import { expect } from 'chai';
import 'mocha';

import { ValueObjectException } from '../object-object.exception';

describe('ValueObjectException', () => {
  it('should be defined', () => {
    expect(ValueObjectException).to.be.not.undefined;
  });

  it('should throw an error', () => {
    expect(() => {
      throw new ValueObjectException('Error message', []);
    }).to.throw('Error message');
  });
});
