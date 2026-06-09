import { Routes } from '@angular/router';
import { Task } from './task/task';
import { Note } from './note/note';

export const routes: Routes = [
  {
    path: '',
    component: Task,
  },
  {
    path: 'notes/:id',
    component: Note,
  },
];
