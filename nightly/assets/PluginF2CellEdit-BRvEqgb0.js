import{j as e}from"./iframe-CDMw3QW7.js";import{useMDXComponents as o}from"./index-B1OHiQPx.js";import{I as l,F as r}from"./CommandsAndQueries-DKYp_Jx5.js";import{M as a,C as c}from"./blocks-CUd96uRM.js";import"./Tag-CRCkHgPM.js";import"./index-BFHtg5w_.js";import"./copy-4Dlt6M0w.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CzQ3gixW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjzhAhn4.js";import"./index-QTO9fIyh.js";import"./index-y4pjeQFW.js";import"./Link-fH9wonJ-.js";import"./index-CFg6tGep.js";import"./index-zPaFBXP5.js";import"./index-NVXyFLUS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzgD7Za_.js";import"./addCustomCSSWithScoping-DWGH2XNZ.js";import"./index-CEKogKIQ.js";import"./information-DcnFOD7I.js";import"./sys-enter-2-Bq9738ZR.js";import"./alert-DgZ_z3Yp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-_qD1WAd3.js";import"./delete-DNEaNq2f.js";import"./settings-BzU3TjJh.js";import"./NoData-DO1SL0Xr.js";import"./IllustratedMessage-BJlEMque.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-D7b8dZpx.js";import"./index-CynnG9Ci.js";import"./index-BYJZ9-3j.js";import"./slim-arrow-down-BVsyizBr.js";import"./Input-De2rvuDr.js";import"./ResponsivePopoverCommon.css-D0k6m-Zp.js";import"./ValueStateMessage.css-Bv8RNI0z.js";import"./Suggestions.css-DMqc0-b9.js";import"./ListBoxItemGroupTemplate-8qDrl8tU.js";import"./ComboBoxItemGroup-D_qJnzJt.js";import"./ListItemBaseTemplate-BYc7j03k.js";import"./Token-CNf8IzFD.js";import"./ScrollEnablement-CTahNy0C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C-68iD6i.js";import"./ToggleButton-mgZ_PBA1.js";import"./SuggestionItem-BerFBPyF.js";import"./index-B39rHfMI.js";import"./Option-DvZvNvkk.js";import"./index-Du2TWHEP.js";import"./SegmentedButton-Bc6T5ns7.js";import"./index-D7WlgBg9.js";import"./Select-DYlZ5_OK.js";import"./InvisibleMessage-B9339qwC.js";import"./slim-arrow-down-BSiLed2R.js";import"./index-QjSsixDk.js";import"./index-2tw6FyW6.js";import"./index-DU7qbp-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CbmUmzER.js";import"./group-2-vVU2oJMN.js";import"./sort-descending-BzMUOuiJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-jYJsNqp7.js";import"./utils-ebGiQ-Xy.js";import"./index-D5bKrwpZ.js";import"./index-DTK7HHyN.js";import"./index-BEQ_zuJ6.js";import"./navigation-down-arrow-ZN-BcGN6.js";import"./navigation-right-arrow-DJvSCvps.js";import"./navigation-right-arrow-CnrgcZ8b.js";import"./useCurrentTheme-C7nv2rCg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrIDs3N6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dg3vz_6v.js";import"./paper-plane-SFR-N42C.js";import"./index-wyxekrjG.js";import"./less-CfFvE_i7.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
