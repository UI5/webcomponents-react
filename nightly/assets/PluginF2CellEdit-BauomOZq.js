import{j as e}from"./iframe-B2FKbRyU.js";import{useMDXComponents as o}from"./index-B6nFsg5H.js";import{I as r}from"./CommandsAndQueries-Ckb11nUD.js";import{M as l,C as a}from"./blocks-D-EyJoW7.js";import"./Tag-DALomp7A.js";import"./index-DDSpbD3Z.js";import"./copy-JUMniwmI.js";import{F as c}from"./Footer-Boec_nj9.js";import"./PageNotFound-D3X2ZHIh.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CVD9cqsI.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BrDotueY.js";import"./index-DHXfA1aH.js";import"./index-C1DRCM0c.js";import"./index-jZ_VDKcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzpFx6uj.js";import"./addCustomCSSWithScoping-DCMkWG64.js";import"./index-DS8Ies1F.js";import"./index-CKRHtWhm.js";import"./index-DKyTtykB.js";import"./information-gzDx7eZf.js";import"./sys-enter-2-C-oODT1L.js";import"./alert-dNTL_brG.js";import"./index-DCb_xP6l.js";import"./Illustrations-Bj-aY82Z.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bz8is-GI.js";import"./delete-CFesfdDG.js";import"./settings-opsmQeBR.js";import"./NoData-D2Gj788q.js";import"./NoFilterResults-B4v0K1Vp.js";import"./index-6Bhcr5l0.js";import"./IllustratedMessage-6Hb5GR5A.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-_pStiMkC.js";import"./slim-arrow-down-Ys7hMkPK.js";import"./Input-DwMU1cpj.js";import"./ResponsivePopoverCommon.css-DH0byYa1.js";import"./ValueStateMessage.css-Bw_3AW3-.js";import"./Suggestions.css-CfJP3QYm.js";import"./ListBoxItemGroupTemplate-CBBnxOdl.js";import"./ComboBoxItemGroup-pSZDcj_Y.js";import"./ListItemBaseTemplate-DbJzc3OH.js";import"./Token-BQA14vJ4.js";import"./ScrollEnablement-DwnkyfbX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7b-hnxm.js";import"./ToggleButton-DG0J_zb4.js";import"./SuggestionItem-qaKoOHF9.js";import"./index-Cp7riZA0.js";import"./Option-BFH18YB5.js";import"./index-CpfRQ6F_.js";import"./SegmentedButton-m1j72L5U.js";import"./index-DUG8asUQ.js";import"./Select-Db3yOwO_.js";import"./InvisibleMessage-BXgV0ajS.js";import"./slim-arrow-down-BTgZLJbv.js";import"./index-D-rOfIh9.js";import"./index-WUOOkN1f.js";import"./index-Bx2uhMFX.js";import"./index-s315U2R4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CONdRUGs.js";import"./group-2-B0I_ewE0.js";import"./sort-descending-5FQeQbrY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7vTuR1f.js";import"./utils-6W1b-ay8.js";import"./index-B7Ih3QbG.js";import"./index-CthcNRf4.js";import"./index-S57PoKAK.js";import"./navigation-down-arrow-Df_E19F4.js";import"./navigation-right-arrow-BDTIDVrz.js";import"./navigation-right-arrow-5aP-UFj7.js";import"./useCurrentTheme-C8c2YnJs.js";import"./index-Cc6fTIIs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPlkBtoH.js";import"./paper-plane-SWd_61-c.js";import"./index-ZKK6l2ej.js";import"./less-ByTKGmwu.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
