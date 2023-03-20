import { IErrorValueObject } from '../interface';
export declare class ValueObjectException extends Error {
    private _errors;
    constructor(message: string, errors: Array<IErrorValueObject>);
    get errors(): Array<IErrorValueObject>;
}
//# sourceMappingURL=object-value.exception.d.ts.map