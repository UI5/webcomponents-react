import{j as e}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as o}from"./index-CdriUjbp.js";import{I as l,F as r}from"./CommandsAndQueries-CxvYWHkR.js";import{M as a,C as c}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import"./copy-CFwp5FgG.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cy3cyHhy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";import"./index-DCyx6v--.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWywr3TW.js";import"./delete-CCzy9s8b.js";import"./settings-D42fuJuX.js";import"./NoData-Bup5hrqa.js";import"./IllustratedMessage-CHTeCatA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-ZuFlFv1T.js";import"./index-Dc9B5nZG.js";import"./index-JF5_76ci.js";import"./slim-arrow-down-ySZlwq-q.js";import"./Input-D4ca9rAR.js";import"./ResponsivePopoverCommon.css-BRrcd20a.js";import"./ValueStateMessage.css-Bk812_Kf.js";import"./Suggestions.css-BjM9wydn.js";import"./ListBoxItemGroupTemplate-AWhndfnj.js";import"./ComboBoxItemGroup-DoFoxDi9.js";import"./ListItemBaseTemplate-CpLLHa4Z.js";import"./Token-MTCn4enU.js";import"./ScrollEnablement-94tHLG88.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-vQZi_1g2.js";import"./ToggleButton-DDwhnOd_.js";import"./SuggestionItem-DsV9yF55.js";import"./index-sE10V8UB.js";import"./Option-B-1m3Lan.js";import"./index-Cb21HCJZ.js";import"./SegmentedButton-DsUwene6.js";import"./index-CL538puJ.js";import"./Select-eKqLtCSY.js";import"./InvisibleMessage-B_prVgph.js";import"./slim-arrow-down-CMbdHuJl.js";import"./index-xGnKXygx.js";import"./index-CRmylG0z.js";import"./index-u1rNC7Bo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMM6dyNf.js";import"./group-2-B4FdXRJU.js";import"./sort-descending-DvUEcM1R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jICxCRW9.js";import"./utils-P9HcUQzN.js";import"./index-DDWpxtlc.js";import"./index-Wbk_vv3N.js";import"./index-AlbH3iGp.js";import"./navigation-down-arrow-IShY2WyB.js";import"./navigation-right-arrow-DzbnPaXu.js";import"./navigation-right-arrow-BxL2ijuh.js";import"./useCurrentTheme-DHVnEAWK.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B4pyhN2Y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PfY8la.js";import"./paper-plane-BZiyZUyR.js";import"./index-CXSg-hiw.js";import"./less-DNufAwmk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
