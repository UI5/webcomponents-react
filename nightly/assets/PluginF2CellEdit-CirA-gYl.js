import{j as e}from"./iframe-jlZ7haKH.js";import{useMDXComponents as o}from"./index-BDRke1Rk.js";import{I as r}from"./CommandsAndQueries-C62gP0Wv.js";import{M as l,C as a}from"./blocks-GgaXKyV0.js";import"./Tag-BnvuCeE_.js";import"./index-DB16QQd2.js";import"./copy-BXrubwPI.js";import{F as c}from"./Footer-Cyt0gd6r.js";import"./PageNotFound-D9hL323p.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DeV4w8oQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CmI2uh2s.js";import"./index-UUYL4bRA.js";import"./index-BfL44CNr.js";import"./index-DnDTeT16.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_1ld5sf.js";import"./addCustomCSSWithScoping-Cg_sPlM6.js";import"./index-BtQ34sqz.js";import"./index-BcLhYSRh.js";import"./index-EXbubmTe.js";import"./information-D3vqfhW8.js";import"./sys-enter-2-D9bp2L1z.js";import"./alert-7poHLLeI.js";import"./index-BJRmM88L.js";import"./Illustrations-DJD2oa8r.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CF1TeXpN.js";import"./delete-CXC_x1Wt.js";import"./settings-Cb2pk8-g.js";import"./NoData-DHSqpjwQ.js";import"./NoFilterResults-C1oKXwEb.js";import"./index-_9twBSC1.js";import"./IllustratedMessage-CAZPNMC9.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-dukZDfuG.js";import"./slim-arrow-down-CBNyDt1h.js";import"./Input-DEOLuuQ3.js";import"./ResponsivePopoverCommon.css-C-1sAsFZ.js";import"./ValueStateMessage.css-vjmAhNEW.js";import"./Suggestions.css-vYaR_fB3.js";import"./ListBoxItemGroupTemplate-u6isFPzQ.js";import"./ComboBoxItemGroup-CGtKHfXx.js";import"./ListItemBaseTemplate-BrqWXWhE.js";import"./Token-D3dxQxC_.js";import"./ScrollEnablement-BXzeOUzo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9UYn_auW.js";import"./ToggleButton-Bx4hMrn4.js";import"./SuggestionItem-CbZUBmQR.js";import"./index-C2sPI_0t.js";import"./Option-gWpmqGV0.js";import"./index-CBvlNyEh.js";import"./SegmentedButton-C0MY1V7R.js";import"./index-DoKQkSY9.js";import"./Select-T7Cbny-Q.js";import"./InvisibleMessage-DF9bJNX1.js";import"./slim-arrow-down-OBUhn7dW.js";import"./index-C5kwsDAy.js";import"./index-BJ9tFuf9.js";import"./index-DGcTw-tM.js";import"./index-BoJsfaPJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C6RdI72b.js";import"./group-2-B0xuaGVP.js";import"./sort-descending-B15HlQOL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4gr_cEr.js";import"./utils-Dg8OiBgJ.js";import"./index-B9iEuw5a.js";import"./index-CfgM1I13.js";import"./index-CsIoukbr.js";import"./navigation-down-arrow-CnCKx9b1.js";import"./navigation-right-arrow-C6AIXjk9.js";import"./navigation-right-arrow-BR4Lo9-V.js";import"./useCurrentTheme-Di1dsbRk.js";import"./index-DuIRYjXG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CBECOKtB.js";import"./paper-plane-BvaLAYzQ.js";import"./index-vs6vsdhj.js";import"./less-Bo8veSqq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(c,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};
