import{j as e}from"./iframe-jDeV-G8S.js";import{useMDXComponents as o}from"./index-Da3DrjVc.js";import{I as l,F as r}from"./CommandsAndQueries-S46eotFY.js";import{M as a,C as c}from"./blocks-BVLmp_0m.js";import"./Tag-CoiXaVSg.js";import"./index-DNzR_fzc.js";import"./copy-DEHDDsgd.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B7xLL4Vz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYm7h2BG.js";import"./index-DJMOMMru.js";import"./index-BZOVbKF_.js";import"./Link-C8Q8wVMF.js";import"./index-DhmB-gDR.js";import"./index-GOQBvCdy.js";import"./index--p5n_M0a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeVQuTnR.js";import"./addCustomCSSWithScoping-DNXKFIA9.js";import"./index-C8jlh6dJ.js";import"./information-CBKKlcN3.js";import"./sys-enter-2-D5f8NC37.js";import"./alert-Dk2Mtfik.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BaSB_xVI.js";import"./delete-C6VclcYK.js";import"./settings-C7QaHLBi.js";import"./NoData-B5IMrlNi.js";import"./IllustratedMessage-DYUp67Ci.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BraCc1Gf.js";import"./index-D8qN7Hry.js";import"./index-CnvfagGK.js";import"./slim-arrow-down-Vg8N0Q0I.js";import"./Input-oPDKy1ol.js";import"./ResponsivePopoverCommon.css-DpB6CavY.js";import"./ValueStateMessage.css-uRbauoI5.js";import"./Suggestions.css-DiV-Lfrn.js";import"./ListBoxItemGroupTemplate-C5UVYOIE.js";import"./ComboBoxItemGroup-DdLskjQz.js";import"./ListItemBaseTemplate-DG9IXdA-.js";import"./Token--hjAUxWq.js";import"./ScrollEnablement-BysKsuQY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BiM6YtfZ.js";import"./ToggleButton-cMq8je7X.js";import"./SuggestionItem-e6KTrnLc.js";import"./index-CECiZ_Xv.js";import"./Option-CReekOMZ.js";import"./index-DgdfTx4u.js";import"./SegmentedButton-BUR6TsSQ.js";import"./index-BchHiesQ.js";import"./Select-CMirSOvH.js";import"./InvisibleMessage-CSYFI2hH.js";import"./slim-arrow-down-BnGG1iQc.js";import"./index-3NCdG4IQ.js";import"./index-CBPksq_0.js";import"./index-dvlsjgN4.js";import"./index-B7d4NHtR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CabphWI6.js";import"./group-2-YQpUAD-P.js";import"./sort-descending-DyAgXLO6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSO1X3Eq.js";import"./utils-DijlQhLT.js";import"./index-CTR4qlZZ.js";import"./index-BGQ0DLLD.js";import"./index-CU2qxjFI.js";import"./navigation-down-arrow-CQCklFQ2.js";import"./navigation-right-arrow-BoiqaSPb.js";import"./navigation-right-arrow-Bc8erDMC.js";import"./useCurrentTheme-df9ByhFB.js";import"./index-CGu9uvTR.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsxwMa2U.js";import"./paper-plane-C0TXry-l.js";import"./index-BhxN8tHb.js";import"./less-CBiR1zC0.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
