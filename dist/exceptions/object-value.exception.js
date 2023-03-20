"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObjectException = void 0;
class ValueObjectException extends Error {
    _errors;
    constructor(message, errors) {
        super(message);
        this._errors = errors;
    }
    get errors() {
        return this._errors;
    }
}
exports.ValueObjectException = ValueObjectException;
//# sourceMappingURL=object-value.exception.js.map