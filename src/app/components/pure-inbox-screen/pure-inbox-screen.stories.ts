import type { Meta, StoryObj } from '@storybook/angular';

import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { provideStates, provideStore } from '@ngxs/store';
import { TasksState } from 'src/app/state/task.state';
import { PureInboxScreenComponent } from './pure-inbox-screen.component';

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
    applicationConfig({
      providers: [provideStore(), provideStates([TasksState])],
    }),
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};
