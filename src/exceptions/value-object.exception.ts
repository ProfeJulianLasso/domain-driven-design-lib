import { IErrorValueObject } from '@sofka';

/**
 * Class representing a value object exception
 *
 * @export
 * @class ValueObjectException
 * @extends {Error} - Error class
 *
 * @example
 * ```typescript
 * import { ValueObjectException } from '@sofka/ddd';
 * throw new ValueObjectException('Error message');
 * ```
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 */
export class ValueObjectException extends Error {
  /**
   * Stack of errors type IErrorValueObject
   *
   * @private
   * @type {Array<IErrorValueObject>}
   * @memberof ValueObjectException
   */
  private _errors: Array<IErrorValueObject>;

  /**
   * Creates an instance of ValueObjectException
   *
   * @param {string} message - The error message
   * @param {Array<IErrorValueObject>} errors - Array of errors
   * @memberof ValueObjectException
   */
  constructor(message: string, errors: Array<IErrorValueObject>) {
    super(message);
    this._errors = errors;
  }

  /**
   * Returns the stack of errors
   *
   * @readonly
   * @type {Array<IErrorValueObject>}
   * @memberof ValueObjectException
   */
  get errors(): Array<IErrorValueObject> {
    return this._errors;
  }
}
