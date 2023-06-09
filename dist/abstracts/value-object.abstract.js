"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObjectAbstract = void 0;
const __1 = require("../");
class ValueObjectAbstract {
    _errors;
    _value;
    constructor(value) {
        this._errors = new Array();
        if (value)
            this._value = value;
        this.validateData();
    }
    set value(value) {
        this._value = value;
        this.restartErrors();
        this.validateData();
    }
    hasValue() {
        return this._value ? true : false;
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
            throw new __1.ValueObjectException(`There is a value object that has an error`, this._errors);
    }
}
exports.ValueObjectAbstract = ValueObjectAbstract;
//# sourceMappingURL=value-object.abstract.js.map