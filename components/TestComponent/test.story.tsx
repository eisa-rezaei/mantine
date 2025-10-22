import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Test';

const meta: Meta<typeof Component> = {
  component: Component,
  parameters: {
    title: {
      default: 'test 122121',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    title: 'Test 21212',
  },
  parameters: {
    title: {
      default: 'test 122121',
    },
  },
};
export const Primary2: Story = {
  args: {
    title: 'Test 1111',
  },
  parameters: {
    title: {
      default: 'test 122121323',
    },
  },
};
