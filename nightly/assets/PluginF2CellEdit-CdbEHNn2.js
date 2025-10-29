import{j as e}from"./iframe-BY1BFtoq.js";import{useMDXComponents as o}from"./index-BJX8o_PY.js";import{I as l,F as r}from"./CommandsAndQueries-LexJCY9y.js";import{M as a,C as c}from"./blocks-Bfc9ghDe.js";import"./Tag-DpT3Xyfk.js";import"./index-DoP9OXws.js";import"./copy-BobpDbK0.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BJgxOLZH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cb7WjzHE.js";import"./index-odRykF4_.js";import"./index-CRXctDPP.js";import"./Link-CaG5MpgS.js";import"./index-B41LOkRR.js";import"./index-DSc6dsYM.js";import"./index-Dk5-ak7N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKdRFMC3.js";import"./addCustomCSSWithScoping-BhZcrUID.js";import"./index-7DiuorJD.js";import"./information-B4R2spf7.js";import"./sys-enter-2-HrsNxE-9.js";import"./alert-Dq9SF84g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BCCC4ur2.js";import"./delete-D8zrN_sA.js";import"./settings-Bdr665rb.js";import"./NoData-BRqgG7K8.js";import"./IllustratedMessage-DPqumtU-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cyq1-ihj.js";import"./index-_HCPSvgc.js";import"./index-CRmM9ezH.js";import"./slim-arrow-down-DtYB0pd9.js";import"./Input-bf8JCO1U.js";import"./ResponsivePopoverCommon.css-BhNXWsd2.js";import"./ValueStateMessage.css-Dg1p_wIG.js";import"./Suggestions.css-S4z4vAmo.js";import"./ListBoxItemGroupTemplate-BHHW-U5N.js";import"./ComboBoxItemGroup-CWH9BsDg.js";import"./ListItemBaseTemplate-CTqAs3uy.js";import"./Token-q-g5A3-L.js";import"./ScrollEnablement-B_wAj3Qd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BlebLaAt.js";import"./ToggleButton-CmeP7kkP.js";import"./SuggestionItem-C1WN_sCo.js";import"./index-DLBeBpmo.js";import"./Option-BbXwN-l4.js";import"./index-CfVsgWHp.js";import"./SegmentedButton-C2wGr84m.js";import"./index-Dqcyxmrt.js";import"./Select-CQ6YhMiH.js";import"./InvisibleMessage-Cm96dHRB.js";import"./slim-arrow-down-C6xEaE6E.js";import"./index-OWO7rarX.js";import"./index-Bv46zhG_.js";import"./index-BS9ow689.js";import"./IconDesign-DXd8PPVF.js";import"./filter-GHJB05Hr.js";import"./group-2-BSwplwhU.js";import"./sort-descending-DzpsEe-A.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dj0e6j8A.js";import"./utils-BVTfHtc_.js";import"./index-DQ68OsPL.js";import"./index-BrYWbXY_.js";import"./index-Cji0Ug7a.js";import"./navigation-down-arrow-DoOrewxd.js";import"./navigation-right-arrow-D-L2cheh.js";import"./navigation-right-arrow-CaZt-wfz.js";import"./useCurrentTheme-3PuwnM7C.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oc63bMUJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxCqakm.js";import"./paper-plane-BTYyQoCV.js";import"./index-DwP49iU-.js";import"./less-mTodNhHV.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
