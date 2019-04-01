import { AsyncSubject, Observable } from 'rxjs';

export class TestStore<T> {
    private state: AsyncSubject<T> = new AsyncSubject();

    setState(data: T) {
        this.state.next(data);
    }

    select(selector?: any): Observable<T> {
        return this.state.asObservable();
    }

    dispatch(action: any) { }

    pipe(selector?: any) {
        return this.select(selector);
    }

}