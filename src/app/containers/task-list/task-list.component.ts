import { Component, computed, input, output } from '@angular/core';
import { TaskComponent } from 'src/app/components/task/task.component';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styles: ``,
})
export class TaskListComponent {
  tasks = input<Task[]>([]);
  loading = input<boolean>();
  onPinTask = output();
  onArchiveTask = output();

  // reorder: pinned first
  initialTasks = computed(() => [
    ...this.tasks().filter((t) => t.state === 'TASK_PINNED'),
    ...this.tasks().filter((t) => t.state !== 'TASK_PINNED'),
  ]);

  // keep only inbox or pinned
  filteredTasks = computed(() =>
    this.initialTasks().filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED',
    ),
  );

  // final result (same filter again as in your original setter)
  tasksInOrder = computed(() =>
    this.filteredTasks().filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED',
    ),
  );
}
