import{j as e}from"./iframe-mz-DPMfO.js";import{useMDXComponents as o}from"./index-BQe-Y6f4.js";import{I as l,F as r}from"./CommandsAndQueries-CNdgb_xD.js";import{M as a,C as c}from"./blocks-CqHnwxUT.js";import"./Tag-mNyMFg7D.js";import"./index-wUrz4SBY.js";import"./copy-40awRikg.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B0z8hj4E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da-CbngW.js";import"./index-D9y5V_y0.js";import"./index-BPrj4A7u.js";import"./Link-BKhYH1SV.js";import"./index-3wg9O5k7.js";import"./index-B9dZeu2z.js";import"./index-VFO9WUy1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-idDvu4gP.js";import"./addCustomCSSWithScoping-DOUHBih7.js";import"./index--R_eUibk.js";import"./information-DMiSc-jE.js";import"./sys-enter-2-Ll_1TI3l.js";import"./alert-CKymAgR2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cm2BS3GA.js";import"./delete-G5EHOAnz.js";import"./settings-CsivxwAE.js";import"./NoData-BxE6Tv_8.js";import"./IllustratedMessage-DSE8qKy3.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DxOlC27G.js";import"./index-DNTjClb-.js";import"./index-HIa2ArXa.js";import"./slim-arrow-down-D5GhCIze.js";import"./Input-DKhFBeXu.js";import"./ResponsivePopoverCommon.css-Dw0qvCvb.js";import"./ValueStateMessage.css-aIP2Mnhs.js";import"./Suggestions.css-fWWNrwHO.js";import"./ListBoxItemGroupTemplate-nanEm9hw.js";import"./ComboBoxItemGroup-Dvkzxw9l.js";import"./ListItemBaseTemplate-UDeydQID.js";import"./Token-zxfxV2UY.js";import"./ScrollEnablement-2SSah3lR.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8bDYcBG.js";import"./ToggleButton-BX6-NLYV.js";import"./SuggestionItem-D4XueI-M.js";import"./index-BT-CCgox.js";import"./Option-C3T5_tXM.js";import"./index-BfUyajly.js";import"./SegmentedButton-DllV5zlW.js";import"./index-DDRv_OXW.js";import"./Select-BdUDnM2I.js";import"./InvisibleMessage-BIbkbdCE.js";import"./slim-arrow-down-Bk0xFqDz.js";import"./index-DKMucjjn.js";import"./index-D6PoFlyg.js";import"./index-CNllsCPa.js";import"./index-CDMzJTvn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DA7T2Rl3.js";import"./group-2-Bwsdx7qx.js";import"./sort-descending-Btj6h9pS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5M6Mwa8.js";import"./utils-DCG9zNvg.js";import"./index-DIJKpGCJ.js";import"./index-DWu6poIj.js";import"./index-DiIoiFSd.js";import"./navigation-down-arrow-CBdPnBQr.js";import"./navigation-right-arrow-DIpgwEVw.js";import"./navigation-right-arrow-C1ncpOSj.js";import"./useCurrentTheme-BtI3wPUE.js";import"./index-Bi5Z9u5V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CcIdQY8X.js";import"./paper-plane-DQSNVPXE.js";import"./index-Bv3BJuLo.js";import"./less-DD1AM41T.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
