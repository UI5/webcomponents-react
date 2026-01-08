import{j as e}from"./iframe-DKMkKoYy.js";import{useMDXComponents as o}from"./index-DwgZfgb7.js";import{I as l,F as r}from"./CommandsAndQueries-BeeR2K5X.js";import{M as a,C as c}from"./blocks-Bv7S8SwX.js";import"./Tag-D068unQp.js";import"./index-CzUGd6JN.js";import"./copy-CVTfErei.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DTS4v1Wt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcV3QYUz.js";import"./index-CqkyVNU6.js";import"./index-CRYo79rH.js";import"./Link-CIhe5KM_.js";import"./index-PDOaMfc0.js";import"./index-BPsR0vSK.js";import"./index-L49eAF_T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pWZ_QRmh.js";import"./addCustomCSSWithScoping-C2Y6K5ED.js";import"./index-D_8I6ySQ.js";import"./information-B0KiP948.js";import"./sys-enter-2-CDGYtOhu.js";import"./alert-5Abv9bcB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dhra6kfr.js";import"./delete-DUix6sNt.js";import"./settings-C5OEoL5X.js";import"./NoData-Cri307Dq.js";import"./IllustratedMessage-pa4ChjKu.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BkjD5jXB.js";import"./index-CGWtwsBT.js";import"./index-BHNOKsS3.js";import"./slim-arrow-down-DFO10dQK.js";import"./Input-Bywnd_wZ.js";import"./ResponsivePopoverCommon.css-Zw-71pun.js";import"./ValueStateMessage.css-BFEz-K6y.js";import"./Suggestions.css-BCRtc5sQ.js";import"./ListBoxItemGroupTemplate-ByysvU84.js";import"./ComboBoxItemGroup-rRFO05Df.js";import"./ListItemBaseTemplate-BwdOKIzC.js";import"./Token-DUFe1ufu.js";import"./ScrollEnablement-BA4gKr9W.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIizhTTb.js";import"./ToggleButton-CpmK1M0o.js";import"./SuggestionItem-Djy8vKSb.js";import"./index-DFZofdAc.js";import"./Option-Dn0hRlAU.js";import"./index-C-serayw.js";import"./SegmentedButton-DcdMXKYR.js";import"./index-CUSU-sZ-.js";import"./Select-DcPG7akN.js";import"./InvisibleMessage-C330TfFr.js";import"./slim-arrow-down-CvM-d2Kg.js";import"./index-CpZAh2cz.js";import"./index-CflFfJ9L.js";import"./index-C4umghHT.js";import"./index-Cuh8Cott.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYz7ywwo.js";import"./group-2-HkaDgQ8q.js";import"./sort-descending-BkrTSQR1.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-iPtp8h.js";import"./utils-LZ65B1HV.js";import"./index-arX-DEe4.js";import"./index-BEbANkX4.js";import"./index-J40sace8.js";import"./navigation-down-arrow-Dw2JTRKK.js";import"./navigation-right-arrow-DcK3gcB5.js";import"./navigation-right-arrow-Da_vKVqp.js";import"./useCurrentTheme-BoX5heyU.js";import"./index-BI1bMXh-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CE4g7ZKT.js";import"./paper-plane-DZlRHob0.js";import"./index-ae933fWZ.js";import"./less-DpSPHuZK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
