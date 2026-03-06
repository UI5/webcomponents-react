import{j as e}from"./iframe-2x_0PLRY.js";import{useMDXComponents as o}from"./index-C4Rs_8Uq.js";import{I as r}from"./CommandsAndQueries-CvWMTcrY.js";import{M as l,C as a}from"./blocks-DrJbgW55.js";import"./Tag-CYhgI4gb.js";import"./index-C-fDGoUi.js";import"./copy-DSjSLU2X.js";import{F as c}from"./Footer-C23Ewd88.js";import"./PageNotFound-GiConHCM.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bd-jpep-.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dg5-mm9g.js";import"./index-CZ7o6xvr.js";import"./index-lA2D-rzF.js";import"./index-B75d9fwz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUHmvjuE.js";import"./addCustomCSSWithScoping-CuKwKJpy.js";import"./index-Bs9Uk8tv.js";import"./index-DdARDxKZ.js";import"./index-1eyneICk.js";import"./information-CQy15gwz.js";import"./sys-enter-2-fcqn0uC8.js";import"./alert-DZyPZUjF.js";import"./index-Da9gu6ir.js";import"./Illustrations-GJByOHnh.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C1zA47Ed.js";import"./delete-Dm3A4Zzu.js";import"./settings-49zjIzB4.js";import"./NoData-DViCOYv5.js";import"./NoFilterResults-CGrZSXcs.js";import"./index-D8bHh7X2.js";import"./IllustratedMessage-CKpDrrxq.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dh2yHhZH.js";import"./Input-IEwNVI_K.js";import"./ResponsivePopoverCommon.css-ComU2SZW.js";import"./ValueStateMessage.css-DaC-uAV3.js";import"./Suggestions.css-pKApGvll.js";import"./ListBoxItemGroupTemplate-BOrTGd3v.js";import"./ComboBoxItemGroup-Xbiqn1zf.js";import"./ListItemBaseTemplate-BxCXKzrT.js";import"./Token-CYwnA-o2.js";import"./ScrollEnablement-B0eGwDT6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bv6KV_Gq.js";import"./ToggleButton-DcKPP7Q3.js";import"./multiselect-all-Cc7wBjwN.js";import"./SuggestionItem-6XDeeXuO.js";import"./index-CUloKy3a.js";import"./Option-OQxXdKHO.js";import"./index-BwzVHAg0.js";import"./SegmentedButton-BVvm5Et3.js";import"./index-CdCmeGHs.js";import"./Select-BSrjV0De.js";import"./InvisibleMessage-C8emxagq.js";import"./index-CZ8rqGj1.js";import"./index-Bn8GbUkv.js";import"./index-CVFqlISp.js";import"./index-CE5xEOkh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BiuxlBCw.js";import"./group-2-DZ_hsHyl.js";import"./sort-descending-F1dqENZc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D1TKLQXO.js";import"./utils-DHc0pTWH.js";import"./index-CglD4THH.js";import"./index-wskoKDOF.js";import"./index-BlA_lRT3.js";import"./navigation-down-arrow-p8Osdjlf.js";import"./navigation-right-arrow-DgBrm-yY.js";import"./navigation-right-arrow-CtTvgiKo.js";import"./useCurrentTheme-DX8kCYl-.js";import"./index-zvEeTffF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ZD4jjhta.js";import"./paper-plane-B8QRKbXZ.js";import"./index-E3mIAJR3.js";import"./less-CXX32lTI.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
