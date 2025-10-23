import{j as e}from"./iframe-BS9g_hR0.js";import{useMDXComponents as o}from"./index-D6Sv7Jl_.js";import{I as l,F as r}from"./CommandsAndQueries-BG9-iBHT.js";import{M as a,C as c}from"./blocks-BlXgdtWM.js";import"./Tag-p_IIbz5w.js";import"./index-C8AvT1H6.js";import"./copy-DO4k2zsN.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-UYSjv1UF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BywMJtOG.js";import"./index-wzaot1RG.js";import"./index-CAEXs-Gc.js";import"./Link-CiETGZ39.js";import"./index-BKoMru_w.js";import"./index-DU08Tlv3.js";import"./index-blu4KXFK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DwUfsbfY.js";import"./addCustomCSSWithScoping-D_7dkpV9.js";import"./index-D7iHEYTy.js";import"./information-DIMKZmlM.js";import"./sys-enter-2-cjAPqaPu.js";import"./alert-CWeu-Gd2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bi6dAMxf.js";import"./delete-IIbsJHVn.js";import"./settings-DSTG7J_6.js";import"./NoData-BljPz3Ez.js";import"./IllustratedMessage-CiQm-njB.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CW7qAaUp.js";import"./index-DQx4NIhG.js";import"./index-By4S6eBF.js";import"./slim-arrow-down-BrDUUgjS.js";import"./Input-B_EkSV5h.js";import"./ResponsivePopoverCommon.css-Nm_aoG18.js";import"./ValueStateMessage.css-DatFi3mM.js";import"./Suggestions.css-T59McTpP.js";import"./ListBoxItemGroupTemplate-DnRr1Fiq.js";import"./ComboBoxItemGroup-BIMHyF1K.js";import"./ListItemBaseTemplate-DnRIKRO-.js";import"./Token-BOw69ZP_.js";import"./ScrollEnablement-CI0Tb0Ll.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ba27rldr.js";import"./ToggleButton-EL98Z2LO.js";import"./SuggestionItem-C07z3z-f.js";import"./index-1owRGSxf.js";import"./Option-D-xwSxUZ.js";import"./index-CYokNx1T.js";import"./SegmentedButton-By8aV2cE.js";import"./index-nBcB45SO.js";import"./Select-CVg8WfRH.js";import"./InvisibleMessage-BhK3omrR.js";import"./slim-arrow-down-B_FxGKxS.js";import"./index-BPWtfQy0.js";import"./index-Bz6XqX9r.js";import"./index-BCrnZa0s.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdIbePGa.js";import"./group-2-KLHU0fg-.js";import"./sort-descending-DqFSPUni.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DiqZr5G5.js";import"./utils-CU6KAQZP.js";import"./index-DkMHvxEC.js";import"./index-BdY1vOzS.js";import"./index-DEBok3dO.js";import"./navigation-down-arrow-z8aFqrM1.js";import"./navigation-right-arrow-BedSm2Sl.js";import"./navigation-right-arrow-Btw4WHBr.js";import"./useCurrentTheme-jHl_ErAW.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eY3AJp1y.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DS89XhU_.js";import"./paper-plane-D-ciUbX6.js";import"./index-C6qv90tY.js";import"./less-BsRZbj7x.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
