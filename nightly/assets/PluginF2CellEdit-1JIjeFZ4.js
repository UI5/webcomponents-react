import{j as e}from"./iframe-cRRiQYmf.js";import{useMDXComponents as o}from"./index-Bs0WiH3G.js";import{I as l,F as r}from"./CommandsAndQueries-6fQDSTza.js";import{M as a,C as c}from"./blocks-BE5V3uJk.js";import"./Tag-CfbQk3KA.js";import"./index-ByOWo14Z.js";import"./copy-B18ZHZAg.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-SnDQDGkq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DBZCyEHT.js";import"./index-DUKoRTQU.js";import"./index-BO1H95-d.js";import"./Link-CLMkrIwX.js";import"./index-BFR5idok.js";import"./index-DtECOzdu.js";import"./index-CIJf_Fw_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AOA_k-Lh.js";import"./addCustomCSSWithScoping-OHQyl5Vz.js";import"./index-CSUcx8X8.js";import"./information-De5Q3Snv.js";import"./sys-enter-2-D3hJu-L0.js";import"./alert-B4Rl3843.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BK8mUCRL.js";import"./delete-Bd7yIIZR.js";import"./settings-CkxhKC3j.js";import"./NoData-BehLBpti.js";import"./IllustratedMessage-DqABzVpa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-VL3fZtOd.js";import"./index-Bx4iySkn.js";import"./index-CY4bohbd.js";import"./slim-arrow-down-DZLbO_TY.js";import"./Input-O88X3mcn.js";import"./ResponsivePopoverCommon.css-BT4UA6Ai.js";import"./ValueStateMessage.css-C-lEZ5fy.js";import"./Suggestions.css-BtMgvrZ_.js";import"./ListBoxItemGroupTemplate-BLsE5HOe.js";import"./ComboBoxItemGroup-BaeQpQAH.js";import"./ListItemBaseTemplate-DdTsTPm6.js";import"./Token-DF7-FLbj.js";import"./ScrollEnablement-C_xMDTEO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S4OY1eRO.js";import"./ToggleButton-CviqyRwB.js";import"./SuggestionItem-CjLVovyh.js";import"./index-CoDhBCO9.js";import"./Option-GMye3bh3.js";import"./index-D4jzIrzX.js";import"./SegmentedButton-uhejKh0q.js";import"./index-DeMEMDE-.js";import"./Select-CkiWgRnV.js";import"./InvisibleMessage-BlcyWLwi.js";import"./slim-arrow-down-C0fV2X2u.js";import"./index-Ks8eZ4TE.js";import"./index-Bo-pJJ92.js";import"./index-BoMEYoEg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcVMbh74.js";import"./group-2-BGmIa860.js";import"./sort-descending-Ce8AiZNs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BWIjNCzP.js";import"./utils-CZLAE_2R.js";import"./index-DrKrZdYX.js";import"./index-BVEPWHWu.js";import"./index-CXNthmCr.js";import"./navigation-down-arrow-BxseiaEF.js";import"./navigation-right-arrow-DQ_EAbwb.js";import"./navigation-right-arrow-CpRhiy_v.js";import"./useCurrentTheme-Dho7lVR9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-GZDFVWPb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CENrkM0D.js";import"./paper-plane-BQ0EpgoV.js";import"./index-wG1F1-kD.js";import"./less-DiFkS5DT.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
