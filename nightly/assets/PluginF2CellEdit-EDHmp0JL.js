import{j as e}from"./iframe-D_U86qCv.js";import{useMDXComponents as o}from"./index-Bg9tEBEE.js";import{I as l,F as r}from"./CommandsAndQueries-TugN8T6l.js";import{M as a,C as c}from"./blocks-D61FyfHK.js";import"./Tag-B3d92F0E.js";import"./index-DY3WUczD.js";import"./copy-Crjp4Ac1.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DRRPD7pH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfxZA3Js.js";import"./index-DQ8_SEuH.js";import"./index-D9Q3nud9.js";import"./Link-Cw10wX3R.js";import"./index-hUHwRYTv.js";import"./index-BgwtpBeW.js";import"./index-DjRObmYp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AccWPG8C.js";import"./addCustomCSSWithScoping-peiruV29.js";import"./index-WEtnzuU5.js";import"./information-DVWvWtO-.js";import"./sys-enter-2-CVo9vLlV.js";import"./alert-Dk_EKidz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXaLMGH1.js";import"./delete-C65oQeOP.js";import"./settings-DvNN523n.js";import"./NoData-Btj1TuE6.js";import"./IllustratedMessage-C4Y-hPy7.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BCXv8K85.js";import"./index-BUDr-hLX.js";import"./index-Bf2DNKb6.js";import"./slim-arrow-down-B1jwB_te.js";import"./Input-CTjAUWZQ.js";import"./ResponsivePopoverCommon.css-C8oO5Lyh.js";import"./ValueStateMessage.css-D9qc5lXt.js";import"./Suggestions.css-DEpz1xYL.js";import"./ListBoxItemGroupTemplate-5NLZSPWt.js";import"./ComboBoxItemGroup--dcncB9c.js";import"./ListItemBaseTemplate-mePDBDU1.js";import"./Token-dW6lMRFw.js";import"./ScrollEnablement-Bn4R2vMs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BF_-X6-h.js";import"./ToggleButton-C4w5EmKQ.js";import"./SuggestionItem-BOJBp7v0.js";import"./index-CCRGNalr.js";import"./Option-CpNbPgV2.js";import"./index-C1qDCxNA.js";import"./SegmentedButton-Bsj8EgI0.js";import"./index-B88wz0zx.js";import"./Select-akqe93gn.js";import"./InvisibleMessage-9g7oEz5f.js";import"./slim-arrow-down-DuNkCtSe.js";import"./index-T9m1HJoc.js";import"./index-Bm-mIndo.js";import"./index-DR6xeV5u.js";import"./index-D3NSTpXZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dl4bKezQ.js";import"./group-2-CRRiEe8O.js";import"./sort-descending-BsGiYaME.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BYjXc6T7.js";import"./utils-PdXjpojR.js";import"./index-D2qUqIHh.js";import"./index-MdW3w5l9.js";import"./index-BsoVNeMU.js";import"./navigation-down-arrow-044as9EH.js";import"./navigation-right-arrow-5uKL9NHQ.js";import"./navigation-right-arrow-yNY1bh5s.js";import"./useCurrentTheme-Bhf-1e6-.js";import"./index-DUww4q61.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sMcBz9Ie.js";import"./paper-plane-DE2vkKLc.js";import"./index-D-Hqwhy7.js";import"./less-CRStbIYd.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
