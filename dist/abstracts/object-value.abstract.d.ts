import { IErrorValueObject } from '../interface';
export declare abstract class ValueObjectAbstract<Type> {
    private _errors;
    private _value;
    protected abstract _className: string;
    constructor(value?: Type);
    get value(): Type;
    set value(value: Type);
    abstract validateData(): void;
    hasErrors(): boolean;
    getErrors(): Array<IErrorValueObject>;
    protected setError(error: IErrorValueObject): void;
    private restartErrors;
    valueOf(): Type;
    private verifyValue;
}
//# sourceMappingURL=object-value.abstract.d.ts.map