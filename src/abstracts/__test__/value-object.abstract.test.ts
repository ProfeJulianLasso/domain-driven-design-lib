import { expect } from 'chai';
import { ValueObjectException } from '../../';
import { NombreValueObject } from './mock/value-object.abstract.mock';

describe('ValueObjectAbstract', () => {
  let valueObject: NombreValueObject;
  let nombre: string;

  beforeEach(() => {
    nombre = 'Nombre de prueba';
    valueObject = new NombreValueObject(nombre);
  });

  it('should to be defined', () => {
    expect(valueObject).to.be.not.undefined;
  });

  it('should create a value object', () => {
    // Arrange
    const nombre = 'Nombre de prueba';
    const expectedValue = 'Nombre de prueba';

    // Act
    const valueObject = new NombreValueObject(nombre);
    valueObject.value = nombre;

    // Assert
    expect(valueObject.valueOf()).to.be.equal(expectedValue);
  });

  it('should create an error stack', () => {
    // Arrange
    const nombre = undefined;

    // Act
    const valueObject = new NombreValueObject(nombre);

    // Assert
    expect(valueObject.hasErrors()).to.be.true;
    expect(valueObject.getErrors().length).to.be.equal(1);
    expect(valueObject.getErrors()[0]).to.be.property('field', 'nombre');
    expect(valueObject.getErrors()[0]).to.be.property(
      'message',
      'El "nombre" no puede estar vacío'
    );
  });

  it('should throw a ValueObjectException type error', () => {
    // Arrange
    const nombre = undefined;

    // Act
    const valueObject = () => {
      const object = new NombreValueObject(nombre);
      object.valueOf();
    };

    // Assert
    expect(valueObject).to.be.throw(ValueObjectException);
  });
});
