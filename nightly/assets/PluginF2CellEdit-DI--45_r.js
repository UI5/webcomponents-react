import{j as e}from"./iframe-BELPVtw8.js";import{useMDXComponents as o}from"./index-Ccx4gwdG.js";import{I as r,F as l}from"./CommandsAndQueries-B86vB0yc.js";import{M as a,C as c}from"./blocks-B3lwtuZn.js";import"./Tag-jS7irC1t.js";import"./index-BkR2pL75.js";import"./copy-BGZyCQeI.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BuGimn8e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQYUcCHI.js";import"./index-DslTuBZD.js";import"./index-Dy8TXCJ0.js";import"./Link-BLMqdfPm.js";import"./index-nk7PQCW4.js";import"./index-D2dH4dam.js";import"./index-D2H4sMz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-GIAd7WMY.js";import"./addCustomCSSWithScoping-vktTBWHy.js";import"./index-C1fkktKB.js";import"./information-Q0D1EyOn.js";import"./sys-enter-2-CB1NZnv4.js";import"./alert-e0Pm7FCS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqiIa7eZ.js";import"./delete-DHGmX5w5.js";import"./settings-CEc6JgR1.js";import"./NoData-DvTHfRil.js";import"./IllustratedMessage-78L0W6rp.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-BXIPIfZx.js";import"./index-DFsb20bI.js";import"./slim-arrow-down-CwiRy3M0.js";import"./Input-B-A8a0OL.js";import"./ResponsivePopoverCommon.css-BWZcb2bV.js";import"./ValueStateMessage.css-SXuctyRx.js";import"./Suggestions.css-C9vA098l.js";import"./ListBoxItemGroupTemplate-COysa2md.js";import"./ComboBoxItemGroup-CkDVZmGn.js";import"./ListItemBaseTemplate-bJafeYos.js";import"./Token-CC2z-1Eu.js";import"./ScrollEnablement-7itX-dGY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CE1p650D.js";import"./ToggleButton-BX9cFRFF.js";import"./SuggestionItem-D9DO9uWA.js";import"./index-BK4KP33l.js";import"./Option-C6iyQjxn.js";import"./index-uAC978GR.js";import"./SegmentedButton-B1O-glM5.js";import"./index-BVils4tE.js";import"./Select-DRUUnZi2.js";import"./InvisibleMessage-DFHR3png.js";import"./slim-arrow-down-BFVaKqjv.js";import"./index-Dj10-OWx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-S556KB4S.js";import"./group-2-_GSc8Amx.js";import"./sort-descending-xALRtyQE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fM3yxWKm.js";import"./utils-DkiPjs68.js";import"./index-C00swXDA.js";import"./index-SUxQZfJ3.js";import"./index-T_E5hJOY.js";import"./navigation-down-arrow-BKIRwexC.js";import"./navigation-right-arrow-B8ETkxoi.js";import"./navigation-right-arrow-k3A4e-XZ.js";import"./useCurrentTheme-aIfWcmJ3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BL1iCeSt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-kNFhRDgm.js";import"./paper-plane-CzSfUHba.js";import"./index-36Nf5wB9.js";import"./less-3oBkjuBq.js";import"./index-CvNAEadG.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
