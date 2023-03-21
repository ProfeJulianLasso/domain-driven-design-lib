/*
 * This file is part of the @sofkau/ddd package.
 *
 * (c) Sofka Technologies
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import {
  IErrorValueObject,
  ValueObjectAbstract,
  ValueObjectException,
} from '@sofka';

/**
 * Abstract class that defines the error handling behavior for a value object
 *
 * @export
 * @abstract
 * @class ValueObjectErrorHandlerAbstract
 *
 * @example
 * ```typescript
 * import { ValueObjectErrorHandlerAbstract } from '@sofka/ddd';
 *
 * class RegistrarUnUsuarioUseCase extends ValueObjectsErrorHandlerAbstract {
 *   execute(command: IRegistrarUnUsuarioCommand) {
 *     const valueObjects = this.createValueObjects(command);
 *     this.validateValueObjects(
 *       valueObjects,
 *       'Existen algunos errores en el comando "IRegistrarUnUsuarioCommand"'
 *     );
 *   }
 *
 *   createValueObjects(
 *     command: IRegistrarUnUsuarioCommand
 *   ): Array<ValueObjectAbstract<any>> {
 *     const email = new EmailValueObject(command.email);
 *     const password = new PasswordValueObject(command.password);
 *     return [email, password];
 *   }
 * }
 * ```
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 */
export abstract class ValueObjectsErrorHandlerAbstract {
  private _errors: Array<IErrorValueObject>;

  /**
   * Creates an instance of ValueObjectErrorHandlerAbstract
   *
   * @memberof ValueObjectErrorHandlerAbstract
   */
  constructor() {
    this._errors = new Array<IErrorValueObject>();
  }

  /**
   * Returns the current errors of the value object
   *
   * @return {*}  {Array<IErrorValueObject>} - Array of errors
   * @memberof ValueObjectErrorHandlerAbstract
   */
  getErrors(): Array<IErrorValueObject> {
    return this._errors;
  }

  /**
   * Sets the current errors of the value object
   *
   * @param {Array<IErrorValueObject>} errors - Array of errors
   * @memberof ValueObjectErrorHandlerAbstract
   */
  setErrors(errors: Array<IErrorValueObject>): void {
    this._errors = [...this._errors, ...errors];
  }

  /**
   * Returns true if the value object has errors, false otherwise
   *
   * @return {*}  {boolean} - True if the value object has errors,
   *    false otherwise
   * @memberof ValueObjectErrorHandlerAbstract
   */
  hasErrors(): boolean {
    return this._errors.length > 0 ? true : false;
  }

  /**
   * Validates the value objects, creates the error stack and
   * throws an exception if it has errors
   *
   * @param {Array<ValueObjectAbstract<any>>} valueObjects
   * @param {string} message
   * @throws {ValueObjectException} Throws an exception with the value object
   *    errors if it has any
   * @memberof ValueObjectsErrorHandlerAbstract
   */
  validateValueObjects(
    valueObjects: Array<ValueObjectAbstract<any>>,
    message: string
  ): void {
    valueObjects.forEach((object) => {
      if (object.hasErrors() === true) this.setErrors(object.getErrors());
    });

    if (this.hasErrors() === true)
      throw new ValueObjectException(message, this.getErrors());
  }
}
