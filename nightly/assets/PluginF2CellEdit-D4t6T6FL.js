import{j as e}from"./iframe-CaWUkniD.js";import{useMDXComponents as o}from"./index-DfLMUe36.js";import{I as l,F as r}from"./CommandsAndQueries-Bkeh__iN.js";import{M as a,C as c}from"./blocks-BMfWNTmT.js";import"./Tag-CqIFc9Gy.js";import"./index-B-q2cOJd.js";import"./copy-CqMAivUp.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-GUBWaz4r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tK2knsWN.js";import"./index-WiTork8k.js";import"./index-dFuotq6J.js";import"./Link-D_-jRuCf.js";import"./index-ChWdN6oy.js";import"./index-Bw4kzKrM.js";import"./index-C4konRse.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B2YWTQyV.js";import"./addCustomCSSWithScoping-DbaRAaG9.js";import"./index-DN8rN30Z.js";import"./information-D2K3Dl_P.js";import"./sys-enter-2-CcH0mjP8.js";import"./alert-CyfuNqtR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BNLMWyGP.js";import"./delete-DJycwJF9.js";import"./settings-D0DUxEmW.js";import"./NoData-BQxtA4T5.js";import"./IllustratedMessage-9XpGkzs2.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-V9izGDFT.js";import"./index-z-EgR5pV.js";import"./index-BPujMNjp.js";import"./slim-arrow-down-CB7ij7Kf.js";import"./Input-BN2yOYjz.js";import"./ResponsivePopoverCommon.css-4Xg56gf5.js";import"./ValueStateMessage.css-BIWamRUp.js";import"./Suggestions.css-DWWZcteF.js";import"./ListBoxItemGroupTemplate-BVaZKClQ.js";import"./ComboBoxItemGroup-Bqkr7cfP.js";import"./ListItemBaseTemplate-B3Kokzka.js";import"./Token-BnxjjGQW.js";import"./ScrollEnablement-C2wBh3eU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKc5fhLO.js";import"./ToggleButton-TkWtjD4U.js";import"./SuggestionItem-CptvwYkF.js";import"./index-MXkAGYYf.js";import"./Option-BNo4kTf7.js";import"./index-C9vxlEk3.js";import"./SegmentedButton-BEWmD6r8.js";import"./index-BgPgtd7C.js";import"./Select-BMQA0u2O.js";import"./InvisibleMessage-DosCuqjU.js";import"./slim-arrow-down-vFoZRNj4.js";import"./index-C_KCvI3u.js";import"./index-l4j-qO6K.js";import"./index-DVZys7-W.js";import"./index-NObIppjX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-qhMCcofp.js";import"./group-2-CIA_20_o.js";import"./sort-descending-Cis9FyCm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlLi_Ygh.js";import"./utils--eOsPXAp.js";import"./index-B4567yCp.js";import"./index-h4R6a7CP.js";import"./index-D5Irx0vg.js";import"./navigation-down-arrow-C-jc4BDF.js";import"./navigation-right-arrow-BUkZPDn1.js";import"./navigation-right-arrow-C4gLCsO1.js";import"./useCurrentTheme-D0Vszlbo.js";import"./index-9DL7nPRF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-dBQdTW19.js";import"./paper-plane-DIR6AIqV.js";import"./index-D0Vb1Rdi.js";import"./less-CmPnBj1b.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
