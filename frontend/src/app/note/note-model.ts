import { Task } from '../task/task-model';

export interface NoteDto {
  id: string;
  tasks: Task[];
  focus: string[];
  notes: string[];
}
