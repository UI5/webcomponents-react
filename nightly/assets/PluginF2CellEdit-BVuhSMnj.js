import{j as e}from"./iframe-Cq4aPHLo.js";import{useMDXComponents as o}from"./index-DtjXbTDz.js";import{I as l,F as r}from"./CommandsAndQueries-CXjPz3Rk.js";import{M as a,C as c}from"./blocks-DS_hC92x.js";import"./Tag-C40beB3s.js";import"./index-CmKxyzHV.js";import"./copy-D9etBJkT.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D0IPW50b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkXTOe1d.js";import"./index-Dc8fq3Wn.js";import"./index-AjPpxwQf.js";import"./Link-BfHdWWup.js";import"./index-CCLlvQbb.js";import"./index-BEk2R1hN.js";import"./index-Bj4AjQ7z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Crxlx4bK.js";import"./addCustomCSSWithScoping-CwGFzfIe.js";import"./index-BRBHL30E.js";import"./information-DhBkhQvI.js";import"./sys-enter-2-CiSpLSDz.js";import"./alert-2iAYPloM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cxs3bmao.js";import"./delete-DuKV644D.js";import"./settings-Bx7P5Rsi.js";import"./NoData-DPfPzF9p.js";import"./IllustratedMessage-BpFqwb-K.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-lnnemqJe.js";import"./index-D6pT8vft.js";import"./index-Bh8RO2Zu.js";import"./slim-arrow-down-C0mxaQDT.js";import"./Input-Ccd7dYO4.js";import"./ResponsivePopoverCommon.css-1bQc-N4g.js";import"./ValueStateMessage.css-DmjkXWTx.js";import"./Suggestions.css-Dv9Ubz9b.js";import"./ListBoxItemGroupTemplate-Cb3ILXPe.js";import"./ComboBoxItemGroup-Dwg0E3j4.js";import"./ListItemBaseTemplate-CKaO6iQB.js";import"./Token-BbSC7JN1.js";import"./ScrollEnablement-aZYLZB-E.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DuP7QTbV.js";import"./ToggleButton-CnIysQwb.js";import"./SuggestionItem-C_HyWpKH.js";import"./index-BpQnZ4ry.js";import"./Option-gCXiIbtJ.js";import"./index-BwQ0JjIK.js";import"./SegmentedButton-Cxs_SXe9.js";import"./index-DSgunCqA.js";import"./Select-B_k5KaS4.js";import"./InvisibleMessage-CMcGtz6a.js";import"./slim-arrow-down-C0_o1aXe.js";import"./index-S6fOLFIs.js";import"./index-qCktYvmT.js";import"./index-B_YXqDWP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8NFCAB_.js";import"./group-2-Cx2aNRof.js";import"./sort-descending-BAx3CRhx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHDDLv5p.js";import"./utils-CJdUm82l.js";import"./index-UrX3mLF3.js";import"./index-JwWqV5vE.js";import"./index-Cd8h9PX8.js";import"./navigation-down-arrow-E4rpsFHM.js";import"./navigation-right-arrow-BO9UmjB0.js";import"./navigation-right-arrow-uogtFvqw.js";import"./useCurrentTheme-DcPQzSup.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bz5_tICb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xz9tTNk8.js";import"./paper-plane-BZ21gZCD.js";import"./index-nJoJBiEe.js";import"./less-OGBOJDtp.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
