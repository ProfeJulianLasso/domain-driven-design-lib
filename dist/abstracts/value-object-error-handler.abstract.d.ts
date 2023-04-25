import { IErrorValueObject, ValueObjectAbstract } from '..';
export declare abstract class ValueObjectsErrorHandlerAbstract {
    private _props;
    private _errors;
    protected _errorMessage: string;
    constructor();
    set errorMessage(message: string);
    getErrors(): Array<IErrorValueObject>;
    setErrors(errors: Array<IErrorValueObject>): void;
    hasErrors(): boolean;
    validateValueObjects(message: string, valueObjects: Array<ValueObjectAbstract<any>>): void;
    abstract toPrimitives(): any;
    protected checkValidateValueObjects(): void;
    protected abstract createArrayFromValueObjects(): Array<ValueObjectAbstract<any>>;
}
//# sourceMappingURL=value-object-error-handler.abstract.d.ts.map