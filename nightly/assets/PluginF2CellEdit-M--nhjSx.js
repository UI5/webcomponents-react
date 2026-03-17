import{j as e}from"./iframe-DJaejRN_.js";import{useMDXComponents as o}from"./index-BkjBMRMv.js";import{I as r}from"./CommandsAndQueries-83bvSdoV.js";import{M as l,C as a}from"./blocks-B8-Y-Ni6.js";import"./Tag-zqqHRvHY.js";import"./index-CK92YQRu.js";import"./copy-tix8vrrW.js";import{F as c}from"./Footer-XAiTUg9G.js";import"./PageNotFound-DWPqXbgo.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-S3OMrBy1.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DT5pBXPw.js";import"./index-I-NngIql.js";import"./index-Bal_B_tE.js";import"./index-BVWvlifs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-HTE3RcD3.js";import"./addCustomCSSWithScoping-BTx9ebqV.js";import"./index-MWuEJcIb.js";import"./index-D5l-jmF5.js";import"./index-B75X8BI3.js";import"./information-BX0fOOvt.js";import"./sys-enter-2-1CYV1NDA.js";import"./alert-BrdS4drn.js";import"./index-DyG0juUn.js";import"./Illustrations-Ba3wQCeI.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ic1RC2lh.js";import"./delete-B2TUGyO-.js";import"./settings-oIbW7Kic.js";import"./NoData-Byp02WJx.js";import"./NoFilterResults-DWMM6VEP.js";import"./index-bCAzbOQs.js";import"./IllustratedMessage-s2lr1q6e.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BMQ89NOj.js";import"./Input-CQcb9um5.js";import"./ResponsivePopoverCommon.css-DP4stE3l.js";import"./ValueStateMessage.css--EiJ9K55.js";import"./Suggestions.css-x42H9hm7.js";import"./ListBoxItemGroupTemplate-CI1P5CVP.js";import"./ComboBoxItemGroup-vt_nZJ4z.js";import"./ListItemBaseTemplate-tq4M4CSx.js";import"./Token-CcP7J3UG.js";import"./ScrollEnablement-BJkBQfQ1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-wGcDRCSr.js";import"./ToggleButton-Bg6zoSMg.js";import"./multiselect-all-Cfr97RyP.js";import"./SuggestionItem-CJn-zf9Z.js";import"./index-dGJDzqrP.js";import"./Option-BqthOmxs.js";import"./index-C6g94agN.js";import"./SegmentedButton-PDpQSPVH.js";import"./index-BgCVM7Zt.js";import"./Select-dEPIbNJV.js";import"./InvisibleMessage-Dz7aUwZ8.js";import"./index-DFKZ6jPd.js";import"./index-BPdG_RYR.js";import"./index-DjtZBg8h.js";import"./index-BNdX0xO5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDPJ_dAS.js";import"./group-2-CVKMzmVq.js";import"./sort-descending-Cu3NsCcr.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmtLvC-2.js";import"./utils-TCEZc21J.js";import"./index-DhUMRh-k.js";import"./index-ClucFX_O.js";import"./index-Bfqqdgj5.js";import"./navigation-down-arrow-Bci2V2X1.js";import"./navigation-right-arrow-iEyeUQmo.js";import"./navigation-right-arrow-BSQqx-Ox.js";import"./useCurrentTheme-ywdbp9Ht.js";import"./index-_GCZfNpS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CiD1d4mj.js";import"./paper-plane-3RukpGeM.js";import"./index-BC2sgrml.js";import"./less-5TCBAmqB.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
