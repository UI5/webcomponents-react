import{j as e}from"./iframe-BB6QsCcm.js";import{useMDXComponents as o}from"./index-CpyLbSYP.js";import{I as r}from"./CommandsAndQueries-BiWITRaD.js";import{M as l,C as a}from"./blocks-DGH8wLVm.js";import"./Tag-DYnAL2vL.js";import"./index-DEibJBdY.js";import"./copy-CCxPB9Eo.js";import{F as c}from"./Footer-BhEsQKJ6.js";import"./PageNotFound-CzkzQoiL.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C2ZNW2s5.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-nh3gGr7J.js";import"./index-BeoN8qxu.js";import"./index-BFKJbbqY.js";import"./index-CMF9IKMM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctz7lcER.js";import"./addCustomCSSWithScoping-D3Qs4mB8.js";import"./index-ZlEQADjM.js";import"./index-BiTQ1Tdz.js";import"./index-Cg4sRA-Y.js";import"./information-b186mgfr.js";import"./sys-enter-2-BIQ3YVMq.js";import"./alert-BqQjVqfR.js";import"./index-DsUvzGkS.js";import"./Illustrations-ChLBGWr7.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-jMOYBYRN.js";import"./delete-C8ILg1tk.js";import"./settings-Dr6LJqAx.js";import"./NoData-BDy79agX.js";import"./NoFilterResults-BmBQ0hmP.js";import"./index-CWuD9QeE.js";import"./IllustratedMessage-BWy_xvBP.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-HSHxMqNr.js";import"./Input-JioLFYJJ.js";import"./ResponsivePopoverCommon.css-6GP8Lm0R.js";import"./ValueStateMessage.css-l1uIo9PL.js";import"./Suggestions.css-D2YmrWJk.js";import"./ListBoxItemGroupTemplate-CRgv91LV.js";import"./ComboBoxItemGroup-CRHjR_uc.js";import"./ListItemBaseTemplate-LKNuMPHR.js";import"./Token-CGH1x_5F.js";import"./ScrollEnablement-C9jw74Ub.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B4b6lCaO.js";import"./ToggleButton-YqJTBHCJ.js";import"./multiselect-all-DVOpmePw.js";import"./SuggestionItem-BPY8t2Ca.js";import"./index-CxKbBauK.js";import"./Option-CLM8LjbY.js";import"./index-CG3ETCdV.js";import"./SegmentedButton-ZShhsJ6z.js";import"./index-Dunx1SzC.js";import"./Select-D3_73qVV.js";import"./InvisibleMessage-B_1ltxKh.js";import"./index-CRTb_SI_.js";import"./index-cQQL1sta.js";import"./index-E6gjuC88.js";import"./index-Du-fLjuZ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DuyIDAv5.js";import"./group-2-B5iSe4vK.js";import"./sort-descending-3s865Vlf.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdS8cG8s.js";import"./utils-DBM40PGg.js";import"./index-Dz7ZRshb.js";import"./index-GaSTmw-Y.js";import"./index-CV533GXR.js";import"./navigation-down-arrow-DNSZQduQ.js";import"./navigation-right-arrow-D15FSzk1.js";import"./navigation-right-arrow-D6fBPfwP.js";import"./useCurrentTheme-DxOa0FRn.js";import"./index-EkHUYTPl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zpMPSAkb.js";import"./paper-plane-BQP8ObaP.js";import"./index-C9U4bo4t.js";import"./less-b7RFHQTo.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
