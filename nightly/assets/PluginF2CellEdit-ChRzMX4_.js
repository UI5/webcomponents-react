import{j as e}from"./iframe-DEgT_E8s.js";import{useMDXComponents as o}from"./index-BZRAiVGZ.js";import{I as l,F as r}from"./CommandsAndQueries-BnsxTdlD.js";import{M as a,C as c}from"./blocks-B_KstB4C.js";import"./Tag-DE605aSS.js";import"./index-YPzE27b5.js";import"./copy-CnDYhLIP.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bb_fYyk9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-q4TahdKC.js";import"./index-DdLyBjYX.js";import"./index-Dzkg0-9t.js";import"./Link-z1epMX3F.js";import"./index-DuT1R6mu.js";import"./index-5Z9enrbF.js";import"./index-C1jXIPsp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1yrXOFa.js";import"./addCustomCSSWithScoping-CGm4Cfs5.js";import"./index-BBLpbuxz.js";import"./information-r8cEHEup.js";import"./sys-enter-2-ChDTDdJ5.js";import"./alert-Dx6xYju9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CQIZa4KW.js";import"./delete-CqK8g_HQ.js";import"./settings-jSVHcypQ.js";import"./NoData-Dgjgajwh.js";import"./IllustratedMessage-WFxvN6sI.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-j_yzxESa.js";import"./index-C4ZbRrOu.js";import"./index-EzHa5_P2.js";import"./slim-arrow-down-B0naEDbF.js";import"./Input-CGH6t_eq.js";import"./ResponsivePopoverCommon.css-Dv84NKMT.js";import"./ValueStateMessage.css-CUqUPYSj.js";import"./Suggestions.css-KnKAVWRs.js";import"./ListBoxItemGroupTemplate-BmVR1VlV.js";import"./ComboBoxItemGroup-Eimfv27_.js";import"./ListItemBaseTemplate-HfAqkZ3H.js";import"./Token-C5MRXtTV.js";import"./ScrollEnablement-8BMeJMa0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-FLiQ-oOI.js";import"./ToggleButton-DMd9fH0Q.js";import"./SuggestionItem-DXBRTfNG.js";import"./index-BXlMwFJS.js";import"./Option-r28MJ-v0.js";import"./index-DAh5-UwY.js";import"./SegmentedButton-DuKNalzH.js";import"./index-7n2e9xhl.js";import"./Select-lIlAJjO9.js";import"./InvisibleMessage-DtVtDVKI.js";import"./slim-arrow-down-BCbYdXvq.js";import"./index-BekFaNX1.js";import"./index-C-dEXwCg.js";import"./index-PbfneB6M.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtNLDG1k.js";import"./group-2-TWAMSjz_.js";import"./sort-descending-gRLN52yg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B5tA4rVe.js";import"./utils-XKst6eGz.js";import"./index-DEM0qvBE.js";import"./index-BHegFaBf.js";import"./index-D1vU14fq.js";import"./navigation-down-arrow-CH6c6eW9.js";import"./navigation-right-arrow-QbezwENh.js";import"./navigation-right-arrow-fC4XWoU4.js";import"./useCurrentTheme-Z5PW4JFt.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFb2J3Hx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CnhilVJw.js";import"./paper-plane-CwF1OIzX.js";import"./index-w9pnBzXO.js";import"./less-C43TjDId.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
