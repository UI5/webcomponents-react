import{j as e}from"./iframe-hWo-wO7u.js";import{useMDXComponents as o}from"./index-B2u3atBN.js";import{I as l,F as r}from"./CommandsAndQueries-BtJ9G9OP.js";import{M as a,C as c}from"./blocks-D665FCej.js";import"./Tag-DiHaMBCj.js";import"./index-D5mqC0e8.js";import"./copy-BPT19kup.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C9Heuwuk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Wfnu6Ku2.js";import"./index-D7ZeaZZe.js";import"./index-BDgRL0Nh.js";import"./Link-BA7dioNH.js";import"./index-CSzf7Z-Y.js";import"./index-DISMqvl7.js";import"./index-C_OvF3EV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfqGlQv7.js";import"./addCustomCSSWithScoping-wCTK5FK_.js";import"./index-qccq9h_o.js";import"./information-C8DEl_tH.js";import"./sys-enter-2-LL0qt2nK.js";import"./alert-DeTqeiYU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DA2kYysS.js";import"./delete-1cfM8Qxo.js";import"./settings-zuK18Bw0.js";import"./NoData-CkVGmtjH.js";import"./IllustratedMessage-D6ysM4C0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DA-MEoRX.js";import"./index-DmgQLslz.js";import"./index-eQIHm9QM.js";import"./slim-arrow-down-Bh_ekG-x.js";import"./Input-Bj15_VWu.js";import"./ResponsivePopoverCommon.css-CUXmBlOY.js";import"./ValueStateMessage.css-BGhJCY9Z.js";import"./Suggestions.css-lQlw-tAk.js";import"./ListBoxItemGroupTemplate-o-zwMfnD.js";import"./ComboBoxItemGroup-CftSPkvF.js";import"./ListItemBaseTemplate-g1dZt2_w.js";import"./Token-CcowhBYO.js";import"./ScrollEnablement-BHTzoQIK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRaWu8L3.js";import"./ToggleButton-B_IR3Cp0.js";import"./SuggestionItem-DSX2e-Mq.js";import"./index-BwiirZMa.js";import"./Option-DIbmc_PM.js";import"./index-BrYBpQqL.js";import"./SegmentedButton-B4_2if5t.js";import"./index-C9eBbgwm.js";import"./Select-DXUVZ4YD.js";import"./InvisibleMessage-D08-nSQa.js";import"./slim-arrow-down-DxxkkDHb.js";import"./index-DCZ4Ax5f.js";import"./index-Dy1oOrBB.js";import"./index-DiMvuXX8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-izyJHX72.js";import"./group-2-D53K53MV.js";import"./sort-descending-D6Z78OXl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dcm44O05.js";import"./utils-CjxRVdkU.js";import"./index-CfJPtgca.js";import"./index-DG-Dq2q4.js";import"./index-CYQ2RrlX.js";import"./navigation-down-arrow-BOFNhi8Y.js";import"./navigation-right-arrow-Bi5JkXbY.js";import"./navigation-right-arrow-DR5DT_Mp.js";import"./useCurrentTheme-DA70P9tJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdwri-eL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DAQms381.js";import"./paper-plane-BCqoBBVx.js";import"./index-DDSY4mam.js";import"./less-DnIOHHkm.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
