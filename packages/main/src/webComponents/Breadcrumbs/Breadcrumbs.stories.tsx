import type { Meta, StoryObj } from '@storybook/react-vite';
import BreadcrumbsDesign from '@ui5/webcomponents/dist/types/BreadcrumbsDesign.js';
import BreadcrumbsSeparatorStyle from '@ui5/webcomponents/dist/types/BreadcrumbsSeparator.js';
import { BreadcrumbsItem } from '../BreadcrumbsItem/index.js';
import { Breadcrumbs } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    design: BreadcrumbsDesign.Standard,
    separators: BreadcrumbsSeparatorStyle.Slash,
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Breadcrumbs {...args}>
        <BreadcrumbsItem href="?path=/docs/layouts-floorplans-breadcrumbs--docs" target="_blank">
          Root Page
        </BreadcrumbsItem>
        <BreadcrumbsItem href="?path=/story/layouts-floorplans-breadcrumbs--default" target="_blank">
          Parent Page
        </BreadcrumbsItem>
        <BreadcrumbsItem>Current Page</BreadcrumbsItem>
      </Breadcrumbs>
    );
  },
};
