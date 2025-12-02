import{j as e}from"./iframe-D-W-mmRj.js";import{useMDXComponents as o}from"./index-D8IyotA-.js";import{I as l,F as r}from"./CommandsAndQueries-G8bd-Dz2.js";import{M as a,C as c}from"./blocks-CCgGLQdQ.js";import"./Tag-CcHwt-jC.js";import"./index-BjBbtVMa.js";import"./copy-Bs2vU0sH.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CnR2Z8F0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lPK_7vuA.js";import"./index-g5ZQYkE0.js";import"./index-BL1fd3ME.js";import"./Link-B8l4snGX.js";import"./index-B8f1MJrs.js";import"./index-CtoHKFWx.js";import"./index-C1eJkWnN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_kQaGsI.js";import"./addCustomCSSWithScoping-IPWT__yW.js";import"./index-DkLrn4qm.js";import"./information-CEG7gdih.js";import"./sys-enter-2-CEv4mC4Y.js";import"./alert-DtXDmWLr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BhdCO6dM.js";import"./delete-CWhMuDL5.js";import"./settings-CyNEgs3g.js";import"./NoData-BLggi9n_.js";import"./IllustratedMessage-BlAMe72Z.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DzdY_mBy.js";import"./index-CNJHK3W8.js";import"./index-Bxxpx37Q.js";import"./slim-arrow-down-x9Gru0Ec.js";import"./Input-BqMyI7ca.js";import"./ResponsivePopoverCommon.css-DVnmqxls.js";import"./ValueStateMessage.css-DadsVUgD.js";import"./Suggestions.css-DSmmsEoA.js";import"./ListBoxItemGroupTemplate-DFUskKCh.js";import"./ComboBoxItemGroup-Df0XnL08.js";import"./ListItemBaseTemplate-BAnGYykD.js";import"./Token-C2_dZ0mi.js";import"./ScrollEnablement-5T6hJhR0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C80k9rxB.js";import"./ToggleButton-52j1Cimw.js";import"./SuggestionItem-CfdrIOvX.js";import"./index-CUrDlzTH.js";import"./Option-au42OKVK.js";import"./index-CumMtctX.js";import"./SegmentedButton-CsAys2s9.js";import"./index-YylBegPs.js";import"./Select-Bj00LLbV.js";import"./InvisibleMessage-XQ1BeoOK.js";import"./slim-arrow-down-DWuhkxhY.js";import"./index-Buv1R8Le.js";import"./index-DIb00-kV.js";import"./index-C7KJciiD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRhGvWSX.js";import"./group-2-x8bbk4t5.js";import"./sort-descending-DeN8U9ms.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVu5YbFT.js";import"./utils-ES71sGqA.js";import"./index-JcPgMdxN.js";import"./index-C7o60qk_.js";import"./index-BBVgoxy_.js";import"./navigation-down-arrow-D6uzIO8i.js";import"./navigation-right-arrow-JPz4-m_e.js";import"./navigation-right-arrow-B0n9GdxK.js";import"./useCurrentTheme-C612kq_O.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DtsxIlNB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B5QWPvoz.js";import"./paper-plane-BdmbwH0l.js";import"./index-BxEZlMiK.js";import"./less-B61wiooM.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
