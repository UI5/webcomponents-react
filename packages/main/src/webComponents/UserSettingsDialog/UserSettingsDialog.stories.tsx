import type { Meta, StoryObj } from '@storybook/react-vite';
import actionSettingsIcon from '@ui5/webcomponents-icons/dist/action-settings.js';
import {
  Avatar,
  Button,
  ComboBox,
  ComboBoxItem,
  Icon,
  Link,
  MessageStrip,
  Option,
  Select,
  Text,
  Label,
  Panel,
  ShellBar,
  UserMenu,
  UserMenuAccount,
  UserMenuItem,
  UserSettingsItem,
  UserSettingsView,
  Title,
  RadioButton,
} from '@ui5/webcomponents-react';
import type { UserMenuDomRef, UserMenuPropTypes } from '@ui5/webcomponents-react';
import { useEffect, useRef, useState } from 'react';
import { Switch } from '../Switch/index.js';
import { UserSettingsAppearanceView } from '../UserSettingsAppearanceView/index.js';
import { UserSettingsAppearanceViewGroup } from '../UserSettingsAppearanceViewGroup/index.js';
import { UserSettingsAppearanceViewItem } from '../UserSettingsAppearanceViewItem/index.js';
import { UserSettingsNotificationsView } from '../UserSettingsNotificationsView/index.js';
import { UserSettingsNotificationsViewGroup } from '../UserSettingsNotificationsViewGroup/index.js';
import { UserSettingsNotificationsViewItem } from '../UserSettingsNotificationsViewItem/index.js';
import { UserSettingsDialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / UserSettingsDialog',
  component: UserSettingsDialog,
  argTypes: {
    children: { control: { disable: true } },
    fixedItems: { control: { disable: true } },
  },
  args: {},
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof UserSettingsDialog>;
type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(args.open);

    const handleUserMenuItemClick: UserMenuPropTypes['onItemClick'] = (e) => {
      const { settings } = e.detail.item.dataset;
      if (settings) {
        setOpen(true);
      }
    };

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <ShellBar
          primaryTitle={'Corporate Portal'}
          logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />}
          profile={
            <Avatar>
              <img
                src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png"
                alt={'Avatar of the current user'}
              />
            </Avatar>
          }
          onProfileClick={(event) => {
            userMenuRef.current.opener = event.detail.targetRef;
            userMenuRef.current.open = true;
            setMenuOpen((prev) => !prev);
          }}
        />
        <UserMenu
          ref={userMenuRef}
          open={menuOpen}
          accounts={
            <UserMenuAccount
              avatarSrc="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png"
              titleText="Alaina Chevalier"
              subtitleText="aliana.chevalier@sap.com"
              description="Delivery Manager, SAP SE"
              selected
            />
          }
          onClose={() => {
            setMenuOpen(false);
          }}
          onItemClick={handleUserMenuItemClick}
        >
          <UserMenuItem icon={actionSettingsIcon} text="Settings" data-settings={'true'} />
        </UserMenu>
        <UserSettingsDialog
          {...args}
          open={open}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <UserSettingsItem
            icon="user-settings"
            text="User Account"
            tooltip="User Account"
            headerText="User Account"
            tabs={
              <>
                <UserSettingsView>
                  <Icon name="person-placeholder" />
                  <Title level="H3" size="H3" className="ua-name">
                    Alain Chevalier
                  </Title>
                  <div className="container">
                    <div className="ua-info-item">
                      <Label for="name">Name:</Label>
                      <Text>Alain Chevalier</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="email">Email:</Label>
                      <Text>alian.chevalier@sap.com</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="server">Server:</Label>
                      <Text>delivery-001.sap.com</Text>
                    </div>
                  </div>
                  <Label for="reset-all-button">Personalization</Label>
                  <br />
                  <Button>Reset All Personalization</Button>
                  <Panel fixed className="ua-panel">
                    <Text>
                      Reset your personalization settings for the launchpad (such as theme, language, user activities,
                      and home page content).
                    </Text>
                  </Panel>
                </UserSettingsView>
              </>
            }
          />
          <UserSettingsItem icon="palette" text="Appearance" tooltip="Appearance" headerText="Appearance">
            <UserSettingsAppearanceView
              text="Themes"
              additionalContent={
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                      width: '100%',
                    }}
                  >
                    <Text>Optimize for Touch Input</Text>
                    <Switch />
                  </div>

                  <Text
                    style={{
                      display: 'block',
                      color: 'var(--sapContent_LabelColor)',
                      fontSize: 'var(--sapFontSmallSize)',
                    }}
                  >
                    Increases the size and spacing of controls to allow you to interact with them more easily using your
                    fingertip. This is useful for hybrid devices that combine touch and mouse events.
                  </Text>
                </div>
              }
            >
              <UserSettingsAppearanceViewGroup headerText="SAP Horizon">
                <UserSettingsAppearanceViewItem itemKey="sap_horizon" text="SAP Morning Horizon" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_dark" text="SAP Evening Horizon" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_hcb" text="SAP Horizon High Contrast Black" />
                <UserSettingsAppearanceViewItem itemKey="sap_horizon_hcw" text="SAP Horizon High Contrast White" />
              </UserSettingsAppearanceViewGroup>

              <UserSettingsAppearanceViewGroup headerText="SAP Quartz">
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3" text="SAP Quartz Light" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_dark" text="SAP Quartz Dark" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_hcb" text="SAP Quartz High Contrast Black" />
                <UserSettingsAppearanceViewItem itemKey="sap_fiori_3_hcw" text="SAP Quartz High Contrast White" />
              </UserSettingsAppearanceViewGroup>
            </UserSettingsAppearanceView>
          </UserSettingsItem>
          <UserSettingsItem
            text="Language & Region"
            tooltip="Language & Region"
            headerText="Language & Region"
            tabs={
              <UserSettingsView>
                <div className="us-container">
                  <div className="lr-item">
                    <Label>Language and Region:</Label>
                    <ComboBox placeholder="Language">
                      <ComboBoxItem text="Browse Language" />
                      <ComboBoxItem text="English" />
                      <ComboBoxItem text="European Spanish" />
                      <ComboBoxItem text="French (France)" />
                      <ComboBoxItem text="Germany" />
                    </ComboBox>
                  </div>
                  <div className="lr-item">
                    <Label for="format">Date Format:</Label>
                    <Text>MMM d, y</Text>
                  </div>
                </div>
                <Panel fixed>
                  <Label>
                    The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check
                    it in the "About" dialog in the "ID of the Application Framework” field.
                  </Label>
                </Panel>
                <br />
                <div className="lt-time-format">
                  <Label for="timeFormat">Time Format:</Label>
                  <RadioButton name="timeFormat" text="12h" />
                  <RadioButton checked name="timeFormat" text="24h" />
                </div>
                <Panel fixed>
                  <Label>
                    After you save your settings, the browser will refresh for the new settings to take effect.
                  </Label>
                </Panel>
              </UserSettingsView>
            }
          />
          <UserSettingsItem
            icon="iphone"
            text="SAP Mobile Start Application"
            tooltip="SAP Mobile Start Application"
            headerText="SAP Mobile Start Application"
          >
            <UserSettingsView slot="pages">
              <Button>iOS</Button>
              <Button>Android</Button>
            </UserSettingsView>
            <UserSettingsView slot="pages" text="Inner Page" secondary>
              <Text>Enable access to your site from the SAP Mobile Start application.</Text>
              <Button>Install</Button>
              <Button>Register</Button>
              <Text>Scan the QR Code to install the mobile application</Text>
              <Icon name="qr-code" style={{ width: '20rem', height: '20rem' }} />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="bell" text="Notifications" tooltip="Notifications" headerText="Notifications">
            <UserSettingsNotificationsView
              additionalContent={
                <MessageStrip design="Information" hideCloseButton>
                  Some settings are managed by your organization. <Link>Learn More</Link>
                </MessageStrip>
              }
              headerItems={
                <>
                  <UserSettingsNotificationsViewItem itemKey="allow-notifications" text="Allow Notifications" checked />
                  <UserSettingsNotificationsViewItem
                    itemKey="allow-banner-alerts"
                    text="Allow Banner Alerts"
                    bylineText="Switch on Banner for Notifications"
                    checked
                  />
                </>
              }
            >
              <UserSettingsNotificationsViewGroup headerText="Sales">
                <UserSettingsNotificationsViewItem
                  itemKey="sales-order-updates"
                  text="Sales Order Updates"
                  checked
                  navigable
                />
                <UserSettingsNotificationsViewItem
                  itemKey="sales-order-approvals"
                  text="Sales Order Approvals"
                  navigable
                />
                <UserSettingsNotificationsViewItem
                  itemKey="sales-order-release"
                  text="Sales Order Release"
                  checked
                  navigable
                />
              </UserSettingsNotificationsViewGroup>
              <UserSettingsNotificationsViewGroup headerText="Purchasing">
                <UserSettingsNotificationsViewItem
                  itemKey="po-approval"
                  text="Purchase Order Approval"
                  checked
                  navigable
                />
                <UserSettingsNotificationsViewItem itemKey="po-rejection" text="Purchase Order Rejection" />
                <UserSettingsNotificationsViewItem
                  itemKey="po-overdue"
                  text="Purchase Order Overdue"
                  checked
                  navigable
                />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView
              id="allow-notifications"
              secondary
              additionalContent={<Text>Control how and where you receive notifications.</Text>}
            >
              <UserSettingsNotificationsViewGroup headerText="Notification Channels">
                <UserSettingsNotificationsViewItem
                  itemKey="an-panel"
                  text="Notifications Panel"
                  bylineText="Receive notifications through the central notifications panel."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="an-email"
                  text="Email"
                  bylineText="Receive notifications by email."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="an-push"
                  text="Push Notifications"
                  bylineText="Receive notifications instantly on your mobile device."
                />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView
              id="allow-banner-alerts"
              secondary
              additionalContent={<Text>Configure banner alert behavior for incoming notifications.</Text>}
            >
              <UserSettingsNotificationsViewGroup headerText="Banner Settings">
                <UserSettingsNotificationsViewItem
                  itemKey="ab-sound"
                  text="Play Sound"
                  bylineText="Play a sound when a banner alert appears."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="ab-duration"
                  text="Display Duration"
                  bylineText="Choose how long the banner stays on screen."
                  endContent={
                    <Select>
                      <Option selected>5 seconds</Option>
                      <Option>10 seconds</Option>
                      <Option>Until dismissed</Option>
                    </Select>
                  }
                />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView
              id="sales-order-updates"
              secondary
              additionalContent={<Text>Configure how you want to receive Sales Order Updates notifications.</Text>}
            >
              <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
                <UserSettingsNotificationsViewItem
                  itemKey="sou-panel"
                  text="Notifications Panel"
                  bylineText="Receive notifications through the central notifications panel."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="sou-banner"
                  text="Banner Alerts"
                  bylineText="Receive notifications instantly as a fly-in banner."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="sou-push"
                  text="Push Notifications"
                  bylineText="Receive notifications instantly on your mobile device."
                />
                <UserSettingsNotificationsViewItem
                  itemKey="sou-email"
                  text="Email"
                  bylineText="Receive notifications by email."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="sou-frequency"
                  text="Frequency"
                  bylineText="Choose the frequency of receiving a notification."
                  endContent={
                    <Select>
                      <Option selected>Immediate</Option>
                      <Option>Every 15 minutes</Option>
                      <Option>Hourly</Option>
                      <Option>Daily digest</Option>
                    </Select>
                  }
                />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView
              id="sales-order-approvals"
              secondary
              additionalContent={<Text>Configure how you want to receive Sales Order Approvals notifications.</Text>}
            >
              <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
                <UserSettingsNotificationsViewItem
                  itemKey="soa-panel"
                  text="Notifications Panel"
                  bylineText="Receive notifications through the central notifications panel."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="soa-banner"
                  text="Banner Alerts"
                  bylineText="Receive notifications instantly as a fly-in banner."
                />
                <UserSettingsNotificationsViewItem
                  itemKey="soa-push"
                  text="Push Notifications"
                  bylineText="Receive notifications instantly on your mobile device."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="soa-email"
                  text="Email"
                  bylineText="Receive notifications by email."
                  checked
                />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView
              id="sales-order-release"
              secondary
              additionalContent={<Text>Configure how you want to receive Sales Order Release notifications.</Text>}
            >
              <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
                <UserSettingsNotificationsViewItem
                  itemKey="sor-panel"
                  text="Notifications Panel"
                  bylineText="Receive notifications through the central notifications panel."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="sor-email"
                  text="Email"
                  bylineText="Receive notifications by email."
                />
                <UserSettingsNotificationsViewItem
                  itemKey="sor-frequency"
                  text="Frequency"
                  bylineText="Choose the frequency of receiving a notification."
                  endContent={
                    <Select>
                      <Option selected>Immediate</Option>
                      <Option>Every 15 minutes</Option>
                      <Option>Daily digest</Option>
                    </Select>
                  }
                />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView
              id="po-approval"
              secondary
              additionalContent={
                <Text>
                  Approval-specific channels. These settings apply only to Purchase Order Approval notifications.
                </Text>
              }
            >
              <UserSettingsNotificationsViewGroup headerText="Approver Preferences">
                <UserSettingsNotificationsViewItem
                  itemKey="po-approval-mobile"
                  text="Push to mobile"
                  bylineText="Approve or reject directly from your device."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="po-approval-summary"
                  text="Daily summary email"
                  bylineText="Receive one email per day with all pending approvals."
                />
                <UserSettingsNotificationsViewItem
                  itemKey="po-approval-delegation"
                  text="Delegation"
                  bylineText="Route approvals to a delegate when you are out of office."
                />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>

            <UserSettingsNotificationsView
              id="po-overdue"
              secondary
              additionalContent={<Text>Configure how you want to receive Purchase Order Overdue notifications.</Text>}
            >
              <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
                <UserSettingsNotificationsViewItem
                  itemKey="poo-panel"
                  text="Notifications Panel"
                  bylineText="Receive notifications through the central notifications panel."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="poo-banner"
                  text="Banner Alerts"
                  bylineText="Receive notifications instantly as a fly-in banner."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="poo-push"
                  text="Push Notifications"
                  bylineText="Receive notifications instantly on your mobile device."
                  checked
                />
                <UserSettingsNotificationsViewItem
                  itemKey="poo-email"
                  text="Email"
                  bylineText="Receive notifications by email."
                  checked
                />
              </UserSettingsNotificationsViewGroup>
            </UserSettingsNotificationsView>
          </UserSettingsItem>
          <UserSettingsItem
            icon="reset"
            slot="fixedItems"
            text="Reset Settings"
            tooltip="Reset Settings"
            headerText="Reset Settings"
          >
            <UserSettingsView text="Reset Personalization">
              <Button>Reset Personalization content</Button>
            </UserSettingsView>
            <UserSettingsView text="Reset All Settings">
              <Button>Reset All Settings content</Button>
            </UserSettingsView>
          </UserSettingsItem>
        </UserSettingsDialog>
      </>
    );
  },
};
