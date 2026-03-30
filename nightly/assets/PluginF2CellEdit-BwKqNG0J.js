import{j as e}from"./iframe-C-8CikNF.js";import{useMDXComponents as o}from"./index-Cw4SbHnF.js";import{I as r}from"./CommandsAndQueries-CurTw3Lj.js";import{M as l,C as a}from"./blocks-BmssVOG3.js";import"./Tag-MEJh1Ko9.js";import"./index-hi0bZbmw.js";import"./copy-CzzG0WN_.js";import{F as c}from"./Footer-DRQAPrhO.js";import"./PageNotFound-5CESdk48.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-nZEoohGM.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-xVMMn3oU.js";import"./index-H3f20a9K.js";import"./index-BGM8gXjK.js";import"./index-02sMf1JQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEjyiyGF.js";import"./addCustomCSSWithScoping-iAIUxvTa.js";import"./index-DH3Cr8HB.js";import"./index-C39Oe1_-.js";import"./index-CaBNGx_8.js";import"./information-0aMtiy50.js";import"./sys-enter-2-grGMmfr8.js";import"./alert-sWw94Nn1.js";import"./index-knQkJN_L.js";import"./Illustrations-2Vhs9c3z.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeZRXVtI.js";import"./delete-B0CQH0j2.js";import"./settings-BNA1mWt_.js";import"./NoData-DMCS5Vz4.js";import"./NoFilterResults-Bt4mVsHw.js";import"./index-DNtZAHXL.js";import"./IllustratedMessage-3NhY3KHW.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BxgPMGl5.js";import"./Input-CjfkHsNs.js";import"./ResponsivePopoverCommon.css-DmWEYKaX.js";import"./ValueStateMessage.css-1Br4XeI3.js";import"./Suggestions.css-C3zAGvC_.js";import"./ListBoxItemGroupTemplate-BTrvVHjp.js";import"./ComboBoxItemGroup-Bpj0Uiax.js";import"./ListItemBaseTemplate-D-6s2YQ8.js";import"./Token-Bhsr7kcp.js";import"./ScrollEnablement-CUpc0mcF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3jDGq2u.js";import"./ToggleButton-D5zExb4V.js";import"./multiselect-all-C59dWexR.js";import"./SuggestionItem-C1Ega4dM.js";import"./index-BTuv7LqQ.js";import"./Option-COlVveIk.js";import"./index-CNSy6tjm.js";import"./SegmentedButton-DGDitfbf.js";import"./index-C4LEWr2J.js";import"./Select-v-QOwdxL.js";import"./InvisibleMessage-B79dV3sk.js";import"./index-CWsH9Itz.js";import"./index-BR9SVpEM.js";import"./index-D5wXhC2X.js";import"./index-DcOtFncG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DYWin5du.js";import"./group-2-CaV5CvR6.js";import"./sort-descending-DGpVCv8O.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGWYkQPr.js";import"./utils-DpuRRaMs.js";import"./index-CCC96T7R.js";import"./index-DB7mThPO.js";import"./index-uevVwIJI.js";import"./navigation-down-arrow-BhJhAQY_.js";import"./navigation-right-arrow-BQ-rP2XP.js";import"./navigation-right-arrow-UOcapVb1.js";import"./useCurrentTheme-DNZb_fAn.js";import"./index-s1hOd9kk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sTzpNQ4b.js";import"./paper-plane-C9ax1T8B.js";import"./index-2SjK2Mh1.js";import"./less-CIKLJJJe.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
