import{j as e}from"./iframe-BVmbmlmH.js";import{useMDXComponents as o}from"./index-BayNuhgZ.js";import{I as r}from"./CommandsAndQueries-HKIzYk5f.js";import{M as l,C as a}from"./blocks-DMMtyDnL.js";import"./Tag-CX0-uTWT.js";import"./index-DLhdihT5.js";import"./copy-GT2usG3-.js";import{F as c}from"./Footer-jyZDOgk8.js";import"./PageNotFound-Bx-Sm5Da.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D8OC8vxI.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-mk6Fv6C7.js";import"./index-BxRkRPbG.js";import"./index-BJnbAjLN.js";import"./index-DOsMkDHm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DY1Um-8U.js";import"./addCustomCSSWithScoping-BGYdQCs4.js";import"./index-B9kq_n6z.js";import"./index-hq6INLou.js";import"./index-BCEgOOyQ.js";import"./information-BShnHlGL.js";import"./sys-enter-2-I6roqntb.js";import"./alert-D_-PGSyq.js";import"./index-CGmvxCgE.js";import"./Illustrations-CSa63wVD.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bwe8i4C1.js";import"./delete-Cf2eCD6q.js";import"./settings-A4VPhZbf.js";import"./NoData-0i2pf3q4.js";import"./NoFilterResults-CH6rLyMe.js";import"./index-qGKOQq_Z.js";import"./IllustratedMessage-CE_fHqrV.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-NhJPhk66.js";import"./Input-BkR7wprP.js";import"./ResponsivePopoverCommon.css-CxapldGD.js";import"./ValueStateMessage.css-B-Atw3u2.js";import"./Suggestions.css-BaRcEW8S.js";import"./ListBoxItemGroupTemplate-DkFqFIv-.js";import"./ComboBoxItemGroup-CId5vra8.js";import"./ListItemBaseTemplate-BJdRA9m9.js";import"./Token-B76AWz4_.js";import"./ScrollEnablement-yNv_w-S6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CD5pumRX.js";import"./ToggleButton-DMuM4WHg.js";import"./multiselect-all-ioniiqjx.js";import"./SuggestionItem-DvZGJLTk.js";import"./index-C6E_dfSH.js";import"./Option-CjVbj-vV.js";import"./index-DRVa_8i1.js";import"./SegmentedButton-DpKA1VVa.js";import"./index-C-VIxdSF.js";import"./Select-CTiG6N7Z.js";import"./InvisibleMessage-CFEC6mIV.js";import"./index-OS6XWPB1.js";import"./index-CTdTtt2e.js";import"./index-vcnJyRT4.js";import"./index-CNlu7VXT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CDmAuvPv.js";import"./group-2-fyvVFRtM.js";import"./sort-descending-B1icyYsO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFtwu3lL.js";import"./utils-juR4U1ZI.js";import"./index-Gfu7Ktfz.js";import"./index-CAyHYrEC.js";import"./index-B3Eg-2Xl.js";import"./navigation-down-arrow-CRpQ5yDC.js";import"./navigation-right-arrow-VmHT47vc.js";import"./navigation-right-arrow-aqMR-wNy.js";import"./useCurrentTheme-DSO3zaUO.js";import"./index-D-UcUp0F.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtJvBTrm.js";import"./paper-plane-q0zDJ9Ps.js";import"./index-BplB5G32.js";import"./less-BUs157s7.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
