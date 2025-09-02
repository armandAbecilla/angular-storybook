import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PureInboxScreenComponent } from 'src/app/components/pure-inbox-screen/pure-inbox-screen.component';

@Component({
  selector: 'app-inbox-screen',
  imports: [PureInboxScreenComponent, AsyncPipe],
  templateUrl: './inbox-screen.component.html',
  styles: ``,
})
export class InboxScreenComponent {
  error$: Observable<boolean>;
  store = inject(Store);

  constructor() {
    this.error$ = this.store.select((state) => state.taskbox.error);
  }
}
