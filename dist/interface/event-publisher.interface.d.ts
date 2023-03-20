import { Observable } from 'rxjs';
export interface IEventPublisher {
    emit<ResultType = any, InputType = any>(pattern: any, data: InputType): Observable<ResultType>;
}
//# sourceMappingURL=event-publisher.interface.d.ts.map