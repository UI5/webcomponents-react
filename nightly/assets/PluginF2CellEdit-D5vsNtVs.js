import{j as e}from"./iframe-C-IdMOTF.js";import{useMDXComponents as o}from"./index-8Reouw5a.js";import{I as l,F as r}from"./CommandsAndQueries-BrMhh7sy.js";import{M as a,C as c}from"./blocks-D6xfaR3T.js";import"./Tag-BJpDTkrR.js";import"./index-MVeIUVva.js";import"./copy-F55MzcCW.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CPyBJT2D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hTsIN61t.js";import"./index-D23QN9vi.js";import"./index-CZVRMt16.js";import"./Link-pmU5zsTc.js";import"./index-gC0QYgWs.js";import"./index-DtAqbdZo.js";import"./index-C0vIcEg8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKAG68DO.js";import"./addCustomCSSWithScoping-D9pslfxW.js";import"./index-D6nYdynl.js";import"./information-BEN_uXq9.js";import"./sys-enter-2-Bq6u4lfD.js";import"./alert-6-dTv6Ft.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzqtQaIj.js";import"./delete-BvqZMFSA.js";import"./settings-CDRcyP6l.js";import"./NoData-Y4GENK1u.js";import"./IllustratedMessage-BQMS2CJC.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-Dw3tAFYv.js";import"./index-DeBh3_Rd.js";import"./index-Cen1L1VX.js";import"./slim-arrow-down-Donmu_KW.js";import"./Input-DqXRiIGv.js";import"./ResponsivePopoverCommon.css-Cl4QpyHC.js";import"./ValueStateMessage.css-DgQ8yNuY.js";import"./Suggestions.css-dLfodOLN.js";import"./ListBoxItemGroupTemplate-BgP_QYGe.js";import"./ComboBoxItemGroup-Ba7YxW6U.js";import"./ListItemBaseTemplate-DbsIrYt0.js";import"./Token-DlOPFXjK.js";import"./ScrollEnablement-CkJPJ5oY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dyoPFSMG.js";import"./ToggleButton-DkzxOAA0.js";import"./SuggestionItem-C9UvamUl.js";import"./index-DXyFplVc.js";import"./Option-DeT0HpqA.js";import"./index-KS0YEPKv.js";import"./SegmentedButton-1Sl2D-kX.js";import"./index-C3msFDiq.js";import"./Select-Bu1uNe0q.js";import"./InvisibleMessage-URPy8ZMA.js";import"./slim-arrow-down-C6v2L-5e.js";import"./index-DAfp8Dyw.js";import"./index-B7JTHEbo.js";import"./index-C_F4uQ0w.js";import"./index-DqEr8g6K.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGmXap7O.js";import"./group-2-CHtxxnqE.js";import"./sort-descending-DEFHMBn-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CN_v3WcV.js";import"./utils-BzZ9vAkg.js";import"./index-CpnMsTOO.js";import"./index-CY8tdRX9.js";import"./index-DTW5vHZS.js";import"./navigation-down-arrow-BC-mTUxY.js";import"./navigation-right-arrow-jxEKhTVI.js";import"./navigation-right-arrow-CYHgJ-zu.js";import"./useCurrentTheme-BRedc0uR.js";import"./index-f47Ux14f.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CFrls0z0.js";import"./paper-plane-Ch6Wl9PD.js";import"./index-Bij2cp4G.js";import"./less-9m4Z2tzD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
