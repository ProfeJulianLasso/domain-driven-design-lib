import { Observable } from 'rxjs';

/**
 * Interface representing a event publisher
 *
 * @export
 * @interface IEventPublisher
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 */
export interface IEventPublisher {
  /**
   * Publishes an event
   *
   * @template ResultType - Type of response
   * @template InputType - Type of data to be sent
   * @param {*} pattern - Pattern to be sent
   * @param {InputType} data - Data to be sent
   * @return {*}  {Observable<ResultType>} - Observable of the response
   * @memberof IEventPublisher
   */
  emit<ResultType = any, InputType = any>(
    pattern: any,
    data: InputType
  ): Observable<ResultType>;
}
