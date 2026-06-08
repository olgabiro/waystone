import { TaskStatus } from './task-status';

export class Task {
  constructor(
    public text: string,
    public status: TaskStatus,
    public tags: string[] = [],
  ) {}
}
