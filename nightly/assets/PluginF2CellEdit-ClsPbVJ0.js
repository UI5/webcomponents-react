import{j as e}from"./iframe-dY_MtB0H.js";import{useMDXComponents as o}from"./index-lTaYTAxK.js";import{I as l,F as r}from"./CommandsAndQueries-BmTyHFa7.js";import{M as a,C as c}from"./blocks-Cb83AQYu.js";import"./Tag-CxsGqX-Z.js";import"./index-Bn3aq9YQ.js";import"./copy-D63JhW9h.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DIrstwVo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3rLokAO.js";import"./index-SPIujRFM.js";import"./index-CvfG5erE.js";import"./Link-CVqB5eeU.js";import"./index-B-7UltV5.js";import"./index-DLNzTjP4.js";import"./index-Bzi9OmH5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xawsFKB1.js";import"./addCustomCSSWithScoping-Dwp_g_5J.js";import"./index-C_5JPwqD.js";import"./information-D5v06NEv.js";import"./sys-enter-2-Db0ak0Nd.js";import"./alert-BFAYnF-v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaLQSA0E.js";import"./delete-g2CuJ_wb.js";import"./settings-DAd_6mYH.js";import"./NoData-Blv8I7YQ.js";import"./IllustratedMessage-BLDDWSdA.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CaqiHixB.js";import"./index-qJBtItPV.js";import"./index-CWiSxvhn.js";import"./slim-arrow-down-CKBotrxy.js";import"./Input-DxE4TE5M.js";import"./ResponsivePopoverCommon.css-BS9wczML.js";import"./ValueStateMessage.css-CwzPbVeu.js";import"./Suggestions.css-BjOM4Zj7.js";import"./ListBoxItemGroupTemplate-DFxbQhuY.js";import"./ComboBoxItemGroup-DkBoYEbS.js";import"./ListItemBaseTemplate-Yzd_BkA_.js";import"./Token-BIFWvplK.js";import"./ScrollEnablement-D1kjFpjc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5edM-Bva.js";import"./ToggleButton-TjzAbPq5.js";import"./SuggestionItem-C57ebMKU.js";import"./index-CaPdWPLL.js";import"./Option-C1ySdqTY.js";import"./index-zXzmY2rb.js";import"./SegmentedButton-Jhgj92Ar.js";import"./index-DTHWpZOl.js";import"./Select-AWtqTVOK.js";import"./InvisibleMessage-B3-0tvhv.js";import"./slim-arrow-down-BOfgu5aU.js";import"./index-DYbah51H.js";import"./index-CP0kb2RZ.js";import"./index-CfFSy1iK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmJLfmv.js";import"./group-2-1jf4JmlH.js";import"./sort-descending-Dm9j_ynP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-5V9EsP.js";import"./utils-BWRe96GN.js";import"./index-DEtQnl29.js";import"./index-DQ1x_Uk-.js";import"./index-CPn1OsK-.js";import"./navigation-down-arrow-Di7D0dyJ.js";import"./navigation-right-arrow-Ds1fXGh0.js";import"./navigation-right-arrow-BZlFav50.js";import"./useCurrentTheme-D3zL71pS.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IWQOu6Ty.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D5nyE8Ez.js";import"./paper-plane-CAK1tVhg.js";import"./index-Dp-bSeZB.js";import"./less-Djd8oRMN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
