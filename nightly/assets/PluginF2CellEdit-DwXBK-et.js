import{j as e}from"./iframe-CzTCZe7v.js";import{useMDXComponents as o}from"./index-CDGFt6A1.js";import{I as r}from"./CommandsAndQueries-DvEFwabB.js";import{M as l,C as a}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import"./copy-BOjVvS6l.js";import{F as c}from"./Footer-DxyUJb9o.js";import"./PageNotFound-BAD2GAcl.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-pODzDmXr.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CZjSyYly.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./index-DIk2IhoZ.js";import"./index-wip9afZ2.js";import"./index-CXe4MOnZ.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./index-B7_ymrud.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XYq-h-xr.js";import"./delete-CJZ8jZ6-.js";import"./settings-CnlAmuLP.js";import"./NoData-Dn8JPKdK.js";import"./NoFilterResults-Ch4fK2Wx.js";import"./index-EZ4lrPcS.js";import"./IllustratedMessage-D3dYBaOA.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BcDsDQKs.js";import"./Input-uQUrQiez.js";import"./ResponsivePopoverCommon.css-DFzVVW-E.js";import"./ValueStateMessage.css-Dmls9BNj.js";import"./Suggestions.css-C-LfaUWA.js";import"./ListBoxItemGroupTemplate-CjbpLuh1.js";import"./ComboBoxItemGroup-DC7I2Gnu.js";import"./ListItemBaseTemplate-CtxRxA0S.js";import"./Token-DyMWmvtx.js";import"./ScrollEnablement-CI2_tTC7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CirnuoCn.js";import"./ToggleButton-AwQV3-nU.js";import"./multiselect-all-DRIYr1gF.js";import"./SuggestionItem-DTt93yVG.js";import"./index-Dt1pNi0E.js";import"./Option-Dyof31Hh.js";import"./index-uzkhG3jh.js";import"./SegmentedButton-CKBTvj6y.js";import"./index-hEwlQYEv.js";import"./Select-i2pvVUiG.js";import"./InvisibleMessage-hOloPGzW.js";import"./index-Ct09JLpa.js";import"./index-CD5oLMvj.js";import"./index-D9t0fsRq.js";import"./index-CnvUSw0N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vyg3niqB.js";import"./group-2-Cnon157i.js";import"./sort-descending-BcIk7rDN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkbCRIZN.js";import"./utils-BAjUyFPH.js";import"./index-Dbih7k0J.js";import"./index-C8pH3MqW.js";import"./index-PnqtoMqU.js";import"./navigation-down-arrow-DGwNBNUU.js";import"./navigation-right-arrow-Dz1uqIkQ.js";import"./navigation-right-arrow-Bkjp4EVA.js";import"./useCurrentTheme-QlTE88eU.js";import"./index-BsOmmnd6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxJ1Nm0H.js";import"./paper-plane-C3ZNhKsM.js";import"./index-FT_Ukt9o.js";import"./less-Bbajs4eq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
