import{j as e}from"./iframe-C1nqIrP9.js";import{useMDXComponents as o}from"./index-rFzs5Is7.js";import{I as l,F as r}from"./CommandsAndQueries-D6-GYIyC.js";import{M as a,C as c}from"./blocks-CkwZnBbM.js";import"./Tag-BljHH2ny.js";import"./index-CYNCR5qY.js";import"./copy-DSaYeTfs.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DlnEJIfh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJt8uYMe.js";import"./index-BaOK2woW.js";import"./index-Dr-3VGmd.js";import"./Link-BNKugdyP.js";import"./index-DKOFmGpQ.js";import"./index-BIr8DdOC.js";import"./index-SO3IILH_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CASN5sm0.js";import"./addCustomCSSWithScoping-C0k6xtW8.js";import"./index-BswWmSbc.js";import"./information-BrOplxTY.js";import"./sys-enter-2-pukb5ZDW.js";import"./alert-DP5_e-py.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SAn7RIVc.js";import"./delete-DTPigX6U.js";import"./settings-lV_DBpeY.js";import"./NoData-DhN24gYE.js";import"./IllustratedMessage-DXEnmkA7.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CcxLmyYz.js";import"./index-f0ROwvGB.js";import"./index-P_SO3_3t.js";import"./slim-arrow-down-Bps0sYcn.js";import"./Input-D9vophLG.js";import"./ResponsivePopoverCommon.css-Eydupr0P.js";import"./ValueStateMessage.css-BBO2GkE0.js";import"./Suggestions.css-DgtKpdux.js";import"./ListBoxItemGroupTemplate-Dkfxy0pn.js";import"./ComboBoxItemGroup-CsjyYpDE.js";import"./ListItemBaseTemplate-4ujERwPI.js";import"./Token-CqPdRqE5.js";import"./ScrollEnablement-BIY6wVPD.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-COxHhBS3.js";import"./ToggleButton-cQD1nunm.js";import"./SuggestionItem-DPnrRak_.js";import"./index-BdtdwVrB.js";import"./Option-BuhRYFqH.js";import"./index-dJuYV-LS.js";import"./SegmentedButton-o0d2AGWz.js";import"./index-j9YlDLaa.js";import"./Select-N_i4HA6q.js";import"./InvisibleMessage-D0KBEnYB.js";import"./slim-arrow-down-B2Ijjnqs.js";import"./index-qPS3eI2E.js";import"./index-RpM-44G_.js";import"./index-D-OYWN8_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwjgAEdE.js";import"./group-2-CDXCavaP.js";import"./sort-descending-B6gWrjyT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B2hB663M.js";import"./utils-DZwE1ugL.js";import"./index-DPXTvOgj.js";import"./index-DDyYLskJ.js";import"./index-D_OBrQEl.js";import"./navigation-down-arrow-COzuuEtq.js";import"./navigation-right-arrow-Uojl0M_c.js";import"./navigation-right-arrow-C2Cjybhy.js";import"./useCurrentTheme-CqppE4Rq.js";import"./IndicationColor-DVw-fSM_.js";import"./index-IMWhCO6M.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2dKeNAYY.js";import"./paper-plane-FmM4DKiP.js";import"./index-C2Ui3emf.js";import"./less-y0Nr-cGj.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
