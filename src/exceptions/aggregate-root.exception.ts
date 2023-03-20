/**
 * Exception class for errors related to aggregate roots
 *
 * @export
 * @class AggregateRootException
 * @extends {Error} - Error class
 *
 * @example
 * ```typescript
 * import { AggregateRootException } from '@sofka/ddd';
 * throw new AggregateRootException('Error message');
 * ```
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 */
export class AggregateRootException extends Error {
  /**
   * Creates a new AggregateRootException object
   *
   * @param {string} message - The error message
   */
  constructor(message: string) {
    super(message);
  }
}
