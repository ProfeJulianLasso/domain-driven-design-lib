import { expect } from 'chai';
import { ValueObjectException } from 'src/exceptions';
import {
  IRegistrarUnUsuarioCommand,
  RegistrarUnUsuarioUseCase,
} from './mock/value-object-error-handler.abstract.mock';

describe('ValueObjectsErrorHandlerAbstract', () => {
  let useCase: RegistrarUnUsuarioUseCase;

  beforeEach(() => {
    useCase = new RegistrarUnUsuarioUseCase();
  });

  it('should to be defined', () => {
    expect(useCase).to.be.not.undefined;
  });

  it('should to execute the use case', () => {
    // Arrange
    const command = {
      nombre: undefined,
    } as unknown as IRegistrarUnUsuarioCommand;
    const expectedError = {
      field: 'nombre',
      message: 'El "nombre" no puede estar vacío',
    };

    // Act
    const error = () => useCase.execute(command);

    // Assert
    expect(error).to.be.throw(ValueObjectException);
    expect(useCase.hasErrors()).to.be.true;
    expect(useCase.getErrors()).to.be.property('length').to.be.equal(1);
    expect(useCase.getErrors())
      .to.be.has.property('0')
      .to.be.deep.equal(expectedError);
  });
});
