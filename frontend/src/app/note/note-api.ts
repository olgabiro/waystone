import { Service } from '@angular/core';
import { NoteDto } from './note-model';
import { TaskStatus } from '../task/task-model';

@Service()
export class NoteApi {
  getNote(id: string): NoteDto {
    return {
      id,
      tasks: [
        {
          text: 'first task',
          status: TaskStatus.OPEN,
          tags: ['meeting', 'urgent'],
        },
        {
          text: 'second task',
          status: TaskStatus.COMPLETED,
          tags: [],
        },
      ],
      focus: [],
      notes: [],
    };
  }
}
