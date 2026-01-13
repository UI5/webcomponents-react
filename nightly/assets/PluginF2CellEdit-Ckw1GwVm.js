import{j as e}from"./iframe-DfTuu2Qs.js";import{useMDXComponents as o}from"./index-tu9Knfll.js";import{I as l,F as r}from"./CommandsAndQueries-CbObYkDi.js";import{M as a,C as c}from"./blocks-DwvFSYgT.js";import"./Tag-a-ykqmZl.js";import"./index-D59W5J0R.js";import"./copy-CAppfZ8d.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CB5kiAXk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEqB_Mrf.js";import"./index-4cmdIwXv.js";import"./index-upgMd0Ps.js";import"./Link-DQEzecZX.js";import"./index-DV0Q9niH.js";import"./index-CHJ4eeD3.js";import"./index-B1cc6DOE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BlYlCK6x.js";import"./addCustomCSSWithScoping-l0p7E_oS.js";import"./index-D-5EknuX.js";import"./information-DFuUDpiC.js";import"./sys-enter-2-B3GhyP7w.js";import"./alert-CmUExS0E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoKMtFET.js";import"./delete-DYVw-TY0.js";import"./settings-D9nwGkWC.js";import"./NoData-DdHsrTKm.js";import"./IllustratedMessage-D0_ymalv.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Be1vXVQP.js";import"./index-Cw8YfcTi.js";import"./index-CV7e3qnP.js";import"./slim-arrow-down-Bhl2nWte.js";import"./Input-B76lxtdv.js";import"./ResponsivePopoverCommon.css-BP9K7x6e.js";import"./ValueStateMessage.css-TCHVXLEw.js";import"./Suggestions.css-Pfvf1GJg.js";import"./ListBoxItemGroupTemplate-CDN4ALTG.js";import"./ComboBoxItemGroup-BH5B9cpG.js";import"./ListItemBaseTemplate-D1uFrlaA.js";import"./Token-D4TeWFku.js";import"./ScrollEnablement-CRIFALzU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CshbuJzo.js";import"./ToggleButton-CwHG-y71.js";import"./SuggestionItem-DGN5b14S.js";import"./index-RBLRU_sl.js";import"./Option-BbQCz44h.js";import"./index-BOCJCl5X.js";import"./SegmentedButton-oliJxwDI.js";import"./index-ECWd-FKG.js";import"./Select-BLczAWPe.js";import"./InvisibleMessage-CNnUIwgG.js";import"./slim-arrow-down-yzUP4cof.js";import"./index-CAlOL0VM.js";import"./index-CQE4zKbm.js";import"./index-CZ2dIko2.js";import"./index-DzevBiS7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JkMKr1H-.js";import"./group-2-CaiuqVlS.js";import"./sort-descending-BRpdcvqz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSnTmES7.js";import"./utils-ZLpPM_1a.js";import"./index-DQM6KvvS.js";import"./index-CRmrR_Od.js";import"./index-CTOZYk49.js";import"./navigation-down-arrow-BTOOMHmS.js";import"./navigation-right-arrow-DEKgAHUd.js";import"./navigation-right-arrow-DZaHUhdt.js";import"./useCurrentTheme-DGG68oxl.js";import"./index-gcgg4h2j.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXblpA9j.js";import"./paper-plane-DDMey8sA.js";import"./index-D8AaX0Z0.js";import"./less-D2q1q7Ef.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
