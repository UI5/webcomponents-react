import{j as e}from"./iframe-C7IxwDmR.js";import{useMDXComponents as o}from"./index-CbSg1oVF.js";import{I as l,F as r}from"./CommandsAndQueries-D3KUBOYC.js";import{M as a,C as c}from"./blocks-3mjErVLE.js";import"./Tag-C9e9pWXA.js";import"./index-BN5pmzGS.js";import"./copy-D-VhlFxG.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bd0C7vts.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfKFL4Pe.js";import"./index-DScPik_c.js";import"./index-BiORqeCW.js";import"./Link-CCpfCikN.js";import"./index-CHmX3iCn.js";import"./index-DifvSs4M.js";import"./index-C1RQfiDX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-me-lZqyi.js";import"./addCustomCSSWithScoping-Ddb1r2sC.js";import"./index-Btmndd9w.js";import"./information-wiA8vfAE.js";import"./sys-enter-2-j2JxX-0l.js";import"./alert-Cm08TFjk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChqHr5wK.js";import"./delete-BSl3wy38.js";import"./settings-DGhtyKkS.js";import"./NoData-ZmM9tZ25.js";import"./IllustratedMessage-D-WEWynv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1-g84_aS.js";import"./index-CscJ0cw_.js";import"./index-CwLFHpug.js";import"./slim-arrow-down-BNmOcvZN.js";import"./Input-zvxkPfUn.js";import"./ResponsivePopoverCommon.css-CswkUY4O.js";import"./ValueStateMessage.css--jDZnzoj.js";import"./Suggestions.css-CWsApbdF.js";import"./ListBoxItemGroupTemplate-ic-gllq_.js";import"./ComboBoxItemGroup-BgqJcjSC.js";import"./ListItemBaseTemplate-CcnlE6Sk.js";import"./Token-_905z17c.js";import"./ScrollEnablement-BD9V_oV0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQaqKR0d.js";import"./ToggleButton-BufLqCEs.js";import"./SuggestionItem-CtttL5Nk.js";import"./index-7SdjD4wD.js";import"./Option-BM1N9G0j.js";import"./index-nWfCkMQS.js";import"./SegmentedButton-A3oHgqen.js";import"./index-DI3HfrFm.js";import"./Select-D4uOkSLO.js";import"./InvisibleMessage-3o-oW7oq.js";import"./slim-arrow-down-TXkhd4Mj.js";import"./index-Bc14vZWb.js";import"./index-DOS93QAh.js";import"./index-CR6Z_Rhf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AZHZA8cU.js";import"./group-2-ZZFScIlf.js";import"./sort-descending-TOMxzf0j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CJRUeV6T.js";import"./utils-YyqGWE78.js";import"./index-DYQpLwRl.js";import"./index-RXV3LSnp.js";import"./index-CQqHvQDP.js";import"./navigation-down-arrow-pKD6UD3T.js";import"./navigation-right-arrow-D52cg3R3.js";import"./navigation-right-arrow-WwNAbjqy.js";import"./useCurrentTheme-3HGEU4AP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D4AmYoSs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDhHKcDh.js";import"./paper-plane-zbAKlJWW.js";import"./index-CSaUThvG.js";import"./less-GzasUkSp.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
