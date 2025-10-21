import{j as e}from"./iframe-pfqRYewB.js";import{useMDXComponents as o}from"./index-DxYcUkXM.js";import{I as l,F as r}from"./CommandsAndQueries-CBK4GytM.js";import{M as a,C as c}from"./blocks-CN6sML6r.js";import"./Tag-DOr7yVDv.js";import"./index-TMKVCirT.js";import"./copy-0Cu3Y4If.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DVQ3i1IE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";import"./index-DQUabOTm.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCldNniw.js";import"./delete-HmTQ_vFj.js";import"./settings-mukY2-9u.js";import"./NoData-DDeHK4Wf.js";import"./IllustratedMessage-KYMTpTyO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-ChEYzt-h.js";import"./index-CqmZ5mGT.js";import"./index-pwjz_r8O.js";import"./slim-arrow-down-C7FQVzqZ.js";import"./Input-DFBmllhy.js";import"./ResponsivePopoverCommon.css-DZHwRQHx.js";import"./ValueStateMessage.css-CidmTEJw.js";import"./Suggestions.css-DAu3JF_J.js";import"./ListBoxItemGroupTemplate-6BxZnxDU.js";import"./ComboBoxItemGroup-BsUPI3Ww.js";import"./ListItemBaseTemplate-HUrGMPNt.js";import"./Token-B8pfMnds.js";import"./ScrollEnablement-D1lbDyHD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cohus5KX.js";import"./ToggleButton-ZQLSnveS.js";import"./SuggestionItem-Dmy_a1VU.js";import"./index-CwRuKaLk.js";import"./Option-CFDOWY6L.js";import"./index-DCK0KPlT.js";import"./SegmentedButton-B6i3WymD.js";import"./index-DevUfoIh.js";import"./Select-m-b0pWIF.js";import"./InvisibleMessage-DwveyP79.js";import"./slim-arrow-down-bCF3a_Rt.js";import"./index-Dgi4QmO9.js";import"./index-BQzry0n4.js";import"./index-DPBow1JV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-15Rm-0v2.js";import"./group-2-B1-jLB8-.js";import"./sort-descending-uWzFdjhI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWkHdUbT.js";import"./utils-DDcIz5H6.js";import"./index-D2MBzVUF.js";import"./index-8gw3xkKH.js";import"./index-DwWEOzU8.js";import"./navigation-down-arrow-C-s-4mEI.js";import"./navigation-right-arrow-C-NoESB4.js";import"./navigation-right-arrow-B9Xr6jRR.js";import"./useCurrentTheme-VDt91aLT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Cp87tOSX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTunfDpQ.js";import"./paper-plane-s_bnmj1H.js";import"./index-BUgZbWmJ.js";import"./less-Db2oPJEr.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
