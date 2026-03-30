import{j as e}from"./iframe-QfBB5oxv.js";import{u as o,M as l,C as r}from"./blocks-BNoxk89Z.js";import{I as a}from"./CommandsAndQueries-CHXq-8GX.js";import"./Tag-jV4rQ7he.js";import"./index-CXwzMtEr.js";import"./copy-Ddev0qyd.js";import{F as c}from"./Footer-Djb8KmT2.js";import"./PageNotFound-BF3CKwDf.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B6o6xcm7.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CjKrRSzJ.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./index-BP6rOJzd.js";import"./index-CMW9Znni.js";import"./index-C23APlHe.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./index-B0PZpUdZ.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNErvuHa.js";import"./delete-ChbxvCaX.js";import"./settings-BJf-PQsO.js";import"./NoData-DgG04WAC.js";import"./NoFilterResults-BU08mcFJ.js";import"./index-BW8anNwZ.js";import"./IllustratedMessage-B0tuKdc_.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CzounWiX.js";import"./Input-Dq7YMe08.js";import"./ResponsivePopoverCommon.css-CNHfRjyj.js";import"./ValueStateMessage.css-D6MJ9XHs.js";import"./Suggestions.css-DuOxNvnL.js";import"./ListBoxItemGroupTemplate-KaiE3Akg.js";import"./ComboBoxItemGroup-BYlx2q4W.js";import"./ListItemBaseTemplate-Dh63WkMo.js";import"./Token-bE2o3WQc.js";import"./ScrollEnablement-D9-XNTBn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYJdKcUD.js";import"./ToggleButton-BzWglLQm.js";import"./multiselect-all-DvkYK6cA.js";import"./SuggestionItem-BX-RC-Ep.js";import"./index-DxqVVwu_.js";import"./Option-PTtFyRUo.js";import"./index-D6pqZsOu.js";import"./SegmentedButton-ChlAck0v.js";import"./index-Dvo2DlNr.js";import"./Select-DcyuEmeq.js";import"./InvisibleMessage-B3q_stCZ.js";import"./index-CNet7Rn8.js";import"./index-BhwDH-EY.js";import"./index-ChcMW--M.js";import"./index-CEP4QNMA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Duv1kUg0.js";import"./group-2-DOvkGS22.js";import"./sort-descending-ARK23MyZ.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cpx9pvDO.js";import"./utils-Gg7Ythg5.js";import"./index-eHKj1k2p.js";import"./index-_er2dUIp.js";import"./index-COg9gy3g.js";import"./navigation-down-arrow-DINT9BlU.js";import"./navigation-right-arrow-Ce-DclTe.js";import"./navigation-right-arrow-C22SmqFg.js";import"./useCurrentTheme-CclwzgwB.js";import"./index-ClULG3sl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPTRgBT8.js";import"./paper-plane-BEUN1GKr.js";import"./index-CB8cZ3hf.js";import"./less-Bm7RlntL.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(a,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(r,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function _e(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{_e as default};
