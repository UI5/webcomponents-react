import{j as e}from"./iframe-m9jt2Gb4.js";import{useMDXComponents as o}from"./index-RGZEkUe7.js";import{I as l,F as r}from"./CommandsAndQueries-edZwg3xm.js";import{M as a,C as c}from"./blocks-87CpIPmc.js";import"./Tag-CiALl0Be.js";import"./index-COrcBOeY.js";import"./copy-ym3aYCLk.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DFr4kJK_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YlQxkFIi.js";import"./index-U8bfBs9H.js";import"./index-B5E0DaZi.js";import"./Link-BmbvCigV.js";import"./index-BRPp-7oG.js";import"./index-B8eg2o8m.js";import"./index-D_3xpPA0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3bZPHjv.js";import"./addCustomCSSWithScoping-B_aL8aFh.js";import"./index-DK4LsWgA.js";import"./information-B-8ilFG0.js";import"./sys-enter-2-DoymHnQS.js";import"./alert-BEZ6iJPu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuCk_hfi.js";import"./delete-DqEPR1Kk.js";import"./settings-BvE_RVs3.js";import"./NoData-BQN2z6DP.js";import"./IllustratedMessage-Bhm5_tWx.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DfQRIGVv.js";import"./index-DKZ-N2hR.js";import"./index-XPK1Pa3d.js";import"./slim-arrow-down-BBb3V39I.js";import"./Input-e95l3hLj.js";import"./ResponsivePopoverCommon.css-njDvm-N2.js";import"./ValueStateMessage.css-DOeSeMsA.js";import"./Suggestions.css-WQshat4v.js";import"./ListBoxItemGroupTemplate-CO9iiEMW.js";import"./ComboBoxItemGroup-Dnc717x5.js";import"./ListItemBaseTemplate-DtBXQ5ov.js";import"./Token-D2uvUdrZ.js";import"./ScrollEnablement-SOer0rOa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BI0Ll8pv.js";import"./ToggleButton-RGCKdF71.js";import"./SuggestionItem-f7mMQ8dV.js";import"./index-DZi4le4v.js";import"./Option-BCCKGeE5.js";import"./index-D4-tQ_X-.js";import"./SegmentedButton-2j4XezgK.js";import"./index-kS8TEHfa.js";import"./Select-CWRM89JB.js";import"./InvisibleMessage-Y-gpMwBW.js";import"./slim-arrow-down-BYuclwN8.js";import"./index-D0BFf4OT.js";import"./index-CcS-nMSH.js";import"./index-CrYrIUjU.js";import"./index-DTqNuwcc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CoT6c9V7.js";import"./group-2-B5f3D7wV.js";import"./sort-descending-DGeD_fPq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vmYkN8dN.js";import"./utils-DUEpvVwD.js";import"./index-D5HeUm9y.js";import"./index-OPBsLPCt.js";import"./index-Bep7VIpN.js";import"./navigation-down-arrow-DZGgjCfZ.js";import"./navigation-right-arrow-j6ezlh3e.js";import"./navigation-right-arrow-DmBjSJtS.js";import"./useCurrentTheme-DAm2pSwB.js";import"./index-B8H8C8Xn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xF7iXHP9.js";import"./paper-plane-CRn-ZhnF.js";import"./index-CO2hZTyW.js";import"./less-DBuv2uLm.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
