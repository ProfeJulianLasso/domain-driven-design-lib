import { IErrorValueObject, ValueObjectAbstract } from '@sofka';

export class NombreValueObject extends ValueObjectAbstract<string> {
  constructor(value?: string) {
    super(value);
    this._className = NombreValueObject.name;
  }

  validateData(): void {
    this.validateIsEmpty();
  }

  private validateIsEmpty(): void {
    if (
      this._value === undefined ||
      this._value.trim() === '' ||
      this._value.length === 0
    ) {
      this.setError({
        field: 'nombre',
        message: 'El "nombre" no puede estar vacío',
      } as IErrorValueObject);
    }
  }
}
