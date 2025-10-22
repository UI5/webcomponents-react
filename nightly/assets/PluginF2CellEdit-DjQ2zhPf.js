import{j as e}from"./iframe-Dl0DWg8M.js";import{useMDXComponents as o}from"./index-Dunz3Qkg.js";import{I as l,F as r}from"./CommandsAndQueries-DcyHQWO5.js";import{M as a,C as c}from"./blocks-z5J1zZs0.js";import"./Tag-8UYUnG7U.js";import"./index-CIa6NQE1.js";import"./copy-BhfJfLSX.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BP0LJa49.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qDCkQVmj.js";import"./index-ClreWoEe.js";import"./index-fJlTqGLz.js";import"./Link-C2qcQY2b.js";import"./index-BtW57M3z.js";import"./index-DfHOwcie.js";import"./index-D98fiUtL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8jMVyWi.js";import"./addCustomCSSWithScoping-BtXYUpmM.js";import"./index-9_QD_94O.js";import"./information-0V3r1Ig4.js";import"./sys-enter-2-CxUk-uXZ.js";import"./alert-DWaZJdGL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DBsgvEJ8.js";import"./delete-DGhfhmvk.js";import"./settings-CCzCjc89.js";import"./NoData-DT7qf48U.js";import"./IllustratedMessage-CVhrLvam.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BPMHFkT9.js";import"./index-BJ5kqzUP.js";import"./index-BM2p53hS.js";import"./slim-arrow-down-WKx_RP1p.js";import"./Input-CPjqrIGm.js";import"./ResponsivePopoverCommon.css-BqUqASX7.js";import"./ValueStateMessage.css-BGdDzFrr.js";import"./Suggestions.css-u0KnI28S.js";import"./ListBoxItemGroupTemplate-BNIvrjxP.js";import"./ComboBoxItemGroup-BW8olXBy.js";import"./ListItemBaseTemplate-B4z_JR0H.js";import"./Token-B6us6uKB.js";import"./ScrollEnablement-DpTukKXY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cdf08mTY.js";import"./ToggleButton-thsHvfvo.js";import"./SuggestionItem-DTQvckjF.js";import"./index-ELus8qX5.js";import"./Option-DXP4vaIt.js";import"./index-CFE2kaqi.js";import"./SegmentedButton-D06YwmLr.js";import"./index-DWgfJtdr.js";import"./Select-De2if4z3.js";import"./InvisibleMessage-o07I0X4N.js";import"./slim-arrow-down-0jmMhJdt.js";import"./index-CozhcB3v.js";import"./index-BZ0o2qqh.js";import"./index-CXra9vNC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dls4AF5y.js";import"./group-2-Ma5EVCia.js";import"./sort-descending-BF50DcYy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KIunXsJC.js";import"./utils-SZqKSCgS.js";import"./index-BZsvxOnv.js";import"./index-Ny09u-cK.js";import"./index-DN3Jh2GN.js";import"./navigation-down-arrow-CCcXbr-Q.js";import"./navigation-right-arrow-RU6yhQUV.js";import"./navigation-right-arrow-B-ZYLR3_.js";import"./useCurrentTheme-O1jykDcm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BrYqG4yl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-a4IOgjsv.js";import"./paper-plane-C8TajgYr.js";import"./index-BGtGU4dE.js";import"./less-CbCfyPoa.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
