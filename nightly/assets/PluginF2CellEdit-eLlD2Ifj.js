import{j as e}from"./iframe-Xz6qaemo.js";import{useMDXComponents as o}from"./index-BLh1nTrf.js";import{I as l,F as r}from"./CommandsAndQueries-oG0MSLdr.js";import{M as a,C as c}from"./blocks-_9vvjoio.js";import"./Tag-B2Pydg-J.js";import"./index-_ZnAwLWJ.js";import"./copy-de1br5ux.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cr2R-Mua.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnWkVA6r.js";import"./index-AGYmHzMg.js";import"./index-CxA_57ir.js";import"./Link-H0aejI1H.js";import"./index-DlKRlgNQ.js";import"./index-CDFp-rVG.js";import"./index-B7c7-SiX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2LdFPij.js";import"./addCustomCSSWithScoping-DGLLVgG9.js";import"./index-BtaCUQLs.js";import"./information-UOioa2-U.js";import"./sys-enter-2-03pme12N.js";import"./alert-BPtSnw9a.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYNlcEMB.js";import"./delete-C5Afcmz_.js";import"./settings-DsuqLvMX.js";import"./NoData-BX0HAX4c.js";import"./IllustratedMessage-r6efCPOB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CmEzTzKT.js";import"./index-Bo6AI3A0.js";import"./index-ByQ70acs.js";import"./slim-arrow-down-kuRpxWkz.js";import"./Input-BsnqiEQ7.js";import"./ResponsivePopoverCommon.css-gF0WoKZh.js";import"./ValueStateMessage.css-bt6X1_t1.js";import"./Suggestions.css-9dRS8B2y.js";import"./ListBoxItemGroupTemplate-RPkQEUFS.js";import"./ComboBoxItemGroup-uYagQgUR.js";import"./ListItemBaseTemplate-Cqk-eK-r.js";import"./Token-BXAB4gvC.js";import"./ScrollEnablement-BYIXzTaU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv-glKj0.js";import"./ToggleButton-B0n92tMf.js";import"./SuggestionItem-BhiiFS2M.js";import"./index-DwqlJH6F.js";import"./Option-CUa_Ltzi.js";import"./index-CD5txzhS.js";import"./SegmentedButton-ZAk0VihI.js";import"./index-BAFzivYh.js";import"./Select-Dn1X-1Tb.js";import"./InvisibleMessage-zP1bmMm8.js";import"./slim-arrow-down-DITXjxiP.js";import"./index-Ds3SKLSX.js";import"./index-C9RuyfPL.js";import"./index-ClQp6b9m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CluGEagr.js";import"./group-2-BxBgglbL.js";import"./sort-descending-lD1YgKhD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZINQXwv.js";import"./utils-_BVayb1h.js";import"./index-BX-N77aH.js";import"./index-CqNjI8pt.js";import"./index-BaPIYtFn.js";import"./navigation-down-arrow-CgS7x-g2.js";import"./navigation-right-arrow-KPChvtX3.js";import"./navigation-right-arrow-DhEgrzw3.js";import"./useCurrentTheme-CuRUX4rr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Ga4iz5tb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOxscssR.js";import"./paper-plane-DKmOT4rW.js";import"./index-TaZnrIva.js";import"./less-C2rIQ98G.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
