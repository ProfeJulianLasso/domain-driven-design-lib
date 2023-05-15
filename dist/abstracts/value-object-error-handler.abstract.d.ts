import { IErrorValueObject, ValueObjectAbstract } from '../';
export declare abstract class ValueObjectsErrorHandlerAbstract {
    protected _props: Array<string>;
    private _errors;
    protected _errorMessage: string;
    constructor();
    set errorMessage(message: string);
    getErrors(): Array<IErrorValueObject>;
    setErrors(errors: Array<IErrorValueObject>): void;
    hasErrors(): boolean;
    validateValueObjects(message: string, valueObjects: Array<ValueObjectAbstract<any>>): void;
    abstract createArrayFromValueObjects(): Array<ValueObjectAbstract<any>>;
    abstract toPrimitives(): any;
    protected checkValidateValueObjects(): void;
}
//# sourceMappingURL=value-object-error-handler.abstract.d.ts.map