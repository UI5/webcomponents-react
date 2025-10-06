import{j as e}from"./iframe-HvCg7yUW.js";import{useMDXComponents as o}from"./index-CE4Hfwqi.js";import{I as r,F as l}from"./CommandsAndQueries-DUi4l31N.js";import{M as a,C as c}from"./blocks-D8Z2Dyw_.js";import"./Tag-BplAIBUz.js";import"./index-DuAmAsky.js";import"./copy-DBsC0j81.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CFK3HHrv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iO1m8u6x.js";import"./index-BaM0OdR1.js";import"./index-DPhzHQJ0.js";import"./Link-Bg-vZYST.js";import"./index-DmLJcEoD.js";import"./index-D5kiTLsH.js";import"./index-DpfgSJii.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQB1q1h5.js";import"./addCustomCSSWithScoping-Bswf-IYk.js";import"./index-7L-T-PBR.js";import"./information-CCnVD-2j.js";import"./sys-enter-2-X1IC7sb7.js";import"./alert-Dmmp7J4K.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-bH-o7Qs9.js";import"./delete-CMMExSCo.js";import"./settings-Ds6Qr-yr.js";import"./NoData-J351IMnc.js";import"./IllustratedMessage-B58ljVrb.js";import"./i18n-defaults-iunXW1RU.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./NoFilterResults-B55MvVii.js";import"./sapIllus-Dialog-NoFilterResults-BO45-LjK.js";import"./sapIllus-Scene-NoFilterResults-CuaKNEnS.js";import"./sapIllus-Spot-NoFilterResults-Bp3R-TVD.js";import"./sapIllus-Dot-NoFilterResults-DxDedFzw.js";import"./index-1cs8Osuo.js";import"./index-BTQyDMGb.js";import"./slim-arrow-down-BCCxnCSI.js";import"./Input-DH6V6wlE.js";import"./ResponsivePopoverCommon.css-BidD7a2A.js";import"./ValueStateMessage.css-BptRD-Sg.js";import"./Suggestions.css-RPqZvgZe.js";import"./ListBoxItemGroupTemplate-CQ-IlgJY.js";import"./ComboBoxItemGroup-De7byXms.js";import"./ListItemBaseTemplate-3egXcA5H.js";import"./Token-DckGPQnk.js";import"./ScrollEnablement-B9_nTXP_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BsRZsB4W.js";import"./ToggleButton-M4DqG-CP.js";import"./SuggestionItem-D4hge0-r.js";import"./index-D0-2Nuv-.js";import"./Option-DoxVd8eC.js";import"./index-C7q2i51e.js";import"./SegmentedButton-BzXjQ11d.js";import"./index-C1pdIIb_.js";import"./Select-D2uYLHWH.js";import"./InvisibleMessage-5l3edxbu.js";import"./slim-arrow-down-DFyEtKyA.js";import"./index-BuUXTHWM.js";import"./index-D3du9t0L.js";import"./index-BmFdlWyd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-eAEB7Eu4.js";import"./group-2-CNFPp1X7.js";import"./sort-descending-Jv8LyRtA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-JSAlrM2u.js";import"./utils-1PQVS9Mg.js";import"./index-Dm7NKhPt.js";import"./index-mYbSJ7EH.js";import"./index-Bw2I8p5D.js";import"./navigation-down-arrow-DkCY0Nj4.js";import"./navigation-right-arrow-iqHPFppT.js";import"./navigation-right-arrow-KKVa9VrR.js";import"./useCurrentTheme-GLExlvdO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BivruA6d.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BLxVr6sR.js";import"./paper-plane-Ch_oMxPx.js";import"./index-680YDvxh.js";import"./less-D9krIaJ1.js";function i(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Since: v2.14.0"})}),`
`,e.jsx(t.p,{children:"A plugin hook that enables F2-based cell editing for interactive elements inside a cell."}),`
`,e.jsxs(t.p,{children:["To ",e.jsx(t.strong,{children:"ensure the hook works correctly"}),", make sure that:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Each column containing interactive elements has the ",e.jsx(t.code,{children:"interactiveElementName"})," property set. ",e.jsx(t.strong,{children:"Note:"})," This property is also used to describe the cell's content for screen readers."]}),`
`,e.jsxs(t.li,{children:["The callback Ref returned by ",e.jsx(t.code,{children:"useF2CellEdit.useCallbackRef"})," is attached to every interactive element within the cell."]}),`
`]}),`
`,e.jsxs(t.p,{children:["The hook manages focus, keyboard navigation, and ",e.jsx(t.code,{children:"tabindex"})," for cells with interactive content:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Pressing ",e.jsx(t.code,{children:"F2"})," moves focus between the cell container and its first interactive element."]}),`
`,e.jsxs(t.li,{children:["Updates the cell's ",e.jsx(t.code,{children:"aria-label"})," with the interactive element's name for accessibility."]}),`
`,e.jsx(t.li,{children:"Prevents standard navigation keys from interfering when editing a cell."}),`
`]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:s,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import type {
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
`,e.jsx(l,{})]})}function Ge(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{Ge as default};
