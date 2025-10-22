import{j as e}from"./iframe-Cs5gvioi.js";import{useMDXComponents as o}from"./index-BtKDOpat.js";import{I as l,F as r}from"./CommandsAndQueries-BdMbFe6n.js";import{M as a,C as c}from"./blocks-BcK5AE3G.js";import"./Tag-D4RJrwN-.js";import"./index-CiQvF52b.js";import"./copy-DKGYESSv.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bah13JbR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPDq8Cwl.js";import"./index-BKjvzOpn.js";import"./index-Ccaj5Czc.js";import"./Link-EUC5ZRxP.js";import"./index-D8h8jAY6.js";import"./index-DYp5aNvA.js";import"./index-oQYl8gvD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D_r_w5Dj.js";import"./addCustomCSSWithScoping-CRaSmViC.js";import"./index-BxdMkIQq.js";import"./information-C2H5qqQk.js";import"./sys-enter-2-DnVNaHmP.js";import"./alert-Bc-gjyRb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C55QbHYW.js";import"./delete-CsuXrnL4.js";import"./settings-3bL7AxSj.js";import"./NoData-gyUpjjzs.js";import"./IllustratedMessage-BceXQMeD.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BkmX49kP.js";import"./index-CrEnkyES.js";import"./index-DygCzEx2.js";import"./slim-arrow-down-DXUzQK41.js";import"./Input-DD--HJgU.js";import"./ResponsivePopoverCommon.css-DsMB5qWp.js";import"./ValueStateMessage.css-DQ3KvLVl.js";import"./Suggestions.css-CQKPof5S.js";import"./ListBoxItemGroupTemplate-D1OUhHLE.js";import"./ComboBoxItemGroup-mjT1FhTP.js";import"./ListItemBaseTemplate-pXS2uemi.js";import"./Token-Vd3_FFDP.js";import"./ScrollEnablement-DFH5AJVi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BJ7R2iOM.js";import"./ToggleButton-DtqSYEtq.js";import"./SuggestionItem-Cy-toAYd.js";import"./index-Dn8IZjAy.js";import"./Option-CSEjJgZb.js";import"./index-B8E3208u.js";import"./SegmentedButton-BzfIjTCb.js";import"./index-CKPEe733.js";import"./Select-C34yPPyn.js";import"./InvisibleMessage-sIaY5jUe.js";import"./slim-arrow-down-Vs4ZtB-z.js";import"./index-BJpgtMTj.js";import"./index-BJuiI9q0.js";import"./index-D5YUVenJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nzG_jgzZ.js";import"./group-2-9Ba8pfXC.js";import"./sort-descending-Dk7bIx-V.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BeDU4ks0.js";import"./utils-D1ZaWfd7.js";import"./index-CfxXWdHC.js";import"./index-wq4yb3YT.js";import"./index-DD1WbCut.js";import"./navigation-down-arrow-Dnzw4uYB.js";import"./navigation-right-arrow-CsjF2Nv1.js";import"./navigation-right-arrow-CfUUtfYq.js";import"./useCurrentTheme-Dcwokryc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dypxe4oE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqvqHW8h.js";import"./paper-plane-DfliGKzl.js";import"./index-DsaE3rZW.js";import"./less-C_A2DZHR.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
