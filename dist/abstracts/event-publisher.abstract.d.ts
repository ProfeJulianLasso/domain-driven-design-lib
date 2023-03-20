import { Observable } from 'rxjs';
import { IEventPublisher } from '../interface';
export declare abstract class EventPublisherAbstract<Response> implements IEventPublisher {
    private readonly eventPublisher;
    private _response;
    constructor(eventPublisher: IEventPublisher);
    get response(): Response | Response[];
    set response(value: Response | Response[]);
    emit<Result = any, Input = Response>(pattern: any, data: Input): Observable<Result>;
    abstract publish<Result = any>(): Observable<Result>;
}
//# sourceMappingURL=event-publisher.abstract.d.ts.map