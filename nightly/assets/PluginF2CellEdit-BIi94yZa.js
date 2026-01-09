import{j as e}from"./iframe-Cofg3NYG.js";import{useMDXComponents as o}from"./index-IvWpiXeJ.js";import{I as l,F as r}from"./CommandsAndQueries-84NNvrTK.js";import{M as a,C as c}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import"./copy-CvrT2nje.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CkrLKY20.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./index-DsO0qxxT.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DMD_db3q.js";import"./delete-TL4LRMCi.js";import"./settings-C1P4No8J.js";import"./NoData-CgchvHoE.js";import"./IllustratedMessage-CMCdUK9z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-a2MoTWEq.js";import"./index-BonMBjS3.js";import"./index--6KC0JCG.js";import"./slim-arrow-down-Df9CY41D.js";import"./Input-B-vnnKWa.js";import"./ResponsivePopoverCommon.css-9aKfGdr3.js";import"./ValueStateMessage.css-BoHhoqcx.js";import"./Suggestions.css-D5uqg1qj.js";import"./ListBoxItemGroupTemplate-CJbarH5R.js";import"./ComboBoxItemGroup-CgHhWkM2.js";import"./ListItemBaseTemplate-C6tlxy6i.js";import"./Token-D4V_lrT9.js";import"./ScrollEnablement-Bd2IYKOt.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMSXl_i-.js";import"./ToggleButton-DGX7LzLH.js";import"./SuggestionItem-BxKCWjfv.js";import"./index-ByINFavX.js";import"./Option-BcJSYqub.js";import"./index-97091ejm.js";import"./SegmentedButton-B2GitR0l.js";import"./index-B-yS9GRZ.js";import"./Select-Dl-KXknk.js";import"./InvisibleMessage-DjTJM9Zt.js";import"./slim-arrow-down-B4mJ9D12.js";import"./index-DeuDVa4c.js";import"./index-CqFtG3xH.js";import"./index-B8BWpeh3.js";import"./index-eAFdqwk5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CnPweenN.js";import"./group-2-ByJcrAU6.js";import"./sort-descending-CEF1xmWI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CW-WMzJS.js";import"./utils-wxGQZEOP.js";import"./index-ChbRKq5D.js";import"./index-nmwZf_ft.js";import"./index-NtXsw5yB.js";import"./navigation-down-arrow-z6IAtkEY.js";import"./navigation-right-arrow-jTHlmXwB.js";import"./navigation-right-arrow-E61PVxSn.js";import"./useCurrentTheme-Bn9zud42.js";import"./index-BdF0tCbe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBrJUf6F.js";import"./paper-plane-y9qmaI4M.js";import"./index-DmRfqt3l.js";import"./less-D1DlvNUe.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
