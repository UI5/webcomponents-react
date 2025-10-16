import{j as e}from"./iframe-CXQAdbiu.js";import{useMDXComponents as o}from"./index-B53u5pzW.js";import{I as l,F as r}from"./CommandsAndQueries-aoDJK_rZ.js";import{M as a,C as c}from"./blocks-CqzuTWcZ.js";import"./Tag-BVaaDNuO.js";import"./index-B7B2Licm.js";import"./copy-DcVZp789.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BRSknd15.js";import"./preload-helper-PPVm8Dsz.js";import"./index-529wBAr6.js";import"./index-f6kmMniG.js";import"./index-ULIsdIj2.js";import"./Link-BM2g4e1S.js";import"./index-BdQ3exsp.js";import"./index-DaUVwWua.js";import"./index-BjLlWCaV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cah1_bVk.js";import"./addCustomCSSWithScoping-CF9FJk9W.js";import"./index-t0QN6j1g.js";import"./information-ATIM8RIH.js";import"./sys-enter-2-4FUXKSMu.js";import"./alert-DgUa0xxC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1bs8kF-.js";import"./delete-DowHx4wk.js";import"./settings-CVVvFOe0.js";import"./NoData-q7wNzTiS.js";import"./IllustratedMessage-DKb8AtT2.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B1CzrmOX.js";import"./index-bP1_QBvP.js";import"./index-DY3B7_kM.js";import"./slim-arrow-down-hLmi3DGr.js";import"./Input-CYD0qtkC.js";import"./ResponsivePopoverCommon.css-WfYGUFrq.js";import"./ValueStateMessage.css-CgsW_nz6.js";import"./Suggestions.css-BBvTA_r8.js";import"./ListBoxItemGroupTemplate-D-dkO2pM.js";import"./ComboBoxItemGroup-DHkKBduU.js";import"./ListItemBaseTemplate-BonfCIkK.js";import"./Token-BIdC5wJi.js";import"./ScrollEnablement-CJADfPLf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CfwHGGPG.js";import"./ToggleButton-BmbPwfk7.js";import"./SuggestionItem-gfvdLHYr.js";import"./index-BuXBJAJ4.js";import"./Option-giAR4PyV.js";import"./index-V5sVuIkU.js";import"./SegmentedButton-BPwflYvL.js";import"./index-CTuyF3LD.js";import"./Select-CP65qCm6.js";import"./InvisibleMessage-YSIBfych.js";import"./slim-arrow-down-DaR9tdKT.js";import"./index-Bl8oHxhy.js";import"./index-CBZrs3cq.js";import"./index-C7FokFlZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrdHcgRL.js";import"./group-2-C3eZD9xi.js";import"./sort-descending-bTZCRpky.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaHCE1NB.js";import"./utils-Ds3TVJbz.js";import"./index-DyB1YbCe.js";import"./index-DAvw1qwV.js";import"./index-D4Ka0onQ.js";import"./navigation-down-arrow-Ba-PmlVo.js";import"./navigation-right-arrow-COX7_ak2.js";import"./navigation-right-arrow-DRoaRB41.js";import"./useCurrentTheme-Drr0Li3b.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BoLqpInx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-FsmN4cF6.js";import"./paper-plane-BcVanBNt.js";import"./index-CeFcuoyl.js";import"./less-DYN9Hj3m.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
