import { inject, Service } from '@angular/core';
import { NoteDto } from './note-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class NoteApi {
  private readonly httpClient = inject(HttpClient);

  getNote(id: string): Observable<NoteDto> {
    return this.httpClient.get<NoteDto>(`http://localhost:3000/notes/${id}`);
  }
}
