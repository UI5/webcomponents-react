import{j as e}from"./iframe-18_5pfj2.js";import{useMDXComponents as o}from"./index-CIhtdkHx.js";import{I as r}from"./CommandsAndQueries-BGW2wCD6.js";import{M as l,C as a}from"./blocks-Cj6CgQUG.js";import"./Tag-s2oCmO6-.js";import"./index-BIj2K6s5.js";import"./copy-BQYJB7Nu.js";import{F as c}from"./Footer-BvGdDwIL.js";import"./PageNotFound-BO4FGO9U.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-13knD1MZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C9Gq01-B.js";import"./index-DflRRV76.js";import"./index-Dhqddszu.js";import"./index-DiTpBrDm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DVbD4jAU.js";import"./addCustomCSSWithScoping-CAI73UoR.js";import"./index-BlCfzNdo.js";import"./index-Bj-OwMs_.js";import"./index-B3MOIvF5.js";import"./information-CdIjwcxP.js";import"./sys-enter-2-LNLtosyG.js";import"./alert-DegEg84v.js";import"./index-CRBj8Lig.js";import"./Illustrations-CxofZbv6.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-AL_T-9Jx.js";import"./delete-Bs3qPfJg.js";import"./settings-Dy572ER6.js";import"./NoData-Da_ngFS4.js";import"./NoFilterResults-D6pNWcsG.js";import"./index-C5CQTREQ.js";import"./IllustratedMessage-DGu9bJLh.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-0cqwT-HV.js";import"./Input-iydFvRMw.js";import"./ResponsivePopoverCommon.css-C2FEozzV.js";import"./ValueStateMessage.css-DqvCGStP.js";import"./Suggestions.css-BCNDEbh8.js";import"./ListBoxItemGroupTemplate-CJLn_QnH.js";import"./ComboBoxItemGroup-DcIVw2VD.js";import"./ListItemBaseTemplate-Bc2aw1zo.js";import"./Token-D4pS284n.js";import"./ScrollEnablement-8Hjnke1V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz4U-Eop.js";import"./ToggleButton-CppSls7u.js";import"./multiselect-all-Du7KiLcj.js";import"./SuggestionItem-DP0MGt_F.js";import"./index-Bvyi48KZ.js";import"./Option-rrI2u16T.js";import"./index-hlJZ1pXP.js";import"./SegmentedButton-oHmo4bip.js";import"./index-Y1siXodl.js";import"./Select-DwCkA_oD.js";import"./InvisibleMessage-BnIgIl6z.js";import"./index-8eHl-jDQ.js";import"./index-Ck6F_hwE.js";import"./index-NNG8HlfA.js";import"./index-CqOxtweB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DT28aUfx.js";import"./group-2-CK5cKbxI.js";import"./sort-descending-_jf8LjRo.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CzFFDiC-.js";import"./utils-DWriPAw1.js";import"./index-QSwlxrZg.js";import"./index-c_3gbR4D.js";import"./index-BLCqTCik.js";import"./navigation-down-arrow-DZ15PY4K.js";import"./navigation-right-arrow-BeHel0Cu.js";import"./navigation-right-arrow-DT0piTHd.js";import"./useCurrentTheme-BF_DuxSA.js";import"./index-CJSERHk8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BN9cZPm6.js";import"./paper-plane-C5X0Yhvv.js";import"./index-C71GbrCh.js";import"./less-BR7E5rCD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
