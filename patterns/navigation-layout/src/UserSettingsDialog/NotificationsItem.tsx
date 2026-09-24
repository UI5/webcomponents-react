import bellIcon from '@ui5/webcomponents-icons/dist/bell.js';
import {
  Link,
  MessageStrip,
  Option,
  Select,
  Text,
  UserSettingsItem,
  UserSettingsNotificationsView,
  UserSettingsNotificationsViewGroup,
  UserSettingsNotificationsViewItem,
} from '@ui5/webcomponents-react';

export function NotificationsItem() {
  return (
    <UserSettingsItem icon={bellIcon} text="Notifications" tooltip="Notifications" headerText="Notifications">
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
          <UserSettingsNotificationsViewItem itemKey="sales-order-approvals" text="Sales Order Approvals" navigable />
          <UserSettingsNotificationsViewItem
            itemKey="sales-order-release"
            text="Sales Order Release"
            checked
            navigable
          />
        </UserSettingsNotificationsViewGroup>
        <UserSettingsNotificationsViewGroup headerText="Purchasing">
          <UserSettingsNotificationsViewItem itemKey="po-approval" text="Purchase Order Approval" checked navigable />
          <UserSettingsNotificationsViewItem itemKey="po-rejection" text="Purchase Order Rejection" />
          <UserSettingsNotificationsViewItem itemKey="po-overdue" text="Purchase Order Overdue" checked navigable />
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
          <Text>Approval-specific channels. These settings apply only to Purchase Order Approval notifications.</Text>
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
        id="po-rejection"
        secondary
        additionalContent={<Text>Configure how you want to receive Purchase Order Rejection notifications.</Text>}
      >
        <UserSettingsNotificationsViewGroup headerText="Notification Preferences">
          <UserSettingsNotificationsViewItem
            itemKey="por-panel"
            text="Notifications Panel"
            bylineText="Receive notifications through the central notifications panel."
          />
          <UserSettingsNotificationsViewItem
            itemKey="por-email"
            text="Email"
            bylineText="Receive notifications by email."
            checked
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
  );
}

NotificationsItem.displayName = 'NotificationsItem';
