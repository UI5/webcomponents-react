import{j as e}from"./iframe-DM9V3iUD.js";import{useMDXComponents as o}from"./index-BQ6e0XMP.js";import{I as l,F as r}from"./CommandsAndQueries-DLgIXMfv.js";import{M as a,C as c}from"./blocks-DPjpReUC.js";import"./Tag-CDZyEpMs.js";import"./index-BrIfMidb.js";import"./copy-QNTFDBhh.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dwu_Cdgk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_fRRkTw.js";import"./index-CG9Hqh1R.js";import"./index-3ho0Fy_x.js";import"./Link-CqfS--3L.js";import"./index-D-UVDN6M.js";import"./index-DQbG0AXp.js";import"./index-Crs5q-DX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CWqaDePq.js";import"./addCustomCSSWithScoping-UQbkgHWD.js";import"./index-HLIjrNCW.js";import"./information-CYZk7_Tc.js";import"./sys-enter-2-CIB1w1Kt.js";import"./alert-bTHWJErv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qcMscmV6.js";import"./delete-CXgeirW2.js";import"./settings-Do73Em_3.js";import"./NoData-CHhcck3e.js";import"./IllustratedMessage-BUUajOA1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Bj8Z5qjJ.js";import"./index-D1i2VFSP.js";import"./index-B__UNfpz.js";import"./slim-arrow-down-BPvPVi4x.js";import"./Input-Cf96M2D8.js";import"./ResponsivePopoverCommon.css-Ct9-fwKq.js";import"./ValueStateMessage.css-BZpk9Qij.js";import"./Suggestions.css-CJjXKwO3.js";import"./ListBoxItemGroupTemplate-avlDP7mZ.js";import"./ComboBoxItemGroup-Dvk8bGjT.js";import"./ListItemBaseTemplate-D0OkPuPM.js";import"./Token-DuTpzyoF.js";import"./ScrollEnablement-CIbJNOf2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DoSQq3Vg.js";import"./ToggleButton-CHbSZwvK.js";import"./SuggestionItem-C9Z5Raq-.js";import"./index-dQrxQK2M.js";import"./Option-C8TUPVJx.js";import"./index-DeLMEH5a.js";import"./SegmentedButton-CFuqDO7A.js";import"./index-lWxOWiyk.js";import"./Select-CVIIIwsb.js";import"./InvisibleMessage-CuXKyopF.js";import"./slim-arrow-down-Y2ooLraA.js";import"./index-CyGN2YVR.js";import"./index-BqNainkP.js";import"./index-DU8Mj3lG.js";import"./index-D-Nv2l8Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CY3BHzDB.js";import"./group-2-DSPzZeCA.js";import"./sort-descending-CKfKVtmi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BURWi97k.js";import"./utils-YdOQYwv0.js";import"./index-DHSn19BG.js";import"./index-BpMJYg0Z.js";import"./index-BsNTCuPG.js";import"./navigation-down-arrow-i_-2Fr6I.js";import"./navigation-right-arrow-DSvn3PeJ.js";import"./navigation-right-arrow-DiiMP9RE.js";import"./useCurrentTheme-B5DxFcSp.js";import"./index-B8iQmJZm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CElufDLj.js";import"./paper-plane-DbbOBc4o.js";import"./index-DcPBFTrG.js";import"./less-DI996Bpt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
