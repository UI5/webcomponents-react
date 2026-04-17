import { SearchIcon } from '@storybook/icons';
import * as React from 'react';
import { IconButton } from 'storybook/internal/components';
import { addons, types } from 'storybook/manager-api';

const ADDON_ID = 'content-search';
const TOOL_ID = `${ADDON_ID}/toolbar`;

function SearchButton() {
  const openSearch = React.useCallback(() => {
    const dialog = document.getElementById('pagefind-search-container');
    if (dialog && dialog instanceof HTMLDialogElement && !dialog.open) {
      dialog.showModal();
      setTimeout(() => dialog.querySelector<HTMLInputElement>('.pagefind-ui__search-input')?.focus(), 50);
    }
  }, []);

  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'f') {
        e.preventDefault();
        openSearch();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [openSearch]);

  return (
    <IconButton key={TOOL_ID} title="Search docs (⌘⇧F)" style={{ order: -2 }} onClick={openSearch}>
      <SearchIcon />
      Search Docs (Beta)
    </IconButton>
  );
}

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOLEXTRA,
    title: 'Search documentation content',
    render: () => <SearchButton />,
  });
});
