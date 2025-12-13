import{j as e}from"./iframe-vf7s2VGb.js";import{useMDXComponents as o}from"./index-DKJSAVnl.js";import{I as l,F as r}from"./CommandsAndQueries-DWofsexW.js";import{M as a,C as c}from"./blocks-B4oFLz5c.js";import"./Tag-P1WqKFay.js";import"./index-DHeHce3N.js";import"./copy-CaZ5zeDJ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CLTTeei_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DxKE5xNM.js";import"./index-BPodtacB.js";import"./index-Edovokrc.js";import"./Link-CPCmvFzf.js";import"./index-Dj1d2O3_.js";import"./index-BuDcKrDV.js";import"./index-rjrZsjeS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLGPl5RO.js";import"./addCustomCSSWithScoping-B77_-I85.js";import"./index-Bt_xSHJX.js";import"./information-9NSJvKF7.js";import"./sys-enter-2-CiXorCdU.js";import"./alert-La4PIswz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B-8tjvZC.js";import"./delete-td61WACm.js";import"./settings-rT0-s-87.js";import"./NoData-Bhx-qegg.js";import"./IllustratedMessage-ClZPZ5oN.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-D4sQFxvp.js";import"./index-f22oyNzG.js";import"./index-Cd4y_kbv.js";import"./slim-arrow-down-Z0YsYWn6.js";import"./Input-oUUbwe-u.js";import"./ResponsivePopoverCommon.css-MEOrQBt2.js";import"./ValueStateMessage.css-FedWBEIr.js";import"./Suggestions.css-ASubEaNq.js";import"./ListBoxItemGroupTemplate-DguSAue8.js";import"./ComboBoxItemGroup-Bu6Gjtr4.js";import"./ListItemBaseTemplate-Bf0mYL7i.js";import"./Token-CO9kT2ca.js";import"./ScrollEnablement-tuQmtrl2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9Uuxqqd.js";import"./ToggleButton-CVCfufSA.js";import"./SuggestionItem-Dpk_8NtW.js";import"./index-DvFvrrAA.js";import"./Option-DqgY0VMS.js";import"./index-DzFWBLE8.js";import"./SegmentedButton-CM0Yb-1y.js";import"./index-BprsUe_K.js";import"./Select-Cz_Z1gqj.js";import"./InvisibleMessage-sUWFyigV.js";import"./slim-arrow-down-B-lEbC2Q.js";import"./index-xmAfK3wq.js";import"./index-CungOEjJ.js";import"./index-HFjg-7HY.js";import"./index-DG420_LU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-De8iMo6C.js";import"./group-2-B8ZPoUgn.js";import"./sort-descending-Bv4rtnl5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4vfF5a4.js";import"./utils-CTkxpdDy.js";import"./index-BW0BnQBL.js";import"./index-BG66puBV.js";import"./index-UtBszVEk.js";import"./navigation-down-arrow-ywnaOS8H.js";import"./navigation-right-arrow-C8gBdEec.js";import"./navigation-right-arrow-wCDGslCm.js";import"./useCurrentTheme-CWvOl3sc.js";import"./index-BQ9kB6Rj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DNQTmpVY.js";import"./paper-plane-CoF7IV9r.js";import"./index-BnswFZxm.js";import"./less-BnYtZ8Xc.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
