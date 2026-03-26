import{j as e}from"./iframe-EDZrvS0_.js";import{useMDXComponents as o}from"./index-D_Zuzn6o.js";import{I as r}from"./CommandsAndQueries-DeBGirNK.js";import{M as l,C as a}from"./blocks-CJ57z4uw.js";import"./Tag-Cv2B1DS4.js";import"./index-Bz0BV9YI.js";import"./copy-Duyva9GD.js";import{F as c}from"./Footer-BqU25DvW.js";import"./PageNotFound-BnvHWpv6.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dx5TKmet.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B5fvjtF5.js";import"./index-bU8se7-X.js";import"./index-C-NT2IXI.js";import"./index-dnOa7Ewn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_EBjNmUx.js";import"./addCustomCSSWithScoping-2V-LQLPO.js";import"./index-CZdLboFr.js";import"./index-cZywnC0F.js";import"./index-DezAYIwY.js";import"./information-CAvj8-k7.js";import"./sys-enter-2-Eez9oUbi.js";import"./alert-nmCIz_tp.js";import"./index-D6CBwRDo.js";import"./Illustrations-Cp5J5qhx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-utPuCR04.js";import"./delete-DR6LH38W.js";import"./settings-CN-5jPNW.js";import"./NoData-Unsc7yGW.js";import"./NoFilterResults-D4Tfubhx.js";import"./index-Bd_ty2tr.js";import"./IllustratedMessage-CLWlkvw9.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BsNqwfYk.js";import"./Input-zEsdeYDW.js";import"./ResponsivePopoverCommon.css-DBFPees2.js";import"./ValueStateMessage.css-DuJxwYcD.js";import"./Suggestions.css-DnDRJwob.js";import"./ListBoxItemGroupTemplate-BZbITfG7.js";import"./ComboBoxItemGroup-DieEz9f8.js";import"./ListItemBaseTemplate-Bof6NJS5.js";import"./Token-Sn-IGO0n.js";import"./ScrollEnablement-K7_frRGH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CnWB-RIw.js";import"./ToggleButton-CVlcvDQY.js";import"./multiselect-all-evCQ6L4Y.js";import"./SuggestionItem-RdjvKtEt.js";import"./index-2B_xiOGC.js";import"./Option-HV-kXJJc.js";import"./index-BbWj_bg9.js";import"./SegmentedButton-z2Z5RFk1.js";import"./index-CA1Jh7mM.js";import"./Select-DfMov8Eu.js";import"./InvisibleMessage-Bzs3a3mB.js";import"./index-C6dZwhpH.js";import"./index-Bp2r4Kh2.js";import"./index-DEf8EDQ-.js";import"./index-jH6Hh22w.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3l8IQP2.js";import"./group-2-u8UewRr6.js";import"./sort-descending-3j3Q1XNY.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUNI2Fe2.js";import"./utils-_j2VpmWA.js";import"./index-BUog9t61.js";import"./index-BEQsTep_.js";import"./index-Bvx781mh.js";import"./navigation-down-arrow-DFC2-NJZ.js";import"./navigation-right-arrow-CG4JKzco.js";import"./navigation-right-arrow-CUEAwi3f.js";import"./useCurrentTheme-BCAEg60Z.js";import"./index-BQba1xDF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXcDMPx8.js";import"./paper-plane-B0VM4cXi.js";import"./index-BO_w0Yy3.js";import"./less-DjhcNxVm.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
