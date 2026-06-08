import { Task } from './task';

export class Note {
  constructor(
    public id: string,
    public tasks: Task[] = [],
    public focus: string[] = [],
    public notes: string[] = [],
  ) {}
}
