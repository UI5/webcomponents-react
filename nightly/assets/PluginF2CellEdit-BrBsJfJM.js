import{j as e}from"./iframe-JepDsySv.js";import{useMDXComponents as o}from"./index-BGpK8Gfn.js";import{I as r}from"./CommandsAndQueries-BpbXUgFJ.js";import{M as l,C as a}from"./blocks-BbBU6U9u.js";import"./Tag-B5HHC3_D.js";import"./index-CgzvULcW.js";import"./copy-D2Pke32f.js";import{F as c}from"./Footer-DkGRGaaK.js";import"./PageNotFound-BYj9CuoF.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DvFdGoFq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BLuv4AbX.js";import"./index-BKoJ8bur.js";import"./index-C220bubu.js";import"./index-CcxcRSha.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzfOud-0.js";import"./addCustomCSSWithScoping-f93Oozyz.js";import"./index-Bd6WgbUi.js";import"./index-0BxTwmFy.js";import"./index-CIXtBD0J.js";import"./information-DXY6cLV_.js";import"./sys-enter-2-e1zqJEbk.js";import"./alert-BXOPntd7.js";import"./index-8tSJZtFG.js";import"./Illustrations-sShT8n29.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DB1X0-yk.js";import"./delete-BMjzJ8I_.js";import"./settings-D51mHDx-.js";import"./NoData-DTdJHQio.js";import"./NoFilterResults-Dx8L-MqR.js";import"./index-BNDpV-__.js";import"./IllustratedMessage-Dynl3KMz.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-CbxbNk1w.js";import"./slim-arrow-down-Dt-7CG4Q.js";import"./Input-f39H6uy6.js";import"./ResponsivePopoverCommon.css-BKF0yN8r.js";import"./ValueStateMessage.css-C0leCwz7.js";import"./Suggestions.css-DPwYa0Rw.js";import"./ListBoxItemGroupTemplate-DuwHciDt.js";import"./ComboBoxItemGroup-iyr2zk0K.js";import"./ListItemBaseTemplate-yAH3C8cG.js";import"./Token-Bw86fiqE.js";import"./ScrollEnablement-Bf0xODSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DaU3lC3b.js";import"./ToggleButton-DRj1b1JE.js";import"./SuggestionItem-Db9ZyQ-5.js";import"./index-Diqc62Zx.js";import"./Option-B-qv-w1U.js";import"./index-DAt4QP07.js";import"./SegmentedButton-B71_4ItV.js";import"./index-B9-qYlKd.js";import"./Select-BmEwDHzx.js";import"./InvisibleMessage-DglvjQpx.js";import"./slim-arrow-down-DOXlkwy5.js";import"./index-BLd9zCHc.js";import"./index-BrKPVcK1.js";import"./index-DRDJaTFL.js";import"./index-Dd7JImE6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-9Jnsuke6.js";import"./group-2-CJV4M1Rl.js";import"./sort-descending-C5QauENK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-l64aeKU4.js";import"./utils-BBoBz28-.js";import"./index-CPAJ8klG.js";import"./index-Cq1parp_.js";import"./index-BjeUsn3F.js";import"./navigation-down-arrow-Csf9CClE.js";import"./navigation-right-arrow-D7m_6N7r.js";import"./navigation-right-arrow-D9pak7Fp.js";import"./useCurrentTheme-CZHOHdUN.js";import"./index-C6SVu-VQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cj9ds3Xk.js";import"./paper-plane-DwaO0bjK.js";import"./index-C8CCEPvY.js";import"./less-D8z_9I33.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
