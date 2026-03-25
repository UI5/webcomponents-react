import{j as e}from"./iframe-aMG4Hi1W.js";import{useMDXComponents as o}from"./index-BxeVDhrM.js";import{I as r}from"./CommandsAndQueries-BfziQu2M.js";import{M as l,C as a}from"./blocks-DBdj8k-3.js";import"./Tag-DjBNrtqu.js";import"./index-BneSHkIo.js";import"./copy-WJgdbAvd.js";import{F as c}from"./Footer-CaqpNArb.js";import"./PageNotFound-BtQ0dC4g.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dbp5t2xm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CIXppVOK.js";import"./index-D79dGm1P.js";import"./index-CRZddsOj.js";import"./index-D40aHtue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NZCpAmvM.js";import"./addCustomCSSWithScoping-DZGBI863.js";import"./index-S-kDMFzJ.js";import"./index-D8GAgpXJ.js";import"./index-CkonQXRu.js";import"./information-CeS9aeh9.js";import"./sys-enter-2-qcEAkOuO.js";import"./alert-a4vfwAyT.js";import"./index-BkkgvrV5.js";import"./Illustrations-Dkeiu4Tv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BoihuItE.js";import"./delete-Bhzd3ed8.js";import"./settings-D9jXjAvQ.js";import"./NoData-B5lI_Sae.js";import"./NoFilterResults-93txLrZv.js";import"./index-BrFjI7RY.js";import"./IllustratedMessage-AZ7xK1kI.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-1_stmY84.js";import"./Input-DMXWEknM.js";import"./ResponsivePopoverCommon.css-CysXn5xC.js";import"./ValueStateMessage.css-yHzBSpV4.js";import"./Suggestions.css-MgO-ysCw.js";import"./ListBoxItemGroupTemplate-D2YpWlf4.js";import"./ComboBoxItemGroup-CaiNesJa.js";import"./ListItemBaseTemplate-D4Q6p7GN.js";import"./Token-B3caBydG.js";import"./ScrollEnablement-CcG50b_d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BOysNTzL.js";import"./ToggleButton-oEmebjQG.js";import"./multiselect-all-CLqAkhmq.js";import"./SuggestionItem-DSX8SwVI.js";import"./index-Dwckrray.js";import"./Option-C2UhMZDs.js";import"./index-Cv9nYKsA.js";import"./SegmentedButton-SSHoZn7s.js";import"./index-DBk_motw.js";import"./Select-DPhTn-YG.js";import"./InvisibleMessage-dc5EYpz-.js";import"./index-CATxM_c8.js";import"./index-DDx0pcjW.js";import"./index-Bz8OEacs.js";import"./index-BZDIEYti.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DSQMhsPH.js";import"./group-2-5PvLHLNv.js";import"./sort-descending-BEfEPQGH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmpjBeDB.js";import"./utils-CLsYPiKt.js";import"./index-MCFemGTY.js";import"./index-CC_WR0o2.js";import"./index-wXOo97ET.js";import"./navigation-down-arrow-lQMnprhK.js";import"./navigation-right-arrow-CgEvW-xF.js";import"./navigation-right-arrow-Cuz2dorW.js";import"./useCurrentTheme-5CUir0cJ.js";import"./index-DEW9r0dY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2FLcBfN.js";import"./paper-plane-p0ZMvhfl.js";import"./index-CMj2nAyN.js";import"./less-CUviCfrH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
