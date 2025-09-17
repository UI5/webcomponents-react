import{j as e}from"./iframe-_UyBg_Hl.js";import{useMDXComponents as o}from"./index-DEEVvvo3.js";import{I as r,F as l}from"./CommandsAndQueries-0B2XTB0a.js";import{M as a,C as c}from"./blocks-CYzyNaRH.js";import"./Tag-CQlNZs2z.js";import"./index-5woB_pVn.js";import"./copy-BX3zmcvZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-REkTP7LB.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DpskCw-c.js";import"./index-e_5k1_Nn.js";import"./index-DXgH8OvD.js";import"./Link-5ArX67S2.js";import"./addCustomCSSWithScoping-BV_2mez6.js";import"./index-LcJnWxTb.js";import"./index-x1moOr2G.js";import"./index-CbWaderx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-SEMy8FFe.js";import"./index-CCQAf2jY.js";import"./information-DYJp_bgk.js";import"./sys-enter-2-Bc61YsW4.js";import"./alert-Vjb3s5VB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BRPDjZI-.js";import"./delete-feXjq1P0.js";import"./settings-CfbDn0b2.js";import"./NoData-KNRhNzoE.js";import"./IllustratedMessage-BS_1IYHK.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-TH_0UP1M.js";import"./index-PnFbS3U_.js";import"./slim-arrow-down-qdV-4r_r.js";import"./Input-DIEfc7NS.js";import"./ResponsivePopoverCommon.css-DjgY9XeO.js";import"./ValueStateMessage.css-xNCah7OI.js";import"./Suggestions.css-pEdA0aWG.js";import"./ListBoxItemGroupTemplate-BUTFv0ua.js";import"./ComboBoxItemGroup-BDmTUb-I.js";import"./ListItemBaseTemplate-BjR5kqUG.js";import"./Token-C36Uamaf.js";import"./ScrollEnablement-BddgiWpw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DYXiefij.js";import"./ToggleButton-BBZPk2By.js";import"./SuggestionItem-CTxEE-_R.js";import"./index-CQKDXWwe.js";import"./Option-0oUm9b3Y.js";import"./index-C8GhuzMH.js";import"./SegmentedButton-D9-1cTAl.js";import"./index-D3Vrf9MZ.js";import"./Select-CFMlTJjs.js";import"./InvisibleMessage-G4E3aSXE.js";import"./slim-arrow-down-BtfHa_9S.js";import"./useIsRTL-BKJsyXLQ.js";import"./index-Q841TG4t.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BerSEzZ1.js";import"./group-2-BbIVBsLi.js";import"./sort-descending-DNDy-Ho_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DD84l_xa.js";import"./utils-DlslC0su.js";import"./index-CevzIQBH.js";import"./index-BX6O9pgn.js";import"./index-Ck9crqy1.js";import"./navigation-down-arrow-CqYoF-4_.js";import"./navigation-right-arrow-HJTsoaPp.js";import"./navigation-right-arrow-D_O0ENz8.js";import"./useCurrentTheme-BVwt7H5k.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BWBgMRln.js";import"./debounce-D7W5PopO.js";import"./paper-plane-ZhsZU26w.js";import"./index-DjxLOnDD.js";import"./less-s7L_t8AQ.js";import"./index-BCeKQLJ1.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
