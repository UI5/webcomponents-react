import{j as e}from"./iframe-BOeFyVYO.js";import{useMDXComponents as o}from"./index-CHR9lzRO.js";import{I as l,F as r}from"./CommandsAndQueries-B3uiYPSD.js";import{M as a,C as c}from"./blocks-DZQepsVR.js";import"./Tag-B2OWKeSz.js";import"./index-CPvTgMMp.js";import"./copy-BJhtqyDJ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BNASTJ6e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BA2TdYHr.js";import"./index-C7pCL8XU.js";import"./index-BJHUXRax.js";import"./Link-gq5MBZLl.js";import"./index-BVr_O3zx.js";import"./index-CFpQMsbP.js";import"./index-XsNappkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuyMWw-2.js";import"./addCustomCSSWithScoping-5MrgBdkN.js";import"./index-BcGyynfr.js";import"./information-23pj5EQa.js";import"./sys-enter-2-DAsPAd7c.js";import"./alert-CPkxh21N.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjAUfTN5.js";import"./delete-CWJoMoJg.js";import"./settings-Bfit3oG9.js";import"./NoData-BscmLJLH.js";import"./IllustratedMessage-Dd93Yl2Q.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D3nzv2ZG.js";import"./index-DzkoDE5b.js";import"./index-DeACGhE8.js";import"./slim-arrow-down-CWRIGuGt.js";import"./Input-Df8o9ujM.js";import"./ResponsivePopoverCommon.css-CrPsreP2.js";import"./ValueStateMessage.css-D0I7pT5V.js";import"./Suggestions.css-CJA5EYur.js";import"./ListBoxItemGroupTemplate-DnOVXK1l.js";import"./ComboBoxItemGroup-CPuvIbWZ.js";import"./ListItemBaseTemplate-Cj1nOoXc.js";import"./Token-BAqMUyIJ.js";import"./ScrollEnablement-C6K7-lBE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvObX3eg.js";import"./ToggleButton-DprkIF_5.js";import"./SuggestionItem-CKRLTHHj.js";import"./index-D5TJuk4k.js";import"./Option-BLl2Q7AB.js";import"./index-BtvD0QZf.js";import"./SegmentedButton-BeE07OxI.js";import"./index-BrMZtkt6.js";import"./Select-DqU5okXE.js";import"./InvisibleMessage-tWO1LuD6.js";import"./slim-arrow-down-XGqqmupf.js";import"./index-C1FVPsyk.js";import"./index-DBDN__0v.js";import"./index-C3vfrSiy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BrlNUypU.js";import"./group-2-BA5x23BP.js";import"./sort-descending-BCAq_Q0J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ikPuGIDZ.js";import"./utils-C8gBHpV1.js";import"./index-Sk78W01U.js";import"./index-DES0lnez.js";import"./index-BpGUb5zM.js";import"./navigation-down-arrow-Df9I5Mue.js";import"./navigation-right-arrow-Bjlzjx0_.js";import"./navigation-right-arrow-Dm_S70wW.js";import"./useCurrentTheme-Uxgw71xd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtzTOU32.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVnkc0v4.js";import"./paper-plane-C_JViswO.js";import"./index-B7oLkWTs.js";import"./less-Cb2GPmNz.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
