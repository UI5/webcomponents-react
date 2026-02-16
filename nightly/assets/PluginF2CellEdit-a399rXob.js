import{j as e}from"./iframe-e2ulr1yw.js";import{useMDXComponents as o}from"./index-PtYZPZtM.js";import{I as l,F as r}from"./CommandsAndQueries-Do207XX8.js";import{M as a,C as c}from"./blocks-Cdk7qnv2.js";import"./Tag-CbLqF2IE.js";import"./index-Eon1qDJA.js";import"./copy-CcaF1jLX.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B5IJLmV9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./index-BSw3xQau.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-3jDDYMp1.js";import"./delete-gpEUb-9D.js";import"./settings-6a9Tcwi4.js";import"./NoData-Bc7e_DmL.js";import"./IllustratedMessage-wF_b0eFg.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BnS8M7QN.js";import"./index-COvdbf1_.js";import"./index-C4o8tm0a.js";import"./slim-arrow-down-87FbM80e.js";import"./Input-BV-MxHCg.js";import"./ResponsivePopoverCommon.css-Bd-J_F0o.js";import"./ValueStateMessage.css-DtD4vioP.js";import"./Suggestions.css-CgOY0hpB.js";import"./ListBoxItemGroupTemplate-DF9OoaBX.js";import"./ComboBoxItemGroup-DyFNSY0u.js";import"./ListItemBaseTemplate-DnwALruD.js";import"./Token-Mt_jrKze.js";import"./ScrollEnablement-DRdFoZEe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Zbea8WPI.js";import"./ToggleButton-Cdb7GkdR.js";import"./SuggestionItem-D97oFBk5.js";import"./index-DHKaLTeQ.js";import"./Option-iPEJaQYF.js";import"./index-BN3IxYuD.js";import"./SegmentedButton-Bp3L8kza.js";import"./index-3C9SeEbV.js";import"./Select-C17UaO3k.js";import"./InvisibleMessage-C7K7N7yp.js";import"./slim-arrow-down-BTy2_7_G.js";import"./index-C4YzeeGG.js";import"./index-C-0YmZNW.js";import"./index-DRgjkRpO.js";import"./index-QUiaryyk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-dc6_3EFU.js";import"./group-2-Bdgfi4eM.js";import"./sort-descending-C3r-uppm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UzExfabf.js";import"./utils-93MrREGq.js";import"./index-DX7sH2kB.js";import"./index-BEEBpZeh.js";import"./index-BYqC9MtK.js";import"./navigation-down-arrow-CmGlfloc.js";import"./navigation-right-arrow-Dwj_O4Hl.js";import"./navigation-right-arrow-BzujGep6.js";import"./useCurrentTheme-Bu36broM.js";import"./index-BplRAEow.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cmkb72EN.js";import"./paper-plane-DnlmvP9j.js";import"./index-Bz4A25sA.js";import"./less-WXggIQVd.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
