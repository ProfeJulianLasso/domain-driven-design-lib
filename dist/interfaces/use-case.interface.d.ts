import { Observable } from 'rxjs';
export interface IUseCase<CommandType, ResponseType> {
    execute(command?: CommandType): Observable<ResponseType> | Promise<ResponseType>;
}
//# sourceMappingURL=use-case.interface.d.ts.map