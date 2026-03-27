import{j as e}from"./iframe-D-TNtC6A.js";import{useMDXComponents as o}from"./index-DDfPSZgy.js";import{I as r}from"./CommandsAndQueries-CCy8Y-No.js";import{M as l,C as a}from"./blocks-RldXLLlr.js";import"./Tag-CVmCoWT_.js";import"./index-PDZqoB_N.js";import"./copy-BJeubdCo.js";import{F as c}from"./Footer-DhOHIb5E.js";import"./PageNotFound-CRTwOHot.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C7rivsvq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BGCjF1qN.js";import"./index-C2w-vlt1.js";import"./index-BDllvg-C.js";import"./index-DbrfUFZo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CV5eSmfw.js";import"./addCustomCSSWithScoping-5_2YlXdt.js";import"./index-C4n54s66.js";import"./index-DA9C_9_K.js";import"./index-dgee814-.js";import"./information-DHrVSqd8.js";import"./sys-enter-2-B-IKKoin.js";import"./alert-COQE9Wii.js";import"./index-dI-i4srq.js";import"./Illustrations-MW4Ztj5J.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-MyDeBWpT.js";import"./delete-GPaEZE8g.js";import"./settings-Bb5Mx7xn.js";import"./NoData-B9h6w7Zz.js";import"./NoFilterResults-Bp3EjNTS.js";import"./index-BKgssG5g.js";import"./IllustratedMessage-B2Q7MVnn.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-e_Mdpfp_.js";import"./Input-BXBWRRsA.js";import"./ResponsivePopoverCommon.css-BXn4_Wc7.js";import"./ValueStateMessage.css-B4_y8RjA.js";import"./Suggestions.css-hnx4n1TH.js";import"./ListBoxItemGroupTemplate-BIw1VxCq.js";import"./ComboBoxItemGroup-aVMq34XM.js";import"./ListItemBaseTemplate-B0alOYy7.js";import"./Token-4VyHLU6r.js";import"./ScrollEnablement-D_mv-5V2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DuzTgsRf.js";import"./ToggleButton-CkF3MXn8.js";import"./multiselect-all-B9XzavJM.js";import"./SuggestionItem-COYhuiQ9.js";import"./index-BKVW7RHH.js";import"./Option-CbSicczt.js";import"./index-uAzDHEjW.js";import"./SegmentedButton-f-Cay0kn.js";import"./index-DNu777W2.js";import"./Select-DVELUtat.js";import"./InvisibleMessage-BWPPhSeN.js";import"./index-D5UP9jEd.js";import"./index-Ct1p6vuk.js";import"./index-Bb90VLCU.js";import"./index-ptWDqsta.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cfh1ZJNO.js";import"./group-2-y-iu2VRM.js";import"./sort-descending-BM0MkbBg.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BLX5GUEm.js";import"./utils-DVfFMzf7.js";import"./index-DnoKZWri.js";import"./index-pc0DCYF4.js";import"./index-BZfHb_PP.js";import"./navigation-down-arrow-B34ZUBu8.js";import"./navigation-right-arrow-BqgU6zlC.js";import"./navigation-right-arrow-CHS2kQ0a.js";import"./useCurrentTheme-BMG4HH6K.js";import"./index-BFc7Am7o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2x73p0EG.js";import"./paper-plane-BOmm5Qav.js";import"./index-BebXPfBu.js";import"./less-BWi_dI9N.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
