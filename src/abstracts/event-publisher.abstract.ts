/*
 * This file is part of the @sofkau/ddd package.
 *
 * (c) Sofka Technologies
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Observable } from 'rxjs';
import { IEventPublisher } from '../interfaces';

/**
 * Abstract class representing a event publisher
 *
 * @export
 * @abstract
 * @class EventPublisherAbstract
 * @implements {IEventPublisher}
 * @template Response - Type of response
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 *
 * MIT License
 *
 * Copyright (c) 2023 Sofka Technologies
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
