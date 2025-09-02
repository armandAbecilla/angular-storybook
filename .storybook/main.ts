import type { StorybookConfig } from '@storybook/angular';

const storiesDir = [
  '../src/app/components/**/*.stories.ts',
  '../src/app/containers/**/*.stories.ts',
];

const config: StorybookConfig = {
  stories: storiesDir,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
