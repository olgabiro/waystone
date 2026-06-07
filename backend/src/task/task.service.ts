import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';

@Injectable()
export class TaskService {
  getTask(): string {
    return fs.readFileSync('../docs/tasks.md', 'utf8');
  }
}
