import{j as e}from"./iframe-XNJfvnKd.js";import{useMDXComponents as o}from"./index-BB1Z__gZ.js";import{I as r}from"./CommandsAndQueries-BhkfH5lW.js";import{M as l,C as a}from"./blocks-70fHpzfh.js";import"./Tag-Bt3S_y8X.js";import"./index-CCPENXhC.js";import"./copy-AwcTHtit.js";import{F as c}from"./Footer-BCJuC1pH.js";import"./PageNotFound-DNJSaIYV.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CXI1hcwc.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-By03J9gW.js";import"./index-DJvc2tfl.js";import"./index-BGH8cR_1.js";import"./index-C23si5qK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjHnjWqf.js";import"./addCustomCSSWithScoping-Uu6mKzaL.js";import"./index-Cr8k8bpx.js";import"./index-CONBdBFK.js";import"./index-X0L_7D7a.js";import"./information-CaeHS7Lo.js";import"./sys-enter-2-D6Lk4332.js";import"./alert-Dalf8wRK.js";import"./index-CnSjbRE7.js";import"./Illustrations-CJz4mowS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDwfYvCN.js";import"./delete-BRgtnu4x.js";import"./settings-B5E6qpU6.js";import"./NoData-BfgUbfwB.js";import"./NoFilterResults-BlBFR0st.js";import"./index-BRLheel9.js";import"./IllustratedMessage-DHXQUQEF.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-B2ARDT1C.js";import"./Input-Hy5dHKL1.js";import"./ResponsivePopoverCommon.css-2-C9fSM3.js";import"./ValueStateMessage.css-RN8YRdD-.js";import"./Suggestions.css-C7OqB4DX.js";import"./ListBoxItemGroupTemplate-C6I36q1a.js";import"./ComboBoxItemGroup-C3MlZ0Uh.js";import"./ListItemBaseTemplate-He511VRs.js";import"./Token-Cmgro3bE.js";import"./ScrollEnablement-DWDTXslq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3mcOcRw.js";import"./ToggleButton-Dv13GKwG.js";import"./multiselect-all-Bb3L16tH.js";import"./SuggestionItem-CUEuXRcU.js";import"./index-PKHhDZaf.js";import"./Option-DRsG1edk.js";import"./index-CqeXQepM.js";import"./SegmentedButton-DD_U86WN.js";import"./index-DWPlEs-m.js";import"./Select-CY4mH1RC.js";import"./InvisibleMessage-CHgobTkl.js";import"./index-C-pZ3HN9.js";import"./index-w9Dk9Jum.js";import"./index-Eo1icHqa.js";import"./index-BpPLeT54.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BMVS6pwZ.js";import"./group-2-DfSGQJD6.js";import"./sort-descending-CK7mW81X.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-gN_r8yvA.js";import"./utils-1KcEiNGe.js";import"./index-Cj-NtrOt.js";import"./index-BZOx0EW0.js";import"./index-COZb4dfm.js";import"./navigation-down-arrow-DkfHsCgO.js";import"./navigation-right-arrow-C7vqJCpZ.js";import"./navigation-right-arrow-DaNEHEjP.js";import"./useCurrentTheme-C0cHAbo-.js";import"./index-9SXllW00.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0aovCf59.js";import"./paper-plane-CA01kMJ9.js";import"./index-_dwsQH44.js";import"./less-B6-zBVKy.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
