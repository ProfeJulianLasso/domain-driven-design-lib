/*
 * This file is part of the @sofkau/ddd package.
 *
 * (c) Sofka Technologies
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Interface for handling errors in the value objects
 *
 * @export
 * @interface IErrorValueObject
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 */
export interface IErrorValueObject {
  /**
   * Field name of the value object
   *
   * @type {string}
   * @memberof IErrorValueObject
   */
  field: string;

  /**
   * Error message of the value object
   *
   * @type {string}
   * @memberof IErrorValueObject
   */
  message: string;
}
