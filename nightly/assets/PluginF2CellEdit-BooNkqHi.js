import{j as e}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as o}from"./index-BPvgxWCZ.js";import{I as l,F as r}from"./CommandsAndQueries-Q6uRMqWv.js";import{M as a,C as c}from"./blocks-De_aBrmo.js";import"./Tag-BKx3QN9f.js";import"./index-D4cnUaLM.js";import"./copy-C1tv-pSG.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DXu8cpTj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";import"./index-VZQHlfm7.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CDBgji9G.js";import"./delete-B3tuR7-p.js";import"./settings-D5gHcoOg.js";import"./NoData-D9ka5VCC.js";import"./IllustratedMessage-BJKH4F_T.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DEpwK6Ta.js";import"./index-DTKzGQ6P.js";import"./index-CsB4ym8b.js";import"./slim-arrow-down-BzVC3qLM.js";import"./Input-BYPwe2OS.js";import"./ResponsivePopoverCommon.css-D4L-fz7S.js";import"./ValueStateMessage.css-Da6bxDPp.js";import"./Suggestions.css-D7e9g6wi.js";import"./ListBoxItemGroupTemplate-i04jvwvt.js";import"./ComboBoxItemGroup-35_A61aK.js";import"./ListItemBaseTemplate-zRKoETe6.js";import"./Token-DavucC3B.js";import"./ScrollEnablement-De2yMTO7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOEa2jCy.js";import"./ToggleButton-DUnpLraq.js";import"./SuggestionItem-cFLHLZrB.js";import"./index-CqtNJPl5.js";import"./Option-KMv42Mqm.js";import"./index-Ca9erLwf.js";import"./SegmentedButton-BR2WkUo4.js";import"./index-Dq1tb5Fi.js";import"./Select-BM-L4rd4.js";import"./InvisibleMessage-BnecaueW.js";import"./slim-arrow-down-BF5Yax_r.js";import"./index-DeNJuL6H.js";import"./index-Jqh8kZ4Z.js";import"./index-SAfhucJr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mXBC9qtL.js";import"./group-2-C1w6MKqp.js";import"./sort-descending-D7Gnpxkd.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-e_OfuZeF.js";import"./utils-B0P9OHGE.js";import"./index-ntbAsQ4L.js";import"./index-DYX22vMe.js";import"./index-BH2TLEnM.js";import"./navigation-down-arrow-BNouF3FU.js";import"./navigation-right-arrow-CwzVtkMG.js";import"./navigation-right-arrow-BWpP7Omt.js";import"./useCurrentTheme-C1kqmVty.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BtJSqTjG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CRx_4vwg.js";import"./paper-plane-B06jmj5a.js";import"./index-Ch7LJGDA.js";import"./less-Dzjv4OdC.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
