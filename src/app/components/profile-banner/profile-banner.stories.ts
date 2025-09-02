import type { Meta, StoryObj } from '@storybook/angular';

import { ProfileBannerComponent } from './profile-banner.component';

export const ActionsData = {
  //   onArchiveTask: fn(),
  //   onPinTask: fn(),
};

const meta: Meta<ProfileBannerComponent> = {
  title: 'ProfileBanner',
  component: ProfileBannerComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<ProfileBannerComponent>;

export const Default: Story = {
  args: {
    data: {
      name: 'Dnamra Abecilla',
      description: 'Web Developer | Angular | React',
      bannerImageCover:
        'https://images.pexels.com/photos/33079382/pexels-photo-33079382.jpeg?_gl=1*7tus2d*_ga*NzMyODU2NTczLjE3NTY4MDUxODk.*_ga_8JE65Q40S6*czE3NTY4MDUxODgkbzEkZzEkdDE3NTY4MDYxODgkajIxJGwwJGg',
      bannerImage:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
  },
};
