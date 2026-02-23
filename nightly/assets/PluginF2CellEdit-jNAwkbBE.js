import{j as e}from"./iframe-DJeYw3_T.js";import{useMDXComponents as o}from"./index-CAoJF-Ee.js";import{I as l,F as r}from"./CommandsAndQueries-BpKCXtjf.js";import{M as a,C as c}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import"./copy-DmlYE796.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B4PZ95my.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./index-ChAuXbDX.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Q-Qu9aPK.js";import"./delete-GyZuHggU.js";import"./settings-CSNf6lLD.js";import"./NoData-GWb7D9P8.js";import"./IllustratedMessage-CqKcL014.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zZOIcPI-.js";import"./index-CfSZL8D6.js";import"./index-CrX_lNBL.js";import"./slim-arrow-down-Qo8He1bF.js";import"./Input-aC5IARbR.js";import"./ResponsivePopoverCommon.css-CZVnt3kp.js";import"./ValueStateMessage.css-CB2SJNwM.js";import"./Suggestions.css-CcYLfhHI.js";import"./ListBoxItemGroupTemplate-DzwM921Z.js";import"./ComboBoxItemGroup-DqY3uMDf.js";import"./ListItemBaseTemplate-BLUw0RML.js";import"./Token-hIQX68Hd.js";import"./ScrollEnablement-Dx-9KAkj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cn9vQdt7.js";import"./ToggleButton-WHvzyU1L.js";import"./SuggestionItem-CMelAZK6.js";import"./index-Ba8SHafQ.js";import"./Option-CVovyKZE.js";import"./index-zW6HzqIh.js";import"./SegmentedButton-DSaVLZ2J.js";import"./index-DP_3EnA2.js";import"./Select-BP2hTvkS.js";import"./InvisibleMessage-deXIs-B1.js";import"./slim-arrow-down-CrqglWHm.js";import"./index-vK1nVN_c.js";import"./index-DNDxQV0p.js";import"./index-B8XaOmg3.js";import"./index-DgbNo39p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CcBdfap_.js";import"./group-2-M9iAyJ2B.js";import"./sort-descending-DvSTXRI3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFadE48.js";import"./utils-B8eWjpJ0.js";import"./index-DYmw3Rfl.js";import"./index-kUdamL05.js";import"./index-DCI2wHY-.js";import"./navigation-down-arrow-CoZWd3Be.js";import"./navigation-right-arrow-DQBdB4vT.js";import"./navigation-right-arrow-CLYge1Io.js";import"./useCurrentTheme-ByIUAEMi.js";import"./index-CWW0jJXt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wyLkWFxP.js";import"./paper-plane-CIyPt1UE.js";import"./index-Dm0jkMUI.js";import"./less-q2GCtAl4.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
