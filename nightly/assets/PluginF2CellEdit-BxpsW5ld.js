import{j as e}from"./iframe-DcVQn4h7.js";import{useMDXComponents as o}from"./index-DjjpMNLx.js";import{I as r}from"./CommandsAndQueries-BQOFWNIa.js";import{M as l,C as a}from"./blocks-DpuwUxz9.js";import"./Tag-DIkCdjNz.js";import"./index-DQQWkI0N.js";import"./copy-Bc0coMMf.js";import{F as c}from"./Footer-NfYngWNA.js";import"./PageNotFound-CVfCATZz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DIlNN8Le.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CVy3lCMm.js";import"./index-fZCQALbq.js";import"./index-CEU1rAw4.js";import"./index-CwCoovk9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BldFJeaD.js";import"./addCustomCSSWithScoping-BZ_vF02V.js";import"./index-DdVtCCP3.js";import"./index-C5tsWYzj.js";import"./index-CqxmVbMG.js";import"./information-Cy8WRBMY.js";import"./sys-enter-2-BclYTqTi.js";import"./alert-YdCtzqbp.js";import"./index-DAQytdMa.js";import"./Illustrations-Bw1pJyGV.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B1uni83s.js";import"./delete-CpCA_XDM.js";import"./settings-CUbjO-ae.js";import"./NoData-BVjgM2yj.js";import"./NoFilterResults--zi6MjY0.js";import"./index-xMQkaemi.js";import"./IllustratedMessage-CyBmc5MY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BlMakY4w.js";import"./Input-BW9GEfIA.js";import"./ResponsivePopoverCommon.css-osNOcHdW.js";import"./ValueStateMessage.css-OYxMPf1f.js";import"./Suggestions.css-BtxCLxQv.js";import"./ListBoxItemGroupTemplate-CGQXGHJV.js";import"./ComboBoxItemGroup-CpHww_Ig.js";import"./ListItemBaseTemplate-f8kQG4Jt.js";import"./Token-CHF6HHxJ.js";import"./ScrollEnablement-CZLbZt8M.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BaNuWCKC.js";import"./ToggleButton-BmTxuHC_.js";import"./multiselect-all-BiN6qG0z.js";import"./SuggestionItem-DMa3BA53.js";import"./index-CiwrmhvK.js";import"./Option-C1H6IR-I.js";import"./index-DEYxl-sC.js";import"./SegmentedButton-DnkHPT4g.js";import"./index-BzWYB2Gi.js";import"./Select-BauIhRnb.js";import"./InvisibleMessage-Ru2nSyo5.js";import"./index-BsU0Bybk.js";import"./index-C30tWqmm.js";import"./index-DyXL-gty.js";import"./index-BD8zH4rA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLSgXMGv.js";import"./group-2-DjsnM4Ut.js";import"./sort-descending-C3bCKWTJ.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DtAi62Ks.js";import"./utils-C9vw3VrT.js";import"./index-CuArEFdj.js";import"./index-DKUw4EjC.js";import"./index-elD2Xgk2.js";import"./navigation-down-arrow-CSAd3vAm.js";import"./navigation-right-arrow-DMbE7m0E.js";import"./navigation-right-arrow-D8bzVi_N.js";import"./useCurrentTheme-B81rCOjx.js";import"./index-CFD7jo8u.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CkS_OTKg.js";import"./paper-plane-CjGXrz2J.js";import"./index-S7JGR-kF.js";import"./less-qw1uxsj4.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
