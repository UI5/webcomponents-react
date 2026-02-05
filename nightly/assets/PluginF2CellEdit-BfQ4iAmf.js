import{j as e}from"./iframe-BTfUB26H.js";import{useMDXComponents as o}from"./index-D3NtTefK.js";import{I as l,F as r}from"./CommandsAndQueries-BWcq9mTF.js";import{M as a,C as c}from"./blocks-AWBgpAl3.js";import"./Tag-BGFP3IN9.js";import"./index-B9IZul2P.js";import"./copy-D6Vht5qr.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BDMm55id.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlJoRRYt.js";import"./index-BBFhDjTC.js";import"./index-Cuze-7Fn.js";import"./Link-BMxWJfW1.js";import"./index-BzZqyp7s.js";import"./index-BgDIorry.js";import"./index-BtUK59WI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-nj-G9WCr.js";import"./addCustomCSSWithScoping-BuL6JqQV.js";import"./index-F0g47Tza.js";import"./information-CLBM1nY5.js";import"./sys-enter-2-BbIZ6tOc.js";import"./alert-Dqm1dR2l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdxJ9ktW.js";import"./delete-CosJh4Wr.js";import"./settings-CrkRTssd.js";import"./NoData-CrPB3Etw.js";import"./IllustratedMessage-Dp_vq7kO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DAE0PvWS.js";import"./index-G7JGBkSp.js";import"./index-Pc-tL94R.js";import"./slim-arrow-down-CkCy067l.js";import"./Input-CWdJBATj.js";import"./ResponsivePopoverCommon.css-C6uEz5Dl.js";import"./ValueStateMessage.css-Bm4czFd-.js";import"./Suggestions.css-jfF4NP-_.js";import"./ListBoxItemGroupTemplate-Cxw4j-yj.js";import"./ComboBoxItemGroup-DsBDLMFu.js";import"./ListItemBaseTemplate-rG4H0Nai.js";import"./Token-peOfkrul.js";import"./ScrollEnablement-BXX9C0K8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeqJjBCf.js";import"./ToggleButton-CSUeQtqf.js";import"./SuggestionItem-DzkIs1mi.js";import"./index-0LZOa3fr.js";import"./Option-BzMwM8BQ.js";import"./index-BhAUVSXr.js";import"./SegmentedButton-8xKdGXJZ.js";import"./index-B3gpN7Aw.js";import"./Select-wjPPEddq.js";import"./InvisibleMessage-D6rgIzPo.js";import"./slim-arrow-down-COQfF4eP.js";import"./index-C0hZMZOj.js";import"./index-DSWytDHX.js";import"./index-BV2bpcIG.js";import"./index-kc3KkV9f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r6JXO5z-.js";import"./group-2-Cie4H57f.js";import"./sort-descending-bkkz2k_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b_pilGpL.js";import"./utils-DHZMQwFC.js";import"./index-Bx4wP1U8.js";import"./index-Cy-22xtZ.js";import"./index-CcPafi79.js";import"./navigation-down-arrow-DMFBeJkE.js";import"./navigation-right-arrow-B_x4oAAg.js";import"./navigation-right-arrow-ycb02zKK.js";import"./useCurrentTheme-CD8arqKb.js";import"./index-CwyI01PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-b3M525lM.js";import"./paper-plane-BssdKFPE.js";import"./index-CsvZqpSl.js";import"./less-CyWGcd4R.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
