import{j as e}from"./iframe-DfIU3iRi.js";import{useMDXComponents as o}from"./index-BAUWkqwx.js";import{I as l,F as r}from"./CommandsAndQueries-CCvlfqZe.js";import{M as a,C as c}from"./blocks-DKKhajQJ.js";import"./Tag-CF4VAGn3.js";import"./index-_jZ5OE_X.js";import"./copy-C8IsFnQF.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ByNHvu_e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoTITwqN.js";import"./index-CqJNVQT5.js";import"./index-dA_mFJJw.js";import"./Link-C-uHXK5B.js";import"./index-CIxyPlXE.js";import"./index-YCl-_jCh.js";import"./index-BGfN_eSt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ohosJA7I.js";import"./addCustomCSSWithScoping-CtydAM5n.js";import"./index-DeDDTWfB.js";import"./information-BagB6Da7.js";import"./sys-enter-2-BiNE0Ouk.js";import"./alert-2mu58sd7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-KGpbhBBx.js";import"./delete-8D9Xq0f6.js";import"./settings-BAe5CL2m.js";import"./NoData-CxWdAvqb.js";import"./IllustratedMessage-Bd_r2vYm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-m6ySQsFp.js";import"./index-BG5NLI_b.js";import"./index-B19xXjjm.js";import"./slim-arrow-down-Bb-YtPMU.js";import"./Input-CqjsZhK9.js";import"./ResponsivePopoverCommon.css-Cy1wPIS3.js";import"./ValueStateMessage.css-BAxRfhDW.js";import"./Suggestions.css-DueDNo8O.js";import"./ListBoxItemGroupTemplate-BTtpw6gO.js";import"./ComboBoxItemGroup-DWq0dbqq.js";import"./ListItemBaseTemplate-DI00QP8t.js";import"./Token-Nuc1IURe.js";import"./ScrollEnablement-aPqXwvy5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhaZK_FW.js";import"./ToggleButton-Ch3-84nC.js";import"./SuggestionItem-BSPqvPH_.js";import"./index-CBK8lcqF.js";import"./Option-FqdINU15.js";import"./index-Dn2WB7u1.js";import"./SegmentedButton-1X7EzAS8.js";import"./index-jyVCXScg.js";import"./Select-CiT-nASS.js";import"./InvisibleMessage-7vjgfI66.js";import"./slim-arrow-down-DX1xgdpR.js";import"./index-l4yRj4An.js";import"./index-Cx3lK-My.js";import"./index-CGx2oPX9.js";import"./index-DOZNbDJp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CD2G-MzG.js";import"./group-2-fP7CGRh_.js";import"./sort-descending-pMOdjws6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5yWugzz.js";import"./utils-CLitdEJM.js";import"./index-D2jxXTUw.js";import"./index-Be52d92g.js";import"./index-CZUYrYNt.js";import"./navigation-down-arrow-CENkI8Ff.js";import"./navigation-right-arrow-Dmj1kZCH.js";import"./navigation-right-arrow-CxtfgXb_.js";import"./useCurrentTheme-Ci0pxYcB.js";import"./index-CGK5XLKa.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiwRRP9a.js";import"./paper-plane-CAQIfZrW.js";import"./index-C_6378zF.js";import"./less-DoffisFq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
