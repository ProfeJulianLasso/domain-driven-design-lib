import { EventPublisherAbstract } from '../../..';
import { Observable } from 'rxjs';
export interface ClientProxy {
    emit<ResultType = any, InputType = any>(pattern: any, data: InputType): Observable<ResultType>;
}
export interface UsuarioEntity {
    id: string;
    nombre: string;
    apellido: string;
}
export declare class UsuarioCreadoEventPublisher<Response = UsuarioEntity> extends EventPublisherAbstract<Response> {
    private readonly proxy;
    constructor(proxy: ClientProxy);
    publish<Result = any>(): Observable<Result>;
}
//# sourceMappingURL=event-publisher.abstract.mock.d.ts.map