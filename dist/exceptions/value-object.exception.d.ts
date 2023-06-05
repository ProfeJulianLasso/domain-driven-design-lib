import { IErrorValueObject } from '../interfaces';
export declare class ValueObjectException extends Error {
    private _errors;
    constructor(message: string, errors: Array<IErrorValueObject>);
    get errors(): Array<IErrorValueObject>;
}
//# sourceMappingURL=value-object.exception.d.ts.map