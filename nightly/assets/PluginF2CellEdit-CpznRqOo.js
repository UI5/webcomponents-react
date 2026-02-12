import{j as e}from"./iframe-9L5DfdAL.js";import{useMDXComponents as o}from"./index-BFOQlGJl.js";import{I as l,F as r}from"./CommandsAndQueries-BK-K5RhD.js";import{M as a,C as c}from"./blocks-BhviKO8q.js";import"./Tag-Bc-yWu1Y.js";import"./index-BfSNMryQ.js";import"./copy-B4o5kCyp.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D3bL7dyl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4W78R8l.js";import"./index-DCrnunZ9.js";import"./index-Dt7xhFDV.js";import"./Link-o-RCe_HP.js";import"./index-CCxjFqbl.js";import"./index-CFjv4LxR.js";import"./index-DNulmfCG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-d02CNbEj.js";import"./addCustomCSSWithScoping-BavaT7N2.js";import"./index-BKv2oNTW.js";import"./information-E0dtjqMz.js";import"./sys-enter-2-CWAnp9j1.js";import"./alert-krPLRZgR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XNM9FnGm.js";import"./delete-JR2MZRfb.js";import"./settings-DxBIqKBm.js";import"./NoData-3ZcUB5Ct.js";import"./IllustratedMessage-BEdS4qmU.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C91Oik-m.js";import"./index-LeKCpS7q.js";import"./index-sAVTaYY-.js";import"./slim-arrow-down-DMCTeiC5.js";import"./Input-B_a4lk-J.js";import"./ResponsivePopoverCommon.css-DR2BAcH9.js";import"./ValueStateMessage.css-BbD6Vd04.js";import"./Suggestions.css-DgOg4FzN.js";import"./ListBoxItemGroupTemplate-QimfEu9Q.js";import"./ComboBoxItemGroup-D4VMzcBc.js";import"./ListItemBaseTemplate-CAeeqms4.js";import"./Token-sTVAKlsR.js";import"./ScrollEnablement-D6SL2uwM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-G_TCf98J.js";import"./ToggleButton-5xA1-SjB.js";import"./SuggestionItem-66Xrv75f.js";import"./index-DGOHxSTi.js";import"./Option-B5eqm6lt.js";import"./index-DD-YT-Yv.js";import"./SegmentedButton-C06xcamZ.js";import"./index-BSqaxHhQ.js";import"./Select-Bf3hq0iL.js";import"./InvisibleMessage-BFzkQW2o.js";import"./slim-arrow-down-CVQcjJXq.js";import"./index-BR-9eyJZ.js";import"./index-BNu0C3GX.js";import"./index-BHRZrxSX.js";import"./index-DFno4m6x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZHCNsIg.js";import"./group-2-BksPNJTz.js";import"./sort-descending-vwUdYYI9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1B6dX5C.js";import"./utils--MAnWLXj.js";import"./index-DNleTpkO.js";import"./index-DiSDR8FZ.js";import"./index-8UpyXoAN.js";import"./navigation-down-arrow-DejdbZn2.js";import"./navigation-right-arrow-D8pf5Giz.js";import"./navigation-right-arrow-Dr_s8HRL.js";import"./useCurrentTheme-zSdIFJxn.js";import"./index-CjDsuZ3a.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BZKijWM3.js";import"./paper-plane-BmU2Eq9f.js";import"./index-OapWeUnp.js";import"./less-Coam-0fQ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
