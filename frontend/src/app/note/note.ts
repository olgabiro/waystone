import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteApi } from './note-api';
import { TaskStatus } from '../task/task-model';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrl: './note.css',
})
export class Note {
  private readonly noteApi = inject(NoteApi);

  protected note = toSignal(
    inject(ActivatedRoute).params.pipe(switchMap((params) => this.noteApi.getNote(params['id']))),
    { initialValue: null },
  );

  protected readonly TaskStatus = TaskStatus;
}
