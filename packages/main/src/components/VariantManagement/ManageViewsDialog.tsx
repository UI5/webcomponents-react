import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import TableOverflowMode from '@ui5/webcomponents/dist/types/TableOverflowMode.js';
import { getScopedVarName } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import { isPhone as getIsPhone } from '@ui5/webcomponents-base/dist/Device.js';
import NoEntriesIllu from '@ui5/webcomponents-fiori/dist/illustrations/NoEntries.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { Children, isValidElement, useEffect, useId, useRef, useState } from 'react';
import type { MouseEventHandler, ReactElement } from 'react';
import { FlexBoxAlignItems } from '../../enums/FlexBoxAlignItems.js';
import { FlexBoxDirection } from '../../enums/FlexBoxDirection.js';
import {
  APPLY_AUTOMATICALLY,
  CANCEL,
  CREATED_BY,
  DEFAULT,
  NO_VIEWS_DEFINED_TITLE,
  NO_VIEWS_DEFINED_SUBTITLE,
  MANAGE_VIEWS,
  SAVE,
  SEARCH,
  SHARING,
  VIEW,
} from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../types/CommonProps.js';
import { Bar } from '../../webComponents/Bar/index.js';
import { Button } from '../../webComponents/Button/index.js';
import type { ButtonDomRef } from '../../webComponents/Button/index.js';
import type { DialogPropTypes } from '../../webComponents/Dialog/index.js';
import { Dialog } from '../../webComponents/Dialog/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { IllustratedMessage } from '../../webComponents/IllustratedMessage/index.js';
import type { InputDomRef } from '../../webComponents/Input/index.js';
import { Input } from '../../webComponents/Input/index.js';
import { Table } from '../../webComponents/Table/index.js';
import type { TableDomRef, TablePropTypes } from '../../webComponents/Table/index.js';
import { TableHeaderCell } from '../../webComponents/TableHeaderCell/index.js';
import { TableHeaderRow } from '../../webComponents/TableHeaderRow/index.js';
import type { TableRowDomRef } from '../../webComponents/TableRow/index.js';
import { FlexBox } from '../FlexBox/index.js';
import type { VariantItemPropTypes } from '../VariantItem/index.js';
import { classNames, styleData } from './ManageViewsDialog.module.css.js';
import { ManageViewsTableRows } from './ManageViewsTableRows.js';
import type { VariantManagementPropTypes } from './types.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import type { Ui5DomRef } from '@ui5/webcomponents-react-base';

type ManageViewsDialogChildType = boolean | undefined | null | ReactElement<VariantItemPropTypes>;

export interface ManageViewsDialogPropTypes {
  children: ManageViewsDialogChildType | ManageViewsDialogChildType[];
  onAfterClose: DialogPropTypes['onClose'];
  handleSaveManageViews: (
    e: MouseEventHandler<HTMLElement>,
    payload: {
      updatedRows: any;
      defaultView: string;
      deletedRows: any;
    },
  ) => void;
  showShare: boolean;
  showApplyAutomatically: boolean;
  showSetAsDefault: boolean;
  showCreatedBy: boolean;
  variantNames: string[];
  showOnlyFavorites?: VariantManagementPropTypes['showOnlyFavorites'];
  onManageViewsCancel?: VariantManagementPropTypes['onManageViewsCancel'];
}

const isPhone = getIsPhone();

export const ManageViewsDialog = (props: ManageViewsDialogPropTypes) => {
  const {
    children,
    onAfterClose,
    handleSaveManageViews,
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    showCreatedBy,
    variantNames,
    showOnlyFavorites,
    onManageViewsCancel,
  } = props;
  const uniqueId = useId();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const tableRef = useRef<TableDomRef>(null);
  const cancelBtnRef = useRef<ButtonDomRef>(null);
  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);
  const viewHeaderText = i18nBundle.getText(VIEW);
  const sharingHeaderText = i18nBundle.getText(SHARING);
  const defaultHeaderText = i18nBundle.getText(DEFAULT);
  const applyAutomaticallyHeaderText = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const createdByHeaderText = i18nBundle.getText(CREATED_BY);
  const manageViewsText = i18nBundle.getText(MANAGE_VIEWS);
  const searchText = i18nBundle.getText(SEARCH);

  const [changedVariantNames, setChangedVariantNames] = useState(new Map());
  const [invalidVariants, setInvalidVariants] = useState<Record<string, InputDomRef & { isInvalid?: boolean }>>({});
  const [hasApplyAutomaticallyText, setHasApplyAutomaticallyText] = useState(false);

  useStylesheet(styleData, 'ManageViewsDialog');

  const headerRow = (
    <TableHeaderRow sticky>
      {showOnlyFavorites && <TableHeaderCell key="favorite-variant-item" />}
      <TableHeaderCell importance={10} minWidth="14rem">
        {viewHeaderText}
      </TableHeaderCell>
      {showShare && (
        <TableHeaderCell minWidth="7.5rem" width="8rem">
          {sharingHeaderText}
        </TableHeaderCell>
      )}
      {showSetAsDefault && (
        <TableHeaderCell minWidth="8rem" width="8rem">
          {defaultHeaderText}
        </TableHeaderCell>
      )}
      {showApplyAutomatically && (
        <TableHeaderCell minWidth={hasApplyAutomaticallyText ? '12.5rem' : '5rem'}>
          {applyAutomaticallyHeaderText}
        </TableHeaderCell>
      )}
      {showCreatedBy && <TableHeaderCell minWidth="7.125rem">{createdByHeaderText}</TableHeaderCell>}
    </TableHeaderRow>
  );

  const [childrenProps, setChildrenProps] = useState<Partial<VariantItemPropTypes>[]>(
    Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return {};
      }
      return child.props;
    }),
  );

  useEffect(() => {
    let _hasApplyAutomaticallyText = false;
    setChildrenProps(
      Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return {};
        }
        if (child.props?.applyAutomaticallyText) {
          _hasApplyAutomaticallyText = true;
        }
        return child.props;
      }),
    );
    setHasApplyAutomaticallyText(_hasApplyAutomaticallyText);
  }, [children]);

  const [filteredProps, setFilteredProps] = useState(childrenProps);
  useEffect(() => {
    setFilteredProps(childrenProps);
  }, [childrenProps]);

  const [defaultView, setDefaultView] = useState<string>();

  const changedTableRows = useRef({});
  const handleTableRowChange = (e, payload) => {
    if (payload) {
      changedTableRows.current[payload.currentVariant] = {
        ...(changedTableRows.current[payload.currentVariant] ?? {}),
        ...payload,
      };
    }
  };
  const deletedTableRows = useRef(new Set([]));
  const handleDelete: TablePropTypes['onRowActionClick'] = (e) => {
    const { nextElementSibling, previousElementSibling, dataset } = e.detail.row;
    const variantChild = dataset.id;

    deletedTableRows.current.add(variantChild);
    let nextFocusElement: Ui5DomRef | null = null;
    if (nextElementSibling?.hasAttribute('ui5-table-row')) {
      nextFocusElement = nextElementSibling as TableRowDomRef;
    } else if (previousElementSibling?.hasAttribute('ui5-table-row')) {
      nextFocusElement = previousElementSibling as TableRowDomRef;
    } else {
      nextFocusElement = cancelBtnRef.current;
    }
    void nextFocusElement?.focus();

    setChildrenProps((prev) => prev.filter((item) => item.children !== variantChild));
  };

  const handleSave = (e) => {
    if (Object.keys(invalidVariants).length === 0) {
      handleSaveManageViews(e, {
        updatedRows: changedTableRows.current,
        defaultView,
        deletedRows: deletedTableRows.current,
      });
    } else {
      void Object.values(invalidVariants)[0].focus();
    }
  };

  const handleClose = (e) => {
    if (e.detail.escPressed) {
      handleCancel(e);
    } else {
      onAfterClose(e);
    }
  };

  const handleCancel = (e) => {
    if (typeof onManageViewsCancel === 'function') {
      onManageViewsCancel(
        enrichEventWithDetails(e, {
          invalidVariants,
        }),
      );
    }
    setInvalidVariants((prev) => {
      Object.values(prev).forEach((item) => {
        item.isInvalid = false;
      });
      return {};
    });
    onAfterClose(e);
  };

  const handleSearchInput = (e) => {
    const lowerCaseVal = e.target.value.toLowerCase();
    setFilteredProps(
      childrenProps.filter(
        (item) =>
          item.children?.toLowerCase()?.includes(lowerCaseVal) || item.author?.toLowerCase()?.includes(lowerCaseVal),
      ),
    );
  };

  return (
    <Dialog
      open
      stretch={isPhone}
      className={classNames.manageViewsDialog}
      data-component-name="VariantManagementManageViewsDialog"
      onClose={onAfterClose}
      onBeforeClose={handleClose}
      headerText={manageViewsText}
      initialFocus={`search-${uniqueId}`}
      style={
        {
          '--_ui5wcr_popup_default_header_height': `var(${getScopedVarName('--_ui5_popup_default_header_height')})`,
        } as CommonProps['style'] & { '--_ui5wcr_popup_default_header_height': string }
      }
      header={
        <FlexBox direction={FlexBoxDirection.Column} style={{ width: '100%' }} alignItems={FlexBoxAlignItems.Center}>
          <h2 className={classNames.headerText}>{manageViewsText}</h2>
          <Input
            id={`search-${uniqueId}`}
            className={classNames.search}
            placeholder={searchText}
            showClearIcon
            icon={<Icon name={searchIcon} className={classNames.inputIcon} />}
            onInput={handleSearchInput}
          />
        </FlexBox>
      }
      resizable
      footer={
        <Bar
          design={BarDesign.Footer}
          endContent={
            <>
              <Button design={ButtonDesign.Emphasized} onClick={handleSave}>
                {saveText}
              </Button>
              <Button design={ButtonDesign.Transparent} onClick={handleCancel} ref={cancelBtnRef}>
                {cancelText}
              </Button>
            </>
          }
        />
      }
    >
      <Table
        ref={tableRef}
        headerRow={headerRow}
        overflowMode={TableOverflowMode.Popin}
        rowActionCount={1}
        onRowActionClick={handleDelete}
        noData={
          <IllustratedMessage
            name={NoEntriesIllu}
            design={'Medium'}
            titleText={i18nBundle.getText(NO_VIEWS_DEFINED_TITLE)}
            subtitleText={i18nBundle.getText(NO_VIEWS_DEFINED_SUBTITLE)}
          />
        }
      >
        {filteredProps.map((itemProps) => {
          return (
            <ManageViewsTableRows
              {...itemProps}
              setInvalidVariants={setInvalidVariants}
              setChangedVariantNames={setChangedVariantNames}
              changedVariantNames={changedVariantNames}
              variantNames={variantNames}
              handleRowChange={handleTableRowChange}
              defaultView={defaultView}
              setDefaultView={setDefaultView}
              showShare={showShare}
              showApplyAutomatically={showApplyAutomatically}
              showSetAsDefault={showSetAsDefault}
              showCreatedBy={showCreatedBy}
              key={itemProps?.children}
              showOnlyFavorites={showOnlyFavorites}
            />
          );
        })}
      </Table>
    </Dialog>
  );
};
