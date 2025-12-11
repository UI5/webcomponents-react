import{j as e}from"./iframe-RmeQ8XGC.js";import{useMDXComponents as o}from"./index-kR0XEGhk.js";import{I as l,F as r}from"./CommandsAndQueries-C1TIWg_l.js";import{M as a,C as c}from"./blocks-DaxiJjGb.js";import"./Tag-SV0H5ODo.js";import"./index-1jGrAlxH.js";import"./copy-Bxjpqlrz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CvNR8_-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIaOPhno.js";import"./index-CaXdH-JM.js";import"./index-Dg9UiDQJ.js";import"./Link-DiD1re6X.js";import"./index-P4hNb3E_.js";import"./index-BzAkCwZQ.js";import"./index-ICvStq6z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCSTig2E.js";import"./addCustomCSSWithScoping-D6LA06yL.js";import"./index-Dn-It_jb.js";import"./information-BGE1sBpB.js";import"./sys-enter-2-CFWWj7rX.js";import"./alert-DOCQy2rj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DrNrrQBn.js";import"./delete-Bgpt9UL9.js";import"./settings-B6qHIMc_.js";import"./NoData-DvirCjMy.js";import"./IllustratedMessage-NOwzz5-E.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-B1RZxKut.js";import"./index-DymmdOGk.js";import"./index-BrNhwdfa.js";import"./slim-arrow-down-BfDEZlhi.js";import"./Input-C0RQAQ_K.js";import"./ResponsivePopoverCommon.css-Bb2CDDwj.js";import"./ValueStateMessage.css-A-AQ78Le.js";import"./Suggestions.css-DQpTb0pt.js";import"./ListBoxItemGroupTemplate-DmRiL6u4.js";import"./ComboBoxItemGroup-TUyXkEDW.js";import"./ListItemBaseTemplate-D6x618bx.js";import"./Token-3IndTOm3.js";import"./ScrollEnablement-ZXEMw5No.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZLNiFs4r.js";import"./ToggleButton-hyvWFxwf.js";import"./SuggestionItem-Yq1R2rBr.js";import"./index-BvRfALoj.js";import"./Option-BYnx9qqz.js";import"./index-CvMS_bDE.js";import"./SegmentedButton-CXxD3ML7.js";import"./index-DWwQPCDK.js";import"./Select-GO81chS2.js";import"./InvisibleMessage-CAjaGHoP.js";import"./slim-arrow-down-DL7OQOka.js";import"./index-BuooPs5O.js";import"./index-Df3zkpR1.js";import"./index-h9khwDpH.js";import"./index-B6z1BRDU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BAP8GeEZ.js";import"./group-2-SSe9KuRV.js";import"./sort-descending-C38OTzhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-FUSiAWga.js";import"./utils-Dh_E7hqa.js";import"./index-CwAKKYUu.js";import"./index-DyPtDivo.js";import"./index-D1RAxoJs.js";import"./navigation-down-arrow-CSBNkbSa.js";import"./navigation-right-arrow-ZQL6lSfa.js";import"./navigation-right-arrow-BTS_mzJX.js";import"./useCurrentTheme-D5tplJAn.js";import"./index-Ys9BGoGM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCtUW8tC.js";import"./paper-plane-Dj0V2el6.js";import"./index-CKSnoblL.js";import"./less-CVIXlP33.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
