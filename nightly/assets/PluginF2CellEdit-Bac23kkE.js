import{j as e}from"./iframe-DAxVciiO.js";import{useMDXComponents as o}from"./index-h_8BIj8E.js";import{I as l,F as r}from"./CommandsAndQueries-DAf-gTsq.js";import{M as a,C as c}from"./blocks-V6tY60BP.js";import"./Tag-CfpPKB5J.js";import"./index-Cl51mnxs.js";import"./copy-DS8F9wTV.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-p9nnaNLV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQeQ_3Br.js";import"./index-BTWHfyOb.js";import"./index-CXz3G2II.js";import"./Link-CPXkUhXc.js";import"./index-DtbiWkK2.js";import"./index-C2J6ydOt.js";import"./index-45VXzBs0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqjBRadn.js";import"./addCustomCSSWithScoping-B-5Zxa-U.js";import"./index-x-HMM4OA.js";import"./information-BJmehL1Z.js";import"./sys-enter-2-CCej0FVR.js";import"./alert-DT2E8uxg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CFff7xit.js";import"./delete-DbGDhc3E.js";import"./settings-BDyusSsU.js";import"./NoData-XqdFgBoh.js";import"./IllustratedMessage-Bp6_xgPq.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CHKD9vVt.js";import"./index-BkJQaYIU.js";import"./index-PApUnrQh.js";import"./slim-arrow-down-DOx_O52b.js";import"./Input-BFNvfe1M.js";import"./ResponsivePopoverCommon.css-DUa--h-C.js";import"./ValueStateMessage.css-B-JXAMRh.js";import"./Suggestions.css-l1R1Q3Wi.js";import"./ListBoxItemGroupTemplate-CKUg1mHM.js";import"./ComboBoxItemGroup-DaYPy346.js";import"./ListItemBaseTemplate-CpDt3VEY.js";import"./Token-BIrB-fXe.js";import"./ScrollEnablement-IaFlv5sG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DHZqKCWt.js";import"./ToggleButton-BXfnrvIj.js";import"./SuggestionItem-PiaokgXw.js";import"./index-BetiTQM5.js";import"./Option-BtMT1Oqj.js";import"./index-O9Cki_UE.js";import"./SegmentedButton-CsbFykOo.js";import"./index-kd3IkrmG.js";import"./Select-DQvn5TjZ.js";import"./InvisibleMessage-CJvoI51j.js";import"./slim-arrow-down-DI99uMIa.js";import"./index-DK-JaRrB.js";import"./index-LLkC_BTv.js";import"./index-B10fvOaR.js";import"./index-Bm6hAg8x.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTq-0MlA.js";import"./group-2-dlAvKLPk.js";import"./sort-descending-DS-dcpyJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_vvkfygM.js";import"./utils-BF_zpjgJ.js";import"./index-B-11WzHg.js";import"./index-Dd31BDFj.js";import"./index-D_srWwSh.js";import"./navigation-down-arrow-HO4UVtgk.js";import"./navigation-right-arrow-BINfOxqh.js";import"./navigation-right-arrow-DRlFirFz.js";import"./useCurrentTheme-C2GdyHiC.js";import"./index-CBxPLiTj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ca2uhQ15.js";import"./paper-plane-D7cPCcgX.js";import"./index-DocLDr0y.js";import"./less-CqbE9adU.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
