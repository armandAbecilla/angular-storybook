import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PureTaskListComponent } from 'src/app/components/pure-task-list/pure-task-list.component';
import { ArchiveTask, PinTask } from 'src/app/state/task.state';

@Component({
  selector: 'app-task-list',
  imports: [PureTaskListComponent, AsyncPipe],
  templateUrl: './task-list.component.html',
  styles: ``,
})
export class TaskListComponent {
  tasks$?: Observable<any>;

  constructor(private store: Store) {
    this.tasks$ = store.select((state) => state.taskbox.tasks);
  }

  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}
