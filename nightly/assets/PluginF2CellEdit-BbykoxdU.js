import{j as e}from"./iframe-BsLeblbZ.js";import{useMDXComponents as o}from"./index-SmDsT-ZV.js";import{I as r}from"./CommandsAndQueries-BIrmUykn.js";import{M as l,C as a}from"./blocks-MuC3nZ17.js";import"./Tag-YXcZfnM7.js";import"./index-RHsqj3O6.js";import"./copy-D-f_NdBO.js";import{F as c}from"./Footer-Bbw4uFwB.js";import"./PageNotFound-DD-eOCZR.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-0t2926fT.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CBQ0neVT.js";import"./index-B-MH-ZOH.js";import"./index-B9PkCo2j.js";import"./index-Hl67y25M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtKzQDtt.js";import"./addCustomCSSWithScoping-BnenMixx.js";import"./index-Xah-ddNA.js";import"./index-BxpRwQAU.js";import"./index-B-umVgsK.js";import"./information-CyWeW3Ip.js";import"./sys-enter-2-0MhMJNjS.js";import"./alert-CqXBa80-.js";import"./index-DOfJ-lzX.js";import"./Illustrations-BpmOpW1L.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-QeeLFXcn.js";import"./delete-H1wy-dws.js";import"./settings-BRGEmTQw.js";import"./NoData-B8XN3MPs.js";import"./NoFilterResults-DI880b84.js";import"./index-CZvIeLL2.js";import"./IllustratedMessage-CH-k7_PO.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-NHMxkGm6.js";import"./Input-DlcD5Uyx.js";import"./ResponsivePopoverCommon.css-BnR9PF5c.js";import"./ValueStateMessage.css-DaaMCoGD.js";import"./Suggestions.css-B26HkXef.js";import"./ListBoxItemGroupTemplate-sBYZNQZ5.js";import"./ComboBoxItemGroup-CuM1vEgu.js";import"./ListItemBaseTemplate-BujdvxYW.js";import"./Token-BR8sMvH4.js";import"./ScrollEnablement-B2JTzChl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BbebGmy4.js";import"./ToggleButton-Bl3lFzoi.js";import"./multiselect-all-BD4wic1E.js";import"./SuggestionItem-vuP3MGZZ.js";import"./index-BvwE5Rkd.js";import"./Option-DZ9JQFne.js";import"./index-CQYX8dtL.js";import"./SegmentedButton-BbLb6Y2D.js";import"./index-YCEkTVk1.js";import"./Select-ogMEAbmp.js";import"./InvisibleMessage-BLe6-QWs.js";import"./index-DGD-6Hrk.js";import"./index-BkVdLcoI.js";import"./index-DSLM2F3N.js";import"./index-dvi0XJ6b.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Q5KFLZa5.js";import"./group-2-C_-z-OIk.js";import"./sort-descending-B6mPd9eW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B918Q3Uk.js";import"./utils-B5VYX2T8.js";import"./index-tW-oUBSO.js";import"./index-DyHDKnOu.js";import"./index-CRwwj1G-.js";import"./navigation-down-arrow-C2Qg1J8L.js";import"./navigation-right-arrow-Br3RPqB8.js";import"./navigation-right-arrow-CO2v9vy4.js";import"./useCurrentTheme-BggGoIM4.js";import"./index-D0RBnp-L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkunmVQ4.js";import"./paper-plane-iOffuwQ2.js";import"./index-CIjtFDg8.js";import"./less-e75wAmAF.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
