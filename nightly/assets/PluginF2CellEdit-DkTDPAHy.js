import{j as e}from"./iframe-CMOSZBev.js";import{useMDXComponents as o}from"./index-BTwv99x0.js";import{I as l,F as r}from"./CommandsAndQueries-BBxM4nbH.js";import{M as a,C as c}from"./blocks-C7uNs7TS.js";import"./Tag-CqfvYh1K.js";import"./index-SUBNzPDi.js";import"./copy-CxpwRqG0.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BGGuuGm3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcSeOVwt.js";import"./index-_PRo-73t.js";import"./index-CKeepgUa.js";import"./Link-D-jONPM3.js";import"./index-kRKXYALW.js";import"./index-BG7mFBoF.js";import"./index-DnIJB1t0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DkqbRy7L.js";import"./addCustomCSSWithScoping-CCFGNXq3.js";import"./index-B2Bp115n.js";import"./information-D_sfcND0.js";import"./sys-enter-2-D7lHEvN4.js";import"./alert-CMJogacJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CWm8Pdnv.js";import"./delete-jqJpTe2L.js";import"./settings-1zMM0TTB.js";import"./NoData-DBuwgpdA.js";import"./IllustratedMessage-BofcQBlB.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DWqRVxEj.js";import"./index-CKirJzli.js";import"./index-DF53ugeV.js";import"./slim-arrow-down-DAnkwZ8z.js";import"./Input-BmUNjham.js";import"./ResponsivePopoverCommon.css-BCnF-C9t.js";import"./ValueStateMessage.css-3iIUq-Eq.js";import"./Suggestions.css-BiChEPXm.js";import"./ListBoxItemGroupTemplate-CCd_4VBx.js";import"./ComboBoxItemGroup-BTATmQjz.js";import"./ListItemBaseTemplate-CCj-4nFf.js";import"./Token-Bw95vKiC.js";import"./ScrollEnablement-CZWkeAzp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ZzU_GhBz.js";import"./ToggleButton-PO6AUubZ.js";import"./SuggestionItem-DGmpPMHq.js";import"./index-DErYtSvu.js";import"./Option-BASIIjCE.js";import"./index-D_1ao0HG.js";import"./SegmentedButton-Ck1jyoaW.js";import"./index-DN0A1xHB.js";import"./Select-Dl8hzlud.js";import"./InvisibleMessage-CxtLELZ9.js";import"./slim-arrow-down-D_esAgSu.js";import"./index-DXnWcts-.js";import"./index-BVDh7HGR.js";import"./index-CCryildS.js";import"./index-Cb1OiNpu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B2Cmbs5j.js";import"./group-2-CW05y1Vx.js";import"./sort-descending-BJlygo9d.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTplp2oj.js";import"./utils-CJbFgKgb.js";import"./index-CVcS8amw.js";import"./index-CKyJB_mr.js";import"./index-BqkbFWdI.js";import"./navigation-down-arrow-ehohWkFC.js";import"./navigation-right-arrow-BbmuEJCf.js";import"./navigation-right-arrow-5URvnLbD.js";import"./useCurrentTheme-B0G4hFaD.js";import"./index-CZhfcpCP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cu0Jio6B.js";import"./paper-plane-CwtFbMNe.js";import"./index-D1fdw4IU.js";import"./less-CzDyuHok.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
