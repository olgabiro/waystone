import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteApi } from './note-api';
import { NoteDto } from './note-model';
import { TaskStatus } from '../task/task-model';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrl: './note.css',
})
export class Note {
  note = signal<NoteDto | null>(null);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly noteApi = inject(NoteApi);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.note.set(this.noteApi.getNote(id));
    });
  }

  protected readonly TaskStatus = TaskStatus;
}
