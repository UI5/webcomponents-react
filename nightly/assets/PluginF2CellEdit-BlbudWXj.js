import{j as e}from"./iframe-cBdQNv77.js";import{useMDXComponents as o}from"./index-cOSrw8iI.js";import{I as l,F as r}from"./CommandsAndQueries-DjEzsLYR.js";import{M as a,C as c}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import"./index-3Ka_JXyV.js";import"./copy-IvR5q6ZX.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B03Ac-Pt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";import"./index-A4dU9HLI.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CU_WQTkg.js";import"./delete-CMb-Nvkm.js";import"./settings-DWEgpEUz.js";import"./NoData-Qem4b_MW.js";import"./IllustratedMessage-Cyt9gDIc.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BysguWIF.js";import"./index-CblII6GP.js";import"./index-DSUYipo-.js";import"./slim-arrow-down-BPt5DgGA.js";import"./Input-CcjXMm62.js";import"./ResponsivePopoverCommon.css-RgOMGv0T.js";import"./ValueStateMessage.css-CowmmmLr.js";import"./Suggestions.css-yUQ9aL_d.js";import"./ListBoxItemGroupTemplate-BvX5NWPm.js";import"./ComboBoxItemGroup-CDbozHq9.js";import"./ListItemBaseTemplate-DrlAet-U.js";import"./Token-KJpiYxq1.js";import"./ScrollEnablement-DK4N6mSn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bac0lpbe.js";import"./ToggleButton-DekIcBfY.js";import"./SuggestionItem-Dbu-VOoh.js";import"./index-CroY5feV.js";import"./Option-Di0zJemp.js";import"./index-BdZWaw9K.js";import"./SegmentedButton-BVkeOtZe.js";import"./index-CMPXrz_r.js";import"./Select-glz-euWX.js";import"./InvisibleMessage-BXAme1GY.js";import"./slim-arrow-down-D3dx3V9G.js";import"./index-PK4cuCqC.js";import"./index-nXXgIqFV.js";import"./index-BY097R_L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWqjbJR2.js";import"./group-2-CF-v31Zl.js";import"./sort-descending-CyayMEsE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHmbUZOq.js";import"./utils-CEIcbUd3.js";import"./index-BIFjpkti.js";import"./index-DO50Tpnb.js";import"./index-Ct7T3oxa.js";import"./navigation-down-arrow-_-kVQMhy.js";import"./navigation-right-arrow-D_4YqzP5.js";import"./navigation-right-arrow-BcXKj59E.js";import"./useCurrentTheme-DjP3JZ5R.js";import"./IndicationColor-DVw-fSM_.js";import"./index-TOh3uh25.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B47DQxdv.js";import"./paper-plane-lzt2I4eu.js";import"./index-DqnLY2Ua.js";import"./less-D_OVhTJA.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
