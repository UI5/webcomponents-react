import{j as e}from"./iframe-B5_Arj0w.js";import{useMDXComponents as o}from"./index-C5nExjBH.js";import{I as l,F as r}from"./CommandsAndQueries-DVJBDd6t.js";import{M as a,C as c}from"./blocks-COnGRWLL.js";import"./Tag-BJnasszI.js";import"./index-c-guL6iQ.js";import"./copy-C_i6TFMR.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B6zTvUBL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHuFfOWM.js";import"./index-BNDO-MHt.js";import"./index-B-64gK_m.js";import"./Link-DYcelBM6.js";import"./index-D9R5EBek.js";import"./index-C4ir_qvG.js";import"./index-NifsWW0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hIZvC53N.js";import"./addCustomCSSWithScoping-C5sFpCeo.js";import"./index-lFnbjF6s.js";import"./information-DnWQdbsO.js";import"./sys-enter-2-yT9c6yra.js";import"./alert-B0if0F-6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BfZJKBBk.js";import"./delete-B0k5SoPa.js";import"./settings-CEZkvwiT.js";import"./NoData-TnmYPaTe.js";import"./IllustratedMessage-Pyyhq7i4.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-Crtjw6Ie.js";import"./index-DL_kEw3q.js";import"./index-BJO60ncP.js";import"./slim-arrow-down-B_ZZxhZi.js";import"./Input-dtfIQ9En.js";import"./ResponsivePopoverCommon.css-BaIUyRPn.js";import"./ValueStateMessage.css-FKtIDJ6e.js";import"./Suggestions.css-CvyngWyE.js";import"./ListBoxItemGroupTemplate-DX1d3MVt.js";import"./ComboBoxItemGroup-DUNfQCSb.js";import"./ListItemBaseTemplate-DnikLjhF.js";import"./Token-CLtAw8SN.js";import"./ScrollEnablement-B0UmA8Q7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DptIuS1G.js";import"./ToggleButton-Dk6-JMzR.js";import"./SuggestionItem-BoLnIMah.js";import"./index-JVP23Nt2.js";import"./Option-jQ3brhrk.js";import"./index-bDRO2Yo2.js";import"./SegmentedButton-vIkq0NWc.js";import"./index-B3V8m3Ru.js";import"./Select-BR3ay0RO.js";import"./InvisibleMessage-sZXGuSEY.js";import"./slim-arrow-down-DW1b3FK1.js";import"./index-CisKw1tN.js";import"./index-BxnGFP9n.js";import"./index-Swjw5_n1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-fQ0HnAda.js";import"./group-2-CbrtzKL6.js";import"./sort-descending-DHn8DLBR.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DQwoKVw1.js";import"./utils-DUxK_zar.js";import"./index-QxbrwzJE.js";import"./index-C2-WeBJA.js";import"./index-w_d8t2Pc.js";import"./navigation-down-arrow-DVKMSsJc.js";import"./navigation-right-arrow-DtDmCQPg.js";import"./navigation-right-arrow-gdBHzM4T.js";import"./useCurrentTheme-xB5_C0Ve.js";import"./IndicationColor-DVw-fSM_.js";import"./index-oO4NGnOE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DJ1G2XQE.js";import"./paper-plane-B5hJlgX3.js";import"./index-E1h56ucZ.js";import"./less-DvXH47xF.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
