"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const aggregate_root_exception_1 = require("../aggregate-root.exception");
describe('AggregateRootException', () => {
    it('should be defined', () => {
        (0, chai_1.expect)(aggregate_root_exception_1.AggregateRootException).to.be.not.undefined;
    });
    it('should throw an error', () => {
        (0, chai_1.expect)(() => {
            throw new aggregate_root_exception_1.AggregateRootException('Error message');
        }).to.throw('Error message');
    });
});
//# sourceMappingURL=aggregate-root.exception.test.js.map