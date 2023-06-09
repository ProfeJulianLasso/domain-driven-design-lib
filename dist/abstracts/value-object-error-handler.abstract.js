"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObjectsErrorHandlerAbstract = void 0;
const exceptions_1 = require("../exceptions");
class ValueObjectsErrorHandlerAbstract {
    _props;
    _errors;
    _errorMessage;
    constructor() {
        this._props = [];
        this._errors = new Array();
        this._errorMessage = 'There are some errors in the data provided';
    }
    set errorMessage(message) {
        this._errorMessage = message;
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
    validateValueObjects(message, valueObjects) {
        valueObjects.forEach((object) => {
            if (object.hasErrors() === true)
                this.setErrors(object.getErrors());
        });
        if (this.hasErrors() === true)
            throw new exceptions_1.ValueObjectException(message, this.getErrors());
    }
    checkValidateValueObjects() {
        this.validateValueObjects(this._errorMessage, this.createArrayFromValueObjects());
    }
}
exports.ValueObjectsErrorHandlerAbstract = ValueObjectsErrorHandlerAbstract;
//# sourceMappingURL=value-object-error-handler.abstract.js.map