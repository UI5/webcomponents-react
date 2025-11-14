import{j as e}from"./iframe-DytFdpZ5.js";import{useMDXComponents as o}from"./index-ClxT7adU.js";import{I as l,F as r}from"./CommandsAndQueries-LDofsUzK.js";import{M as a,C as c}from"./blocks-CgPOjV91.js";import"./Tag-wRQS4rBi.js";import"./index-C-BQbcyx.js";import"./copy-HK9b5mhG.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-dqn4eYUx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrrPqcew.js";import"./index-BWneS7co.js";import"./index-DxeYPnJs.js";import"./Link-C5pcYLCj.js";import"./index-DcBMC71h.js";import"./index-BqVVjC2y.js";import"./index-BCsSmGRP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEqUMQtt.js";import"./addCustomCSSWithScoping-DZk4ZVKY.js";import"./index-BUF8RolX.js";import"./information-QfKl2uvK.js";import"./sys-enter-2-Dtt133YD.js";import"./alert-C-riVNTC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DiOVrNXv.js";import"./delete-CwCMe2lJ.js";import"./settings-C02FaBVl.js";import"./NoData-CIyKXGIu.js";import"./IllustratedMessage-i3hYdgC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-2XRDHoHl.js";import"./index-DOVXgZrj.js";import"./index-CNbeNrTd.js";import"./slim-arrow-down-DwpoKzJW.js";import"./Input-OPlbUKfy.js";import"./ResponsivePopoverCommon.css-B8i1Z4Ke.js";import"./ValueStateMessage.css-NEtnmyc2.js";import"./Suggestions.css-BPTnvCTk.js";import"./ListBoxItemGroupTemplate-DcxSGtmt.js";import"./ComboBoxItemGroup-f58ZgURw.js";import"./ListItemBaseTemplate-C3JeiHkK.js";import"./Token-MZi7lvV8.js";import"./ScrollEnablement-Co0kt5Hl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXFyw4BN.js";import"./ToggleButton-CpQHTAel.js";import"./SuggestionItem-ChyX7i02.js";import"./index-BCaEmiaT.js";import"./Option-DDqoKHKt.js";import"./index-RdLvHlSh.js";import"./SegmentedButton-B2HozEUv.js";import"./index-BjzJQlM-.js";import"./Select-D_v-B_Z3.js";import"./InvisibleMessage-D5JXdltE.js";import"./slim-arrow-down-DnRA-MRh.js";import"./index-YT8VK-Rh.js";import"./index-1y0Yb24g.js";import"./index-BXQwEVRd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DF8enc35.js";import"./group-2-BR7KJ0wq.js";import"./sort-descending-hDPKa1d_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Co3wqVTT.js";import"./utils-DRDvR6oY.js";import"./index-DgKfW966.js";import"./index-Br4jLSwx.js";import"./index-DzuzVEb4.js";import"./navigation-down-arrow-P9bJyD1t.js";import"./navigation-right-arrow-BdEYw-wX.js";import"./navigation-right-arrow-mvPQojYT.js";import"./useCurrentTheme-Dvjx0PbE.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bva0tWVh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CZGC8T2o.js";import"./paper-plane-BkwdG78Z.js";import"./index-HanQhb0I.js";import"./less-DiFuB8zb.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
