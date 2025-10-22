import{j as e}from"./iframe-BFGaT_FV.js";import{useMDXComponents as o}from"./index-CnhfjtvF.js";import{I as l,F as r}from"./CommandsAndQueries-B8JKM3km.js";import{M as a,C as c}from"./blocks-Dayk-WJV.js";import"./Tag-B8YEukqj.js";import"./index-DAwrSR1M.js";import"./copy-AGelM_Ll.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BerL1zlH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvUgbQCZ.js";import"./index-BlQFkuHY.js";import"./index-BZnNWwSk.js";import"./Link-BBvAtJ6F.js";import"./index-B9hLr1Bv.js";import"./index-Bf-TRwAv.js";import"./index-CaRZdhen.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYVZjLb4.js";import"./addCustomCSSWithScoping-B8FWovV5.js";import"./index-1UQ-4lhS.js";import"./information-Bz11YhFZ.js";import"./sys-enter-2-BSVZTuif.js";import"./alert-BaGtUWxL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DTmyScv0.js";import"./delete-v-dXAAIl.js";import"./settings-BOscvD9f.js";import"./NoData-gDQFgR3G.js";import"./IllustratedMessage-CDHVVzlP.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DA9fHCLR.js";import"./index-vKbE8tbN.js";import"./index-D7iYQuDO.js";import"./slim-arrow-down-Dd8YkBw-.js";import"./Input-Bmjprhie.js";import"./ResponsivePopoverCommon.css-6c8XaA5C.js";import"./ValueStateMessage.css-Bh1E9Ghj.js";import"./Suggestions.css-BTwMp3YW.js";import"./ListBoxItemGroupTemplate-undkDWdm.js";import"./ComboBoxItemGroup-OfkHN57U.js";import"./ListItemBaseTemplate-SnpzLXKW.js";import"./Token-CMJi_Rys.js";import"./ScrollEnablement-cAwpl98b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ccu5KVL2.js";import"./ToggleButton-CRoHXs7m.js";import"./SuggestionItem-DGnZQlbw.js";import"./index-Du7xx1dp.js";import"./Option-CdFGI1PC.js";import"./index-B0eNO-0P.js";import"./SegmentedButton-DCEuTMnH.js";import"./index-DKtUZxqJ.js";import"./Select-c6jnMs-7.js";import"./InvisibleMessage-CbPZDP3-.js";import"./slim-arrow-down-BdvQ_s0T.js";import"./index-jrrMCwgY.js";import"./index-Dl1PX_Mb.js";import"./index-Bs16yVYB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C7e9On5N.js";import"./group-2-Dl113zhQ.js";import"./sort-descending-qVZJ1324.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DJcIUy6q.js";import"./utils-B6_SaaJR.js";import"./index-DMziRRZN.js";import"./index-DyXpRQb6.js";import"./index-BH-J8zHs.js";import"./navigation-down-arrow-DItIrMRs.js";import"./navigation-right-arrow-CKSHLqK6.js";import"./navigation-right-arrow-C4wfpKAx.js";import"./useCurrentTheme-C8SqHROD.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bn2vXSX1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hb1ZDPhU.js";import"./paper-plane-DJjUVXFe.js";import"./index-DlH340EZ.js";import"./less-CUu-6yGw.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
