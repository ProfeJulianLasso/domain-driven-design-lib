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
 *       'Existen algunos errores en el comando "IRegistrarUnUsuarioCommand"',
 *       valueObjects
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
  /**
   * Value Object Error Stack
   *
   * @private
   * @type {Array<IErrorValueObject>}
   * @memberof ValueObjectsErrorHandlerAbstract
   */
  private _errors: Array<IErrorValueObject>;

  /**
   * Error message for the exception thrown by all the value objects
   *
   * @protected
   * @type {string}
   * @memberof ValueObjectsErrorHandlerAbstract
   */
  protected _errorMessage: string;

  /**
   * Creates an instance of ValueObjectErrorHandlerAbstract
   *
   * @memberof ValueObjectErrorHandlerAbstract
   */
  constructor() {
    this._errors = new Array<IErrorValueObject>();
    this._errorMessage = '';
  }

  /**
   * Message of the exception thrown by all the value objects
   *
   * @memberof ValueObjectsErrorHandlerAbstract
   */
  set errorMessage(message: string) {
    this._errorMessage = message;
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
   * @param {string} message - Message of the exception
   * @param {Array<ValueObjectAbstract<any>>} valueObjects - Array of value objects
   * @throws {ValueObjectException} Throws an exception with the value object
   *    errors if it has any
   * @memberof ValueObjectsErrorHandlerAbstract
   */
  validateValueObjects(
    message: string,
    valueObjects: Array<ValueObjectAbstract<any>>
  ): void {
    valueObjects.forEach((object) => {
      if (object.hasErrors() === true) this.setErrors(object.getErrors());
    });

    if (this.hasErrors() === true)
      throw new ValueObjectException(message, this.getErrors());
  }

  /**
   * Returns the value object as a primitive
   *
   * @abstract
   * @return {*}  {*} - Primitive
   * @memberof ValueObjectsErrorHandlerAbstract
   */
  abstract toPrimitives(): any;

  /**
   * Checks the value objects, creates the error stack and
   * throws an exception if it has errors
   *
   * @protected
   * @memberof ValueObjectsErrorHandlerAbstract
   */
  protected checkValidateValueObjects(): void {
    this.validateValueObjects(
      this._errorMessage,
      this.createArrayFromValueObjects()
    );
  }

  /**
   * Creates an array of value objects from the command
   *
   * @protected
   * @abstract
   * @return {*}  {Array<ValueObjectAbstract<any>>} - Array of value objects
   * @memberof ValueObjectsErrorHandlerAbstract
   */
  protected abstract createArrayFromValueObjects(): Array<
    ValueObjectAbstract<any>
  >;
}
