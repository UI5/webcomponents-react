import{j as e}from"./iframe-BiIJdVyr.js";import{useMDXComponents as o}from"./index--rLY9036.js";import{I as l,F as r}from"./CommandsAndQueries-D08-AnOE.js";import{M as a,C as c}from"./blocks-BFHpLm1y.js";import"./Tag-Bq1oXArm.js";import"./index-e3YpZRrx.js";import"./copy-BPqkJYr8.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BcEQ8L2G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5WE_OvnW.js";import"./index-D-2Xy6-7.js";import"./index-DvsRYyu2.js";import"./Link-Bm6hDi5n.js";import"./index-CjEEWo15.js";import"./index-NQDiuZnO.js";import"./index-D5j3aFdB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSKVbp8f.js";import"./addCustomCSSWithScoping-syEQKqx0.js";import"./index-Dh7QOf24.js";import"./information-SSL8fTlY.js";import"./sys-enter-2-DpynL0zo.js";import"./alert-Cg_jUYoP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BKcuFWs0.js";import"./delete-DU5JPvil.js";import"./settings-CAMQwqmo.js";import"./NoData-CS9d_T0F.js";import"./IllustratedMessage-DUoAl3Os.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Dhw3wtOK.js";import"./index-BrXkRr4R.js";import"./index-B_5Bk2gc.js";import"./slim-arrow-down-SFAyp675.js";import"./Input-DGQILfbB.js";import"./ResponsivePopoverCommon.css-DHGIMiJp.js";import"./ValueStateMessage.css-BxEbM0ZH.js";import"./Suggestions.css-BMP_MqwS.js";import"./ListBoxItemGroupTemplate-DIeTn5uD.js";import"./ComboBoxItemGroup-zJxojY-y.js";import"./ListItemBaseTemplate-BNaOpv56.js";import"./Token-B7UTvzfg.js";import"./ScrollEnablement-elkrwhQK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ch3b8ATr.js";import"./ToggleButton-C3ZCJHYy.js";import"./SuggestionItem-S-IdKs5T.js";import"./index-BzcV6bM9.js";import"./Option-Cz8g5WWG.js";import"./index-CMaWI52k.js";import"./SegmentedButton-B381Bdph.js";import"./index-Ckl4FRii.js";import"./Select-C-GaGD0T.js";import"./InvisibleMessage-B6Ycx_Pm.js";import"./slim-arrow-down-BYajRtDR.js";import"./index-BfmQkxfZ.js";import"./index-CpUxheOc.js";import"./index-CMdYQA8p.js";import"./index-BzF6Y4F3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPTMokL8.js";import"./group-2-04jHDyvg.js";import"./sort-descending-Og-hQ95c.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gpTxbnHr.js";import"./utils-DhSRaKWy.js";import"./index-jP1C0Meo.js";import"./index-DQqc6G4F.js";import"./index-DQIER8Qr.js";import"./navigation-down-arrow-CM77MDkP.js";import"./navigation-right-arrow-DuT2Agvz.js";import"./navigation-right-arrow-FD0mFBSd.js";import"./useCurrentTheme-DHGbHcPn.js";import"./index-BTuni5mo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-J8i0PIKg.js";import"./paper-plane-SEQuxJaq.js";import"./index-BRiU5eaI.js";import"./less-CwBaSYHB.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
