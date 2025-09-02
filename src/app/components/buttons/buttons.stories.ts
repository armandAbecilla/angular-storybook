import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export const ActionsData = {
  //   onArchiveTask: fn(),
  //   onPinTask: fn(),
};

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    btnVariant: '',
    btnText: 'Default',
  },
};

export const Primary: Story = {
  args: {
    btnVariant: 'primary',
    btnText: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    btnVariant: 'secondary',
    btnText: 'Secondary',
  },
};

export const Info: Story = {
  args: {
    btnVariant: 'info',
    btnText: 'Info',
  },
};

export const Warning: Story = {
  args: {
    btnVariant: 'warning',
    btnText: 'Warning',
  },
};

export const Danger: Story = {
  args: {
    btnVariant: 'danger',
    btnText: 'Danger',
  },
};
