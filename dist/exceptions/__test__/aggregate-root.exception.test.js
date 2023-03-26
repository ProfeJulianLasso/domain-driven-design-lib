"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const aggregate_root_exception_1 = require("../aggregate-root.exception");
describe('AggregateRootException', () => {
    it('should to be defined', () => {
        (0, chai_1.expect)(aggregate_root_exception_1.AggregateRootException).to.be.not.undefined;
    });
    it('should throw an error', () => {
        const errorMessage = 'Error message';
        const expectedErrorMessage = 'Error message';
        const error = () => {
            throw new aggregate_root_exception_1.AggregateRootException(errorMessage);
        };
        (0, chai_1.expect)(error).to.be.throw(aggregate_root_exception_1.AggregateRootException);
        (0, chai_1.expect)(error).to.be.throw(expectedErrorMessage);
    });
});
//# sourceMappingURL=aggregate-root.exception.test.js.map