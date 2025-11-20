import{j as e}from"./iframe-DXIHBwMx.js";import{useMDXComponents as o}from"./index-DxplZHhB.js";import{I as l,F as r}from"./CommandsAndQueries-Bq7v73lL.js";import{M as a,C as c}from"./blocks-q4g2VrtR.js";import"./Tag-tdzXLFPn.js";import"./index-CeX4wAvR.js";import"./copy-yrZW5TrM.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dl31wauj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J54q0dgd.js";import"./index-8pDI1Lay.js";import"./index-DkkEQ9_P.js";import"./Link-BvSaBL9U.js";import"./index-Dl76_vfU.js";import"./index-DPgFjJws.js";import"./index-Bv3_HAKL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BcuYxUko.js";import"./addCustomCSSWithScoping-p2bq4BQn.js";import"./index-DVpq5CSs.js";import"./information-gul-J4WB.js";import"./sys-enter-2-6IAFnl06.js";import"./alert-B38L7NYF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8OeK81d.js";import"./delete-C-OqTYsp.js";import"./settings-VW8oUHKP.js";import"./NoData-BFUXMVZV.js";import"./IllustratedMessage-CWu0Y4jx.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bp86e7JW.js";import"./index-CtFtlX5A.js";import"./index-DIbDvrTC.js";import"./slim-arrow-down-CMiqRMch.js";import"./Input-DKRggLIE.js";import"./ResponsivePopoverCommon.css-IT2s9x-e.js";import"./ValueStateMessage.css-BSBeeufO.js";import"./Suggestions.css-0mCo8ev-.js";import"./ListBoxItemGroupTemplate-CqnuO2NN.js";import"./ComboBoxItemGroup-DdSoCWpT.js";import"./ListItemBaseTemplate-BNMak7oT.js";import"./Token-DjZ5IwOr.js";import"./ScrollEnablement-DI_Ik22R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BA8y93oi.js";import"./ToggleButton-CctemxJS.js";import"./SuggestionItem-BgT2Te5p.js";import"./index-CGQFU_4D.js";import"./Option-CvKMeDMq.js";import"./index-qj4c4wBb.js";import"./SegmentedButton-D-tRNffC.js";import"./index-DcWs1wPd.js";import"./Select-CGo-0QVC.js";import"./InvisibleMessage-Baq9lBY3.js";import"./slim-arrow-down-CTJD6opM.js";import"./index-wL-q4Fof.js";import"./index-kVbMjwdW.js";import"./index-ztofxTu6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BqeorvhQ.js";import"./group-2-CbYCsJdZ.js";import"./sort-descending-Du_3xiim.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-uQRkwGba.js";import"./utils-CpTj5Wev.js";import"./index-Ltqvt3ql.js";import"./index-Bp-ixfoG.js";import"./index-DeY_iIAn.js";import"./navigation-down-arrow-tTyMgTsU.js";import"./navigation-right-arrow-3RPrvjsM.js";import"./navigation-right-arrow-Cp4Bs5Ws.js";import"./useCurrentTheme-DTBV76rd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-MOF2JPzV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B3qUjlQu.js";import"./paper-plane-CySSYvuC.js";import"./index-Cz8FWMC8.js";import"./less-CtdFYUXb.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
