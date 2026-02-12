import{j as e}from"./iframe-CeYK60h5.js";import{useMDXComponents as o}from"./index-CyuETzTv.js";import{I as l,F as r}from"./CommandsAndQueries-CFbtJHwM.js";import{M as a,C as c}from"./blocks-BIKTnw0B.js";import"./Tag-C54M4ldZ.js";import"./index-CT0V1rC-.js";import"./copy-CiRkqTCy.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-e4dPoyh1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./index-C9AaKYqF.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Brue9bZM.js";import"./delete-BcvtETcy.js";import"./settings-5BacSR94.js";import"./NoData-DxohvE4z.js";import"./IllustratedMessage-C5nGizD-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DCAxNV9P.js";import"./index-BQ2ppCag.js";import"./index-DvXTSSIA.js";import"./slim-arrow-down-CVGDx6dI.js";import"./Input-Cpc3WDAD.js";import"./ResponsivePopoverCommon.css-D2Os4vPx.js";import"./ValueStateMessage.css-DygseWPv.js";import"./Suggestions.css-uPHlQ0zI.js";import"./ListBoxItemGroupTemplate-CUULFd46.js";import"./ComboBoxItemGroup-3qNTHREe.js";import"./ListItemBaseTemplate-IHDN_xws.js";import"./Token-DIiTPAFv.js";import"./ScrollEnablement-BzX8rTSh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DChf4TnK.js";import"./ToggleButton-HnifA80u.js";import"./SuggestionItem-D3x38-wF.js";import"./index-1UGQ1AHt.js";import"./Option-DheRIPLY.js";import"./index-BoIm-xs6.js";import"./SegmentedButton-C-FghxIk.js";import"./index-eQnZgMgj.js";import"./Select-EZ5UJa2T.js";import"./InvisibleMessage-BjsU8t7h.js";import"./slim-arrow-down-B3EB9Tld.js";import"./index-DGapjW98.js";import"./index-ZeQWpjUk.js";import"./index-BGapk1v_.js";import"./index-Bo5Q1SBc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DABH-sQq.js";import"./group-2-DEn7mrnO.js";import"./sort-descending-aDuCK_fE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxmDL6TA.js";import"./utils-Dlyy7SNs.js";import"./index-BO4Or_uB.js";import"./index-rmJF3f6R.js";import"./index-DsmxMPC1.js";import"./navigation-down-arrow-DKptDBWM.js";import"./navigation-right-arrow-CSc3hBqU.js";import"./navigation-right-arrow-CXkdEEUV.js";import"./useCurrentTheme-Bfgyh39P.js";import"./index-C9a6OsiH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1HgTxzEu.js";import"./paper-plane-B0eqfuay.js";import"./index-Dg2lsmGL.js";import"./less-BaBvLqfW.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
