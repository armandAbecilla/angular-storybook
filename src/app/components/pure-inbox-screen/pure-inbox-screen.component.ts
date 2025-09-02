import { Component, input } from '@angular/core';
import { TaskListComponent } from 'src/app/containers/task-list/task-list.component';

@Component({
  selector: 'app-pure-inbox-screen',
  imports: [TaskListComponent],
  templateUrl: './pure-inbox-screen.component.html',
  styles: ``,
})
export class PureInboxScreenComponent {
  error = input();
}
