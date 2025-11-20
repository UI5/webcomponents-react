import{j as e}from"./iframe-gC-jGD3g.js";import{useMDXComponents as o}from"./index-CnyMSsHR.js";import{I as l,F as r}from"./CommandsAndQueries-ChGbNwju.js";import{M as a,C as c}from"./blocks-BnpMKK8i.js";import"./Tag-DMQgfedw.js";import"./index-vAW-FU28.js";import"./copy-BSllcJzf.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-jS1llAg6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cgw7_UVl.js";import"./index-Dyh78V3l.js";import"./index-ttP0_XR3.js";import"./Link-Cdfcmbjx.js";import"./index-DlQFiyPN.js";import"./index-BDDT0PTl.js";import"./index-DsCn_0k2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP7KFobN.js";import"./addCustomCSSWithScoping-Cg-GrC5q.js";import"./index-CHNkjAWB.js";import"./information-DRo1yGzG.js";import"./sys-enter-2-DufMiZ6b.js";import"./alert-U-kxkHRC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LQmtlLK5.js";import"./delete--nh-W3-Q.js";import"./settings-DUXq2pKC.js";import"./NoData-vVbLZZUt.js";import"./IllustratedMessage-aNBcoDsa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DRKx1zXM.js";import"./index-BHTZ4yDe.js";import"./index-AqAkx8om.js";import"./slim-arrow-down-DRMPXoxM.js";import"./Input-DCJKAbRS.js";import"./ResponsivePopoverCommon.css-B7TyWprV.js";import"./ValueStateMessage.css-CydKnI3y.js";import"./Suggestions.css-BrVVPmcm.js";import"./ListBoxItemGroupTemplate-CwzjGxkH.js";import"./ComboBoxItemGroup-DIhxkCFs.js";import"./ListItemBaseTemplate-Cvto1n-r.js";import"./Token-BrbWFJrM.js";import"./ScrollEnablement-FtAWAuH9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcVnTGUz.js";import"./ToggleButton-c15t9qo5.js";import"./SuggestionItem-Beu4eLam.js";import"./index-3g9KQFfJ.js";import"./Option-DZ1cZDPf.js";import"./index-DeaTVqXq.js";import"./SegmentedButton-BhdBmLvs.js";import"./index-Dfq-eLt0.js";import"./Select-hKzPoZWj.js";import"./InvisibleMessage-BJlc9Zmk.js";import"./slim-arrow-down-C9Z_Q9pC.js";import"./index-Dqb5plgn.js";import"./index-NBV4rwkS.js";import"./index-DoCANgze.js";import"./IconDesign-DXd8PPVF.js";import"./filter-f649f9Rh.js";import"./group-2-D7Gn0lkQ.js";import"./sort-descending-yfv3Cg_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CWZ9V4Ak.js";import"./utils-BMIaq7YY.js";import"./index-CQx6TRPA.js";import"./index-DVa76Ufg.js";import"./index-mydUACZk.js";import"./navigation-down-arrow-BYIZcEhQ.js";import"./navigation-right-arrow-D6ZdUzP9.js";import"./navigation-right-arrow-B-FehG3J.js";import"./useCurrentTheme-Bf3voSYI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYmzfp3l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPypzMSE.js";import"./paper-plane-CI4mRr-x.js";import"./index-KUzNPbfU.js";import"./less-Do7ux1rK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
