import{j as e}from"./iframe-CEhnIlu5.js";import{useMDXComponents as o}from"./index-DvMCH85E.js";import{I as l,F as r}from"./CommandsAndQueries-COpLwEKt.js";import{M as a,C as c}from"./blocks-CzCRTnDN.js";import"./Tag-B0tBXTma.js";import"./index-BxbrXhSf.js";import"./copy-DW0z69Dv.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BRz2kd1y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8phGoz0x.js";import"./index-XtQvC7Ne.js";import"./index-djaoMR7U.js";import"./Link-Dx0jxQut.js";import"./index-BJ3Bv_1U.js";import"./index-Bjvgvr9c.js";import"./index-CmP_HbAe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8LeJtOc.js";import"./addCustomCSSWithScoping-jvTBykEZ.js";import"./index-Dgl42qdE.js";import"./information-GsMzttNM.js";import"./sys-enter-2-CRQG3vkj.js";import"./alert-C-SQT9wT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BLa75-a4.js";import"./delete-DZBn0HlY.js";import"./settings-DqBE4Yfa.js";import"./NoData-z1rscvaR.js";import"./IllustratedMessage-DLIRWhUO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-_eFO4hhR.js";import"./index-RznWYrdR.js";import"./index-jDTu_XSn.js";import"./slim-arrow-down-DCqrbNPW.js";import"./Input-Cesqog5j.js";import"./ResponsivePopoverCommon.css-CcZwtHQR.js";import"./ValueStateMessage.css-tCml9Upt.js";import"./Suggestions.css-CS6Y7lfw.js";import"./ListBoxItemGroupTemplate-gZbs6LSY.js";import"./ComboBoxItemGroup-BX8sl_PD.js";import"./ListItemBaseTemplate-Cm0NfbpL.js";import"./Token-DdBaiPI-.js";import"./ScrollEnablement-DfRZg6Dv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqKgSM5s.js";import"./ToggleButton-BrmzCsUo.js";import"./SuggestionItem-BHZcKCCP.js";import"./index-gfBCaRX1.js";import"./Option-N8h0jF1c.js";import"./index-DdzeaEd3.js";import"./SegmentedButton-BegLLxw2.js";import"./index-B5ZqyAt4.js";import"./Select-DCpGFOXx.js";import"./InvisibleMessage-B7HV_CKC.js";import"./slim-arrow-down-DYJprQ5J.js";import"./index-CF2pqHX5.js";import"./index-CrxXAlAp.js";import"./index-BmZH7-5P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSvmxui-.js";import"./group-2-CTVsJNx-.js";import"./sort-descending-B9sifUyq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-cqZEsl2j.js";import"./utils-gTx_8Idj.js";import"./index-CjpBStF-.js";import"./index-e-mZHuH4.js";import"./index-Dq_2j8ok.js";import"./navigation-down-arrow-B-AcI54H.js";import"./navigation-right-arrow-BOTQ_vif.js";import"./navigation-right-arrow-FWBcN_Yy.js";import"./useCurrentTheme-8m84Q5Bx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-ChT8t06d.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOclZ2jB.js";import"./paper-plane-Ch-Ok7XN.js";import"./index-DySPt_hE.js";import"./less-DY5sd6NF.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
