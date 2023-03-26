"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const value_object_exception_1 = require("../value-object.exception");
describe('ValueObjectException', () => {
    it('should to be defined', () => {
        (0, chai_1.expect)(value_object_exception_1.ValueObjectException).to.be.not.undefined;
    });
    it('should throw an error', () => {
        const errorMessage = 'Error message';
        const expectedErrorMessage = 'Error message';
        const errorData = {
            field: 'field',
            message: 'message',
        };
        const expectedErrorData = [errorData];
        const valueObjectException = new value_object_exception_1.ValueObjectException(errorMessage, [
            errorData,
        ]);
        const error = () => {
            throw valueObjectException;
        };
        (0, chai_1.expect)(error).to.be.throw(value_object_exception_1.ValueObjectException);
        (0, chai_1.expect)(error).to.be.throw(expectedErrorMessage);
        (0, chai_1.expect)(valueObjectException.errors).to.be.deep.equal(expectedErrorData);
    });
});
//# sourceMappingURL=value-object.exception.test.js.map