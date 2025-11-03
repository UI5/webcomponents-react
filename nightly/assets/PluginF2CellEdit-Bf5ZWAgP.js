import{j as e}from"./iframe-DLeMGAs6.js";import{useMDXComponents as o}from"./index-BeTNnGed.js";import{I as l,F as r}from"./CommandsAndQueries-Do6MeMuW.js";import{M as a,C as c}from"./blocks-CVdnQ-m5.js";import"./Tag-fuIv2r1-.js";import"./index-CAID728Y.js";import"./copy-ClThfN15.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-zkAPVIrI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChbJtMA8.js";import"./index-D_-Zm7gh.js";import"./index-Xs0i3Hhr.js";import"./Link-D_uo4UVb.js";import"./index-CetP1T2M.js";import"./index-DQmJ5ecl.js";import"./index-DGDr800L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C13TjiIP.js";import"./addCustomCSSWithScoping-Cj5ZxzDT.js";import"./index-BelAbkZz.js";import"./information-BttnUTpt.js";import"./sys-enter-2-DQSYULXQ.js";import"./alert-Braz2hWt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BZLT9ilq.js";import"./delete-DC-_Y22L.js";import"./settings-C8YgnEjD.js";import"./NoData-DIe6lTz9.js";import"./IllustratedMessage-C0T15_Cz.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DSla0Ypj.js";import"./index-DKaTYi7Y.js";import"./index-dlJAYtv8.js";import"./slim-arrow-down-CXh7VlFz.js";import"./Input-BvEbFIGf.js";import"./ResponsivePopoverCommon.css-Cwu8TVSn.js";import"./ValueStateMessage.css-CYGxQFIT.js";import"./Suggestions.css-CnL5XvB_.js";import"./ListBoxItemGroupTemplate-TBm3jGfQ.js";import"./ComboBoxItemGroup-v9blSsnm.js";import"./ListItemBaseTemplate-B0VtVoTY.js";import"./Token-DXa6gniM.js";import"./ScrollEnablement-LGuvxbbP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CVpJPqGn.js";import"./ToggleButton-DdR_U0J3.js";import"./SuggestionItem-Bytxfkg7.js";import"./index-DWJIi1Cu.js";import"./Option-BABDhVgD.js";import"./index-BOHoyyXI.js";import"./SegmentedButton-BPn908Zb.js";import"./index-DLP1sSSh.js";import"./Select-D3bJlSEY.js";import"./InvisibleMessage-CjnlHtO4.js";import"./slim-arrow-down-DMmSjQ_W.js";import"./index-DRwQgmSC.js";import"./index-C6b9i92g.js";import"./index-CsHvU1n4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-P5Bwzq42.js";import"./group-2-CC5jzuvS.js";import"./sort-descending-BzCp0kGA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BDs2ZQJs.js";import"./utils-DPe1wMqz.js";import"./index-Bg78CFbQ.js";import"./index-Bf4uxavh.js";import"./index-BiS7rtJ9.js";import"./navigation-down-arrow-B6cj3Ilp.js";import"./navigation-right-arrow-GrjOYVc0.js";import"./navigation-right-arrow-DkYagu5m.js";import"./useCurrentTheme-Xs1NZ5mm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-7Psn0Vsh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Doon_hgW.js";import"./paper-plane-BrBAfH5S.js";import"./index-Bred2sqK.js";import"./less-B08nub1h.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
