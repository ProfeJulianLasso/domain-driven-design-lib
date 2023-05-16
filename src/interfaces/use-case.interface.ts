/*
 * This file is part of the @sofkau/ddd package.
 *
 * (c) Sofka Technologies
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Observable } from 'rxjs';

/**
 * Interface representing a use case
 *
 * @export
 * @interface IUseCase
 * @template CommandType - Type of input payload
 * @template ResponseType - Type of response
 *
 * @since 1.0.0
 * @version 1.0.0
 * @license MIT
 * @author Julian Andres Lasso Figueroa <julian.lasso@sofka.com.co>
 */
export interface IUseCase<CommandType, ResponseType> {
  /**
   * Executes the use case
   *
   * @param {CommandType} [command] - Input payload for the use case, if applicable
   * @return {*}  {(Observable<ResponseType> | Promise<ResponseType>)} - Output data type
   * @memberof IUseCase
   */
  execute(
    command?: CommandType
  ): ResponseType | Observable<ResponseType> | Promise<ResponseType>;
}
