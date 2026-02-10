import{j as e}from"./iframe-DmoM9f-3.js";import{useMDXComponents as o}from"./index-B20arXE0.js";import{I as l,F as r}from"./CommandsAndQueries-D46yw8vq.js";import{M as a,C as c}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import"./copy-CLLjPrKq.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BA-x-C0f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";import"./index-D10NIdcs.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bxmd5KNC.js";import"./delete-BafmMaQL.js";import"./settings-DABExvul.js";import"./NoData-BgI5Fxj4.js";import"./IllustratedMessage-jY-A97pw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-fU_rFE.js";import"./index-DKnHiKv6.js";import"./index-C5zCfksZ.js";import"./slim-arrow-down-D9YsUWAc.js";import"./Input-YzFTUt5T.js";import"./ResponsivePopoverCommon.css-CYbIQSV_.js";import"./ValueStateMessage.css-Bt2Hz2Bm.js";import"./Suggestions.css-CF_t5b_V.js";import"./ListBoxItemGroupTemplate-CO5gMWQe.js";import"./ComboBoxItemGroup-CUCxyYDG.js";import"./ListItemBaseTemplate-CnPU8rrX.js";import"./Token-ERY8FHBV.js";import"./ScrollEnablement-C3qwFx38.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJDVbUng.js";import"./ToggleButton-DEiEgDU3.js";import"./SuggestionItem-B2lniP2C.js";import"./index-CVEhOAGU.js";import"./Option-Bl_cRkCF.js";import"./index-D_A_mIMd.js";import"./SegmentedButton-BJxy3Jl0.js";import"./index-Bc77BXWZ.js";import"./Select-CuAVIuQe.js";import"./InvisibleMessage-DxxG7hrg.js";import"./slim-arrow-down-CR7ZcCgm.js";import"./index-CmHMrHW6.js";import"./index-lVw2qlav.js";import"./index-C3g1EMi_.js";import"./index-hwt2sM8N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dm4NGm5T.js";import"./group-2-BKpf1dk-.js";import"./sort-descending-BLlJfs1C.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CfmXpjSG.js";import"./utils-CX26tpMm.js";import"./index-C5hbXSHM.js";import"./index-4PnBH_j5.js";import"./index-CCKJVryI.js";import"./navigation-down-arrow-raxqbgPM.js";import"./navigation-right-arrow-j_ofrPu8.js";import"./navigation-right-arrow-Bc7TH_0C.js";import"./useCurrentTheme-xHMJsLTO.js";import"./index-CQscq9AO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bl9d5JMP.js";import"./paper-plane-D5XrZk42.js";import"./index-CF4Usvtu.js";import"./less-BemCrw5W.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
