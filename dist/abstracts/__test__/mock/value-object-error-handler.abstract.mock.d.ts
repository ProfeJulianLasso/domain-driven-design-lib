import { ValueObjectAbstract, ValueObjectsErrorHandlerAbstract } from '../../..';
export interface IRegistrarUnUsuarioCommand {
    nombre: string;
}
export declare class RegistrarUnUsuarioUseCase extends ValueObjectsErrorHandlerAbstract {
    execute(command: IRegistrarUnUsuarioCommand): void;
    createValueObjects(command: IRegistrarUnUsuarioCommand): Array<ValueObjectAbstract<any>>;
    toPrimitives<Props>(): Props;
    createArrayFromValueObjects(): ValueObjectAbstract<any>[];
}
//# sourceMappingURL=value-object-error-handler.abstract.mock.d.ts.map