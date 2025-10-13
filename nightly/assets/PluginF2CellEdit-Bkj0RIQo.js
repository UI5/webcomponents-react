import{j as e}from"./iframe-DDMT6HJ_.js";import{useMDXComponents as o}from"./index-BZBPPnAC.js";import{I as l,F as r}from"./CommandsAndQueries-7VHsHP9e.js";import{M as a,C as c}from"./blocks-Bodl2L_O.js";import"./Tag-CpA-lkPa.js";import"./index-5dKFa1m8.js";import"./copy-BvEBs4Jb.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BwmUzmXm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGAlCx6I.js";import"./index-DBxIJUvm.js";import"./index-Cs3p2L6v.js";import"./Link-BjYpH57b.js";import"./index-CqaPzMqI.js";import"./index-CfXspAeM.js";import"./index-DHW-qiJ5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSpYa4u6.js";import"./addCustomCSSWithScoping-D9ua8UMW.js";import"./index-CPxVkHe3.js";import"./information-BaGvLpd9.js";import"./sys-enter-2-CsR_zoUi.js";import"./alert-DZ7RsIcF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C_7eAMan.js";import"./delete-DDdmSxun.js";import"./settings-SZZk_fFu.js";import"./NoData-sRhZ3zTv.js";import"./IllustratedMessage-Dclr8PL4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-lU7Py_iI.js";import"./index-Cc9iVAAu.js";import"./index-Dbt7IMfg.js";import"./slim-arrow-down-_qPAbD3Y.js";import"./Input-Dq0nzydJ.js";import"./ResponsivePopoverCommon.css--4EV00T0.js";import"./ValueStateMessage.css-DJXR6UPS.js";import"./Suggestions.css-BrKJqgD-.js";import"./ListBoxItemGroupTemplate-Ccn1SJ4V.js";import"./ComboBoxItemGroup-D6HtalKw.js";import"./ListItemBaseTemplate-D-MpoK89.js";import"./Token-Da7jb-N1.js";import"./ScrollEnablement-Bbyn3w51.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CwznxLrh.js";import"./ToggleButton-VCd_4PFZ.js";import"./SuggestionItem-BV-QE3WD.js";import"./index-BK1jTw4z.js";import"./Option-lMtOBoWg.js";import"./index-BGTKMO1o.js";import"./SegmentedButton-COLPjqPS.js";import"./index-E-tB_7Ri.js";import"./Select-DU8OXIZo.js";import"./InvisibleMessage-BXeuCBKE.js";import"./slim-arrow-down-KmQfRro9.js";import"./index-BPWx4Zk_.js";import"./index-D9Lx7ID0.js";import"./index-sic5m1Pa.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1tBCcb1.js";import"./group-2-D2ei6fTk.js";import"./sort-descending-BuC5Tk_u.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lXLyT-Wl.js";import"./utils-ChSuOYmL.js";import"./index-vJTHVjlR.js";import"./index-DZKaCGNa.js";import"./index-paGBJspo.js";import"./navigation-down-arrow-B9jXhU-w.js";import"./navigation-right-arrow-DN8qzGzf.js";import"./navigation-right-arrow-Arpyz__T.js";import"./useCurrentTheme-D9ht3LOk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-s2pXv8Lk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BgH4TYcR.js";import"./paper-plane-CfdFJpRG.js";import"./index-Dx8GcT9W.js";import"./less-klToe0UP.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
