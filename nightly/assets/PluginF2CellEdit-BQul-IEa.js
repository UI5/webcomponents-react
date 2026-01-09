import{j as e}from"./iframe-Cr6oQmRd.js";import{useMDXComponents as o}from"./index-evhaF9WH.js";import{I as l,F as r}from"./CommandsAndQueries-DyaEp24s.js";import{M as a,C as c}from"./blocks-BuJgXu1r.js";import"./Tag-BQohtkMw.js";import"./index-C0N3ti0U.js";import"./copy-CZb07l2e.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CNSO2-Yr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TJ6Pynu-.js";import"./index-ClHBD-hy.js";import"./index-D3MvNgPx.js";import"./Link-Zz-QOIrn.js";import"./index-DcIQ9jq2.js";import"./index-D6mcpJOs.js";import"./index-L71irp-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN2SmbWo.js";import"./addCustomCSSWithScoping-zjLKSZUa.js";import"./index-1zaXUkR9.js";import"./information-ClN6WTRB.js";import"./sys-enter-2-Bqn_SCi3.js";import"./alert-D5OzLbEL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHLyNJm_.js";import"./delete-Pbj3X59-.js";import"./settings-DaBUhecZ.js";import"./NoData-8f9QU6Au.js";import"./IllustratedMessage-DEbMLr2Z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DPPo2QH7.js";import"./index-lGIOGYW2.js";import"./index-dhnNfvqN.js";import"./slim-arrow-down-DRXwOi-S.js";import"./Input-Cdi1ONYj.js";import"./ResponsivePopoverCommon.css-Cg9mOybv.js";import"./ValueStateMessage.css-D7Snw4FC.js";import"./Suggestions.css-BnQBqKbG.js";import"./ListBoxItemGroupTemplate-BTBetl9N.js";import"./ComboBoxItemGroup-CF3RQPEz.js";import"./ListItemBaseTemplate-FGeazb6H.js";import"./Token-D3W6Bsly.js";import"./ScrollEnablement-C96PrwAf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQbeSHYY.js";import"./ToggleButton-BFkiT8DZ.js";import"./SuggestionItem-D8JUaK4y.js";import"./index-CsZ3MJDk.js";import"./Option-BERpoTxk.js";import"./index-CPNpM3Gi.js";import"./SegmentedButton-DDXJEdiY.js";import"./index-D88oWc7K.js";import"./Select-CcNl591L.js";import"./InvisibleMessage-thzwE5Eq.js";import"./slim-arrow-down-ZsLuCJkq.js";import"./index-D70zfhH1.js";import"./index-DMCKlwNV.js";import"./index-BzN4d7ds.js";import"./index-DZthy7eH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJexQfFb.js";import"./group-2-D4WjFEWb.js";import"./sort-descending-BRWVpkHW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CdzFZllT.js";import"./utils-CrX1fJt7.js";import"./index-BhnnBVTO.js";import"./index-dB9wQJYj.js";import"./index-BxkOh5-O.js";import"./navigation-down-arrow-LQ6wC2gk.js";import"./navigation-right-arrow-Bc2pAact.js";import"./navigation-right-arrow-BKMtPJeS.js";import"./useCurrentTheme-C8QQj4mW.js";import"./index-C8SRQwYw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-V7dBuQmF.js";import"./paper-plane-B_bfz4Lw.js";import"./index-D-Sc7kHv.js";import"./less-oIZYDRMd.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
