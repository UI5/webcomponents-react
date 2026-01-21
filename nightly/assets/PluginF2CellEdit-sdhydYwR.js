import{j as e}from"./iframe-Dn-CEP49.js";import{useMDXComponents as o}from"./index-CkYweSLX.js";import{I as l,F as r}from"./CommandsAndQueries-CJE7oJQ6.js";import{M as a,C as c}from"./blocks-CpkBRtZ8.js";import"./Tag-DCXTYexA.js";import"./index-Buh7M_8w.js";import"./copy-ZbpB2fNv.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ztfx2-Is.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bm8hRwBU.js";import"./index-Cw6Uj_ev.js";import"./index-DzcQWg4n.js";import"./Link-CCOdGIG_.js";import"./index-BiP2f5WB.js";import"./index-DwdL8nG5.js";import"./index-pKV4gQju.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOWzKJJk.js";import"./addCustomCSSWithScoping-BIQAchjq.js";import"./index-6NbWjJvY.js";import"./information-Bo7A1j3N.js";import"./sys-enter-2-XS_2r-qd.js";import"./alert-CjMhygJT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Diqxij9B.js";import"./delete-d6bn_JDV.js";import"./settings-BIg8VPcO.js";import"./NoData-rbt8DPTL.js";import"./IllustratedMessage-B6qON00u.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B41MixxM.js";import"./index-CbLC2T1-.js";import"./index-BEgrxcfq.js";import"./slim-arrow-down-Bj4DlPa3.js";import"./Input-CxXPc-Hx.js";import"./ResponsivePopoverCommon.css-Do9Vgr3v.js";import"./ValueStateMessage.css-D9t9_AMW.js";import"./Suggestions.css-CbUz-ZGI.js";import"./ListBoxItemGroupTemplate-46_Zh3wN.js";import"./ComboBoxItemGroup-RbdF7hhc.js";import"./ListItemBaseTemplate-O3CDUooj.js";import"./Token-BLH25HvY.js";import"./ScrollEnablement-zAaUIY5k.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-VFffhFve.js";import"./ToggleButton-mwmAbve5.js";import"./SuggestionItem-DOpNFTCA.js";import"./index-ClXgM0QD.js";import"./Option-BYlN-tpp.js";import"./index-BkRcZeSq.js";import"./SegmentedButton-BqQxCudY.js";import"./index-DYVv1ok6.js";import"./Select-BJT8n4vX.js";import"./InvisibleMessage-XUjgdwX9.js";import"./slim-arrow-down-C5fdvPae.js";import"./index-DL2C3Cwm.js";import"./index-D4a7uqpb.js";import"./index-BzTARrg3.js";import"./index-Ct561GKj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CH-P7ycI.js";import"./group-2-CrDDPtXD.js";import"./sort-descending-r8NGiDn9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-haQKghSk.js";import"./utils-DfQ09pUz.js";import"./index--NtLvyBH.js";import"./index-DdFdl9JW.js";import"./index-BazkfAzC.js";import"./navigation-down-arrow-CCvVF4OT.js";import"./navigation-right-arrow-BpL2A1bg.js";import"./navigation-right-arrow-jdXIwt_e.js";import"./useCurrentTheme-CTBlfWfu.js";import"./index-CTuKnf34.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C3EIIsQq.js";import"./paper-plane-6--7LTtA.js";import"./index-CbqLR4ce.js";import"./less-5cy1nyok.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
