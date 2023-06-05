"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NombreValueObject = void 0;
const __1 = require("../../../");
class NombreValueObject extends __1.ValueObjectAbstract {
    validateData() {
        this.validateIsEmpty();
    }
    validateIsEmpty() {
        if (this._value === undefined ||
            this._value.trim() === '' ||
            this._value.length === 0) {
            this.setError({
                field: 'nombre',
                message: 'El "nombre" no puede estar vacío',
            });
        }
    }
}
exports.NombreValueObject = NombreValueObject;
//# sourceMappingURL=value-object.abstract.mock.js.map