import { IErrorValueObject } from '@sofka';
import { expect } from 'chai';
import 'mocha';

import { ValueObjectException } from '../value-object.exception';

describe('ValueObjectException', () => {
  it('should to be defined', () => {
    expect(ValueObjectException).to.be.not.undefined;
  });

  it('should throw an error', () => {
    // Arrange
    const errorMessage = 'Error message';
    const expectedErrorMessage = 'Error message';
    const errorData = {
      field: 'field',
      message: 'message',
    } as IErrorValueObject;
    const expectedErrorData = [errorData];
    const valueObjectException = new ValueObjectException(errorMessage, [
      errorData,
    ]);

    // Act
    const error = () => {
      throw valueObjectException;
    };

    // Assert
    expect(error).to.be.throw(ValueObjectException);
    expect(error).to.be.throw(expectedErrorMessage);
    expect(valueObjectException.errors).to.be.deep.equal(expectedErrorData);
  });
});
