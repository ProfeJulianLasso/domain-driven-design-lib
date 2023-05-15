import { ValueObjectAbstract, ValueObjectsErrorHandlerAbstract } from '../../';
import { NombreValueObject } from './value-object.abstract.mock';

export interface IRegistrarUnUsuarioCommand {
  nombre: string;
}

export class RegistrarUnUsuarioUseCase extends ValueObjectsErrorHandlerAbstract {
  execute(command: IRegistrarUnUsuarioCommand) {
    const valueObjects = this.createValueObjects(command);
    this.validateValueObjects(
      'Existen algunos errores en el comando "IRegistrarUnUsuarioCommand"',
      valueObjects
    );
  }

  createValueObjects(
    command: IRegistrarUnUsuarioCommand
  ): Array<ValueObjectAbstract<any>> {
    const nombre = new NombreValueObject(command.nombre);
    return [nombre];
  }

  toPrimitives<Props>(): Props {
    throw new Error('Method not implemented.');
  }

  createArrayFromValueObjects(): ValueObjectAbstract<any>[] {
    throw new Error('Method not implemented.');
  }
}
