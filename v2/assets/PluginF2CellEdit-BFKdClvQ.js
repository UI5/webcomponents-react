import{j as e}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as o}from"./index-Jmw_4WZV.js";import{I as l,F as r}from"./CommandsAndQueries--8Ahr2u6.js";import{M as a,C as c}from"./blocks-9PHEB2Ze.js";import"./Tag-DEHlwQE8.js";import"./index-D-NAUCyd.js";import"./copy-ClXhTaxL.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Ht4knFBz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./index-CNLcYPCr.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChpzPnnO.js";import"./delete-Beu8r6My.js";import"./settings-Dn0qBLrS.js";import"./NoData-BwUfHrNt.js";import"./IllustratedMessage-C-QtCxtL.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BUAL9oDt.js";import"./index-BSpwtDKe.js";import"./index-BuvC0M-2.js";import"./slim-arrow-down-Cv1cFJAK.js";import"./Input-JgLWPqs-.js";import"./ResponsivePopoverCommon.css-XADsAOoO.js";import"./ValueStateMessage.css-IPM013Bi.js";import"./Suggestions.css-Bo7BTCq0.js";import"./ListBoxItemGroupTemplate-DYBBvmjW.js";import"./ComboBoxItemGroup-GSLjChX5.js";import"./ListItemBaseTemplate-BhmRBGhv.js";import"./Token-BXgPM1Ho.js";import"./ScrollEnablement-CAzFMa-6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUv_QYff.js";import"./ToggleButton-BoN4zM_f.js";import"./SuggestionItem-Q9aDeKXU.js";import"./index-BiABfjFg.js";import"./Option-DuXsqB-8.js";import"./index-BkLLS0et.js";import"./SegmentedButton-DG8OWpoN.js";import"./index-BMYFXn7k.js";import"./Select-wk3vy9-X.js";import"./InvisibleMessage-BMxlV3uh.js";import"./slim-arrow-down-CW8gGJol.js";import"./index-9dO3MOwO.js";import"./index-gTiCTT3s.js";import"./index-B3Nrx_1A.js";import"./index-DPn7F17k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C2YL6UwO.js";import"./group-2-Cc5epAxT.js";import"./sort-descending-D2YRXcwA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-T6nX1J1_.js";import"./utils-bX0sVF0D.js";import"./index-C4Nrf8Fs.js";import"./index-DCa9DW1g.js";import"./index-BNd5VGZF.js";import"./navigation-down-arrow-B2uCLQJV.js";import"./navigation-right-arrow-BTmzxXYG.js";import"./navigation-right-arrow-tS4kh4In.js";import"./useCurrentTheme-tZZyzKNX.js";import"./index-Dp40BlFP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7MijIiv.js";import"./paper-plane-CxysScsd.js";import"./index-CDd3hI5e.js";import"./less-zKOuQtTY.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
