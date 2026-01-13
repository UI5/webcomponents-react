import{j as e}from"./iframe-BX6l_vT-.js";import{useMDXComponents as o}from"./index-Bzy26fup.js";import{I as l,F as r}from"./CommandsAndQueries-BQamr4MW.js";import{M as a,C as c}from"./blocks-dv2dOEr1.js";import"./Tag-CPbL9Jm0.js";import"./index-Brt5lPnV.js";import"./copy-DJpI-ZKv.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D4l3HB2W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JvehRoeP.js";import"./index-DN8AW8ib.js";import"./index-CPY8w0If.js";import"./Link-LBAuQHud.js";import"./index-5GNX0CLe.js";import"./index-CdanIUAH.js";import"./index-CUja4hYj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJYHkaYl.js";import"./addCustomCSSWithScoping-DPpaQSds.js";import"./index-DKRKom99.js";import"./information-BHJaLhAv.js";import"./sys-enter-2-EZBfp4iZ.js";import"./alert-DUVH4PBA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ca5r5f4M.js";import"./delete-Bsyy1njk.js";import"./settings-DxWJHI99.js";import"./NoData-C_NtRWhM.js";import"./IllustratedMessage-DIkrg042.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CvIXbxAg.js";import"./index-BDGSG9LU.js";import"./index-Bd42I97O.js";import"./slim-arrow-down-C-LrsL8H.js";import"./Input-CDmiLyyY.js";import"./ResponsivePopoverCommon.css-CmOep2RC.js";import"./ValueStateMessage.css-DBlWYUos.js";import"./Suggestions.css-C86jlgxo.js";import"./ListBoxItemGroupTemplate-CjE33DFP.js";import"./ComboBoxItemGroup-DXvxztj-.js";import"./ListItemBaseTemplate-D6Eqv4kM.js";import"./Token-BcKVBOJy.js";import"./ScrollEnablement-CX9YTqaF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ChOU4iwN.js";import"./ToggleButton-CODQYAiJ.js";import"./SuggestionItem-1DKCdUlb.js";import"./index-DlvRAfCL.js";import"./Option-CFA8b-um.js";import"./index-DAsjesvB.js";import"./SegmentedButton-DUlvEafh.js";import"./index-BWIKqFzV.js";import"./Select-xeWEHzkB.js";import"./InvisibleMessage-BDRoIrKZ.js";import"./slim-arrow-down-48HvW-vj.js";import"./index-BuXHj4_-.js";import"./index-aYisw1Gg.js";import"./index-ZtIQJzTv.js";import"./index-Dr11T0CO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bbs4NOEV.js";import"./group-2-D6oioZ7I.js";import"./sort-descending-DgSgbzqc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bb9INHlF.js";import"./utils-B0NWY5kp.js";import"./index-223TNC1P.js";import"./index-CA6OMJ6E.js";import"./index-BSjQgxdu.js";import"./navigation-down-arrow-DpKyjZiZ.js";import"./navigation-right-arrow-C5pZYAdh.js";import"./navigation-right-arrow-Bwx2a_3u.js";import"./useCurrentTheme-CxsvHeYZ.js";import"./index-Dll0aIpz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr-hHSan.js";import"./paper-plane-DHhXyk0n.js";import"./index-C1fiAmtQ.js";import"./less-CyPDc2VR.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
