import{j as e}from"./iframe-D3LJsbiF.js";import{useMDXComponents as o}from"./index-CyzPa2YT.js";import{I as r}from"./CommandsAndQueries-ZyWBFV72.js";import{M as l,C as a}from"./blocks-C17hS1H0.js";import"./Tag-DEA3QTbc.js";import"./index-DQRzxDSe.js";import"./copy-CVdXx4M8.js";import{F as c}from"./Footer-BXlDlrd5.js";import"./PageNotFound-BgagSqcc.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-cQu6qAck.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DcTIU4K2.js";import"./index-BCAZlXLW.js";import"./index-N6F2Hon5.js";import"./index-CQnpN8bu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CgFvj6Uo.js";import"./addCustomCSSWithScoping-DIPZZBkR.js";import"./index-GY8piuJS.js";import"./index-Do3YGvBX.js";import"./index-CukaHHo2.js";import"./information-Pe11Evj5.js";import"./sys-enter-2-nzdqIN1z.js";import"./alert-8s9TsqZs.js";import"./index-Bs-GzB5h.js";import"./Illustrations-DV_KfhEH.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DAB0X6cx.js";import"./delete-Cpf3YRTH.js";import"./settings-lg9V2mku.js";import"./NoData-DvxUgMOg.js";import"./NoFilterResults-CC3r0rI0.js";import"./index-C8hyEamZ.js";import"./IllustratedMessage-DksfyZ_X.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C8XemuHR.js";import"./Input-B1OANMVL.js";import"./ResponsivePopoverCommon.css-Qeab4xYL.js";import"./ValueStateMessage.css-D70pJEyG.js";import"./Suggestions.css-Cmes9Jc-.js";import"./ListBoxItemGroupTemplate-DVrCYXQC.js";import"./ComboBoxItemGroup-zlmutFOl.js";import"./ListItemBaseTemplate-CcljlKh6.js";import"./Token-CaO8U0-1.js";import"./ScrollEnablement-B33zvDKT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2Jwg-e3.js";import"./ToggleButton-D0CBxY4k.js";import"./multiselect-all-C06PVQU1.js";import"./SuggestionItem-DE4exilg.js";import"./index-_QaCRpys.js";import"./Option-Cvor7pOw.js";import"./index-Dxm8KCWK.js";import"./SegmentedButton-DC_KjHbJ.js";import"./index-ljAkd_sM.js";import"./Select-B5-sFuNB.js";import"./InvisibleMessage-DC6HuNZv.js";import"./index-YzRzwEXC.js";import"./index-dHcELO_g.js";import"./index-BEv2rjMA.js";import"./index-Z6SBhAE6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTFabBVw.js";import"./group-2-ByNcReFF.js";import"./sort-descending-CLKt-Lxc.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BB12PM0T.js";import"./utils-CJzxWqZp.js";import"./index-tyc9vWGE.js";import"./index-GLEKcSdk.js";import"./index-Btil1byA.js";import"./navigation-down-arrow-DArhHMwd.js";import"./navigation-right-arrow-OIapqFf7.js";import"./navigation-right-arrow-DyYqnXMq.js";import"./useCurrentTheme-C5F3jg4u.js";import"./index-DwfXPZsw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjwt-38Z.js";import"./paper-plane-Ce8u-ijT.js";import"./index-C_UElvqa.js";import"./less-CDY1RD56.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
