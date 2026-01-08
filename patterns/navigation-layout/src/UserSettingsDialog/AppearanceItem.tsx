import paletteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import {
  Switch,
  UserSettingsAppearanceView,
  UserSettingsAppearanceViewGroup,
  UserSettingsAppearanceViewItem,
  UserSettingsItem,
  Text,
} from '@ui5/webcomponents-react';

export function AppearanceItem() {
  return (
    <UserSettingsItem icon={paletteIcon} text="Appearance" tooltip="Appearance" headerText="Appearance">
      <UserSettingsAppearanceView
        text="Themes"
        onSelectionChange={(e) => {
          setTheme(e.detail.item.itemKey);
        }}
        additionalContent={
          <div>
            <div className="appearance-header ">
              <Text>Optimize for Touch Input</Text>
              <Switch />
            </div>

            <Text className="appearance-detail">
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
  );
}

AppearanceItem.displayName = 'AppearanceItem';
