import { expect } from 'chai';

import { AggregateRootException } from '../aggregate-root.exception';

describe('AggregateRootException', () => {
  it('should to be defined', () => {
    expect(AggregateRootException).to.be.not.undefined;
  });

  it('should throw an error', () => {
    // Arrange
    const errorMessage = 'Error message';
    const expectedErrorMessage = 'Error message';

    // Act
    const error = () => {
      throw new AggregateRootException(errorMessage);
    };

    // Assert
    expect(error).to.be.throw(AggregateRootException);
    expect(error).to.be.throw(expectedErrorMessage);
  });
});
