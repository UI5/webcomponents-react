import{j as e}from"./iframe-vPuL6nrR.js";import{useMDXComponents as o}from"./index-SqnB7SsH.js";import{I as l,F as r}from"./CommandsAndQueries-BhV0DcZ1.js";import{M as a,C as c}from"./blocks-CGVrLY5L.js";import"./Tag-Bv6LdF2m.js";import"./index-CrDwtJBU.js";import"./copy-DGJagZ4x.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CEd-U3Y9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MOLGybyv.js";import"./index-D8Laxk3p.js";import"./index-BrWx5AOh.js";import"./Link-eKxzOHxo.js";import"./index-C6iociGO.js";import"./index-DeGdMjr2.js";import"./index-D5bO2WHW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQtnDDkb.js";import"./addCustomCSSWithScoping-Ddp0ymp7.js";import"./index-CfldzWz8.js";import"./information-D9zj9sOE.js";import"./sys-enter-2-D6w_QQfA.js";import"./alert-C_Ss2xwM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDEYRsk7.js";import"./delete-CqW8NqGe.js";import"./settings-Cj4F-sn-.js";import"./NoData-B6dEymhk.js";import"./IllustratedMessage-fNVt6nDT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-C4Fi4xib.js";import"./index-DXIxpdsF.js";import"./index-Bdmog3xs.js";import"./slim-arrow-down-B1T99V5w.js";import"./Input-CChiahoF.js";import"./ResponsivePopoverCommon.css-C2d2sUac.js";import"./ValueStateMessage.css-BuG0YrNm.js";import"./Suggestions.css-J9EImHe6.js";import"./ListBoxItemGroupTemplate-CJsm3Ul2.js";import"./ComboBoxItemGroup-BjhHmu1_.js";import"./ListItemBaseTemplate-DzoOxgIE.js";import"./Token-B6W6V4bM.js";import"./ScrollEnablement-DWmM35W4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CImLKtWb.js";import"./ToggleButton-DzxCPDPZ.js";import"./SuggestionItem-BEJvr8r8.js";import"./index-Bl3X3auW.js";import"./Option-BzrTRgaF.js";import"./index-ZVMZGAva.js";import"./SegmentedButton-Cbml1Wlq.js";import"./index-BHx5eP0s.js";import"./Select-CLf6VczP.js";import"./InvisibleMessage-CuC6Puks.js";import"./slim-arrow-down-C84_eyIp.js";import"./index-D6hE3GQN.js";import"./index-CbspbvB6.js";import"./index-Ct0Aq-bZ.js";import"./index-DcvU_XKJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dk9irKV0.js";import"./group-2-CzEO-tAI.js";import"./sort-descending-qZUVN4UZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UEPJgIKA.js";import"./utils-C6_g_wtf.js";import"./index-DkBbhQP-.js";import"./index-B9ZqcJIb.js";import"./index-C6AbtUGW.js";import"./navigation-down-arrow-zIYYcACt.js";import"./navigation-right-arrow-DIDO5vFl.js";import"./navigation-right-arrow-BR8wObxR.js";import"./useCurrentTheme-DG8GYF18.js";import"./index-pO-94DCY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BSPpJGW2.js";import"./paper-plane-B4zBBoau.js";import"./index-DXkaAWnQ.js";import"./less-CsKXQq_W.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
