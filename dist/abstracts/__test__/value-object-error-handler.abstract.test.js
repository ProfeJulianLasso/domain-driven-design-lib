"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const exceptions_1 = require("src/exceptions");
const mock_1 = require("./mock");
describe('ValueObjectsErrorHandlerAbstract', () => {
    let useCase;
    beforeEach(() => {
        useCase = new mock_1.RegistrarUnUsuarioUseCase();
    });
    it('should to be defined', () => {
        (0, chai_1.expect)(useCase).to.be.not.undefined;
    });
    it('should to execute the use case', () => {
        const command = {
            nombre: undefined,
        };
        const expectedError = {
            field: 'nombre',
            message: 'El "nombre" no puede estar vacío',
        };
        const error = () => useCase.execute(command);
        (0, chai_1.expect)(error).to.be.throw(exceptions_1.ValueObjectException);
        (0, chai_1.expect)(useCase.hasErrors()).to.be.true;
        (0, chai_1.expect)(useCase.getErrors()).to.be.property('length').to.be.equal(1);
        (0, chai_1.expect)(useCase.getErrors())
            .to.be.has.property('0')
            .to.be.deep.equal(expectedError);
    });
});
//# sourceMappingURL=value-object-error-handler.abstract.test.js.map