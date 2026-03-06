import{j as e}from"./iframe-DJVbwX9i.js";import{useMDXComponents as o}from"./index-BFT6aOv2.js";import{I as r}from"./CommandsAndQueries-B-krYIfz.js";import{M as l,C as a}from"./blocks-Cc72oRCz.js";import"./Tag-BNmglB2v.js";import"./index-hobvar2O.js";import"./copy-CPWU3JMS.js";import{F as c}from"./Footer-DBSBdmEP.js";import"./PageNotFound-BtEXsBVj.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-8DY-ZMyw.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dg00UQRP.js";import"./index-JKJcUc-Y.js";import"./index-BYdF4q6P.js";import"./index-D08ymWvo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeatdApf.js";import"./addCustomCSSWithScoping-UxNP_GOA.js";import"./index-BWAGkxsQ.js";import"./index-CZorzsLp.js";import"./index-B61X8BMU.js";import"./information-DINAeq89.js";import"./sys-enter-2-CB2kIbje.js";import"./alert-CG9JhWyD.js";import"./index-CRrLaMaU.js";import"./Illustrations-DPWSckqd.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQGtqyIJ.js";import"./delete-tMrGx_eS.js";import"./settings-B6Cvrc7u.js";import"./NoData-Cj5YMQK8.js";import"./NoFilterResults-CCEmQCy8.js";import"./index-ByT2zG_4.js";import"./IllustratedMessage-B2SOs3LU.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CxOtw0E1.js";import"./Input-C6tRsMHY.js";import"./ResponsivePopoverCommon.css-DMESD_7X.js";import"./ValueStateMessage.css-B32Fgepl.js";import"./Suggestions.css-DPjsY_xJ.js";import"./ListBoxItemGroupTemplate-CzzKHF5M.js";import"./ComboBoxItemGroup-JobMoG47.js";import"./ListItemBaseTemplate-pZJWsuAW.js";import"./Token-gbAcy8Rw.js";import"./ScrollEnablement-CooUtaVi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Nks0FEPD.js";import"./ToggleButton-DYxPFD5Z.js";import"./multiselect-all-DP7ssmA2.js";import"./SuggestionItem-Cuax2lQ0.js";import"./index-BIBwvzel.js";import"./Option-BmaMsH-E.js";import"./index-a2eC0PlC.js";import"./SegmentedButton-1seDyEXD.js";import"./index-CFknfRnD.js";import"./Select-DSt7ZpIf.js";import"./InvisibleMessage-CqYmaIC8.js";import"./index-Bcxa0S6V.js";import"./index-DO8-DS6K.js";import"./index-uuyZWzts.js";import"./index-D9T3Iy8W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-9QXFmXZL.js";import"./group-2-gHK-0O3-.js";import"./sort-descending-DIz0ouCx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DyE6LhaQ.js";import"./utils-DaqdMko9.js";import"./index-_WjPnhUA.js";import"./index-6kSlfcqu.js";import"./index-CAyyWJ5s.js";import"./navigation-down-arrow-bto-rTSq.js";import"./navigation-right-arrow-DOd378v6.js";import"./navigation-right-arrow-qA5U1c9K.js";import"./useCurrentTheme-C6yijx3q.js";import"./index-BY6rd6fw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CL2sk3kX.js";import"./paper-plane-WokCt9TE.js";import"./index-Dzbbd-4U.js";import"./less-DQGRAL1V.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
