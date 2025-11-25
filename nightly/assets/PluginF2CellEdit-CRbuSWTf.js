import{j as e}from"./iframe-HnZ_h-uU.js";import{useMDXComponents as o}from"./index-BURirfl-.js";import{I as l,F as r}from"./CommandsAndQueries-TIuZdWtI.js";import{M as a,C as c}from"./blocks-84IuUUPT.js";import"./Tag-Dnn5BILw.js";import"./index-C_zCHPn3.js";import"./copy-CvLuzzlZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CyPVuxE6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-A-RKt-jh.js";import"./index-iyAoRrYN.js";import"./index-ChCH3Q4v.js";import"./Link-fOI_Un9H.js";import"./index-Cx7Ty6ev.js";import"./index-DT74FBWM.js";import"./index-D2dUbzgM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5FHIatV.js";import"./addCustomCSSWithScoping-R6q4RVyA.js";import"./index-Dnf0ia5k.js";import"./information-DhzyP3Ow.js";import"./sys-enter-2-CmThXCww.js";import"./alert-DNZ33ksz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CBxFCMLb.js";import"./delete-DTulYaAI.js";import"./settings-tx3CzgEQ.js";import"./NoData-Bshjt374.js";import"./IllustratedMessage-CCQBtLd9.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DKIL7cga.js";import"./index-kDjDNPRR.js";import"./index-D7LIj5Um.js";import"./slim-arrow-down-BgIex6c4.js";import"./Input-Bn75OrvV.js";import"./ResponsivePopoverCommon.css-Bp0oDzHC.js";import"./ValueStateMessage.css-mxe_cMa3.js";import"./Suggestions.css-HrgLJez3.js";import"./ListBoxItemGroupTemplate-Blo7114h.js";import"./ComboBoxItemGroup-C4A4RTAb.js";import"./ListItemBaseTemplate-Crj91yI9.js";import"./Token-BzgB6gA9.js";import"./ScrollEnablement-DbCEb8PT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CelTCW5a.js";import"./ToggleButton-lFj29rfD.js";import"./SuggestionItem-D2y_todW.js";import"./index-DCwkTiB-.js";import"./Option-CXj69qWE.js";import"./index-l8ddpiaC.js";import"./SegmentedButton-rOSwY7SZ.js";import"./index-Dh8wCVOo.js";import"./Select-DifQlmAi.js";import"./InvisibleMessage-DKXtSvOz.js";import"./slim-arrow-down-CLA3TSxo.js";import"./index-DMla7rjx.js";import"./index-_lKZYWZe.js";import"./index-ob9pHg1a.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B94VfVt_.js";import"./group-2-88JLzJKU.js";import"./sort-descending-BXFoHtVz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-KroJlr.js";import"./utils-BzC6a3dT.js";import"./index-DgcTnc5w.js";import"./index-CHrJjqGe.js";import"./index-Bju32QxQ.js";import"./navigation-down-arrow-BuuDEqwu.js";import"./navigation-right-arrow-CghbZ4FB.js";import"./navigation-right-arrow-C3FyKz3D.js";import"./useCurrentTheme-BtlDZaCV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYbG7W8m.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Sw05o_Vs.js";import"./paper-plane-Iq18tC-e.js";import"./index-5gnscsEE.js";import"./less-BQGA1HOG.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
