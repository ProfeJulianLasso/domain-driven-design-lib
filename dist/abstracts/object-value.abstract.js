"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObjectAbstract = void 0;
const exceptions_1 = require("../exceptions");
class ValueObjectAbstract {
    _errors;
    _value;
    constructor(value) {
        this._errors = new Array();
        if (value)
            this._value = value;
        this.validateData();
    }
    get value() {
        this.verifyValue();
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.restartErrors();
        this.validateData();
    }
    hasErrors() {
        return this._errors.length > 0 ? true : false;
    }
    getErrors() {
        return this._errors;
    }
    setError(error) {
        this._errors.push(error);
    }
    restartErrors() {
        this._errors = new Array();
    }
    valueOf() {
        this.verifyValue();
        return this._value;
    }
    verifyValue() {
        if (this.hasErrors() === true)
            throw new exceptions_1.ValueObjectException(`Value object has errors "${this._className}}"`, this._errors);
    }
}
exports.ValueObjectAbstract = ValueObjectAbstract;
//# sourceMappingURL=object-value.abstract.js.map