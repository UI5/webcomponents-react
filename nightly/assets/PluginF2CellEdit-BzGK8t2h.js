import{j as e}from"./iframe-CoAi7Ttt.js";import{useMDXComponents as o}from"./index-CTifqAle.js";import{I as l,F as r}from"./CommandsAndQueries-Bmwjvcx6.js";import{M as a,C as c}from"./blocks-Ybxx5XcU.js";import"./Tag-DogcFDWn.js";import"./index-zKgtSNJj.js";import"./copy-CDQOzwpW.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ByBJ9ZH-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CO1YKgmB.js";import"./index-Cq0wf6-J.js";import"./index-CnlNXdqG.js";import"./Link-BYcIvZzO.js";import"./index-CDFqh5IR.js";import"./index-B6Wc4p5_.js";import"./index-Cq2phxGV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z6K6IIMy.js";import"./addCustomCSSWithScoping-BPStdEW-.js";import"./index-DbUh3jFl.js";import"./information-BEJpmRSo.js";import"./sys-enter-2-A-vrRu2-.js";import"./alert-Bip-otgE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ml1YjSwo.js";import"./delete-Bmuh7N5L.js";import"./settings-3-EWs3iX.js";import"./NoData-BeeL7oJD.js";import"./IllustratedMessage-DDDiGsCm.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DOM4bvJY.js";import"./index-BUNmVAeL.js";import"./index-Ce9_H2mo.js";import"./slim-arrow-down-C4Zv-sp4.js";import"./Input-B6TJfZNr.js";import"./ResponsivePopoverCommon.css-DEHIK5w4.js";import"./ValueStateMessage.css-taduqeY7.js";import"./Suggestions.css-B-HnuI29.js";import"./ListBoxItemGroupTemplate-Cw8tkkDC.js";import"./ComboBoxItemGroup-D4GwkaDp.js";import"./ListItemBaseTemplate-4zjGS_SN.js";import"./Token-87PIswjb.js";import"./ScrollEnablement-BkGsl_bk.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwmvV3ez.js";import"./ToggleButton-CHD9qof2.js";import"./SuggestionItem-CiNaD7wa.js";import"./index-O9Iaeyjv.js";import"./Option-yTMBTxoW.js";import"./index-CacjXjcP.js";import"./SegmentedButton-CDIHDaC9.js";import"./index-C8bJpO0W.js";import"./Select-BplUcK6s.js";import"./InvisibleMessage-DMo6sLGx.js";import"./slim-arrow-down-BeH-Dgqc.js";import"./index-DNcyh1s3.js";import"./index-NyngYkNy.js";import"./index-Dbog1EiU.js";import"./index-Bs_4T8nn.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CRwGeHAq.js";import"./group-2-CpCeXAY5.js";import"./sort-descending-DJ5_tlNx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-RpjumSju.js";import"./utils-xumaylSf.js";import"./index-KighuX2F.js";import"./index-gniM_8IR.js";import"./index-DOlMH_3T.js";import"./navigation-down-arrow-qe1kaUvs.js";import"./navigation-right-arrow-SwkIH0vW.js";import"./navigation-right-arrow-CFFeqYEg.js";import"./useCurrentTheme-CbzIKp_1.js";import"./index-BhhaNHVG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cye1bIBc.js";import"./paper-plane-Bc39tSYe.js";import"./index-CKkhBjhg.js";import"./less-BsWMeBSw.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
