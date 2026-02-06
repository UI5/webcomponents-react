import{j as e}from"./iframe-CNlfMRh7.js";import{useMDXComponents as o}from"./index-HXyduBEt.js";import{I as l,F as r}from"./CommandsAndQueries-DPIrOVa1.js";import{M as a,C as c}from"./blocks-Dntxnfj7.js";import"./Tag-CSkrKRNp.js";import"./index-CE5EvvTL.js";import"./copy-NJiLz1Ae.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cb0RDD3M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bfxe_3pA.js";import"./index-BsNAKev7.js";import"./index-HOJNtIkV.js";import"./Link-DJApgqFJ.js";import"./index-CMp48S8l.js";import"./index-BZFP7GSJ.js";import"./index-BUkOiAQJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-UJ6G4FQA.js";import"./addCustomCSSWithScoping-0QMDzhQB.js";import"./index-B1BCaeBo.js";import"./information-A5dyTfTj.js";import"./sys-enter-2-Dq0W94t5.js";import"./alert-B1A4HH0Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DJf8n85N.js";import"./delete-DEXvtF94.js";import"./settings-DPUgaiHg.js";import"./NoData-DEwR0Oiz.js";import"./IllustratedMessage-D9SSX3IF.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CmruapN3.js";import"./index-BYE_WijM.js";import"./index-BLLAjhdX.js";import"./slim-arrow-down-CsKC49yD.js";import"./Input-avR_XQYF.js";import"./ResponsivePopoverCommon.css-BShgZ2fu.js";import"./ValueStateMessage.css-DvxKbQOQ.js";import"./Suggestions.css-Dxb_YfCJ.js";import"./ListBoxItemGroupTemplate-mNL0cHkG.js";import"./ComboBoxItemGroup-B3anKuMZ.js";import"./ListItemBaseTemplate-Ckm2u7Ex.js";import"./Token-DZVzBKnY.js";import"./ScrollEnablement-DGzJpPYl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CN81KWn3.js";import"./ToggleButton-yVTDYlWj.js";import"./SuggestionItem-CNQ8mpah.js";import"./index-B-Zm5ade.js";import"./Option-Bv5WbYDv.js";import"./index-hlrtbQ32.js";import"./SegmentedButton-B9G2GqCT.js";import"./index-CuTyZ9rK.js";import"./Select-D1g_uhaP.js";import"./InvisibleMessage-vJ02izGr.js";import"./slim-arrow-down-Bb-cZ27j.js";import"./index-gFi-6H_0.js";import"./index-CNmac44d.js";import"./index-Di_lVIZE.js";import"./index-CtZU6wpy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRjKMM8O.js";import"./group-2-Cv7m-_qi.js";import"./sort-descending-CKmm8A2d.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DMq0_oht.js";import"./utils-BOcBU06y.js";import"./index-B6Hnq5R3.js";import"./index-B7qpoGz1.js";import"./index-DlFpWCyT.js";import"./navigation-down-arrow-BaU-bz7x.js";import"./navigation-right-arrow-lO-0Jw_9.js";import"./navigation-right-arrow-BLxb5j9t.js";import"./useCurrentTheme-DOPeTHqP.js";import"./index-CRAYMyk4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9-bly-f7.js";import"./paper-plane--k09Sqfm.js";import"./index-FW_T7qDu.js";import"./less-BsuMuYn7.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
