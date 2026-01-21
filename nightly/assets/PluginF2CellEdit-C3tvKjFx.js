import{j as e}from"./iframe-C9GC-4U4.js";import{useMDXComponents as o}from"./index-vmj4hVH3.js";import{I as l,F as r}from"./CommandsAndQueries-DYyMzrOI.js";import{M as a,C as c}from"./blocks-B1Qu1Zwa.js";import"./Tag-C_vOYGvY.js";import"./index-NAfB8FFO.js";import"./copy-Bj7tGZK9.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BFRaUJ-8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-f0Iqf0o1.js";import"./index-B091rt76.js";import"./index-BNt_KmI_.js";import"./Link-DZICkDEv.js";import"./index--mOIC-D9.js";import"./index-BpGBt1Ec.js";import"./index-CN9xEViq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CrDmJKcm.js";import"./addCustomCSSWithScoping-C3bBYzrj.js";import"./index-Bas8y3YG.js";import"./information-Cj8yu0bT.js";import"./sys-enter-2-pae_51W8.js";import"./alert-CNeVkGHK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2Q3Fifo.js";import"./delete-BtWYKuqo.js";import"./settings-BMmA6bGr.js";import"./NoData-0YPuDwhD.js";import"./IllustratedMessage-BX3YdpaS.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C8eC6z5w.js";import"./index-CfnKIWov.js";import"./index-Dh3txNQs.js";import"./slim-arrow-down-lDJf72_X.js";import"./Input-D8yfvMY_.js";import"./ResponsivePopoverCommon.css-Dfo8GNgL.js";import"./ValueStateMessage.css-C33VG2yg.js";import"./Suggestions.css-BQ5GC3G8.js";import"./ListBoxItemGroupTemplate-DwAE5T9p.js";import"./ComboBoxItemGroup-DduYzuSR.js";import"./ListItemBaseTemplate-D4wB-rZo.js";import"./Token-B4FtR09e.js";import"./ScrollEnablement-CG9VZkld.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKJzwN5g.js";import"./ToggleButton-B_tIJ_u-.js";import"./SuggestionItem-C1B0Vane.js";import"./index-hQifrLpO.js";import"./Option-BPgvlydB.js";import"./index-Bx7ENpLR.js";import"./SegmentedButton-CqVIbvx0.js";import"./index-DKxkLGS8.js";import"./Select-DROm6u1u.js";import"./InvisibleMessage-CG4h93_f.js";import"./slim-arrow-down-DD_-Xh7t.js";import"./index-Bufl7lej.js";import"./index-YItZhVTD.js";import"./index-B7IwVEg9.js";import"./index-C5oysK-n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRCt1h-O.js";import"./group-2-CYhDRlV5.js";import"./sort-descending-ChjOUn4q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7V7-Zld3.js";import"./utils-D9L5FVMx.js";import"./index-BoVydk-k.js";import"./index-D8vh07VJ.js";import"./index-J-1cALVN.js";import"./navigation-down-arrow-D_GfAsPD.js";import"./navigation-right-arrow-BfuvVGTR.js";import"./navigation-right-arrow-CqPwNeVv.js";import"./useCurrentTheme-Cmr-ISoS.js";import"./index-D1bI7l9v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPtpEu5k.js";import"./paper-plane-B3y_l42l.js";import"./index-z94YdhbG.js";import"./less-B3BSxVTt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
