import{j as e}from"./iframe-eDai9lNh.js";import{useMDXComponents as o}from"./index-DWaT93aF.js";import{I as l,F as r}from"./CommandsAndQueries-DdbJ0tNe.js";import{M as a,C as c}from"./blocks-D3QMf_Nj.js";import"./Tag-BEY0r0J2.js";import"./index-CzhxwyLf.js";import"./copy-D01F59bh.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CWUcTBnU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cch7pNGQ.js";import"./index-lMWu8Jr6.js";import"./index-6ZlW-CM4.js";import"./Link-ZNB4Pnda.js";import"./index-DjL8CZ6c.js";import"./index--RcUy8xr.js";import"./index-asMoAFqv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbjGEabH.js";import"./addCustomCSSWithScoping-Cxdlbo61.js";import"./index-CfUZ5M--.js";import"./information-DqhxapEK.js";import"./sys-enter-2-Cyu-GNYt.js";import"./alert-p2WK74VT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8v7FfP_.js";import"./delete-CY-VLVEq.js";import"./settings-C0rZHhe-.js";import"./NoData-UN9eJyec.js";import"./IllustratedMessage-DYcYHt7h.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CD-7g8gm.js";import"./index-BTzKR5qJ.js";import"./index-go4C0tgo.js";import"./slim-arrow-down-kG6DCveM.js";import"./Input-Bqwo-D_6.js";import"./ResponsivePopoverCommon.css-Cub4Z5jf.js";import"./ValueStateMessage.css-DUX2b4_-.js";import"./Suggestions.css-CJbHgiSk.js";import"./ListBoxItemGroupTemplate-DNewmAce.js";import"./ComboBoxItemGroup-6nYAGsza.js";import"./ListItemBaseTemplate-CGHSadDi.js";import"./Token-BFth0cqr.js";import"./ScrollEnablement-CQYct29a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8y3n4Wp.js";import"./ToggleButton-TbU_TYbJ.js";import"./SuggestionItem-Zqcf61Si.js";import"./index-CAHo1qxD.js";import"./Option-s7hK9Co0.js";import"./index-CSrE-u2R.js";import"./SegmentedButton-CP9Hx__l.js";import"./index-Cfn4eBpH.js";import"./Select-Cggb-coC.js";import"./InvisibleMessage-CerZda4F.js";import"./slim-arrow-down-DXROzh0h.js";import"./index-IBifB5M4.js";import"./index-CCqTjS-e.js";import"./index-CUAqmRcs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-StgZWZHS.js";import"./group-2-ClC4Gayj.js";import"./sort-descending-BaJ0iwyz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BMeGntJ3.js";import"./utils-BjMUIUWP.js";import"./index-B8-6hSHC.js";import"./index-D2aXwz5o.js";import"./index-Q2bGr-fD.js";import"./navigation-down-arrow-Bsq7vo40.js";import"./navigation-right-arrow-AG7Z0JW-.js";import"./navigation-right-arrow-DCN3UIyQ.js";import"./useCurrentTheme-Bev_7rJ0.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8QR7ZaE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BKoibY1H.js";import"./paper-plane-CUDWlEvw.js";import"./index-DbIiH5o6.js";import"./less-DMq8Sa1p.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
