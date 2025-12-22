import{j as e}from"./iframe-BH4bVelf.js";import{useMDXComponents as o}from"./index-BZqT0YF1.js";import{I as l,F as r}from"./CommandsAndQueries-D9wpOiDr.js";import{M as a,C as c}from"./blocks-CeYDMKuM.js";import"./Tag-BXnIP2dS.js";import"./index-CJTqi7uU.js";import"./copy-Dqlw1cCi.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CU79LRwI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Clh4Efsf.js";import"./index-CF882nWm.js";import"./index-CaNjf1Vn.js";import"./Link-CWmFbngj.js";import"./index-BD7TNiZv.js";import"./index-BoC02bGf.js";import"./index-DwqLEbZm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C83XHNHQ.js";import"./addCustomCSSWithScoping-BSRRxoii.js";import"./index-AtaZxDlU.js";import"./information-BFXgiRFQ.js";import"./sys-enter-2-IrFhFhIl.js";import"./alert-2wR6R_Um.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-5b86cogR.js";import"./delete-D4wiFYB9.js";import"./settings-CWwIQT_C.js";import"./NoData-BFhg-GG6.js";import"./IllustratedMessage-34DEvqfA.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BZAg4ngt.js";import"./index-BZGTGu9E.js";import"./index-BvDC2UXj.js";import"./slim-arrow-down-BYwdEN3E.js";import"./Input-B0gYbYgt.js";import"./ResponsivePopoverCommon.css-CkobxXTu.js";import"./ValueStateMessage.css-C6Kv6bre.js";import"./Suggestions.css-BLG2o1V5.js";import"./ListBoxItemGroupTemplate-prNPVmNr.js";import"./ComboBoxItemGroup-C29Z681b.js";import"./ListItemBaseTemplate-CxzuukWL.js";import"./Token-Ct7p5V6Z.js";import"./ScrollEnablement-Dz8a2847.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dk4MirOU.js";import"./ToggleButton-CKPPi0F4.js";import"./SuggestionItem-DTaZ3jXG.js";import"./index-B5H40sXS.js";import"./Option-D8eBTNON.js";import"./index-BqP_tsIy.js";import"./SegmentedButton-D16K0baA.js";import"./index-_nPQLI_b.js";import"./Select-5ewiLwL1.js";import"./InvisibleMessage-IGW-rAUo.js";import"./slim-arrow-down-9BYKuyUs.js";import"./index-7MRTM3HB.js";import"./index-DVGATJ5a.js";import"./index-DznWkkCi.js";import"./index-DldxGphJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXWEU5fn.js";import"./group-2-DRzez2hn.js";import"./sort-descending-C_q3rv9b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CSpNMFp0.js";import"./utils-C0YjVaw1.js";import"./index-CAeOO4wN.js";import"./index-B5eeZss-.js";import"./index-CBsiXwh_.js";import"./navigation-down-arrow-_ZsRec2W.js";import"./navigation-right-arrow-49__25dM.js";import"./navigation-right-arrow-dg6jTT0c.js";import"./useCurrentTheme-DAO2rCbm.js";import"./index-BsJLWcly.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsU26iOF.js";import"./paper-plane-CAa_-spX.js";import"./index-CROEbkYy.js";import"./less-B3ilKLXN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
