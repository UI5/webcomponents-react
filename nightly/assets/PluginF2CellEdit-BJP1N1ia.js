import{j as e}from"./iframe-FqLIb5aJ.js";import{useMDXComponents as o}from"./index-BMlaAUsm.js";import{I as l,F as r}from"./CommandsAndQueries-C8KzZZ_g.js";import{M as a,C as c}from"./blocks-2y9I1Ee8.js";import"./Tag-8E3ttw9X.js";import"./index-B7xi-wqa.js";import"./copy-DHQOADmz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DxSWo1xk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DrxJ3_v0.js";import"./index-CJCUd_sD.js";import"./index-CunGGXs0.js";import"./Link-D_zVjdUt.js";import"./index-ByRLHl7W.js";import"./index-DHR1LOgw.js";import"./index-DfAJ7eEY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DlZw9a5e.js";import"./addCustomCSSWithScoping-BziWOAoD.js";import"./index-PGt_tfZb.js";import"./information-CWEUh2Nv.js";import"./sys-enter-2-D8dKPdhT.js";import"./alert-Dzhc-2EW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-bOLBCiA-.js";import"./delete-WbYkg9tQ.js";import"./settings-BvY4-0au.js";import"./NoData-BVmMTcxI.js";import"./IllustratedMessage-DAfC4sQR.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Bnd4PO4J.js";import"./index-BhNH-Xd3.js";import"./index-BB45oL63.js";import"./slim-arrow-down-Cx2k9oA1.js";import"./Input-D70gHpU4.js";import"./ResponsivePopoverCommon.css-CFYKUvZL.js";import"./ValueStateMessage.css-GEYmLDX1.js";import"./Suggestions.css-Xa6Cgh36.js";import"./ListBoxItemGroupTemplate-DRFgm5mq.js";import"./ComboBoxItemGroup-48OfHzJY.js";import"./ListItemBaseTemplate-BLuaGZej.js";import"./Token-DUre5J7V.js";import"./ScrollEnablement-Bzckwnc4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CciZFj9F.js";import"./ToggleButton-SneSiQBN.js";import"./SuggestionItem-7ulZP-bS.js";import"./index-NyaZasf4.js";import"./Option-CNOfeTCF.js";import"./index-FeMM_IUL.js";import"./SegmentedButton-BhR2I5WQ.js";import"./index-hEF3eP5L.js";import"./Select-DmZylSAc.js";import"./InvisibleMessage-Dqr9IMJW.js";import"./slim-arrow-down-DtJmXr8m.js";import"./index-IboMoMq3.js";import"./index-D43bVJxH.js";import"./index-MwCWU3y-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CmlQCrfj.js";import"./group-2-Fz9-Rorb.js";import"./sort-descending-CMcEr8AV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CuNNSqVd.js";import"./utils-B1OcDcX1.js";import"./index-O_SIXxVn.js";import"./index-D7ZoZ11L.js";import"./index-DkAWhp6q.js";import"./navigation-down-arrow-ByHKfqMb.js";import"./navigation-right-arrow-NOv1xYoV.js";import"./navigation-right-arrow-C5yT6JM7.js";import"./useCurrentTheme-Dt12rjwM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_genVlm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BBKH6PEs.js";import"./paper-plane-CU0wuWEv.js";import"./index-BLV2QBiZ.js";import"./less-cExHlQNZ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
