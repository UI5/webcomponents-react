import{j as e}from"./iframe-DYduXZhN.js";import{useMDXComponents as o}from"./index-Ci2-DdjO.js";import{I as l,F as r}from"./CommandsAndQueries-B9zetcQ0.js";import{M as a,C as c}from"./blocks-D9jMBEgy.js";import"./Tag-DIRdIcZz.js";import"./index-BOwVehE_.js";import"./copy-CkIF2sdc.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-74PDq_gz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz134k4C.js";import"./index-9BFlmr8a.js";import"./index-C__H6VdM.js";import"./Link-BLFGRSbE.js";import"./index-BEkPqhUo.js";import"./index-BT55sXhr.js";import"./index-CrQhdGHw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tYCFSQM4.js";import"./addCustomCSSWithScoping-BvPW-C09.js";import"./index-DKd7eJ-2.js";import"./information-B4rZhRQI.js";import"./sys-enter-2-DdBtSqFS.js";import"./alert-Cbu3hZ-F.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-YqJDFM.js";import"./delete-BhUVbshM.js";import"./settings-DiEqNda9.js";import"./NoData-fSQ8QY6w.js";import"./IllustratedMessage-GpqfpasN.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B4kU78En.js";import"./index-Dkmz5osx.js";import"./index-DNLW7KKj.js";import"./slim-arrow-down-H6l6KWk5.js";import"./Input-DiOUIPji.js";import"./ResponsivePopoverCommon.css-5MnX9a2f.js";import"./ValueStateMessage.css-CRVtIysz.js";import"./Suggestions.css-BpvHNpy2.js";import"./ListBoxItemGroupTemplate-oWfZlc9k.js";import"./ComboBoxItemGroup-DKe0CAMl.js";import"./ListItemBaseTemplate-CAPQp5OP.js";import"./Token-DUgpBRII.js";import"./ScrollEnablement-D2gDebhQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9qFWIUAt.js";import"./ToggleButton-DR-nlpgN.js";import"./SuggestionItem-CItgEz1T.js";import"./index-CGtEX1sV.js";import"./Option-Bong0I0_.js";import"./index-BCAebvTY.js";import"./SegmentedButton-BeGYrA28.js";import"./index-DHZh-84u.js";import"./Select-B59U1EMA.js";import"./InvisibleMessage-CT9yNbI0.js";import"./slim-arrow-down-BYh391LH.js";import"./index-DyOJGLZJ.js";import"./index-DrTZRfXS.js";import"./index-O9rzWAvd.js";import"./index-CbCDMDkJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rv_pgNJ1.js";import"./group-2-BHhMM04u.js";import"./sort-descending-CmaZ1coo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-mONp3tq9.js";import"./utils-BL2UvDbB.js";import"./index-DDCVZ4U5.js";import"./index-B3nHK15S.js";import"./index-DqaC_Ony.js";import"./navigation-down-arrow-0eA3UtLx.js";import"./navigation-right-arrow-0ntcsXEn.js";import"./navigation-right-arrow-CliMCU6T.js";import"./useCurrentTheme-DjznpaYd.js";import"./index-D6qhpAxp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRb5-qWs.js";import"./paper-plane-DqQwF7l0.js";import"./index-5cPAQ8_K.js";import"./less-EjJ2vttw.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
