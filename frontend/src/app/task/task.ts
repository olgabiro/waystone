import {Component, inject, OnInit, signal} from '@angular/core';
import {TaskService} from './taskService';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class Task implements OnInit {

  task = signal(['']);
  private readonly taskService = inject(TaskService);


  ngOnInit() {
    this.taskService.getTask().subscribe(task => this.task.set(task.split('\n')));
  }
}
