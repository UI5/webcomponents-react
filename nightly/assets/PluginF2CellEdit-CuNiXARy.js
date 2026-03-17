import{j as e}from"./iframe-BQ3gAAxx.js";import{useMDXComponents as o}from"./index-B1lAiT1q.js";import{I as r}from"./CommandsAndQueries-wegYoAqu.js";import{M as l,C as a}from"./blocks-n6pvGDI_.js";import"./Tag-eC6SmQhc.js";import"./index-DjTon6of.js";import"./copy-Da1BKYtz.js";import{F as c}from"./Footer-wX_u0Ai_.js";import"./PageNotFound-CYbLq2oD.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DHA_F5qe.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cgpq4OBn.js";import"./index-C1GISjTX.js";import"./index-C1cP6C82.js";import"./index-C8VczBe0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1UPUp-J.js";import"./addCustomCSSWithScoping-KaZd0g7m.js";import"./index-BlPBwMrJ.js";import"./index-CLyjGvZV.js";import"./index-C6vnN5EE.js";import"./information-D7DVbQHJ.js";import"./sys-enter-2-QGEZX0U8.js";import"./alert-BvhbOdWs.js";import"./index-D6YjU4up.js";import"./Illustrations-YW4WoylE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cgr_V9pk.js";import"./delete-B6_hTJQ_.js";import"./settings-DUK8lwbJ.js";import"./NoData-5eoSlwNL.js";import"./NoFilterResults-BOIQ7ol6.js";import"./index-Bbm6z3p5.js";import"./IllustratedMessage-BpFzdB-6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Bid_y9yL.js";import"./Input-DB2wpgtE.js";import"./ResponsivePopoverCommon.css-CC0bbdzt.js";import"./ValueStateMessage.css-BlOapXyA.js";import"./Suggestions.css-CcnsH7PN.js";import"./ListBoxItemGroupTemplate-Dbwacnf1.js";import"./ComboBoxItemGroup-oYKwIYDA.js";import"./ListItemBaseTemplate-DzmYLBj9.js";import"./Token-DvLrgzld.js";import"./ScrollEnablement-D9U2LTzA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BG1UM3jC.js";import"./ToggleButton-DhG8SGBd.js";import"./multiselect-all-DFUBVHZi.js";import"./SuggestionItem-Z2Xj9ATz.js";import"./index-DFONeG0H.js";import"./Option-VW9rfUnY.js";import"./index-D3Bn2LhY.js";import"./SegmentedButton-DPFBAqHi.js";import"./index-DAFt_faK.js";import"./Select-D89U3SMw.js";import"./InvisibleMessage-BdaiEMNx.js";import"./index-C544zsH2.js";import"./index-D-vaAKbP.js";import"./index-CTvmPiFM.js";import"./index-B-bCcjPK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNAnaid6.js";import"./group-2-DCUAvkdv.js";import"./sort-descending-BF0c-J1b.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BIfxZyVU.js";import"./utils-BFO_diIG.js";import"./index-C8MdlFSW.js";import"./index-CeSkdH1r.js";import"./index-DFzmTknk.js";import"./navigation-down-arrow-d6rfL2OJ.js";import"./navigation-right-arrow-KxkafEWL.js";import"./navigation-right-arrow-CvUTBkz2.js";import"./useCurrentTheme-DgCT3HCc.js";import"./index-BVQJgoCn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-PuQ608.js";import"./paper-plane-B51hNZbE.js";import"./index-l5pE6pVW.js";import"./less-Ru56gMhO.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
