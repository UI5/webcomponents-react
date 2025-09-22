import{j as e}from"./iframe-BLa6WP-Y.js";import{useMDXComponents as o}from"./index-DmyZ7oDn.js";import{I as r,F as l}from"./CommandsAndQueries--XH3UvBD.js";import{M as a,C as c}from"./blocks-B3YWg1xO.js";import"./Tag-BvWs66nb.js";import"./index-BQvFUkOP.js";import"./copy-DLqEfzA0.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-mcIkmlOc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxQvAqCu.js";import"./index-Dw-Jiryq.js";import"./index-CMlbrigZ.js";import"./Link-DFlOAi3a.js";import"./addCustomCSSWithScoping-EByzACcK.js";import"./index-o1aXZ_iF.js";import"./index-9PttVNs-.js";import"./index-CD532uFx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtI0CwXV.js";import"./index-DuOzvotb.js";import"./information-CXW8jYRn.js";import"./sys-enter-2-6G8ZBE6B.js";import"./alert-DchNyR7C.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoYaF1dP.js";import"./delete-CsD0pt1u.js";import"./settings-Cy0GWgCZ.js";import"./NoData-CMKGsDFP.js";import"./IllustratedMessage-DQknMDe-.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Dz3NOO0O.js";import"./index-CcTeAWDa.js";import"./slim-arrow-down-DW1bb7Yi.js";import"./Input-DLv0_pwH.js";import"./ResponsivePopoverCommon.css-Ce2_DLGD.js";import"./ValueStateMessage.css-DNcxHwSS.js";import"./Suggestions.css-5bToJR4X.js";import"./ListBoxItemGroupTemplate-DcN5U3H5.js";import"./ComboBoxItemGroup-CzoRyeO7.js";import"./ListItemBaseTemplate-SBDokyJS.js";import"./Token-bqiPRfEa.js";import"./ScrollEnablement-8GN9BE9k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DfnsK1Kh.js";import"./ToggleButton-BilcMZKx.js";import"./SuggestionItem-CpI1i8qK.js";import"./index-mOpeWcnG.js";import"./Option-X5MvP6Ez.js";import"./index-Lxr2utNH.js";import"./SegmentedButton-DaKVnc87.js";import"./index-yYitgPgC.js";import"./Select-DFDzYy_c.js";import"./InvisibleMessage-BbXAREzN.js";import"./slim-arrow-down-CmTuLlvX.js";import"./useIsRTL-TNKtGqcG.js";import"./index-CgaQ0ztb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BbnAHyQW.js";import"./group-2-DRCf6JID.js";import"./sort-descending-C1zU_0_u.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5daVLzH.js";import"./utils-Dw1swK2v.js";import"./index-C4JZANr3.js";import"./index-CQlrF-yO.js";import"./index-CEje_66r.js";import"./navigation-down-arrow-BqiSx__M.js";import"./navigation-right-arrow-bAsVms0n.js";import"./navigation-right-arrow-TGhfCMRD.js";import"./useCurrentTheme-2htwq5Wd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BjE4yXnU.js";import"./debounce-D7W5PopO.js";import"./paper-plane-4_dk95Mh.js";import"./index-CyNfhGJe.js";import"./less-DNXIrkgN.js";import"./index-CkHcdUia.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
