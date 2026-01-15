import{j as e}from"./iframe-DzsY3-MS.js";import{useMDXComponents as o}from"./index-DFSYB4hO.js";import{I as l,F as r}from"./CommandsAndQueries-DBuYeihv.js";import{M as a,C as c}from"./blocks-DS0Y1BZg.js";import"./Tag-L2pUIWpP.js";import"./index-DdAKftEE.js";import"./copy-BminF4Iy.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-hG0Mq3Eh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKfHbnjd.js";import"./index-DkJZCu2R.js";import"./index-BfsMxbQ9.js";import"./Link-3hYic3jw.js";import"./index-BndW4ILr.js";import"./index-DQ0Bmg4X.js";import"./index-DTlY8Kzq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7IVEmPi.js";import"./addCustomCSSWithScoping-0WSQwudS.js";import"./index-C5c1rTpg.js";import"./information-a2aTFncM.js";import"./sys-enter-2-7qDJkwn8.js";import"./alert-BRYQ7SuA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-l5aoi9KM.js";import"./delete-B3ryUQBB.js";import"./settings-C00RCGye.js";import"./NoData-yJgd8XnX.js";import"./IllustratedMessage-DNQ-CWR9.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CRpMHBpW.js";import"./index-DwW6N8AQ.js";import"./index-i1IFNKnh.js";import"./slim-arrow-down-CkH4Whvo.js";import"./Input-Dq6-REg9.js";import"./ResponsivePopoverCommon.css-CLPuLjYm.js";import"./ValueStateMessage.css-Di8Y_FaV.js";import"./Suggestions.css-B9qKiT0u.js";import"./ListBoxItemGroupTemplate-DDMKAAAG.js";import"./ComboBoxItemGroup-0Q9ga48v.js";import"./ListItemBaseTemplate-C_vIHZba.js";import"./Token-EUneMihA.js";import"./ScrollEnablement-CkDB7Jzl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bem0jaOu.js";import"./ToggleButton-DX5JCL6_.js";import"./SuggestionItem-BarzL3HZ.js";import"./index-v5BZERv9.js";import"./Option-B5iYKL3-.js";import"./index-Cdxm6Zw8.js";import"./SegmentedButton-jOnxCPv8.js";import"./index-BdSOKqSc.js";import"./Select-BGW-2fE4.js";import"./InvisibleMessage-Cb7HEOO2.js";import"./slim-arrow-down-DMe2ZC5d.js";import"./index-DOhw8rBk.js";import"./index-B-owJPr5.js";import"./index-BetNagWU.js";import"./index-lb1RbLlp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2pnkmk3s.js";import"./group-2-D2bVnNyU.js";import"./sort-descending-xEWSnLJM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlOYjGGn.js";import"./utils-CyyFPTY5.js";import"./index-BL0l7ykh.js";import"./index-fQZNWHJl.js";import"./index-CSRjycPW.js";import"./navigation-down-arrow-DFDWFqht.js";import"./navigation-right-arrow-D6uPQJor.js";import"./navigation-right-arrow-DNx7PXWq.js";import"./useCurrentTheme-CDEziUwa.js";import"./index-B_BoFXOZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DGi63fh0.js";import"./paper-plane-D_Zbwyw2.js";import"./index-E_1UjDh5.js";import"./less-RjX5NJTD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
