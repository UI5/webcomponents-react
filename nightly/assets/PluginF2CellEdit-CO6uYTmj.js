import{j as e}from"./iframe-DD3khz8t.js";import{useMDXComponents as o}from"./index-CHFjnrWX.js";import{I as l,F as r}from"./CommandsAndQueries-DsVeZAZ7.js";import{M as a,C as c}from"./blocks-ibeWpSZJ.js";import"./Tag-Ngk_8fKi.js";import"./index-BQH8_ZBk.js";import"./copy-BSvcS0vC.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-5_I1cyxV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvVzwHKX.js";import"./index-BVYBIT27.js";import"./index-BHPH6hXB.js";import"./Link-p7O4byri.js";import"./index-DddTN1yz.js";import"./index-INxWrkzg.js";import"./index-BddI7Cdl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgRC_ctT.js";import"./addCustomCSSWithScoping-BX6ct4xq.js";import"./index-w-lQea0z.js";import"./information-DqXpZV5n.js";import"./sys-enter-2-BQ568DSo.js";import"./alert-CH5Zr4v2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--alj2jOK.js";import"./delete-Ct8xiXlx.js";import"./settings-B1teuJ2R.js";import"./NoData-DvZhvA8J.js";import"./IllustratedMessage-CShEbWRz.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-6kBWV_FC.js";import"./index-Cj2HP5zh.js";import"./index-BRxYB2Dw.js";import"./slim-arrow-down-5-78CQg2.js";import"./Input-CzY57eje.js";import"./ResponsivePopoverCommon.css-DtiXOolb.js";import"./ValueStateMessage.css-BAlZcm0o.js";import"./Suggestions.css-wNpJO5EP.js";import"./ListBoxItemGroupTemplate-CQk5fTJS.js";import"./ComboBoxItemGroup-TwWewYqC.js";import"./ListItemBaseTemplate-Dy5bCQYp.js";import"./Token-a3MWAMbv.js";import"./ScrollEnablement-B0G1MDOV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcQmaiD_.js";import"./ToggleButton-CSRLBrRn.js";import"./SuggestionItem-CBBezjnP.js";import"./index-D3LDGHoT.js";import"./Option-i4_4pLmE.js";import"./index-D02z_BNZ.js";import"./SegmentedButton-BGocngUd.js";import"./index-DNXbXPty.js";import"./Select-NIA1LFcO.js";import"./InvisibleMessage-DD1Ev_vZ.js";import"./slim-arrow-down-D0mEITot.js";import"./index-BITmfB0x.js";import"./index-myUsI4jx.js";import"./index-DquhQeMg.js";import"./index-CM02EC77.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3GrU4Ss.js";import"./group-2-1rPdh5F3.js";import"./sort-descending-DgjPPaFB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbBNQQRY.js";import"./utils-DdRAkXpa.js";import"./index-B_XYOqNE.js";import"./index-BIIPEOn-.js";import"./index-CDwMQpv5.js";import"./navigation-down-arrow-YqNslUL9.js";import"./navigation-right-arrow-CxeAemfg.js";import"./navigation-right-arrow-Bq-pkXdO.js";import"./useCurrentTheme-C2JP9KVd.js";import"./index-CT5LP0kS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CAOBRXTB.js";import"./paper-plane-CrMU2hg6.js";import"./index-C3tzgyPK.js";import"./less-CSsjRXW_.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
