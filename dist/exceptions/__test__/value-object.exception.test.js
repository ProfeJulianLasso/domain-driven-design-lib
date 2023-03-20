"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const object_object_exception_1 = require("../object-object.exception");
describe('ValueObjectException', () => {
    it('should be defined', () => {
        (0, chai_1.expect)(object_object_exception_1.ValueObjectException).to.be.not.undefined;
    });
    it('should throw an error', () => {
        (0, chai_1.expect)(() => {
            throw new object_object_exception_1.ValueObjectException('Error message', []);
        }).to.throw('Error message');
    });
});
//# sourceMappingURL=value-object.exception.test.js.map