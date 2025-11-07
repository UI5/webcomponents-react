import{j as e}from"./iframe-DGnDchDQ.js";import{useMDXComponents as o}from"./index-gqhlbnnP.js";import{I as l,F as r}from"./CommandsAndQueries-nFfK_W-O.js";import{M as a,C as c}from"./blocks-CpnEbXW7.js";import"./Tag-Bqlxcgw6.js";import"./index-ab40gpM3.js";import"./copy-DiOqbFXx.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BTvfSlOu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8BbDNnv.js";import"./index-C1Lkwl5k.js";import"./index-DBMKQPCi.js";import"./Link-DlCRMPDC.js";import"./index--LdK-cim.js";import"./index-DwBLo3Dd.js";import"./index-CHVAkMFk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKYdG7d4.js";import"./addCustomCSSWithScoping-loT15OrI.js";import"./index-BpzOuhJc.js";import"./information-C_x76Wro.js";import"./sys-enter-2-C7D1DjDO.js";import"./alert-Bv5R7OxS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdqJa0mU.js";import"./delete-BE1PBYXz.js";import"./settings-BAjMM07B.js";import"./NoData-RpKJOQtT.js";import"./IllustratedMessage-BUXdJOQa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-COZ-85wq.js";import"./index-DDW91UyV.js";import"./index-DU55bLzP.js";import"./slim-arrow-down-co0mwyOK.js";import"./Input-CaqdVj6e.js";import"./ResponsivePopoverCommon.css-Br3rrJZc.js";import"./ValueStateMessage.css-CHKpDORf.js";import"./Suggestions.css-DqURt6WR.js";import"./ListBoxItemGroupTemplate-B26xTI50.js";import"./ComboBoxItemGroup-CoPptm90.js";import"./ListItemBaseTemplate-BVD1phCE.js";import"./Token-BF1rX6rG.js";import"./ScrollEnablement-CKB2L65n.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9i9lbvrA.js";import"./ToggleButton-CWVqj_J_.js";import"./SuggestionItem-DRXtzHoL.js";import"./index-BYs6kOFB.js";import"./Option-kCDR0Dm6.js";import"./index-DiHvbKWq.js";import"./SegmentedButton-7ThStUDC.js";import"./index-Bf5jvAmF.js";import"./Select-rYtMqXh7.js";import"./InvisibleMessage-BzbFhHWs.js";import"./slim-arrow-down-CnIeCsYc.js";import"./index-BWAWA91T.js";import"./index-C_6mlYi2.js";import"./index-Bk6kEH1k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrOZNGpr.js";import"./group-2-BkKxU7TT.js";import"./sort-descending-BfKrVPDc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CRICYRQq.js";import"./utils-C0I-T_5s.js";import"./index-Dr0nkd7d.js";import"./index-KV9RZy53.js";import"./index-D808ykgs.js";import"./navigation-down-arrow-BwWk1dVU.js";import"./navigation-right-arrow-BBaPKo9n.js";import"./navigation-right-arrow-DV_J89S_.js";import"./useCurrentTheme-LA5drGg4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-AvaiyNj6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-KjkI_mtd.js";import"./paper-plane-jT_LadMY.js";import"./index-BiBB6OBn.js";import"./less-De-Tz2uD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
