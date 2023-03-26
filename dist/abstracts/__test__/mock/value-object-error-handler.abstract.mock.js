"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarUnUsuarioUseCase = void 0;
const _sofka_1 = require("../../..");
const value_object_abstract_mock_1 = require("./value-object.abstract.mock");
class RegistrarUnUsuarioUseCase extends _sofka_1.ValueObjectsErrorHandlerAbstract {
    execute(command) {
        const valueObjects = this.createValueObjects(command);
        this.validateValueObjects('Existen algunos errores en el comando "IRegistrarUnUsuarioCommand"', valueObjects);
    }
    createValueObjects(command) {
        const nombre = new value_object_abstract_mock_1.NombreValueObject(command.nombre);
        return [nombre];
    }
    toPrimitives() {
        throw new Error('Method not implemented.');
    }
    createArrayFromValueObjects() {
        throw new Error('Method not implemented.');
    }
}
exports.RegistrarUnUsuarioUseCase = RegistrarUnUsuarioUseCase;
//# sourceMappingURL=value-object-error-handler.abstract.mock.js.map