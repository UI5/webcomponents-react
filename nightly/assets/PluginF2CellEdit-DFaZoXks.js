import{j as e}from"./iframe-DHodyxHg.js";import{useMDXComponents as o}from"./index-BN78HojQ.js";import{I as r,F as l}from"./CommandsAndQueries-BJoNcE_T.js";import{M as a,C as c}from"./blocks-DRbngUD5.js";import"./Tag-AoT1Wzdr.js";import"./index-C_UZWXPq.js";import"./copy-HtbMTlWB.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CjRnrZ5o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LizrXBCk.js";import"./index-H_vNaU3m.js";import"./index-CzYnO6dI.js";import"./Link-DVjUQMmu.js";import"./index-8C_wghAv.js";import"./index-CuoqTBPK.js";import"./index-Bf66SqZa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D26g_6Hi.js";import"./addCustomCSSWithScoping-BBYARKEG.js";import"./index-Cbt6pGSR.js";import"./information-CikfZyec.js";import"./sys-enter-2-CGw1AdWq.js";import"./alert-fS8iZOwW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Tg2_K8Hr.js";import"./delete-Zcb2vEJ9.js";import"./settings-BD-RgLuV.js";import"./NoData-ZyVsLGlx.js";import"./IllustratedMessage-DWYc-Nj8.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-C-nNTrYT.js";import"./index-B9OIuk5u.js";import"./slim-arrow-down-RUw4_20M.js";import"./Input-CPLuf8pl.js";import"./ResponsivePopoverCommon.css-acGEx8eA.js";import"./ValueStateMessage.css-DdKqUqjJ.js";import"./Suggestions.css-B9GwOVjc.js";import"./ListBoxItemGroupTemplate-DbSMHwWh.js";import"./ComboBoxItemGroup-BpKRweKF.js";import"./ListItemBaseTemplate-DgUnC3lw.js";import"./Token-CbMshDZu.js";import"./ScrollEnablement-QqZ8MTp1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ob80DdRY.js";import"./ToggleButton-BKWW76vP.js";import"./SuggestionItem-C9bc-o4q.js";import"./index-S-wdO51Z.js";import"./Option-Dgeh_gWY.js";import"./index-BtsPFHyJ.js";import"./SegmentedButton-Dgc_oaRw.js";import"./index-B1iSRk56.js";import"./Select-DZKbaPCr.js";import"./InvisibleMessage-k0Gva9XM.js";import"./slim-arrow-down-cqA_BTp3.js";import"./index-Bq3O3R5l.js";import"./index-H_BorQOy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYwltf-g.js";import"./group-2-C2sMZn1f.js";import"./sort-descending-DrgkNws6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bo9NW1qj.js";import"./utils-BwVDplvj.js";import"./index-ja_VFHYZ.js";import"./index-BzHA07QR.js";import"./index-V-s4kElR.js";import"./navigation-down-arrow-BKyAuWCW.js";import"./navigation-right-arrow-DRM4c8S8.js";import"./navigation-right-arrow-DbKnsnOZ.js";import"./useCurrentTheme-CxvZJkfq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUmA-QY0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2F7gVSb.js";import"./paper-plane-UC5z0UMH.js";import"./index-DRtfFjjT.js";import"./less-D8BZSXoC.js";import"./index-CurBf1wH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};
