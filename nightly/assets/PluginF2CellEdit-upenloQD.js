import{j as e}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as o}from"./index-7yLcmjFP.js";import{I as l,F as r}from"./CommandsAndQueries-B5y1yjIv.js";import{M as a,C as c}from"./blocks-CBo7THUN.js";import"./Tag-BnlqX_yt.js";import"./index-qq5TSXaV.js";import"./copy-CcXkheL2.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CAle5qj4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./index-BCADQjVB.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vDDRYwk3.js";import"./delete-BHPiQy8C.js";import"./settings-BeJNJe9f.js";import"./NoData-DumUXixA.js";import"./IllustratedMessage-DDYbAdFt.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-C4A8f3WL.js";import"./index-BY7QBrHg.js";import"./index-DPlPssjD.js";import"./slim-arrow-down-Y4c6YvG2.js";import"./Input-YHM25DhV.js";import"./ResponsivePopoverCommon.css-LID13WBa.js";import"./ValueStateMessage.css-DQQ-VE9Z.js";import"./Suggestions.css-eTzTaAph.js";import"./ListBoxItemGroupTemplate-lxd0hXbv.js";import"./ComboBoxItemGroup-BghMlL1f.js";import"./ListItemBaseTemplate-DUdMr_EH.js";import"./Token-OLXA8lD0.js";import"./ScrollEnablement-SGqJH1Lr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdNdTe1m.js";import"./ToggleButton-DYz4NtFX.js";import"./SuggestionItem-BddQBPYx.js";import"./index-D1d04w3W.js";import"./Option-v8zhZtfK.js";import"./index-DhKFm58k.js";import"./SegmentedButton-s1zIuXD0.js";import"./index-COE4TykW.js";import"./Select-CuF6Vj0b.js";import"./InvisibleMessage-LTfrv4dT.js";import"./slim-arrow-down-DYL641WE.js";import"./index-DGw9cILd.js";import"./index-CnNCBOjb.js";import"./index-CjnSo5ff.js";import"./IconDesign-DXd8PPVF.js";import"./filter-_rO-u-6A.js";import"./group-2-Bc7XIkR-.js";import"./sort-descending-CkdP0ki-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DvL1DyYS.js";import"./utils-D_GsNQst.js";import"./index-BE-7xLBy.js";import"./index-CtMXypae.js";import"./index-tzbUIwBJ.js";import"./navigation-down-arrow-DVAbjQ7x.js";import"./navigation-right-arrow-BVMX59iQ.js";import"./navigation-right-arrow-jw1yzYIV.js";import"./useCurrentTheme-Bd8z3rm-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CGCN7ekK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DASzHde-.js";import"./paper-plane-DvYo8HUm.js";import"./index-D-YebQdo.js";import"./less-BFgfWxB6.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
