import{j as e}from"./iframe-4qrVzB25.js";import{useMDXComponents as o}from"./index-C23NGFAV.js";import{I as l,F as r}from"./CommandsAndQueries-C8f_O47Z.js";import{M as a,C as c}from"./blocks-CyApLjCn.js";import"./Tag-DxNYrBt-.js";import"./index-BHBPbkXo.js";import"./copy-BwZFHKgv.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BGtl3UB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cj8ZVdQX.js";import"./index-bsQInf2g.js";import"./index-MWca-2b0.js";import"./Link-Cc0E88FG.js";import"./index-CMfGGfhU.js";import"./index-Cvq3zOuj.js";import"./index-Cjln1VVF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqnCkxg.js";import"./addCustomCSSWithScoping-DQAaXiXr.js";import"./index-CU3hZFou.js";import"./information-DyICkYh-.js";import"./sys-enter-2-I-7Y6xsp.js";import"./alert-DbMRFtnZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dpm6wpGO.js";import"./delete-DFB2rKcT.js";import"./settings-P1Tu1UA2.js";import"./NoData-CAyhgKIF.js";import"./IllustratedMessage-MSluXbw5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C7v7m6d5.js";import"./index-D7O6U1BC.js";import"./index-D-c-emv0.js";import"./slim-arrow-down-CXefVYMG.js";import"./Input-DCZqkJuY.js";import"./ResponsivePopoverCommon.css-C7ocu6v6.js";import"./ValueStateMessage.css-BkV0tb0J.js";import"./Suggestions.css-DkwtHK1N.js";import"./ListBoxItemGroupTemplate-Dx7ZVMwg.js";import"./ComboBoxItemGroup-CTcw46H9.js";import"./ListItemBaseTemplate-KBembrXH.js";import"./Token-CIWwMwgE.js";import"./ScrollEnablement-CR5txl14.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CjlAH9Fu.js";import"./ToggleButton-CVx_cCdy.js";import"./SuggestionItem-CjsbBv9j.js";import"./index-8zB2ZRqP.js";import"./Option-C10NqIPh.js";import"./index-CueD1sBZ.js";import"./SegmentedButton-D30KObWP.js";import"./index-3QlNC4k-.js";import"./Select-DOxg7abA.js";import"./InvisibleMessage-CEq_zNWh.js";import"./slim-arrow-down-HR07Gity.js";import"./index-DkDmb4j6.js";import"./index-q8cedDhq.js";import"./index-CC5rZlHP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dr0RP3gS.js";import"./group-2-CpBQCdfq.js";import"./sort-descending-BuPBBBgN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BxTTaJg9.js";import"./utils-B9_JuoKt.js";import"./index-uGUHJIW2.js";import"./index-DPoSKLzi.js";import"./index-DuUIqk7w.js";import"./navigation-down-arrow-CW_68QW5.js";import"./navigation-right-arrow-XZ7xPYvX.js";import"./navigation-right-arrow-DTS3LoQE.js";import"./useCurrentTheme-7TOMGYM8.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DDFYNMIL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0uHFjA1.js";import"./paper-plane-ylHW1ldh.js";import"./index-BGEN4a8i.js";import"./less-BmzQiuIj.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
