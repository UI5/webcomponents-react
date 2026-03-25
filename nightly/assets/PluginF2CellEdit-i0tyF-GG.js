import{j as e}from"./iframe-iYU5spAk.js";import{useMDXComponents as o}from"./index-BzD2IrSQ.js";import{I as r}from"./CommandsAndQueries-BRXiW4dn.js";import{M as l,C as a}from"./blocks-BI7QxqeB.js";import"./Tag-BusGuvh6.js";import"./index-Cq3_Xc9J.js";import"./copy-DCVJQWNc.js";import{F as c}from"./Footer-BTHx_eA0.js";import"./PageNotFound-C8n2TUKE.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BqAo2gsQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DNrZNopF.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./index-DqeVDsPv.js";import"./index-BWMAVmh3.js";import"./index-DUNXsDMC.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./index-B2lbw_UO.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Txjlor_N.js";import"./delete-zxvfSezM.js";import"./settings-DOd8m396.js";import"./NoData-CS38cQi8.js";import"./NoFilterResults-Dx8cQ-OW.js";import"./index-BIo60fMs.js";import"./IllustratedMessage-DcLV6jZH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D-iEqBAI.js";import"./Input-CPcEboco.js";import"./ResponsivePopoverCommon.css-MzYjXUbZ.js";import"./ValueStateMessage.css-CiiA2s3E.js";import"./Suggestions.css-CltR8Y_x.js";import"./ListBoxItemGroupTemplate-ClX62AQ5.js";import"./ComboBoxItemGroup-KbtZd36F.js";import"./ListItemBaseTemplate-D-bV5LoH.js";import"./Token-DllBa28z.js";import"./ScrollEnablement-BzR7P6Ev.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cf92RqQJ.js";import"./ToggleButton-XRDOJStY.js";import"./multiselect-all-B_UBRtV6.js";import"./SuggestionItem-D5XWHwVx.js";import"./index-COsKSNFh.js";import"./Option-WemDvLcT.js";import"./index-DhEuHp6p.js";import"./SegmentedButton-CoSscdvL.js";import"./index-Duk2RCOb.js";import"./Select-DotgCPCG.js";import"./InvisibleMessage-BqlPeigB.js";import"./index-CXcrzFui.js";import"./index-Djsl4Kkv.js";import"./index-QmgoYX5D.js";import"./index-BO0iryfq.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VYJ9nzZL.js";import"./group-2-B54BU3OI.js";import"./sort-descending-C1fJgBpm.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdYyxTLQ.js";import"./utils-BaGgi4t6.js";import"./index-DyWQ4Yet.js";import"./index-WwMXFCkN.js";import"./index-CjSo2Ws_.js";import"./navigation-down-arrow-CaKxhXWN.js";import"./navigation-right-arrow-D1Pf3y64.js";import"./navigation-right-arrow-L_9IiXO-.js";import"./useCurrentTheme-B6gq1VrI.js";import"./index-CQs_LxQY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CmURE4St.js";import"./paper-plane-BkJk1PQY.js";import"./index-CdP1nluN.js";import"./less-CMvrZdAD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
