/*
 * This file is part of the @sofkau/ddd package.
 *
 * (c) Sofka Technologies
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { IErrorValueObject, ValueObjectException } from '../';

/**
 * Abstract class for representing an object value
 *
 * @export
 * @abstract
 * @class ValueObjectBase
 * @template Type - Type of value represented by the value object
 *
 * @example
 * ```typescript
 * import { ValueObjectBase } from '@sofka/ddd';
 *
 * export class ApellidoValueObject extends ValueObjectAbstract<string> {
 *   validateData(): void {
 *     this.validateIsEmpty();
 *     this.validateLength();
 *   }
 *
 *   private validateIsEmpty(): void {
 *     if (IsEmpty(this.value) === true) {
 *       this.setError({
 *         field: 'apellido',
 *         message: 'El "apellido" no puede estar vacío',
 *       } as IErrorValueObject);
 *     }
 *   }
 *
 *   private validateLength(): void {
 *     if (this.value && StringMaxLength(this.value, 100) === true) {
 *       this.setError({
 *         field: 'apellido',
 *         message: 'El "apellido" no puede tener más de 100 caracteres',
 *       } as IErrorValueObject);
 *     }
 *   }
 * }
 * ```
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 */
export abstract class ValueObjectAbstract<Type> {
  /**
   * Value Object Error Stack
   *
   * @private
   * @type {Array<IErrorValueObject>} - Array of validation errors
   * @memberof ValueObjectAbstract
   */
  private _errors: Array<IErrorValueObject>;

  /**
   * Value of the Value Object
   *
   * @private
   * @type {Type}
   * @memberof ValueObjectAbstract
   */
  protected _value!: Type;

  /**
   * Class name of the Value Object
   *
   * @protected
   * @abstract
   * @type {string}
   * @memberof ValueObjectAbstract
   */
  protected _className: string;

  /**
   * Creates an instance of ValueObjectBase
   *
   * @param {Type} [value] Initial value of the object value
   * @memberof ValueObjectBase
   */
  constructor(value?: Type) {
    this._className = ValueObjectAbstract.name;
    this._errors = new Array<IErrorValueObject>();
    if (value) this._value = value;
    this.validateData();
  }

  /**
   * Sets the value for the value object, resets the error stack,
   * and validates the new value
   *
   * @memberof ValueObjectBase
   */
  set value(value: Type) {
    this._value = value;
    this.restartErrors();
    this.validateData();
  }

  /**
   * Return true if the value object has a value, false otherwise
   *
   * @return {*}  {boolean} - True if the value object has a value, false otherwise
   * @memberof ValueObjectAbstract
   */
  hasValue(): boolean {
    return this._value ? true : false;
  }

  /**
   * Validates the value of the value object.
   * This method must be implemented in the derived classes
   *
   * @abstract
   * @memberof ValueObjectBase
   */
  abstract validateData(): void;

  /**
   * Returns true if there are validation errors, false otherwise
   *
   * @return {boolean} True if there are validation errors, false otherwise
   * @memberof ValueObjectBase
   */
  hasErrors(): boolean {
    return this._errors.length > 0 ? true : false;
  }

  /**
   * Returns an array of validation errors for the value object
   *
   * @return {Array<IErrorValueObject>} Array of validation errors for
   *    the value object
   * @memberof ValueObjectBase
   */
  getErrors(): Array<IErrorValueObject> {
    return this._errors;
  }

  /**
   * Sets a validation error for the value object
   *
   * @protected
   * @param {IErrorValueObject} error Validation error to set
   * @memberof ValueObjectBase
   */
  protected setError(error: IErrorValueObject): void {
    this._errors.push(error);
  }

  /**
   * Clears all validation errors of the value object
   *
   * @private
   * @memberof ValueObjectBase
   */
  private restartErrors(): void {
    this._errors = new Array<IErrorValueObject>();
  }

  /**
   * Returns the primitive value of the specified object
   *
   * @return {Type} Primitive value of the specified object
   * @memberof ValueObjectBase
   */
  valueOf(): Type {
    this.verifyValue();
    return this._value;
  }

  /**
   * Verify if the value object has any errors
   *
   * @private
   * @throws {ValueObjectException} Throws an exception with the value object
   *    errors if it has any
   * @memberof ValueObjectAbstract
   */
  private verifyValue(): void {
    if (this.hasErrors() === true)
      throw new ValueObjectException(
        `Value object has errors "${this._className}"`,
        this._errors
      );
  }
}
