import{j as e}from"./iframe-Ba5ZQio8.js";import{useMDXComponents as o}from"./index-rp1O3cN1.js";import{I as r}from"./CommandsAndQueries-Bbpx9ls1.js";import{M as l,C as a}from"./blocks-CO8PFwMs.js";import"./Tag-U7nVfWIj.js";import"./index-P8tdEHaz.js";import"./copy-B4CpXR8v.js";import{F as c}from"./Footer-C-jjr1fr.js";import"./PageNotFound-lWhn0Z7P.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CH2vUjVf.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BJPm0pTR.js";import"./index-CFpPfuDn.js";import"./index-D3zw9ZHH.js";import"./index-R7gtGlkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCyzTRrI.js";import"./addCustomCSSWithScoping-CUMS_4o0.js";import"./index-CQozdAin.js";import"./index-B2oTG2Uf.js";import"./index-DqQH8U51.js";import"./information-CmnD_cte.js";import"./sys-enter-2-a4cBCFrc.js";import"./alert-Zv2opSBs.js";import"./index-DW1zzZuq.js";import"./Illustrations-wmNg3JaM.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6sFKivB.js";import"./delete-DpWoY4bq.js";import"./settings-2UoQFdLZ.js";import"./NoData-C27xDPCX.js";import"./NoFilterResults-BtdJqq3e.js";import"./index-CwYz5hj_.js";import"./IllustratedMessage-C8ShJTV8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-dZHfBDTm.js";import"./Input-DbuY-azO.js";import"./ResponsivePopoverCommon.css-Bx66l35z.js";import"./ValueStateMessage.css-Boe-nBHn.js";import"./Suggestions.css-DFdNzV6n.js";import"./ListBoxItemGroupTemplate-CWYgi82N.js";import"./ComboBoxItemGroup-CVco4pgy.js";import"./ListItemBaseTemplate-BwquVXRI.js";import"./Token-CMMQoehc.js";import"./ScrollEnablement-BrHNAnnn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hwq3GH-8.js";import"./ToggleButton-By3KpJ3s.js";import"./multiselect-all-DAiXU-2t.js";import"./SuggestionItem-BPsWjU3E.js";import"./index-Bvh25QxP.js";import"./Option-qCFpPnNQ.js";import"./index-CMV_Yh7r.js";import"./SegmentedButton-4h52fUiV.js";import"./index-BdKH8mcH.js";import"./Select-BH5YNkkz.js";import"./InvisibleMessage-CV0WJIpw.js";import"./index-BpioeH42.js";import"./index-OMiO6QEU.js";import"./index-BdEsij6A.js";import"./index-DCLHA3aG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CvHE1b-Q.js";import"./group-2-JUxYdBxp.js";import"./sort-descending-BAVyXJMs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BoBNl2fW.js";import"./utils-BoIL1l7W.js";import"./index-DUksDTzt.js";import"./index-Bm8kf-zB.js";import"./index-Dvc5W7Lw.js";import"./navigation-down-arrow-CJVUiRV4.js";import"./navigation-right-arrow-C5ox3WV8.js";import"./navigation-right-arrow-BGQ1zxrV.js";import"./useCurrentTheme-Dl168NmZ.js";import"./index-B3SL5VMB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CIPw2XHC.js";import"./paper-plane-CvFEKYP7.js";import"./index-DidCFfMi.js";import"./less-DPv56Ll-.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
