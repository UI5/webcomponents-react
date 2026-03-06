import{j as e}from"./iframe-Ded5Mxh2.js";import{useMDXComponents as o}from"./index-CBfl9quq.js";import{I as r}from"./CommandsAndQueries-Ddo3tZ3K.js";import{M as l,C as a}from"./blocks-wt3pPbD-.js";import"./Tag-CDOQSrMR.js";import"./index-DFifKHPS.js";import"./copy-IKAWbId8.js";import{F as c}from"./Footer-1OmcbI64.js";import"./PageNotFound-CXW0ieku.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BzxY5k0R.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DSsFOfLn.js";import"./index-jHFtLiCf.js";import"./index-BmNOE6G0.js";import"./index-BfPsTBbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DHMdvhLY.js";import"./addCustomCSSWithScoping-CBqV9zN1.js";import"./index-CU0yEW5I.js";import"./index-BiAFWhEK.js";import"./index-Cmea41Uz.js";import"./information-YHPlo4lO.js";import"./sys-enter-2-C0FqqFCv.js";import"./alert-K2R8mcWk.js";import"./index-DNd61viN.js";import"./Illustrations-Btxulb8H.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BecE1XJn.js";import"./delete-D0fZzTI7.js";import"./settings-C7B_j-Y8.js";import"./NoData-BrFbWOpJ.js";import"./NoFilterResults-DtaXtqI5.js";import"./index-b0uBMMNt.js";import"./IllustratedMessage-CuBg-vsE.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DH-ja5wq.js";import"./Input-CI6efGcd.js";import"./ResponsivePopoverCommon.css-_OfTkZKW.js";import"./ValueStateMessage.css-DG6SMCv6.js";import"./Suggestions.css-C-q057v5.js";import"./ListBoxItemGroupTemplate-Cfx7Lf4g.js";import"./ComboBoxItemGroup-BIHv5yMY.js";import"./ListItemBaseTemplate-DbmRhLb7.js";import"./Token-MKsNkpqX.js";import"./ScrollEnablement-DENm7iV6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Buphkil0.js";import"./ToggleButton-D3QrfdJw.js";import"./multiselect-all-DLY9p4ls.js";import"./SuggestionItem-Aa3qI1bT.js";import"./index-DiBTKK6u.js";import"./Option-DQV_eQib.js";import"./index-DwPUuk8S.js";import"./SegmentedButton-DuL9bfd4.js";import"./index-BvcEfRdb.js";import"./Select-Dv1RKQLj.js";import"./InvisibleMessage-B1Swz3mZ.js";import"./index-DyOFSSg-.js";import"./index-A2a3Zx38.js";import"./index-DfqEQVv9.js";import"./index-kph-pUw5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJyVYiUy.js";import"./group-2-BCj0Bybz.js";import"./sort-descending-CpxrLLEz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-9DAmB-YI.js";import"./utils-C_Aw_RzH.js";import"./index-Bh6yOWs7.js";import"./index-CkB06Bxg.js";import"./index-4J07KdAi.js";import"./navigation-down-arrow-BnonnUuZ.js";import"./navigation-right-arrow-C1kC_5OC.js";import"./navigation-right-arrow-aXOPQJFG.js";import"./useCurrentTheme-rsX3oT80.js";import"./index-CZHJXIH7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-UbDyFkqU.js";import"./paper-plane-BqlJm9UU.js";import"./index-BwAv9f_2.js";import"./less-Bo9zRhMB.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
