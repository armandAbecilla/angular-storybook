import { Component, input, output } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styles: ``,
})
export class TaskComponent {
  task = input.required<Task>();
  onPinTask = output();
  onArchiveTask = output();

  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
