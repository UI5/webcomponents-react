import{j as e}from"./iframe-D9xLC1tL.js";import{useMDXComponents as o}from"./index-DbpRZxa8.js";import{I as r}from"./CommandsAndQueries-Bb-ZfGVO.js";import{M as l,C as a}from"./blocks-BGODLmXA.js";import"./Tag-CzLAQHXA.js";import"./index-OpsV8Rzk.js";import"./copy-D8VIdABk.js";import{F as c}from"./Footer-C6v4bY5-.js";import"./PageNotFound-DoCPcVkS.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CcH9eEq-.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nPbeq8Ca.js";import"./index-D1uvdQ6M.js";import"./index-_EZjG3sX.js";import"./index-1koIOrPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_OCG7dF.js";import"./addCustomCSSWithScoping-BP0mkxfq.js";import"./index-DNd0s4Kc.js";import"./index-DAKihXgB.js";import"./index-BDQMqb7U.js";import"./information-BC9P8f_O.js";import"./sys-enter-2-B7xp7QZ9.js";import"./alert-BEKLDx3c.js";import"./index-Dursa8QF.js";import"./Illustrations-VmVh_pyg.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjlhRgZm.js";import"./delete-z9tfxYsM.js";import"./settings-u6G-xS72.js";import"./NoData-iFn0kwSC.js";import"./NoFilterResults-C-Tq5PPM.js";import"./index-DCBWbYTm.js";import"./IllustratedMessage-Duwn4FcJ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BttjqPRx.js";import"./Input-DxzMz-_-.js";import"./ResponsivePopoverCommon.css-PL-SXD-8.js";import"./ValueStateMessage.css-DPUcso-C.js";import"./Suggestions.css-Cy8FStCL.js";import"./ListBoxItemGroupTemplate-DNpwMoIM.js";import"./ComboBoxItemGroup-TUxg8lm8.js";import"./ListItemBaseTemplate-DByAGMN-.js";import"./Token-BdgPQmcu.js";import"./ScrollEnablement-CzOU9q0b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DeipcKCC.js";import"./ToggleButton-CvMZWFKF.js";import"./multiselect-all-CE46sock.js";import"./SuggestionItem-DNt3kuCB.js";import"./index-DPec4j3o.js";import"./Option-be2q_1d1.js";import"./index-B7vuJ-iL.js";import"./SegmentedButton-CTkUtfOS.js";import"./index-CEBN14-L.js";import"./Select-C_MyYDPb.js";import"./InvisibleMessage-uL2Nn7st.js";import"./index-DvoCoNJi.js";import"./index-BbcqIyzm.js";import"./index-CSp88prM.js";import"./index-C5uwD5iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-bKIjhF8F.js";import"./group-2-EWjgYNtS.js";import"./sort-descending-C_0FMKzH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpIPK8sg.js";import"./utils-DOCuh_Xw.js";import"./index-BFZOBrHJ.js";import"./index-CN1sWRh8.js";import"./index-CzQc_Cim.js";import"./navigation-down-arrow-C-xgZR_F.js";import"./navigation-right-arrow-ChyfPkbT.js";import"./navigation-right-arrow-DBwa9qHY.js";import"./useCurrentTheme-BGs9iYKG.js";import"./index-BnsjrB_W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjl0qmS-.js";import"./paper-plane-PLOUunSl.js";import"./index-D1mCxT3B.js";import"./less-S94TrLny.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
