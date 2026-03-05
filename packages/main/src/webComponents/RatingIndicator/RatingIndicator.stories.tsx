import type { Meta, StoryObj } from '@storybook/react-vite';
import borderIcon from '@ui5/webcomponents-icons/dist/border.js';
import circleTask2Icon from '@ui5/webcomponents-icons/dist/circle-task-2.js';
import heart2Icon from '@ui5/webcomponents-icons/dist/heart-2.js';
import heartIcon from '@ui5/webcomponents-icons/dist/heart.js';
import thumbUpIcon from '@ui5/webcomponents-icons/dist/thumb-up.js';
import { RatingIndicator } from './index.js';

const meta = {
  title: 'Inputs / RatingIndicator',
  component: RatingIndicator,
  argTypes: {},
  args: {},
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof RatingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomIcons: Story = {
  render() {
    return (
      <>
        <RatingIndicator value={3} ratedIcon={heartIcon} unratedIcon={heart2Icon} />
        <br />
        <RatingIndicator value={4} ratedIcon={thumbUpIcon} unratedIcon={borderIcon} />
        <br />
        <RatingIndicator value={2.5} ratedIcon={circleTask2Icon} unratedIcon={borderIcon} readonly />
      </>
    );
  },
};
