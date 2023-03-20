import { Observable } from 'rxjs';
import { IEventPublisher } from '../interface';

/**
 * Abstract class representing a event publisher
 *
 * @export
 * @abstract
 * @class EventPublisherAbstract
 * @implements {IEventPublisher}
 * @template Response - Type of response
 *
 * @example
 * ```typescript
 * import { EventPublisherAbstract } from '@sofka/ddd';
 *
 * class UsuarioCreadoEventPublisher<
 *   Response = UsuarioEntity,
 * > extends EventPublisherAbstract<Response> {
 *   constructor(private readonly proxy: ClientProxy) {
 *     super(proxy as unknown as IEventPublisher);
 *   }
 *
 *   publish<Result = any>(): Observable<Result> {
 *     return this.emit(
 *       'usuario_creado',
 *       JSON.stringify({ data: this.response }),
 *     );
 *   }
 *
 *   emit<Result = any, Input = UsuarioEntity>(
 *     pattern: any,
 *     data: Input,
 *   ): Observable<Result> {
 *     return lastValueFrom(this.proxy.emit(pattern, data));
 *   }
 * }
 * ```
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 */
export abstract class EventPublisherAbstract<Response>
  implements IEventPublisher
{
  /**
   * Response of the event publisher
   *
   * @private
   * @type {(Response | Response[])}
   * @memberof EventPublisherAbstract
   */
  private _response!: Response | Response[];

  /**
   * Creates an instance of EventPublisherAbstract
   *
   * @param {IEventPublisher} eventPublisher - Event publisher
   * @memberof EventPublisherAbstract
   */
  constructor(private readonly eventPublisher: IEventPublisher) {}

  /**
   * Returns the response of the event publisher
   *
   * @type {(Response | Response[])}
   * @memberof EventPublisherAbstract
   */
  get response(): Response | Response[] {
    return this._response;
  }

  /**
   * Sets the response of the event publisher
   *
   * @memberof EventPublisherAbstract
   */
  set response(value: Response | Response[]) {
    this._response = value;
  }

  /**
   * Emits an event
   *
   * @template Result - Type of response
   * @template Input - Type of input
   * @param {*} pattern - Pattern of the event
   * @param {Input} data - Data of the event
   * @return {*}  {Observable<Result>} - Response of the event
   * @memberof EventPublisherAbstract
   */
  emit<Result = any, Input = Response>(
    pattern: any,
    data: Input
  ): Observable<Result> {
    return this.eventPublisher.emit(pattern, data);
  }

  /**
   * Publishes an event
   *
   * @abstract
   * @template Result - Type of response
   * @return {*}  {Observable<Result>} - Response of the event
   * @memberof EventPublisherAbstract
   */
  abstract publish<Result = any>(): Observable<Result>;
}
