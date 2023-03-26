import { IErrorValueObject } from '..';
export declare abstract class ValueObjectAbstract<Type> {
    private _errors;
    protected _value: Type;
    protected _className: string;
    constructor(value?: Type);
    set value(value: Type);
    abstract validateData(): void;
    hasErrors(): boolean;
    getErrors(): Array<IErrorValueObject>;
    protected setError(error: IErrorValueObject): void;
    private restartErrors;
    valueOf(): Type;
    private verifyValue;
}
//# sourceMappingURL=value-object.abstract.d.ts.map