import{j as e}from"./iframe-BcULqSVx.js";import{useMDXComponents as o}from"./index-DimjqcOY.js";import{I as l,F as r}from"./CommandsAndQueries-Bjxahy8c.js";import{M as a,C as c}from"./blocks-SeGv6FI8.js";import"./Tag-DE8sZ6fR.js";import"./index-CMCy2tRg.js";import"./copy-DrZjSCYt.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CwfhnBHr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DfNAKNyC.js";import"./index-Bht3WMEt.js";import"./index-CEmXgIma.js";import"./Link-D2-7Bb71.js";import"./index-Cd7o7phm.js";import"./index-nOLHZmf_.js";import"./index-72f5Qi1p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYesK5yK.js";import"./addCustomCSSWithScoping-DZ8lcGy4.js";import"./index-D0A2Ruup.js";import"./information-C0qTg3A6.js";import"./sys-enter-2-hVsohqhg.js";import"./alert-CRlYmZ6n.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjsLDXTt.js";import"./delete-D4gojdJ3.js";import"./settings-DQ2ylyfP.js";import"./NoData-BqgAG3sz.js";import"./IllustratedMessage-9FLylkPF.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BL1qCewm.js";import"./index-i0HUbk-Q.js";import"./index-BeV7o16d.js";import"./slim-arrow-down-hE2EqBiC.js";import"./Input-DbwFVhoi.js";import"./ResponsivePopoverCommon.css-Cwh624CK.js";import"./ValueStateMessage.css-d2Jp-8qc.js";import"./Suggestions.css-DvUhQ2oV.js";import"./ListBoxItemGroupTemplate-CPRrFJXE.js";import"./ComboBoxItemGroup-wocKQbDo.js";import"./ListItemBaseTemplate-C9iGViqU.js";import"./Token-BmuMUgzL.js";import"./ScrollEnablement-Bz7jmoT9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtQP2CZp.js";import"./ToggleButton-l4zYl7a2.js";import"./SuggestionItem-BvM1s-Ep.js";import"./index-BKB4sp5j.js";import"./Option-CnCNxHHl.js";import"./index-6IYiZanH.js";import"./SegmentedButton-CsKBwiEG.js";import"./index-DiH1WLgS.js";import"./Select-Kk-2dMK4.js";import"./InvisibleMessage-DxnWWDzY.js";import"./slim-arrow-down-2dLbZhMa.js";import"./index-DN80B9hU.js";import"./index-ClrkJCXk.js";import"./index-D0znPBId.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B6gmJJpm.js";import"./group-2-kiGo_aBB.js";import"./sort-descending-DO-3UGP3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CyfGHOa1.js";import"./utils-B0S858C0.js";import"./index-ANJkbmQy.js";import"./index-Dp7rxzF-.js";import"./index-DbHuW_um.js";import"./navigation-down-arrow-0PRVlgRF.js";import"./navigation-right-arrow-OtK-3m38.js";import"./navigation-right-arrow-BxINGnO8.js";import"./useCurrentTheme-C4hYD1x7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BzQU3Sud.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B93fOd8S.js";import"./paper-plane-rcdV2FrJ.js";import"./index-RdWEGO-1.js";import"./less-DFYHTHFm.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
