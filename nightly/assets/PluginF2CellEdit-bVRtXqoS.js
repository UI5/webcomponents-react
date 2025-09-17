import{j as e}from"./iframe-DUkvwiCH.js";import{useMDXComponents as o}from"./index-CmOOmEq_.js";import{I as r,F as l}from"./CommandsAndQueries-PDY51fAI.js";import{M as a,C as c}from"./blocks-BEyioZmC.js";import"./Tag-DEWD3xtk.js";import"./index-mzCfuMGx.js";import"./copy-B0dtT-T1.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-7JKM5En5.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B92FdrSK.js";import"./index-XPJfZ8Rp.js";import"./index-BtWSXXzR.js";import"./Link-DPkQciON.js";import"./addCustomCSSWithScoping-CPXzOUpZ.js";import"./index-_2a7rjiJ.js";import"./index-qYUxj7eK.js";import"./index-B-fuFZPz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOPJEYH-.js";import"./index-DhtGVRhj.js";import"./information-DXx8yVKj.js";import"./sys-enter-2-DohaKpz7.js";import"./alert-DS7-1sye.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gqR0P-Wx.js";import"./delete-BdCzKGxL.js";import"./settings-2PbqmORg.js";import"./NoData-Ca0oG_JL.js";import"./IllustratedMessage-DqN1c1Zq.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B0xFtsqI.js";import"./index-CXzHH1Z3.js";import"./slim-arrow-down-xGo2jOIY.js";import"./Input-DQ5p6nKI.js";import"./ResponsivePopoverCommon.css-BoQVIvNi.js";import"./ValueStateMessage.css-Bsq6Il4y.js";import"./Suggestions.css-i3s5CWMS.js";import"./ListBoxItemGroupTemplate-DP2vsF3T.js";import"./ComboBoxItemGroup-Bt2s2r-m.js";import"./ListItemBaseTemplate-Nc_kgJrp.js";import"./Token-B0XPP79K.js";import"./ScrollEnablement-B_COiRMd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYtQ6rBD.js";import"./ToggleButton-CFoIabfN.js";import"./SuggestionItem-CKzR1LPx.js";import"./index-CdyYI52I.js";import"./Option-CDGlp-cu.js";import"./index-DoRSQu9o.js";import"./SegmentedButton-D2lnd9RP.js";import"./index-MgIz5-1O.js";import"./Select-C5SGLZaQ.js";import"./InvisibleMessage-CxWJNd19.js";import"./slim-arrow-down-CYI811l3.js";import"./useIsRTL-CJjpUbvq.js";import"./index-CfgMfPc4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DxjtuVZF.js";import"./group-2-IpJOfuC0.js";import"./sort-descending-ci6Trp1X.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmG0lqi8.js";import"./utils-BhHqIEZ6.js";import"./index-DOXiwBZC.js";import"./index-B5JDV88H.js";import"./index-veuLTP7t.js";import"./navigation-down-arrow-CI6f4P1V.js";import"./navigation-right-arrow-ChwAEYXe.js";import"./navigation-right-arrow-SID4lvJa.js";import"./useCurrentTheme-k-t9Vjzd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-RYQDkhJm.js";import"./debounce-D7W5PopO.js";import"./paper-plane-CB6ae7Yb.js";import"./index-Csbl6rAf.js";import"./less-GaIuzsTP.js";import"./index-C1SgQ07A.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(l,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
