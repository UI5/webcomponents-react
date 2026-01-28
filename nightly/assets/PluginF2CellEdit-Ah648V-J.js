import{j as e}from"./iframe-DjjZnZd-.js";import{useMDXComponents as o}from"./index-CHlimz1C.js";import{I as l,F as r}from"./CommandsAndQueries-WOCJDSHC.js";import{M as a,C as c}from"./blocks-BmkOoUGB.js";import"./Tag-CUGM_Neu.js";import"./index-CA-PQGxD.js";import"./copy-ZK04gjjU.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bifb3c2A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT-jhGw4.js";import"./index-BgVmtdEP.js";import"./index-BFZ4A4pM.js";import"./Link-DOn3kiwy.js";import"./index-DmOXd_eL.js";import"./index-nsJY5Xz1.js";import"./index-BB6l50am.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B12gaSwN.js";import"./addCustomCSSWithScoping-vHMhzzpD.js";import"./index-BcQoqGu9.js";import"./information-DMdo7dcL.js";import"./sys-enter-2-CptPzh8p.js";import"./alert-CrXk_arY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vqAtxyOw.js";import"./delete-Bebt7tCf.js";import"./settings-uRQQ-qnc.js";import"./NoData-DF1OdlTc.js";import"./IllustratedMessage-D_G1HSBE.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BmB2bMcc.js";import"./index-CM7JCb8T.js";import"./index-DvsJxwXk.js";import"./slim-arrow-down-CxXp2snF.js";import"./Input-B-umR_e1.js";import"./ResponsivePopoverCommon.css-C4iintSn.js";import"./ValueStateMessage.css-Cunvc68_.js";import"./Suggestions.css-Ci8_31Vi.js";import"./ListBoxItemGroupTemplate-GVKfLp8U.js";import"./ComboBoxItemGroup-CQl8BqG8.js";import"./ListItemBaseTemplate-6SXMeQ_0.js";import"./Token-CKE3PZz5.js";import"./ScrollEnablement-C0m6jxeW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRQF6RVv.js";import"./ToggleButton-B90-JE9y.js";import"./SuggestionItem-DW58jthD.js";import"./index-DmUR5SWR.js";import"./Option-DqRKlcDR.js";import"./index-CH77s4oW.js";import"./SegmentedButton-ChMyKVb2.js";import"./index-BkRDr5FS.js";import"./Select-5vzl-izW.js";import"./InvisibleMessage-8UwgTYD7.js";import"./slim-arrow-down-DPNABw5m.js";import"./index-Cl5F4XUs.js";import"./index-CbGzdtcY.js";import"./index-BRl60Xfr.js";import"./index-Beu0nm3Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMkv1rya.js";import"./group-2-CoGriti5.js";import"./sort-descending-DD-b124P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8m0ILQH8.js";import"./utils-BXT1KgTI.js";import"./index-Dra2atL0.js";import"./index-BZLP_aSQ.js";import"./index-ntFKxsdS.js";import"./navigation-down-arrow-augm2Glo.js";import"./navigation-right-arrow-CJ9-VHOj.js";import"./navigation-right-arrow-CXx-Foq7.js";import"./useCurrentTheme-BtKqULF1.js";import"./index-C9h2pwj1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sDVY4Y6h.js";import"./paper-plane-BKN_YByQ.js";import"./index-B7Qlr8h8.js";import"./less-wFiAvfcX.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
