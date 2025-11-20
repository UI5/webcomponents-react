import{j as e}from"./iframe-CwFVqG2B.js";import{useMDXComponents as o}from"./index-DLCucreN.js";import{I as l,F as r}from"./CommandsAndQueries-CPEglOxS.js";import{M as a,C as c}from"./blocks-BPmtq9pk.js";import"./Tag-BAaIxfbN.js";import"./index-Dun977o4.js";import"./copy-BGYvKTCJ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-IPFHSsND.js";import"./preload-helper-PPVm8Dsz.js";import"./index-graRZSxK.js";import"./index-B1OrttLk.js";import"./index-BdiKbL49.js";import"./Link-LJw1ucv9.js";import"./index-CMU9Wk5L.js";import"./index-Cs50Favg.js";import"./index-DS4oeWmb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BQrnNeIO.js";import"./addCustomCSSWithScoping-C4aLMSRb.js";import"./index-CCtj0faG.js";import"./information-BBSRrLZV.js";import"./sys-enter-2-D4JTR3Iq.js";import"./alert-vk5CGtWZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DRrGwzL9.js";import"./delete-BAWpcIUW.js";import"./settings-BVk1IXbs.js";import"./NoData-Bj5ycwAL.js";import"./IllustratedMessage-BHtBrEyE.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-C9ToWu0p.js";import"./index-CcsAx6VM.js";import"./index-DBALDDZY.js";import"./slim-arrow-down-CSjJ9Oz6.js";import"./Input-BRFISGyi.js";import"./ResponsivePopoverCommon.css-55yd8Lsl.js";import"./ValueStateMessage.css-BXXM_drL.js";import"./Suggestions.css-D3s2RFDk.js";import"./ListBoxItemGroupTemplate-CdPhkglx.js";import"./ComboBoxItemGroup-D7oZE5pz.js";import"./ListItemBaseTemplate-CDbPPmc-.js";import"./Token-EaAKc4df.js";import"./ScrollEnablement-BCwkkkko.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DP9SjAAJ.js";import"./ToggleButton-Cc0QHwqT.js";import"./SuggestionItem-Cbtk-40h.js";import"./index-iyeSfRj5.js";import"./Option-Cb-NFj1X.js";import"./index-ypKCmrok.js";import"./SegmentedButton-DYr7Bui3.js";import"./index-CSUbFIFX.js";import"./Select-sAAnT16U.js";import"./InvisibleMessage-LF_vPXeD.js";import"./slim-arrow-down-B8qjkohF.js";import"./index-XwinXGWy.js";import"./index-DYJmk3l7.js";import"./index-C0EOMgqx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuEY5R3f.js";import"./group-2-D-tXx0Dv.js";import"./sort-descending-DvurIphr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BjIQh5tS.js";import"./utils-C6ONr1Lb.js";import"./index-Bw9EaheS.js";import"./index-COV0sCE8.js";import"./index-DTIplfIq.js";import"./navigation-down-arrow-CKNuRE7w.js";import"./navigation-right-arrow-CUpkPzT9.js";import"./navigation-right-arrow-B5fnZfYe.js";import"./useCurrentTheme-Cq5UXjbe.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CzUp6nof.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Kk-MVMWt.js";import"./paper-plane-r-lsifVq.js";import"./index-Iapdt60L.js";import"./less-aP6DHpwq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
