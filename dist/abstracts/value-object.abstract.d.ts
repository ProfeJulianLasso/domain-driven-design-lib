import { IErrorValueObject } from '../';
export declare abstract class ValueObjectAbstract<Type> {
    private _errors;
    protected _value: Type;
    constructor(value?: Type);
    set value(value: Type);
    hasValue(): boolean;
    abstract validateData(): void;
    hasErrors(): boolean;
    getErrors(): Array<IErrorValueObject>;
    protected setError(error: IErrorValueObject): void;
    private restartErrors;
    valueOf(): Type;
    private verifyValue;
}
//# sourceMappingURL=value-object.abstract.d.ts.map