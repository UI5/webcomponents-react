import{j as e}from"./iframe-CGYWU8Zw.js";import{useMDXComponents as o}from"./index-CiFONtpN.js";import{I as l,F as r}from"./CommandsAndQueries-3p6jyLf7.js";import{M as a,C as c}from"./blocks-DZmaAmAP.js";import"./Tag-DxQZH2nA.js";import"./index-C8k79uzV.js";import"./copy-ButtKxyE.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CsIPtkrn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn68RHh4.js";import"./index-IcIo-7M4.js";import"./index-Bi-laTlO.js";import"./Link-BAlxiTXd.js";import"./index-BpDmHZtn.js";import"./index-DOxDv7Xi.js";import"./index-mH5f_RVl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRQkasjF.js";import"./addCustomCSSWithScoping-DNAczkus.js";import"./index-C1_F4VAw.js";import"./information-Dv2HF6Ui.js";import"./sys-enter-2-vy1Ip4uQ.js";import"./alert-BcA2abtX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQJSAvK6.js";import"./delete-B6O2JaIS.js";import"./settings-SpDQw2Vq.js";import"./NoData-bysabFUy.js";import"./IllustratedMessage-CUeEBz-a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-8dbC-gN_.js";import"./index-ot_Vs5SX.js";import"./index-DdRBnYSU.js";import"./slim-arrow-down-KrTHML7Y.js";import"./Input-3AAsME8j.js";import"./ResponsivePopoverCommon.css-4GPhK6Ks.js";import"./ValueStateMessage.css-y9BzQC21.js";import"./Suggestions.css-E_zTpNLY.js";import"./ListBoxItemGroupTemplate-CWaB1uAI.js";import"./ComboBoxItemGroup-CvF6QpNn.js";import"./ListItemBaseTemplate-BrUrTP7s.js";import"./Token-B_03GxpZ.js";import"./ScrollEnablement-SG6LJXEq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DnUU-rKN.js";import"./ToggleButton-B0JQSluf.js";import"./SuggestionItem-7QP2JsqC.js";import"./index-D2O8IK0Y.js";import"./Option-C-i06TU1.js";import"./index-D-wDCcJv.js";import"./SegmentedButton-Cj4a5li5.js";import"./index-BpQt2xX8.js";import"./Select-xEHU_Jve.js";import"./InvisibleMessage-Cry_VVZD.js";import"./slim-arrow-down-BVAuIuoE.js";import"./index-CVglYbsF.js";import"./index-C9CUNSTS.js";import"./index-DdDzQOK5.js";import"./index-DrrvpZW3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTW5WVB_.js";import"./group-2-r-nrfnRe.js";import"./sort-descending-klOkrTUA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De8BjJaL.js";import"./utils-fPRKtnar.js";import"./index-DLgRUgqV.js";import"./index-D7n88VO3.js";import"./index-Dzq4A1VN.js";import"./navigation-down-arrow-C_PatvXC.js";import"./navigation-right-arrow-BWvpLWqD.js";import"./navigation-right-arrow-8E2izI9D.js";import"./useCurrentTheme-DWIF38NU.js";import"./index-Dk1eqQ67.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQbatNcW.js";import"./paper-plane-J4zNAVa6.js";import"./index-CpwJUAOc.js";import"./less-D6dTBaBl.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
