import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule, provideStates, provideStore } from '@ngxs/store';
import { environment } from 'src/environments/environment.prod';
import { AppComponent } from './app.component';
import { InboxScreenComponent } from './containers/inbox-screen/inbox-screen.component';
import { TasksState } from './state/task.state';

// Include your states here
const NGXS_STATES = [TasksState];

@NgModule({
  declarations: [AppComponent],
  imports: [
    InboxScreenComponent,
    BrowserModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [provideStore(), provideStates(NGXS_STATES)],
  bootstrap: [AppComponent],
})
export class AppModule {}
