"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _sofka_1 = require("../..");
const chai_1 = require("chai");
const value_object_abstract_mock_1 = require("./mock/value-object.abstract.mock");
describe('ValueObjectAbstract', () => {
    let valueObject;
    let nombre;
    beforeEach(() => {
        nombre = 'Nombre de prueba';
        valueObject = new value_object_abstract_mock_1.NombreValueObject(nombre);
    });
    it('should to be defined', () => {
        (0, chai_1.expect)(valueObject).to.be.not.undefined;
    });
    it('should create a value object', () => {
        const nombre = 'Nombre de prueba';
        const expectedValue = 'Nombre de prueba';
        const valueObject = new value_object_abstract_mock_1.NombreValueObject(nombre);
        valueObject.value = nombre;
        (0, chai_1.expect)(valueObject.valueOf()).to.be.equal(expectedValue);
    });
    it('should create an error stack', () => {
        const nombre = undefined;
        const valueObject = new value_object_abstract_mock_1.NombreValueObject(nombre);
        (0, chai_1.expect)(valueObject.hasErrors()).to.be.true;
        (0, chai_1.expect)(valueObject.getErrors().length).to.be.equal(1);
        (0, chai_1.expect)(valueObject.getErrors()[0]).to.be.property('field', 'nombre');
        (0, chai_1.expect)(valueObject.getErrors()[0]).to.be.property('message', 'El "nombre" no puede estar vacío');
    });
    it('should throw a ValueObjectException type error', () => {
        const nombre = undefined;
        const valueObject = () => {
            const object = new value_object_abstract_mock_1.NombreValueObject(nombre);
            object.valueOf();
        };
        (0, chai_1.expect)(valueObject).to.be.throw(_sofka_1.ValueObjectException);
    });
});
//# sourceMappingURL=value-object.abstract.test.js.map