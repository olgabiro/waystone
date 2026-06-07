import { Component, inject, OnInit, signal } from '@angular/core';
import { TaskApi } from './task-api';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task implements OnInit {
  task = signal(['']);
  private readonly taskService = inject(TaskApi);

  ngOnInit() {
    this.taskService.getTask().subscribe((task) => this.task.set(task.split('\n')));
  }
}
