import { IErrorValueObject } from '..';
export declare class ValueObjectException extends Error {
    private _errors;
    constructor(message: string, errors: Array<IErrorValueObject>);
    get errors(): Array<IErrorValueObject>;
}
//# sourceMappingURL=object-object.exception.d.ts.map