import { IErrorValueObject } from '../interface';
import { ValueObjectAbstract } from './object-value.abstract';
export declare abstract class ValueObjectsErrorHandlerAbstract {
    private _errors;
    constructor();
    getErrors(): Array<IErrorValueObject>;
    setErrors(errors: Array<IErrorValueObject>): void;
    hasErrors(): boolean;
    validateValueObjects(valueObjects: Array<ValueObjectAbstract<any>>, message: string): void;
}
//# sourceMappingURL=value-object-error-handler.abstract.d.ts.map