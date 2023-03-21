import { ValueObjectAbstract, ValueObjectsErrorHandlerAbstract } from '@sofka';
import { NombreValueObject } from './value-object.abstract.mock';

export interface IRegistrarUnUsuarioCommand {
  nombre: string;
}

export class RegistrarUnUsuarioUseCase extends ValueObjectsErrorHandlerAbstract {
  execute(command: IRegistrarUnUsuarioCommand) {
    const valueObjects = this.createValueObjects(command);
    this.validateValueObjects(
      valueObjects,
      'Existen algunos errores en el comando "IRegistrarUnUsuarioCommand"'
    );
  }

  createValueObjects(
    command: IRegistrarUnUsuarioCommand
  ): Array<ValueObjectAbstract<any>> {
    const nombre = new NombreValueObject(command.nombre);
    return [nombre];
  }
}
