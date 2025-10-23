import{j as e}from"./iframe-Caxtdkba.js";import{useMDXComponents as o}from"./index-DHHkTN_-.js";import{I as l,F as r}from"./CommandsAndQueries-BOspo6oR.js";import{M as a,C as c}from"./blocks-DEPL7JMW.js";import"./Tag-Dd11nsEW.js";import"./index-DhW1lu1C.js";import"./copy-Cm-UF3e8.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C2Zc33aG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKnt97hC.js";import"./index-BxIjhTnW.js";import"./index-Cqh1dpEf.js";import"./Link-Chm6Epcv.js";import"./index-tXGb4skN.js";import"./index-IuLzHbpC.js";import"./index-BgaBDTu4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-n5f_MbqF.js";import"./addCustomCSSWithScoping-kZmGLgIL.js";import"./index-BqfFpMrh.js";import"./information-DxEPh37b.js";import"./sys-enter-2-DZWaIs6H.js";import"./alert-CkjRTT5V.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJfJ5RYR.js";import"./delete-DOCQmW93.js";import"./settings-DpGsKXDA.js";import"./NoData-d0MQisZ4.js";import"./IllustratedMessage-BBsMwhuB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DUeNSHji.js";import"./index-JXLLmO3L.js";import"./index-BYb3crn-.js";import"./slim-arrow-down-BkDq8Vwz.js";import"./Input-CcsLtqg3.js";import"./ResponsivePopoverCommon.css-DeZjCLek.js";import"./ValueStateMessage.css-YrUrMqHL.js";import"./Suggestions.css-CoXO6GCu.js";import"./ListBoxItemGroupTemplate-BW85OpbI.js";import"./ComboBoxItemGroup-BQ3_Q8de.js";import"./ListItemBaseTemplate-BQxOqWbZ.js";import"./Token-5HJMpSXf.js";import"./ScrollEnablement-C_o7x22r.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqNCSywV.js";import"./ToggleButton-C6WMbDLb.js";import"./SuggestionItem-DUIHP02k.js";import"./index-CHZgJlEv.js";import"./Option-C3rQLOa9.js";import"./index-feJ7vEoL.js";import"./SegmentedButton-vU2qNGQ4.js";import"./index-P9r5CdKp.js";import"./Select-mLNSxhym.js";import"./InvisibleMessage-cd3uS02O.js";import"./slim-arrow-down-C8iSa2f2.js";import"./index-NXjyPYYS.js";import"./index-Duo5A0v-.js";import"./index-DulQB3X1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B7qF2DKQ.js";import"./group-2-Bj0PGwVo.js";import"./sort-descending-Cot-3-zz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeI_-Pkx.js";import"./utils-D5L0CqRc.js";import"./index-CAxK_BaB.js";import"./index-BDr19BLg.js";import"./index-BcL5_vtY.js";import"./navigation-down-arrow-rxWIaO6B.js";import"./navigation-right-arrow-BFr-7gTd.js";import"./navigation-right-arrow-bvuYFyRE.js";import"./useCurrentTheme-CfsQm3Rx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfKve24a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZ4Bq_Ho.js";import"./paper-plane-F06gAmny.js";import"./index-BcF_Hj2S.js";import"./less-BdZt1fch.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
