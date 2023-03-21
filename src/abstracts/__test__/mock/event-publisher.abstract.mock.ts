import { EventPublisherAbstract, IEventPublisher } from '@sofka';
import { Observable } from 'rxjs';

export interface ClientProxy {
  emit<ResultType = any, InputType = any>(
    pattern: any,
    data: InputType
  ): Observable<ResultType>;
}

export interface UsuarioEntity {
  id: string;
  nombre: string;
  apellido: string;
}

export class UsuarioCreadoEventPublisher<
  Response = UsuarioEntity
> extends EventPublisherAbstract<Response> {
  constructor(private readonly proxy: ClientProxy) {
    super(proxy as unknown as IEventPublisher);
  }

  publish<Result = any>(): Observable<Result> {
    return this.emit('usuario_creado', JSON.stringify({ data: this.response }));
  }
}
