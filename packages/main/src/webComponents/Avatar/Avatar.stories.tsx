import type { Meta, StoryObj } from '@storybook/react-vite';
import '@ui5/webcomponents-icons/dist/employee.js';
import alertIcon from '@ui5/webcomponents-icons/dist/alert.js';
import editIcon from '@ui5/webcomponents-icons/dist/edit.js';
import errorIcon from '@ui5/webcomponents-icons/dist/error.js';
import sysEnter2Icon from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { AvatarBadge } from '../AvatarBadge/index.js';
import { Avatar } from './index.js';

const meta = {
  title: 'Data Display / Avatar',
  component: Avatar,
  argTypes: {
    children: { control: { disable: true } },
    badge: { control: { disable: true } },
  },
  args: {
    icon: 'employee',
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    fallbackIcon: 'employee',
    icon: undefined,
  },
  render: (args) => (
    <Avatar {...args}>
      <img alt="Person" src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
    </Avatar>
  ),
};

export const WithBadge: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
      <Avatar {...args} initials="JD" colorScheme="Accent5" badge={<AvatarBadge icon={editIcon} state="None" />} />
      <Avatar
        {...args}
        icon="employee"
        colorScheme="Accent10"
        badge={<AvatarBadge icon={alertIcon} state="Critical" />}
      />
      <Avatar {...args} badge={<AvatarBadge icon={sysEnter2Icon} state="Positive" />}>
        <img src="https://ui5.github.io/webcomponents/images/avatars/man_avatar_1.png" alt="Person" />
      </Avatar>
      <Avatar {...args} shape="Square" badge={<AvatarBadge icon={errorIcon} state="Negative" />}>
        <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png" alt="Person" />
      </Avatar>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    style: { width: '250px', height: '250px', border: '1px solid var(--sapField_BorderColor)' },
  },
  render: (args) => (
    <Avatar {...args}>
      <img
        src="https://ui5.github.io/webcomponents/images/avatars/Lamp_avatar_01.jpg"
        alt="Lamp"
        style={{ objectFit: 'contain' }}
      />
    </Avatar>
  ),
};
