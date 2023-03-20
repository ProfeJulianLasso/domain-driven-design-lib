"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObjectsErrorHandlerAbstract = void 0;
const exceptions_1 = require("../exceptions");
class ValueObjectsErrorHandlerAbstract {
    _errors;
    constructor() {
        this._errors = new Array();
    }
    getErrors() {
        return this._errors;
    }
    setErrors(errors) {
        this._errors = [...this._errors, ...errors];
    }
    hasErrors() {
        return this._errors.length > 0 ? true : false;
    }
    validateValueObjects(valueObjects, message) {
        valueObjects.forEach((object) => {
            if (object.hasErrors() === true)
                this.setErrors(object.getErrors());
        });
        if (this.hasErrors() === true)
            throw new exceptions_1.ValueObjectException(message, this.getErrors());
    }
}
exports.ValueObjectsErrorHandlerAbstract = ValueObjectsErrorHandlerAbstract;
//# sourceMappingURL=value-object-error-handler.abstract.js.map