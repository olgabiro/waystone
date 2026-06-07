import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class TaskApi {
  private readonly httpClient = inject(HttpClient);

  getTask(): Observable<string> {
    return this.httpClient.get('http://localhost:3000/task', { responseType: 'text' });
  }
}
