import{j as e}from"./iframe-JQDqhQTc.js";import{useMDXComponents as o}from"./index-SjG54pW2.js";import{I as l,F as r}from"./CommandsAndQueries-Crv-3Mfa.js";import{M as a,C as c}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import"./copy-t9TmEwA0.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-HEUlY7W4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./index-BpgBwQjv.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fCo2PB5C.js";import"./delete-CLRGeIuZ.js";import"./settings-H07MeRfs.js";import"./NoData-DPeONLDW.js";import"./IllustratedMessage-DAIw2KHQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D-1p37yV.js";import"./index-DirchfVR.js";import"./index-D6Ko23ug.js";import"./slim-arrow-down-DtGaajwt.js";import"./Input-DzNOpfWd.js";import"./ResponsivePopoverCommon.css-uDfhSOOV.js";import"./ValueStateMessage.css-D_eI0sN-.js";import"./Suggestions.css-CHR_q4Cp.js";import"./ListBoxItemGroupTemplate-DEm09n7m.js";import"./ComboBoxItemGroup-DMLXAAki.js";import"./ListItemBaseTemplate-Dxaw3pkc.js";import"./Token-C9iKSxX5.js";import"./ScrollEnablement-CV3Pn2pj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DASuqUXG.js";import"./ToggleButton--p8Szuzt.js";import"./SuggestionItem-BAKzXr6j.js";import"./index-DvnAgan1.js";import"./Option-CEDBR-Bt.js";import"./index-eBAbrGNN.js";import"./SegmentedButton-Rqs6WWYK.js";import"./index-Y1J8yyR5.js";import"./Select-DfABSeaX.js";import"./InvisibleMessage-CFQZBAEm.js";import"./slim-arrow-down-CnNq3tWC.js";import"./index-D31LJD9X.js";import"./index-8ECVBj85.js";import"./index-BbzV54Ib.js";import"./index-CV-nf5lU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DdWNEJu_.js";import"./group-2-BZUFZ_mF.js";import"./sort-descending-BXUKtHbT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-fI0mUgfo.js";import"./utils-BBO9bjZR.js";import"./index-BaCIHOce.js";import"./index-mdq0FRsA.js";import"./index-Bz-Pghpc.js";import"./navigation-down-arrow-B-pSqjVl.js";import"./navigation-right-arrow-C9hFnSZf.js";import"./navigation-right-arrow-D5ZYuJjY.js";import"./useCurrentTheme-dEMZXqrK.js";import"./index-yCViCBv9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzjLx_qb.js";import"./paper-plane-CNtGouJp.js";import"./index-C5yyMQAi.js";import"./less-CNnQlmUL.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
