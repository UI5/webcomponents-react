import{j as e}from"./iframe-DwaN3YOb.js";import{useMDXComponents as o}from"./index-DJkPMHl0.js";import{I as l,F as r}from"./CommandsAndQueries-celHgEKj.js";import{M as a,C as c}from"./blocks-VOPJhWRb.js";import"./Tag-CvvDTrwW.js";import"./index-CeIuBzgz.js";import"./copy-CKG1fqk8.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D8qv-qyc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVTJV5Os.js";import"./index-DjYkOeBC.js";import"./index-CUaYuXp6.js";import"./Link-DCuWG7Zr.js";import"./index-C3ayLo5Y.js";import"./index-Bi8h6EAq.js";import"./index-D4NPnlzD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pPwV4WuA.js";import"./addCustomCSSWithScoping-CDiHCMLw.js";import"./index-DTu_z_3g.js";import"./information-DlBGosYj.js";import"./sys-enter-2-D6KHkFFC.js";import"./alert-CbpKaM9g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BvknPgOG.js";import"./delete-oCNE_JQh.js";import"./settings-DEs1Fc49.js";import"./NoData-DAYfBbqK.js";import"./IllustratedMessage-wzKYdU_-.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cb_5cmEk.js";import"./index-BcPBHQ-Q.js";import"./index-Bke4YviU.js";import"./slim-arrow-down-CRaneK80.js";import"./Input-CLIZhDum.js";import"./ResponsivePopoverCommon.css-CJC70dmu.js";import"./ValueStateMessage.css-DJT3AHT7.js";import"./Suggestions.css-CeDH46KQ.js";import"./ListBoxItemGroupTemplate-BQ-rC9oN.js";import"./ComboBoxItemGroup-mMihpAIY.js";import"./ListItemBaseTemplate-CRnzAUDY.js";import"./Token-Bw2wQhOZ.js";import"./ScrollEnablement-lcRjFW01.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2rgfoOK.js";import"./ToggleButton-Cp7FiFLg.js";import"./SuggestionItem-CXEUnxx9.js";import"./index-BeETY4Un.js";import"./Option-DpzRHCg2.js";import"./index-BaS94csF.js";import"./SegmentedButton-Bs4JK4vg.js";import"./index-CdGoTqGJ.js";import"./Select-DP-woAt8.js";import"./InvisibleMessage-C38-tOeF.js";import"./slim-arrow-down-CCRASHHL.js";import"./index-YBse5kfL.js";import"./index-CB8IrRkr.js";import"./index-xilM6z0g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CPVva38y.js";import"./group-2-CSHzsICd.js";import"./sort-descending-CWc_CsJd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KwF5pWQ5.js";import"./utils-CwcFpu02.js";import"./index-De37CZAE.js";import"./index-CjVizb-b.js";import"./index-ClYWh6yw.js";import"./navigation-down-arrow-DKN53QTj.js";import"./navigation-right-arrow-z9S6-sIY.js";import"./navigation-right-arrow-DD3mtqXo.js";import"./useCurrentTheme-Wde8txbg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D_nGAcEA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjGMBWnz.js";import"./paper-plane-Dc6cZlTV.js";import"./index-D10CmlMt.js";import"./less-BhgjPFtm.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
