import{j as e}from"./iframe-1ixiCrn4.js";import{useMDXComponents as o}from"./index-2ZsnEyB9.js";import{I as r}from"./CommandsAndQueries-Bsuql65l.js";import{M as l,C as a}from"./blocks-CwvJzyWa.js";import"./Tag-DxuCzySC.js";import"./index-DCoPFbKG.js";import"./copy-D9dip1OG.js";import{F as c}from"./Footer-BCWgdeK4.js";import"./PageNotFound-C5oFz4Y3.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DTTXPI55.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-342TA0WQ.js";import"./index-D3khTefu.js";import"./index-D-IU78TD.js";import"./index-DQdp7GQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMCl2W9z.js";import"./addCustomCSSWithScoping-BlChbTB-.js";import"./index-hCYkbxY8.js";import"./index-CfOzkRmu.js";import"./index-DPL6_Akv.js";import"./information-CNHKSbA7.js";import"./sys-enter-2-0xYCNe_8.js";import"./alert-tzZ5a9nx.js";import"./index-Bwh9lIWA.js";import"./Illustrations-BCjcVikr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc2LjV4g.js";import"./delete-DNv5LR2n.js";import"./settings-D_ZzwQrf.js";import"./NoData-UkMzNvMr.js";import"./NoFilterResults-BS8fOWJc.js";import"./index-DLKKIsBC.js";import"./IllustratedMessage-DyJkE5qr.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-uIuwnBcp.js";import"./Input-miUO-80x.js";import"./ResponsivePopoverCommon.css-D3Qzl4EB.js";import"./ValueStateMessage.css-SCwGpz07.js";import"./Suggestions.css-BAWn6ORu.js";import"./ListBoxItemGroupTemplate-B27bwUaq.js";import"./ComboBoxItemGroup-oMx3Jr9u.js";import"./ListItemBaseTemplate-CjxCbu7-.js";import"./Token-CYS7OIdr.js";import"./ScrollEnablement-DX3vc3nf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6T0zg5o.js";import"./ToggleButton-BlkLujuP.js";import"./multiselect-all-BVnO4P_i.js";import"./SuggestionItem-rziQH6-U.js";import"./index-CkUdH-pB.js";import"./Option-DeIIvARx.js";import"./index-CQuXwl3a.js";import"./SegmentedButton-CY93Nkda.js";import"./index-21KIPv4P.js";import"./Select-DMCAW5jj.js";import"./InvisibleMessage-DnN-q7zu.js";import"./index-Dkvo6u5N.js";import"./index-CjD9gHII.js";import"./index-C4jmqnDw.js";import"./index-Bw57cGbJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-o__c2euJ.js";import"./group-2-CLjZuTuz.js";import"./sort-descending-ykcLYXS4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D-WbRyx1.js";import"./utils-DWWruuVN.js";import"./index-BQ6RX1cg.js";import"./index-CGRE3IWk.js";import"./index-SKC0WRYy.js";import"./navigation-down-arrow-DF1AhehZ.js";import"./navigation-right-arrow-CTDnkOYS.js";import"./navigation-right-arrow-CkPlCERA.js";import"./useCurrentTheme-D1Bd3xaO.js";import"./index-qC67coWw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dhvckhyy.js";import"./paper-plane-BP_yreQZ.js";import"./index-Cob64KvX.js";import"./less-CTdolYxs.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
