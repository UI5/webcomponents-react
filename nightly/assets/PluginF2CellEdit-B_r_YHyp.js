import{j as e}from"./iframe-DYmejECO.js";import{useMDXComponents as o}from"./index-9gDZjqLB.js";import{I as l,F as r}from"./CommandsAndQueries-BUFKZ5oS.js";import{M as a,C as c}from"./blocks-WpvHKkxz.js";import"./Tag-BqbQuhLk.js";import"./index-B5pjKVih.js";import"./copy-Za-_Z-Tq.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dqndnsq3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtSXtxpp.js";import"./index-Cq6cdgcL.js";import"./index-D_-3_YTN.js";import"./Link-FVvXEWOc.js";import"./index-CQOsAJId.js";import"./index-B1aVKp_Z.js";import"./index-CHQEcSbZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6DutTHa.js";import"./addCustomCSSWithScoping-DW_smYaa.js";import"./index-E0O-rqDf.js";import"./information-DDszVPcm.js";import"./sys-enter-2-DGk9QDRk.js";import"./alert-B5ckm3Ge.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBUOFfUF.js";import"./delete-CTZTKHWL.js";import"./settings-WjdBxW6C.js";import"./NoData-BJ0nX3_H.js";import"./IllustratedMessage-7-uYQkyZ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CI6WTuUW.js";import"./index-B-CyWBp1.js";import"./index-CS6sH5Sy.js";import"./slim-arrow-down-BbgvtXR1.js";import"./Input-D3eSQpEN.js";import"./ResponsivePopoverCommon.css-CmjvYdZX.js";import"./ValueStateMessage.css-CUuHv4id.js";import"./Suggestions.css-CuvdJ8X6.js";import"./ListBoxItemGroupTemplate-4YjvPL6O.js";import"./ComboBoxItemGroup-CFEGhyle.js";import"./ListItemBaseTemplate-Fr0aNkev.js";import"./Token-B3KLY-_e.js";import"./ScrollEnablement-Dr9XQj7e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_Mx3JoTx.js";import"./ToggleButton-CXlL9fKv.js";import"./SuggestionItem-C7BSUng4.js";import"./index-B76y_UKV.js";import"./Option-Bea2riBZ.js";import"./index-DlTkKaiO.js";import"./SegmentedButton-CV7f3Z1-.js";import"./index-BZOk0oAR.js";import"./Select-B_CaPd95.js";import"./InvisibleMessage-goreZJqY.js";import"./slim-arrow-down-Ce0kb6v-.js";import"./index-DKdmNSnc.js";import"./index-D5TJ92nf.js";import"./index-cYgTFA9L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D7jAZBjp.js";import"./group-2-COqIM_cV.js";import"./sort-descending-CoPut5E-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUdvcpQW.js";import"./utils-g0fn1CkI.js";import"./index-CRr32CDK.js";import"./index-CDV5VZBY.js";import"./index-H9t-i14p.js";import"./navigation-down-arrow-C1ddotBT.js";import"./navigation-right-arrow-Ca-BUU1v.js";import"./navigation-right-arrow-D7Z03VwH.js";import"./useCurrentTheme-BGTNx-Lj.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DI1P8mhv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BWt4ksXr.js";import"./paper-plane-DMt5qfQg.js";import"./index-B8Foa8Pz.js";import"./less-D_PUL5W3.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
