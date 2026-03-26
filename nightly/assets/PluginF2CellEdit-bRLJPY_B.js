import{j as e}from"./iframe-BKYtcRXv.js";import{useMDXComponents as o}from"./index-D1nSvVZo.js";import{I as r}from"./CommandsAndQueries-CUyuiRf6.js";import{M as l,C as a}from"./blocks-C1gp0dCe.js";import"./Tag-DHmTMk4C.js";import"./index-BHofxaIm.js";import"./copy-Dd5cryj7.js";import{F as c}from"./Footer-CV4xu3yB.js";import"./PageNotFound-vT0hMOra.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BgWH2hpK.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DoqDiayo.js";import"./index-C0tgyAAj.js";import"./index-BKTLLMG4.js";import"./index-Gx-AmRBv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cc6AlvW2.js";import"./addCustomCSSWithScoping-CxGG2dIU.js";import"./index-ewdSxNga.js";import"./index-CruiZV6T.js";import"./index-qZc2Xmmm.js";import"./information-xnBwopqv.js";import"./sys-enter-2-CNvKNMds.js";import"./alert-CToXuYXU.js";import"./index-BVN1tX5Y.js";import"./Illustrations-C92Wb11w.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DyjJHKas.js";import"./delete-COc--zMh.js";import"./settings-DvU655Lf.js";import"./NoData-CBJjONw5.js";import"./NoFilterResults-B1-N34A5.js";import"./index-CYseC7kl.js";import"./IllustratedMessage-Ckmzjd0E.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BgykwmTu.js";import"./Input-CO_xJZXP.js";import"./ResponsivePopoverCommon.css-BtDqVxq7.js";import"./ValueStateMessage.css-DyHSljmr.js";import"./Suggestions.css-RWTniQDi.js";import"./ListBoxItemGroupTemplate-DntWjXW-.js";import"./ComboBoxItemGroup-v3M_n_k-.js";import"./ListItemBaseTemplate-C6YXo6zR.js";import"./Token-C7dfemIx.js";import"./ScrollEnablement-DIukE-Oq.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cy0XTO8n.js";import"./ToggleButton-Xk26D8Qm.js";import"./multiselect-all-DOeifjrx.js";import"./SuggestionItem-DYVKlvCS.js";import"./index-BuNPx4RW.js";import"./Option-CmPkNzZb.js";import"./index-DuMd-yrT.js";import"./SegmentedButton-sNyJwfhT.js";import"./index-C62hrUfU.js";import"./Select-DUx7KFlD.js";import"./InvisibleMessage-Rg77mpqg.js";import"./index-CNnSMZ2h.js";import"./index-DOAAzZ1m.js";import"./index-D5IYfVsF.js";import"./index-QLH2EeXs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-5ce7U-Q1.js";import"./group-2-BfFYcn7i.js";import"./sort-descending-H5QlCV5Q.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DT4jNOO9.js";import"./utils-B2f4QDq0.js";import"./index-_Eo-G0Gk.js";import"./index-CaD4IA15.js";import"./index-BNMj4fDr.js";import"./navigation-down-arrow-DeuSM8u7.js";import"./navigation-right-arrow-BMpDZDnD.js";import"./navigation-right-arrow-DHm48mV8.js";import"./useCurrentTheme-CUsmZadi.js";import"./index-FDSeTwbN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DvpK_1n5.js";import"./paper-plane-BWnAq03I.js";import"./index-atWeeP0l.js";import"./less-CROdRzuR.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
