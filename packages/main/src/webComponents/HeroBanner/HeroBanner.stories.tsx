import type { Meta, StoryObj } from '@storybook/react-vite';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import HeroBannerActionsPlacement from '@ui5/webcomponents-fiori/dist/types/HeroBannerActionsPlacement.js';
import HeroBannerColumnsRatio from '@ui5/webcomponents-fiori/dist/types/HeroBannerColumnsRatio.js';
import HeroBannerHeaderBlockPlacement from '@ui5/webcomponents-fiori/dist/types/HeroBannerHeaderBlockPlacement.js';
import actionSettingsIcon from '@ui5/webcomponents-icons/dist/action-settings.js';
import addDocumentIcon from '@ui5/webcomponents-icons/dist/add-document.js';
import cartIcon from '@ui5/webcomponents-icons/dist/cart.js';
import collaborateIcon from '@ui5/webcomponents-icons/dist/collaborate.js';
import createIcon from '@ui5/webcomponents-icons/dist/create.js';
import documentIcon from '@ui5/webcomponents-icons/dist/document.js';
import emailIcon from '@ui5/webcomponents-icons/dist/email.js';
import logIcon from '@ui5/webcomponents-icons/dist/log.js';
import receiptIcon from '@ui5/webcomponents-icons/dist/receipt.js';
import shippingStatusIcon from '@ui5/webcomponents-icons/dist/shipping-status.js';
import taskIcon from '@ui5/webcomponents-icons/dist/task.js';
import { Button } from '../Button/index.js';
import { Card } from '../Card/index.js';
import { CardHeader } from '../CardHeader/index.js';
import { Search } from '../Search/index.js';
import { Title } from '../Title/index.js';
import { HeroBanner } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / HeroBanner',
  component: HeroBanner,
  argTypes: {
    actions: { control: { disable: true } },
    children: { control: { disable: true } },
    endContent: { control: { disable: true } },
  },
  args: {
    headerText: 'Good Morning, Anna',
    overlineText: 'Monday, May 26, 2026',
  },
  tags: ['package:@ui5/webcomponents-fiori', 'experimental'],
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BackgroundImage: Story = {
  render: (args) => {
    return (
      <HeroBanner
        {...args}
        style={{
          backgroundImage: 'linear-gradient(135deg, #003C74 0%, var(--sapBrandColor) 50%, #3BA4F5 100%)',
        }}
      />
    );
  },
};

export const ColumnsRatio: Story = {
  render: (args) => {
    return (
      <>
        <Title size={TitleLevel.H4} style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          No columnsRatio (single column)
        </Title>
        <HeroBanner
          {...args}
          headerText="Welcome back, Sarah"
          actions={
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button icon={receiptIcon}>Approve Invoices</Button>
              <Button icon={shippingStatusIcon}>Track Deliveries</Button>
            </div>
          }
        >
          <div>
            Here you can insert any additional information that may be relevant to the context. This section serves as a
            placeholder for content that can provide more in-depth explanations, supplementary data, or any other
            pertinent details that the reader might need.
          </div>
        </HeroBanner>

        <br />

        <Title size={TitleLevel.H4} style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          columnsRatio="Equal" (equal width columns)
        </Title>
        <HeroBanner
          {...args}
          headerText="Hi, David"
          columnsRatio={HeroBannerColumnsRatio.Equal}
          endContent={
            <Card header={<CardHeader titleText="Next Payroll" subtitleText="June 2026" />}>
              <div style={{ padding: '0.75rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Jun 30</div>
            </Card>
          }
        >
          <Card header={<CardHeader titleText="Leave Balance" subtitleText="Days remaining" />}>
            <div style={{ padding: '0.75rem', fontSize: '1.5rem', fontWeight: 'bold' }}>18 of 30</div>
          </Card>
        </HeroBanner>

        <br />

        <Title size={TitleLevel.H4} style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          columnsRatio="FirstWider" (start column twice as wide)
        </Title>
        <HeroBanner
          {...args}
          headerText="Good Afternoon, Thomas"
          columnsRatio={HeroBannerColumnsRatio.FirstWider}
          endContent={
            <Card header={<CardHeader titleText="Overdue Tasks" subtitleText="Action needed" />}>
              <div
                style={{
                  padding: '0.75rem',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'var(--sapCriticalTextColor)',
                }}
              >
                3
              </div>
            </Card>
          }
        >
          <Card header={<CardHeader titleText="Sales Pipeline" subtitleText="Q2 2026" />}>
            <div style={{ padding: '0.75rem', fontSize: '1.5rem', fontWeight: 'bold' }}>€4.2M</div>
          </Card>
        </HeroBanner>
      </>
    );
  },
};

export const HeaderBlockAndActionsPlacement: Story = {
  render: (args) => {
    return (
      <HeroBanner
        {...args}
        columnsRatio={HeroBannerColumnsRatio.Equal}
        actionsPlacement={HeroBannerActionsPlacement.BottomStart}
        headerBlockPlacement={HeroBannerHeaderBlockPlacement.Bottom}
        actions={
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button icon={createIcon}>New Request</Button>
            <Button icon={documentIcon}>Create Report</Button>
            <Button icon={emailIcon}>Send Message</Button>
          </div>
        }
        endContent={
          <Card style={{ width: '100%' }} header={<CardHeader titleText="Open Tickets" subtitleText="Support" />}>
            <div
              style={{
                padding: '0.75rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--sapNegativeColor)',
              }}
            >
              42
            </div>
          </Card>
        }
      />
    );
  },
};

export const UseCases: Story = {
  render: (args) => {
    return (
      <>
        <Title size={TitleLevel.H4} style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          Search
        </Title>
        <HeroBanner {...args} actions={<Button icon={cartIcon}>Cart</Button>}>
          <Search
            placeholder="Search purchase orders, suppliers, materials..."
            style={{ width: '100%', maxWidth: '100%' }}
          />
        </HeroBanner>

        <br />

        <Title size={TitleLevel.H4} style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          Header Actions Only
        </Title>
        <HeroBanner
          {...args}
          headerText="Welcome, Lisa"
          overlineText="Tuesday, May 27, 2026"
          actions={
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Button icon={actionSettingsIcon}>Settings</Button>
              <Button icon={logIcon}>Activity Log</Button>
            </div>
          }
        />

        <br />

        <Title size={TitleLevel.H4} style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          Content with Actions
        </Title>
        <HeroBanner
          {...args}
          headerText="Good Morning, Robert"
          overlineText="Tuesday, May 27, 2026"
          actions={
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Button icon={taskIcon}>Review Approvals</Button>
              <Button icon={addDocumentIcon}>Create Report</Button>
              <Button icon={collaborateIcon}>Team Overview</Button>
            </div>
          }
        >
          <div style={{ margin: 0 }}>
            You have 3 pending approvals and 12 new notifications since your last visit. Review your tasks below or use
            the quick actions to get started.
          </div>
        </HeroBanner>

        <br />

        <Title size={TitleLevel.H4} style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          Actions Below Header (actionsPlacement="BottomStart")
        </Title>
        <HeroBanner
          {...args}
          headerText="Hello, Emma"
          overlineText="Wednesday, May 28, 2026"
          actionsPlacement={HeroBannerActionsPlacement.BottomStart}
          columnsRatio={HeroBannerColumnsRatio.Equal}
          actions={
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Button icon={createIcon}>New Request</Button>
              <Button icon={addDocumentIcon}>Create Report</Button>
              <Button icon={collaborateIcon}>Team Overview</Button>
            </div>
          }
          endContent={
            <Card style={{ width: '100%' }} header={<CardHeader titleText="Open Tickets" subtitleText="Support" />}>
              <div
                style={{
                  padding: '0.75rem',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'var(--sapNegativeColor)',
                }}
              >
                42
              </div>
            </Card>
          }
        />

        <br />

        <Title size={TitleLevel.H4} style={{ display: 'block', marginBlockEnd: '0.5rem' }}>
          Header at Bottom (headerBlockPlacement="Bottom")
        </Title>
        <HeroBanner
          {...args}
          headerText="Good Afternoon, James"
          overlineText="Wednesday, May 28, 2026"
          columnsRatio={HeroBannerColumnsRatio.FirstWider}
          headerBlockPlacement={HeroBannerHeaderBlockPlacement.Bottom}
          actions={
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Button icon={cartIcon}>Orders</Button>
              <Button icon={taskIcon}>Tasks</Button>
            </div>
          }
          endContent={
            <Card style={{ width: '100%' }} header={<CardHeader titleText="Revenue YTD" subtitleText="Q2 2026" />}>
              <div style={{ padding: '0.75rem', fontSize: '1.5rem', fontWeight: 'bold' }}>€4.2M</div>
            </Card>
          }
        />
      </>
    );
  },
};
