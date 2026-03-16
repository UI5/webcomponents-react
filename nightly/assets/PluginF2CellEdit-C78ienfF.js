import{j as e}from"./iframe--9dKe8DB.js";import{useMDXComponents as o}from"./index-KI9hm8HB.js";import{I as r}from"./CommandsAndQueries-DmMMilME.js";import{M as l,C as a}from"./blocks-sz1V1YD1.js";import"./Tag-Dx2xRUom.js";import"./index-CPDFIZvY.js";import"./copy-DDHnU-KJ.js";import{F as c}from"./Footer-Q0CQ_qDk.js";import"./PageNotFound-CuY3r4La.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DEDvJZy2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BglFcPBB.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./index-BYfUGIr5.js";import"./index-W9KwanBR.js";import"./index-FyOsxtAw.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./index-rkrari7y.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DQVJ7UfD.js";import"./delete-UpR3n6t7.js";import"./settings-we5d1Qdo.js";import"./NoData-CTvQa2cu.js";import"./NoFilterResults-CisMdPss.js";import"./index-Buvth7Xi.js";import"./IllustratedMessage-egyeCVYb.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DT7BwDcp.js";import"./Input-Bzs2WJ0n.js";import"./ResponsivePopoverCommon.css-B-aEh8v6.js";import"./ValueStateMessage.css-fsZpHtW6.js";import"./Suggestions.css-DwtCktYC.js";import"./ListBoxItemGroupTemplate-BDXtzS3x.js";import"./ComboBoxItemGroup-k2eOkzNK.js";import"./ListItemBaseTemplate-CEoNUjl5.js";import"./Token-DzmHzAMQ.js";import"./ScrollEnablement-B0ocudnB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUlTKo1l.js";import"./ToggleButton-BUpmJXw9.js";import"./multiselect-all-xFdwtE2L.js";import"./SuggestionItem-BxBxlMFB.js";import"./index-CxFVbOcB.js";import"./Option-ClyYr9IH.js";import"./index-BUn6GQyk.js";import"./SegmentedButton-BtNun3GR.js";import"./index-vp_fZGXH.js";import"./Select-BJ3mdIAK.js";import"./InvisibleMessage-DJrm2fq1.js";import"./index-CXL69l_u.js";import"./index-CafeHBfG.js";import"./index-DXrjuC-M.js";import"./index-BvCJekuK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEIgHrVL.js";import"./group-2-BIdr9xUh.js";import"./sort-descending-A1ebgf8V.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEfENsPH.js";import"./utils-M3j0Syqb.js";import"./index-Be4Le6Ob.js";import"./index-RhGTS4dy.js";import"./index-D1Rwx7s5.js";import"./navigation-down-arrow-D1hT7rfO.js";import"./navigation-right-arrow-DEiywgOw.js";import"./navigation-right-arrow-uImefhjs.js";import"./useCurrentTheme-Blzbw4Tr.js";import"./index-hK5Tmxlj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-4mhkBenG.js";import"./paper-plane-B7w-DG0X.js";import"./index-DtsRxF2n.js";import"./less-BuMWggUS.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
