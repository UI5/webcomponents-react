import{j as e}from"./iframe-C7iTiayp.js";import{useMDXComponents as o}from"./index-CMlBI8kK.js";import{I as l,F as r}from"./CommandsAndQueries-Cwf0qDUZ.js";import{M as a,C as c}from"./blocks-BjGmnX8N.js";import"./Tag-CFZhsv-K.js";import"./index-DWyaFLqZ.js";import"./copy-CkvBTa6Z.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BBNlf_1p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bi4CD_jF.js";import"./index-CepcJiY6.js";import"./index-BmPAlSpi.js";import"./Link-D4JNNlPq.js";import"./index-fBsRTAa2.js";import"./index-3ZnD0cv6.js";import"./index-zxgrwg2w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-khcOq4rr.js";import"./addCustomCSSWithScoping-DLqaogwL.js";import"./index-BXtbzqKT.js";import"./information-BMfuHNkn.js";import"./sys-enter-2-wp3WX8g7.js";import"./alert-D64S_sTf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bo89s8ys.js";import"./delete-CCDVjtvW.js";import"./settings-BKAeCR2Z.js";import"./NoData-Bf3fSXva.js";import"./IllustratedMessage-_2lGAz-J.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-1kBGmlid.js";import"./index-BgWBB9Nj.js";import"./index-D6FSQNaA.js";import"./slim-arrow-down-DQ4u4tcO.js";import"./Input-Dc29Rl46.js";import"./ResponsivePopoverCommon.css-BuOZvZm3.js";import"./ValueStateMessage.css-BylK2ZGd.js";import"./Suggestions.css-HeG5Oc_t.js";import"./ListBoxItemGroupTemplate-CzMwnapl.js";import"./ComboBoxItemGroup-BwGON5jx.js";import"./ListItemBaseTemplate-DmWIq4QF.js";import"./Token-Bw-ivO-m.js";import"./ScrollEnablement-m0sz45fi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dd95Np6p.js";import"./ToggleButton-C2EcXRa7.js";import"./SuggestionItem-B0EqOaoY.js";import"./index-BbRE-btA.js";import"./Option-CJLLlMWt.js";import"./index-CSbbIXmy.js";import"./SegmentedButton-B2udwM1j.js";import"./index-DDYhMlnk.js";import"./Select-Do7H2USn.js";import"./InvisibleMessage-D1U00Tgj.js";import"./slim-arrow-down-BjRxfcn_.js";import"./index-DQ8hKiqh.js";import"./index-DA0UiR-Z.js";import"./index-S0HdPZGc.js";import"./index-DkOK-tBR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dc2A1PJb.js";import"./group-2-DDh7CKio.js";import"./sort-descending-tAdmCFu7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE_IcfY_.js";import"./utils-DjivXbSk.js";import"./index-D-JJzP2u.js";import"./index-jp7mGW-W.js";import"./index-D3yVkpzL.js";import"./navigation-down-arrow-DGq3-RIe.js";import"./navigation-right-arrow-EXPZKsWP.js";import"./navigation-right-arrow-DuxTVxJD.js";import"./useCurrentTheme-BSh8lxlr.js";import"./index-D1HtHk7r.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUKUp41V.js";import"./paper-plane-D-TZChdH.js";import"./index-7U_-Ii5q.js";import"./less-DjUmBMvH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
