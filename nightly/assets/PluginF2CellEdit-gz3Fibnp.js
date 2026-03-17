import{j as e}from"./iframe-B8dw45Pm.js";import{useMDXComponents as o}from"./index-CDTgJgbW.js";import{I as r}from"./CommandsAndQueries-Bl0bAz-u.js";import{M as l,C as a}from"./blocks-CPHZ0sq-.js";import"./Tag-WXORlQvy.js";import"./index-D7N30NY8.js";import"./copy-KGIzxzBV.js";import{F as c}from"./Footer-DGDb1ilk.js";import"./PageNotFound-DfoC1Yw_.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-RgBDOPDd.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BB11RQL1.js";import"./index-C46a650J.js";import"./index-BGlbQvkZ.js";import"./index-QyvR-n2-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1CIx6RM.js";import"./addCustomCSSWithScoping-CsB8TxAm.js";import"./index-DOUsK0Sd.js";import"./index-6NVZEy4N.js";import"./index-DMbxZG4m.js";import"./information-SmgVOr7y.js";import"./sys-enter-2-CP5yuJAd.js";import"./alert-8CVWRnEr.js";import"./index-S966bfr_.js";import"./Illustrations-Df2_smGK.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BidkkRmv.js";import"./delete-BZJ6IUvv.js";import"./settings-B6wZytM7.js";import"./NoData-BUS2UBU9.js";import"./NoFilterResults-jB3EY9FE.js";import"./index-CsGQVrVS.js";import"./IllustratedMessage-Db95xz8S.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-zKJrkqf2.js";import"./Input-DbCtg-3t.js";import"./ResponsivePopoverCommon.css-C-gN5NTO.js";import"./ValueStateMessage.css-D9UCc8Z-.js";import"./Suggestions.css-CdKXXl_R.js";import"./ListBoxItemGroupTemplate-C-8z5r-p.js";import"./ComboBoxItemGroup-BVTa3qQ4.js";import"./ListItemBaseTemplate-F5Kzrq16.js";import"./Token-BmxSoTRq.js";import"./ScrollEnablement-D1x-dzeA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2eamaf3.js";import"./ToggleButton-D20aF6qv.js";import"./multiselect-all-DqnfVi1W.js";import"./SuggestionItem-DjkrwIhA.js";import"./index-BDSWlRed.js";import"./Option-B6Dpr6jo.js";import"./index-DCu3NKJW.js";import"./SegmentedButton-B9mtat3Y.js";import"./index-C-oOO5rJ.js";import"./Select-BCQ8hRSI.js";import"./InvisibleMessage-DbReB1VG.js";import"./index-BrzIBMwv.js";import"./index-BibcwOaq.js";import"./index-CMSw6EyH.js";import"./index-B_Jr5JgK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BUM7m7qO.js";import"./group-2-CSZUjswS.js";import"./sort-descending-CjviAhWU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DmjBGCYy.js";import"./utils-DNuiF_K5.js";import"./index-DHfnvRLb.js";import"./index-DKSRGGEL.js";import"./index-Bjh-kMUz.js";import"./navigation-down-arrow-SQxN7jii.js";import"./navigation-right-arrow-DLo6eUJB.js";import"./navigation-right-arrow-BdBKLkX8.js";import"./useCurrentTheme-Ler3vnfg.js";import"./index-0xKDvNxf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwcAc9uO.js";import"./paper-plane-CkYIVFEz.js";import"./index-CO9JJlg2.js";import"./less-B347_aem.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
