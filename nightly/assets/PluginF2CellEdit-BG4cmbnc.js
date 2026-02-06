import{j as e}from"./iframe-BHRyWWCK.js";import{useMDXComponents as o}from"./index-vmzMr3GX.js";import{I as l,F as r}from"./CommandsAndQueries-BrUcvXA7.js";import{M as a,C as c}from"./blocks-DoCMQEa0.js";import"./Tag-R17NMrYt.js";import"./index-CZEJadic.js";import"./copy-rEHIQTke.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dn7VAWka.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UnB73Rnf.js";import"./index-DibDZuef.js";import"./index-BKKHGvr5.js";import"./Link-v8HZQWxp.js";import"./index-Cm33Vcx3.js";import"./index-DCtea6ve.js";import"./index-CJXqjvvM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEXhzcrM.js";import"./addCustomCSSWithScoping-W1ZwlwrN.js";import"./index-CBZ8EfYd.js";import"./information-Nr6PmwbG.js";import"./sys-enter-2--GTeHKCC.js";import"./alert-CaNIaeyx.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1M8nkNX0.js";import"./delete-CTFibazR.js";import"./settings-pDITWEjw.js";import"./NoData-JLZTrtOP.js";import"./IllustratedMessage-Cu6GWfHR.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DwQvGPpm.js";import"./index-DJiwBl3_.js";import"./index-DgAZ2xF_.js";import"./slim-arrow-down-CRkJhUFV.js";import"./Input-BhCBHTib.js";import"./ResponsivePopoverCommon.css-BUbUes1r.js";import"./ValueStateMessage.css-BKyDhgmA.js";import"./Suggestions.css-C7i9nEw7.js";import"./ListBoxItemGroupTemplate-DjmSj5Ii.js";import"./ComboBoxItemGroup-BvHhbI-q.js";import"./ListItemBaseTemplate-CS4PXitH.js";import"./Token-BTLeMA0R.js";import"./ScrollEnablement-DFn_AcWU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8svZRnYC.js";import"./ToggleButton-Dbbqw8NC.js";import"./SuggestionItem-Dl2JpPy1.js";import"./index-DCuRMYTu.js";import"./Option-D23nggyx.js";import"./index-kofx5hev.js";import"./SegmentedButton-CgEID4bj.js";import"./index-BZ0xl2ay.js";import"./Select-BbotqLf_.js";import"./InvisibleMessage-Coe0Io3Y.js";import"./slim-arrow-down-4vXxtfSR.js";import"./index-DyS5aeY8.js";import"./index-8j0U0p6k.js";import"./index-CgNK1KA-.js";import"./index-BDlnLxSo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDR77_RK.js";import"./group-2-X3Rnt8GU.js";import"./sort-descending-mIkhhQAV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYPEZsB4.js";import"./utils-CkDRuQDp.js";import"./index-B2U7uG2L.js";import"./index-DD47so0i.js";import"./index-CAq1dCAC.js";import"./navigation-down-arrow-Ct6f73lC.js";import"./navigation-right-arrow-gjH-5iV-.js";import"./navigation-right-arrow-Da29Og35.js";import"./useCurrentTheme-B-94HWui.js";import"./index-CiAXoTzx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BTNxBqyX.js";import"./paper-plane-Dw8DE4LY.js";import"./index-BrVWHGQ1.js";import"./less-Cida6587.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
