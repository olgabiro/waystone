export interface Task {
  text: string;
  status: TaskStatus;
  tags: string[];
}

export enum TaskStatus {
  OPEN = 'OPEN',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
  POSTPONED = 'POSTPONED',
}
