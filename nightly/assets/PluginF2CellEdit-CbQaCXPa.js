import{j as e}from"./iframe-DMaNIVf0.js";import{useMDXComponents as o}from"./index-BdK8Evs-.js";import{I as l,F as r}from"./CommandsAndQueries-BFOyQZVK.js";import{M as a,C as c}from"./blocks-B3cnhH9X.js";import"./Tag-BBahPAh3.js";import"./index-DP2_-MiN.js";import"./copy-CnV7FmZR.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-giuHKaPD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVN0x1pl.js";import"./index-CpqFSLu_.js";import"./index-BPyW7bYo.js";import"./Link-D80_PYHk.js";import"./index-BzUF981H.js";import"./index-CkAQHTQN.js";import"./index-BZICyQUU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSBcJXg7.js";import"./addCustomCSSWithScoping-DURvRrzg.js";import"./index-DVWNlONk.js";import"./information-B4P6Loy7.js";import"./sys-enter-2-C0ZNaLlT.js";import"./alert-afWyAW_B.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DL_HHA5w.js";import"./delete-UGJs4_V3.js";import"./settings-S1nrqURM.js";import"./NoData-BLW3WdAc.js";import"./IllustratedMessage-B4Aro-vw.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WCFpOywi.js";import"./index-Bwx3EN3f.js";import"./index-D6T6Dl-c.js";import"./slim-arrow-down-B7sjAyNA.js";import"./Input-DKkkpn3d.js";import"./ResponsivePopoverCommon.css-D74rDr_U.js";import"./ValueStateMessage.css-fkyFStPA.js";import"./Suggestions.css-0HZ10WLs.js";import"./ListBoxItemGroupTemplate-DZ9eXffT.js";import"./ComboBoxItemGroup-BR69p7yg.js";import"./ListItemBaseTemplate-Bf7uY7ZQ.js";import"./Token-CjC8nPvp.js";import"./ScrollEnablement-8_TnQxf5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8-OXolT.js";import"./ToggleButton--teKc-ne.js";import"./SuggestionItem-BnwBWzmm.js";import"./index-BoQ0qsWE.js";import"./Option-sH8FtQNh.js";import"./index-D8b8tj0j.js";import"./SegmentedButton-BTVYA_sE.js";import"./index-BXxloo5d.js";import"./Select-B0oytRV7.js";import"./InvisibleMessage-VIwqV5hq.js";import"./slim-arrow-down-CHc2IDnL.js";import"./index-Cn4MmIEZ.js";import"./index-lWv6OELN.js";import"./index-B2RA2zCC.js";import"./index-muEq_JKA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMomJqZY.js";import"./group-2-BHcp_Qz3.js";import"./sort-descending-Bq9hP7hO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BlGrjF5y.js";import"./utils-pBFYHr6i.js";import"./index-ERfIUViA.js";import"./index-JwRt4jqM.js";import"./index-DOnDyXS8.js";import"./navigation-down-arrow-D0RqXh7N.js";import"./navigation-right-arrow-CLAxjwwI.js";import"./navigation-right-arrow-CLLyA8n3.js";import"./useCurrentTheme-C69-McZX.js";import"./index-CKSN0DqT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQGRkAtk.js";import"./paper-plane-DVH2n_JI.js";import"./index-C9qNzj0Y.js";import"./less-BXBsPGl8.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
