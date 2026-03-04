import{j as e}from"./iframe-DLRMrfR_.js";import{useMDXComponents as o}from"./index-7UnH5ZCU.js";import{I as l,F as r}from"./CommandsAndQueries-D6NirpIC.js";import{M as a,C as c}from"./blocks--r6oFhly.js";import"./Tag-zetZkNsl.js";import"./index-qvcEmQpJ.js";import"./copy-Loq6ZFpK.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DXpJF9zq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwoJQxQH.js";import"./index-D2MDEhSl.js";import"./index-tVwrcd6W.js";import"./Link-CBt9loeM.js";import"./index-kj7rqJLC.js";import"./index-DsFidw_9.js";import"./index-xtEoLRb_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMq-LIht.js";import"./addCustomCSSWithScoping-Ca5vBaM2.js";import"./index-BPd73hWD.js";import"./information-zAO2pP7J.js";import"./sys-enter-2-CCKngdgf.js";import"./alert-B3SXl-8D.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Du6F5iDJ.js";import"./delete-BwPLte86.js";import"./settings-DTgx2sz4.js";import"./NoData-D0S9YqWQ.js";import"./IllustratedMessage-Kd9xQwRs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-sBTvjUoE.js";import"./index--m2P8UtU.js";import"./index-BotVherK.js";import"./slim-arrow-down-DNog2_xn.js";import"./Input-CcN4YVMF.js";import"./ResponsivePopoverCommon.css-h4F5UI1l.js";import"./ValueStateMessage.css-BSnO8zIp.js";import"./Suggestions.css-Cp_HsrZq.js";import"./ListBoxItemGroupTemplate-BJumqT4i.js";import"./ComboBoxItemGroup-CbKVr_4I.js";import"./ListItemBaseTemplate-Da4x_292.js";import"./Token-CW6mgtq8.js";import"./ScrollEnablement-Bz5iwlCG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Df0gJlCx.js";import"./ToggleButton-BOkY-G3n.js";import"./SuggestionItem-DaZJKeIe.js";import"./index-BErLdPcq.js";import"./Option-vNfFuRF2.js";import"./index-BBnywNed.js";import"./SegmentedButton-BaBICXYr.js";import"./index-BB-WV-go.js";import"./Select-CVNbNvaC.js";import"./InvisibleMessage-6vcGDyDm.js";import"./slim-arrow-down-B4rbpJOP.js";import"./index-FoBVlpGj.js";import"./index-CLJ5W-kZ.js";import"./index-DZE8mdic.js";import"./index-1oIhOKBZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrpZAc5e.js";import"./group-2-DOYg5UtM.js";import"./sort-descending-DC1HxPJi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BpRoThxi.js";import"./utils-CKmkWZ04.js";import"./index-OyOMojac.js";import"./index-6gZLQIzr.js";import"./index-WnnzYQ2a.js";import"./navigation-down-arrow-D-m4CbH4.js";import"./navigation-right-arrow-DHewavL_.js";import"./navigation-right-arrow-CTPwzPlI.js";import"./useCurrentTheme-BL04Ku5N.js";import"./index-Dmpy7ykn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-OpbkKVuD.js";import"./paper-plane-B2UAJbES.js";import"./index-DRoHFPpy.js";import"./less-K3WvuTue.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
