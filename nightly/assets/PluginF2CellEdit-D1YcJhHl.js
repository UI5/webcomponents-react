import{j as e}from"./iframe-bzWujj58.js";import{useMDXComponents as o}from"./index-BCWfYBG3.js";import{I as l,F as r}from"./CommandsAndQueries-CSnnb9h_.js";import{M as a,C as c}from"./blocks-X5VJ78n5.js";import"./Tag-CVKVqceK.js";import"./index-CSD4D-IO.js";import"./copy-GDuXt_K5.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BfTucdcR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1tcJfS2t.js";import"./index-DVLKNd8I.js";import"./index-CBomhFI_.js";import"./Link-DZnymjml.js";import"./index-BfOrv2Q6.js";import"./index-CCshg6zD.js";import"./index-DD0jDMax.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BiRbi5N7.js";import"./addCustomCSSWithScoping-CWEhHtD-.js";import"./index-CUs-JjpA.js";import"./information-C9FM1h13.js";import"./sys-enter-2-BEIn8VDt.js";import"./alert-3fLrr5gT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DAnRP-h9.js";import"./delete-BQOkFj_7.js";import"./settings-xB4h6gy4.js";import"./NoData-DhYFwryF.js";import"./IllustratedMessage-Bj3RsISn.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-GOhmEK2P.js";import"./index-Bn16gfaT.js";import"./index-M_9IBZFV.js";import"./slim-arrow-down-DOFohywN.js";import"./Input-DsykwZcZ.js";import"./ResponsivePopoverCommon.css-Byd21R2h.js";import"./ValueStateMessage.css-BiINGXZV.js";import"./Suggestions.css-CWqYjdPw.js";import"./ListBoxItemGroupTemplate-_-jQCq9E.js";import"./ComboBoxItemGroup-Bl3kAabF.js";import"./ListItemBaseTemplate-DgszZIVa.js";import"./Token-Bo9P9XfT.js";import"./ScrollEnablement-DfIaDKp3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BUi3BAXQ.js";import"./ToggleButton-aItTBqg8.js";import"./SuggestionItem-BLHyZke7.js";import"./index-ocf09ezY.js";import"./Option-DIIl0zvY.js";import"./index-BltXzpxB.js";import"./SegmentedButton-CWgqCnl8.js";import"./index-BzH7jua9.js";import"./Select-DNFr47Ml.js";import"./InvisibleMessage-iKbGUbcD.js";import"./slim-arrow-down-D8yDs4Me.js";import"./index-BuV7Z7c1.js";import"./index-F3CZ5PU2.js";import"./index-BZhgR-Dt.js";import"./index-CF7Db4CN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlaD8IIA.js";import"./group-2-CpHThkVo.js";import"./sort-descending-oyA5Y4oF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hoVIfdZR.js";import"./utils-C_PlS108.js";import"./index-CYeZBUNC.js";import"./index-CQ8mgB0i.js";import"./index-DOuzQIbm.js";import"./navigation-down-arrow-3ULw9zrh.js";import"./navigation-right-arrow-CWBx1_6S.js";import"./navigation-right-arrow-C1871DiJ.js";import"./useCurrentTheme-BP7bNUlF.js";import"./index-Bp-G7IVz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BsMnXzoo.js";import"./paper-plane-DWH-h_Xo.js";import"./index-ILVay_S5.js";import"./less-BhqQM8jv.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
