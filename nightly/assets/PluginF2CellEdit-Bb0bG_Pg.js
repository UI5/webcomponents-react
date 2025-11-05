import{j as e}from"./iframe-DcVE_SyB.js";import{useMDXComponents as o}from"./index-ABq4qJq0.js";import{I as l,F as r}from"./CommandsAndQueries-DAZF1NdY.js";import{M as a,C as c}from"./blocks-dRinqquH.js";import"./Tag-n6X7AHU2.js";import"./index-DZbYLiGZ.js";import"./copy-qTVa6Rxc.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Co8rL4ED.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8wszqvC.js";import"./index-C2IoMvXB.js";import"./index-DAALXQvw.js";import"./Link-LjC7fwET.js";import"./index-DF4i9ljf.js";import"./index-DOSi9OrP.js";import"./index-_uRePxm1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWDpOxWr.js";import"./addCustomCSSWithScoping-CuYK4DUc.js";import"./index-DbL7CbMN.js";import"./information-Cg8MaXEH.js";import"./sys-enter-2-d1HQr0rP.js";import"./alert-CDirY_rF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BS6OM1vm.js";import"./delete-CEfUEJT4.js";import"./settings-Csdc-hH6.js";import"./NoData-blQGosmG.js";import"./IllustratedMessage-BPqXVV7x.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-SHojW0S1.js";import"./index-BsLSp1N8.js";import"./index-C1vx3Aim.js";import"./slim-arrow-down-C_wVi7l8.js";import"./Input-C5nBZh3K.js";import"./ResponsivePopoverCommon.css-DXjeYxpj.js";import"./ValueStateMessage.css-Cej4xjjY.js";import"./Suggestions.css-DxgDwmR8.js";import"./ListBoxItemGroupTemplate-7H6xFp3F.js";import"./ComboBoxItemGroup-huP5bgUR.js";import"./ListItemBaseTemplate-Dwv9uts5.js";import"./Token-_oKw71Y0.js";import"./ScrollEnablement-CIsN21aQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-NySdr-n5.js";import"./ToggleButton-RUCIrKrh.js";import"./SuggestionItem-CmngfsIg.js";import"./index-C3fVCLar.js";import"./Option-ByjA3kO8.js";import"./index-BsQ6HnSy.js";import"./SegmentedButton-D8dJ17L9.js";import"./index-DIP19kXX.js";import"./Select-CE7FAMxu.js";import"./InvisibleMessage-LUr2HJbj.js";import"./slim-arrow-down-CnwjqAnQ.js";import"./index-CvVxnQ6j.js";import"./index-CXjND3aT.js";import"./index-EYM3a7UD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-o2p0R9uo.js";import"./group-2-Byaog51a.js";import"./sort-descending-Bzv2nAVp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DeHYvak-.js";import"./utils-CCfE5SJ7.js";import"./index-C2IP9_p7.js";import"./index-DjjA3sYt.js";import"./index-C2XBgPIA.js";import"./navigation-down-arrow-BEehImn2.js";import"./navigation-right-arrow-C1A0KtOV.js";import"./navigation-right-arrow-C8E2_mjg.js";import"./useCurrentTheme-B3cs0LME.js";import"./IndicationColor-DVw-fSM_.js";import"./index-YzO-o16q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BX1EXUwa.js";import"./paper-plane-CuYG0k3S.js";import"./index-Bwa6ZTZc.js";import"./less-BNEp7IO8.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(l,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Since: v2.14.0"})}),`
`,e.jsx(n.p,{children:"A plugin hook that enables F2-based cell editing for interactive elements inside a cell."}),`
`,e.jsxs(n.p,{children:["To ",e.jsx(n.strong,{children:"ensure the hook works correctly"}),", make sure that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each column containing interactive elements has the ",e.jsx(n.code,{children:"interactiveElementName"})," property set. ",e.jsx(n.strong,{children:"Note:"})," This property is also used to describe the cell's content for screen readers."]}),`
`,e.jsxs(n.li,{children:["The callback Ref returned by ",e.jsx(n.code,{children:"useF2CellEdit.useCallbackRef"})," is attached to every interactive element within the cell."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hook manages focus, keyboard navigation, and ",e.jsx(n.code,{children:"tabindex"})," for cells with interactive content:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"F2"})," moves focus between the cell container and its first interactive element."]}),`
`,e.jsxs(n.li,{children:["Updates the cell's ",e.jsx(n.code,{children:"aria-label"})," with the interactive element's name for accessibility."]}),`
`,e.jsx(n.li,{children:"Prevents standard navigation keys from interfering when editing a cell."}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:s,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type {
  AnalyticalTableCellInstance,
  AnalyticalTableColumnDefinition,
  InputDomRef,
  AnalyticalTablePropTypes,
} from '@ui5/webcomponents-react';
import { AnalyticalTableHooks, AnalyticalTable, Button, CheckBox, Input, Switch, Tag } from '@ui5/webcomponents-react';
import paperPlaneIcon from '@ui5/webcomponents-icons/dist/paper-plane';

const { useF2CellEdit } = AnalyticalTableHooks;

const columns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
  },
  {
    Header: 'Input & Button',
    id: 'input_btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return (
        <>
          <Input ref={callbackRef} />
          <Button ref={callbackRef} icon={paperPlaneIcon} tooltip="Submit" accessibleName="Submit" />
        </>
      );
    },
    interactiveElementName: 'Input and Button',
  },
  {
    Header: 'Text',
    accessor: 'name',
  },
  {
    Header: 'Button',
    id: 'btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return <Button ref={callbackRef}>Button</Button>;
    },
    interactiveElementName: () => 'Button',
  },
  {
    Header: 'Non-interactive custom content',
    accessor: 'friend.name',
    Cell: (props: AnalyticalTableCellInstance) => {
      return <Tag>{props.value}</Tag>;
    },
  },
  {
    Header: 'Switch or CheckBox',
    id: 'switch_checkbox',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      if (props.row.index % 2) {
        return <CheckBox ref={callbackRef} accessibleName="Dummy CheckBox" />;
      }
      return <Switch ref={callbackRef} accessibleName="Dummy Switch" />;
    },
    interactiveElementName: (props: AnalyticalTableCellInstance) => {
      if (props.row.index % 2) {
        return 'CheckBox';
      }
      return 'Switch';
    },
  },
];

const tableHooks: AnalyticalTablePropTypes['tableHooks'] = [useF2CellEdit];

function TableWithInputs({ data }) {
  return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} visibleRows={5} />;
}
`})}),`
`,e.jsx(r,{})]})}function Me(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Me as default};
