import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';

@Injectable()
export class TaskService {
  getTask(): string {
    console.log(process.cwd());
    const taskContent: string = fs.readFileSync(
      '../docs/tasks.md',
      'utf8',
    );
    return taskContent;
  }
}
