import{j as e}from"./iframe-DxjY9BFy.js";import{useMDXComponents as o}from"./index-Bk5eT7re.js";import{I as r}from"./CommandsAndQueries-GjRh9gzH.js";import{M as l,C as a}from"./blocks-CATAEJ_X.js";import"./Tag-DnkuMosg.js";import"./index-B4O__Lt2.js";import"./copy-B5NkvAEv.js";import{F as c}from"./Footer-CWL8JIjr.js";import"./PageNotFound-CM4Hmt0N.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CTmJ_dOy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B0lBzBIQ.js";import"./index-Cr_g29EW.js";import"./index-ssnDYxvl.js";import"./index-D8DdOlBI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjvVRPhX.js";import"./addCustomCSSWithScoping-C4xqV3rh.js";import"./index-qULy9Htf.js";import"./index-DimdoC19.js";import"./index-BwDYaeY0.js";import"./information-BTY6GktZ.js";import"./sys-enter-2-DcEz2THL.js";import"./alert-CFzS8fE9.js";import"./index-CzEttlwi.js";import"./Illustrations-_-Ip7Vxq.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuTEVJNK.js";import"./delete-DFSCL2JA.js";import"./settings-DhIcwIe_.js";import"./NoData-Donj0yxv.js";import"./NoFilterResults-BZVSZppq.js";import"./index-BuiD5R_e.js";import"./IllustratedMessage-XRfryFQC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-hPf547eC.js";import"./Input-BIIEETsw.js";import"./ResponsivePopoverCommon.css-BiuITAHl.js";import"./ValueStateMessage.css-DdvZKdw2.js";import"./Suggestions.css-CHxoHGWG.js";import"./ListBoxItemGroupTemplate-DUFNX5av.js";import"./ComboBoxItemGroup-CGeDQV0I.js";import"./ListItemBaseTemplate-BXA8e_9h.js";import"./Token-DulJYhXY.js";import"./ScrollEnablement-BXQj5TVC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-PNi6yEzS.js";import"./ToggleButton-LDuVzkig.js";import"./multiselect-all-D_ss6ETt.js";import"./SuggestionItem-CGZO5oaE.js";import"./index-jwCY8hZH.js";import"./Option-BUjGedUb.js";import"./index-D7YjEcwV.js";import"./SegmentedButton-Dx2BOHdU.js";import"./index-BJKdWmq0.js";import"./Select-BxhNv8xD.js";import"./InvisibleMessage-DGUog9ZJ.js";import"./index-CzZpSYYg.js";import"./index-D2McGUFG.js";import"./index-DgvvT9HE.js";import"./index-W308MxFb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wNh9kY6V.js";import"./group-2-BzaDRO82.js";import"./sort-descending-Ciqqmb4X.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHVwRm4g.js";import"./utils-DLONvGm2.js";import"./index-DejqImO7.js";import"./index-qos3M3D6.js";import"./index-D1Ld-CDS.js";import"./navigation-down-arrow-m-tVBNuD.js";import"./navigation-right-arrow-DtEmtAkJ.js";import"./navigation-right-arrow-B93ODAzr.js";import"./useCurrentTheme-BqTnBAKc.js";import"./index-CnqD3RTV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CxRoew2L.js";import"./paper-plane-B9Zip65j.js";import"./index-dJrbjC3g.js";import"./less-ipJgqOPX.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
