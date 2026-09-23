import type { UserSettingsDialogPropTypes } from '@ui5/webcomponents-react';
import { UserSettingsDialog } from '@ui5/webcomponents-react';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { AppearanceItem } from './AppearanceItem.tsx';
import { LanguageRegionItem } from './LanguageRegionItem.tsx';
import { MobileItem } from './MobileItem.tsx';
import { NotificationsItem } from './NotificationsItem.tsx';
import { ResetItem } from './ResetItem.tsx';
import { UserAccountItem } from './UserAccountItem.tsx';

interface UserSettingsDialogProps extends Pick<UserSettingsDialogPropTypes, 'open'> {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function NLUserSettingsDialog({ open, setOpen }: UserSettingsDialogProps) {
  const [languageLoading, setLanguageLoading] = useState(false);
  const closeDialog = () => {
    setOpen(false);
  };

  const handleSelectionChange: UserSettingsDialogPropTypes['onSelectionChange'] = (e) => {
    if (e.detail.item?.text === 'Language & Region') {
      setLanguageLoading(true);
      setTimeout(() => {
        setLanguageLoading(false);
      }, 1000);
    }
  };

  return (
    <UserSettingsDialog
      open={open}
      headerText="Settings"
      showSearchField
      onClose={closeDialog}
      onSelectionChange={handleSelectionChange}
      fixedItems={<ResetItem setUserSettingsDialogOpen={setOpen} />}
    >
      <UserAccountItem />
      <AppearanceItem />
      <LanguageRegionItem loading={languageLoading} />
      <MobileItem />
      <NotificationsItem />
    </UserSettingsDialog>
  );
}

NLUserSettingsDialog.displayName = 'NLUserSettingsDialog';
