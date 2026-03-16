import{j as e}from"./iframe-BDg7FSoj.js";import{useMDXComponents as o}from"./index-CfS6z3MT.js";import{I as r}from"./CommandsAndQueries-BgLg0c2t.js";import{M as l,C as a}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import"./copy-LtMPx_h3.js";import{F as c}from"./Footer-DcSScdvn.js";import"./PageNotFound-Cz7A_GPz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CgLPWJdv.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DweKFefr.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./index-CtXj8tW6.js";import"./index-Ca5wJMxN.js";import"./index-DKaIOimk.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./index-ClFnafIK.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CVFEN-wi.js";import"./delete-Djyzt4EC.js";import"./settings-CjYJ2CHk.js";import"./NoData-C5_l_MOE.js";import"./NoFilterResults-HqlK2bIf.js";import"./index-CHhs1TdG.js";import"./IllustratedMessage-BgCoMSTD.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CavH8dni.js";import"./Input-DPh2xJTy.js";import"./ResponsivePopoverCommon.css-YN2yb077.js";import"./ValueStateMessage.css-CZSQW4Xi.js";import"./Suggestions.css-CoI0xqid.js";import"./ListBoxItemGroupTemplate-DVkdxE4m.js";import"./ComboBoxItemGroup-B7lumk6S.js";import"./ListItemBaseTemplate-COnbdXmo.js";import"./Token-CyYhzpuK.js";import"./ScrollEnablement-CJNzrglF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C9BXoiP3.js";import"./ToggleButton-C756d9Qn.js";import"./multiselect-all-B_axlRDi.js";import"./SuggestionItem-DeimWAUM.js";import"./index-Cdhi9950.js";import"./Option-Dz3WWHcz.js";import"./index-BwSNURHE.js";import"./SegmentedButton-DZh5fXjg.js";import"./index-C9V-0iTY.js";import"./Select-Br85qeyo.js";import"./InvisibleMessage-DTrhxE2q.js";import"./index-lWGkx38J.js";import"./index-D8AeP6Iz.js";import"./index-DLeoOT8k.js";import"./index-XZbO5RWz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pxS513Zf.js";import"./group-2-DQqG6IcW.js";import"./sort-descending-CoH2Moiz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYaJ9Gcz.js";import"./utils-Chkhn7io.js";import"./index-_v6E_SiW.js";import"./index-Do6_Z1_e.js";import"./index-CiGBzV4y.js";import"./navigation-down-arrow-DyYI-mnK.js";import"./navigation-right-arrow-_kG0lFZX.js";import"./navigation-right-arrow-ByngEGsa.js";import"./useCurrentTheme-CSxpKvX6.js";import"./index-B7uqwTBo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BQKn5Zaa.js";import"./paper-plane-DLTGccM2.js";import"./index-DPqF1ogR.js";import"./less-MXFQYBDW.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
