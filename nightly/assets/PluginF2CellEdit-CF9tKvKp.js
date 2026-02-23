import{j as e}from"./iframe-BgKk_cUP.js";import{useMDXComponents as o}from"./index-DBhkOYZa.js";import{I as l,F as r}from"./CommandsAndQueries-DJU-Boml.js";import{M as a,C as c}from"./blocks-Cov5-UrV.js";import"./Tag-14MrIsbi.js";import"./index-DoylA-Ui.js";import"./copy-DsJBCyL-.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-V4gZ8sle.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMckAL-E.js";import"./index-vrGX3w6P.js";import"./index-z-eYGt9k.js";import"./Link-CwQGN6kV.js";import"./index-DJcJ5x0R.js";import"./index-DtnoyOys.js";import"./index-DMwqR4Ak.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3WrIRKs.js";import"./addCustomCSSWithScoping-CEnWQwWy.js";import"./index-C-jp63Tn.js";import"./information-BIRyoqcd.js";import"./sys-enter-2--x49A3Er.js";import"./alert-ClVMPYjY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuxFNycy.js";import"./delete-BP-q6TjY.js";import"./settings-CeZ1opbS.js";import"./NoData-DLJjXucd.js";import"./IllustratedMessage-DdywEZQM.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bi6pL2a9.js";import"./index-DojJqyn3.js";import"./index-BKqTR2vl.js";import"./slim-arrow-down-Dj1qt3me.js";import"./Input-iPtOW5TT.js";import"./ResponsivePopoverCommon.css-DfgdvEyA.js";import"./ValueStateMessage.css-DV3WCU4W.js";import"./Suggestions.css-BI-9sbpu.js";import"./ListBoxItemGroupTemplate-BHdhNjf-.js";import"./ComboBoxItemGroup-DH85X82N.js";import"./ListItemBaseTemplate-D1hxivPJ.js";import"./Token-DcRokTWN.js";import"./ScrollEnablement-DdsHIuJL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CnthNkAX.js";import"./ToggleButton-UcqKBq2y.js";import"./SuggestionItem-C26y-fs0.js";import"./index-hzVrXnb0.js";import"./Option-DJMHyqaM.js";import"./index-Dhq0PQAW.js";import"./SegmentedButton-DdF3sP2l.js";import"./index-BbzooXyV.js";import"./Select-CsJgWia_.js";import"./InvisibleMessage-ped4udrK.js";import"./slim-arrow-down-DklNCilI.js";import"./index-DwVvMTsB.js";import"./index-RMLfsLiL.js";import"./index-bEFqPgvm.js";import"./index-DMnT_E-9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CW2uVyW2.js";import"./group-2-AoEknzVg.js";import"./sort-descending-CCp7iCJm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DRCX3BDW.js";import"./utils-BzD9qn-t.js";import"./index-GcGiJc-e.js";import"./index-DAx9tP-t.js";import"./index-HFoflSp7.js";import"./navigation-down-arrow-DW5vPyKC.js";import"./navigation-right-arrow-De8vjbS4.js";import"./navigation-right-arrow-DXKcG20K.js";import"./useCurrentTheme-BVrxJiy7.js";import"./index-C-S-N3mF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bcixplcr.js";import"./paper-plane-2-5UQC1A.js";import"./index-FZ4e72eA.js";import"./less-jXtBnPYa.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
