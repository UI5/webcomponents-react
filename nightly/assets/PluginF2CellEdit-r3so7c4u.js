import{j as e}from"./iframe-D6FNTQkK.js";import{useMDXComponents as o}from"./index-B6bRqhkI.js";import{I as l,F as r}from"./CommandsAndQueries-BXb9AdOB.js";import{M as a,C as c}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import"./copy-CV5IiNGP.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BOeh4XmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./index-C8Bzh-c-.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-yi9kxnte.js";import"./delete-CFOKUYe0.js";import"./settings-CfB4e9cX.js";import"./NoData-Dq3tbyi3.js";import"./IllustratedMessage-cjkHzwDQ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DW0YuRZ7.js";import"./index-CTZpCD3C.js";import"./index-DZv_VOFr.js";import"./slim-arrow-down-CHkc3XG4.js";import"./Input-CWaYFEE0.js";import"./ResponsivePopoverCommon.css-DwSQpbCL.js";import"./ValueStateMessage.css-B-79kasT.js";import"./Suggestions.css-BX_6fSbp.js";import"./ListBoxItemGroupTemplate-D5A0k_8G.js";import"./ComboBoxItemGroup-DgqGaLwi.js";import"./ListItemBaseTemplate-BwKCfdZC.js";import"./Token-CdK57w2s.js";import"./ScrollEnablement-BnyFUzOB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-khyxx9eu.js";import"./ToggleButton-UgNXHRCa.js";import"./SuggestionItem-DmIAT0hW.js";import"./index-Bvo9r74r.js";import"./Option-Bp3m08uY.js";import"./index-B-qqk9Qh.js";import"./SegmentedButton-WJja0alW.js";import"./index-DFLZWraU.js";import"./Select-BsOhyv3Y.js";import"./InvisibleMessage-CuNZ9Vpq.js";import"./slim-arrow-down-BcGJUmQm.js";import"./index-BgVQgXtA.js";import"./index-A1xbEiXK.js";import"./index-5wdnnntn.js";import"./index-CvdFD22I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-8F6Zx2fh.js";import"./group-2-bMLqGL0E.js";import"./sort-descending-c2BT37ev.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XmEHG45R.js";import"./utils-DbT12vyG.js";import"./index-Lif6Dilg.js";import"./index-1e28FYLT.js";import"./index-D27T-mws.js";import"./navigation-down-arrow-BN5WPv52.js";import"./navigation-right-arrow-DtQeW2Tc.js";import"./navigation-right-arrow-CLKqeinu.js";import"./useCurrentTheme-DXL7KtWf.js";import"./index-CeT2M4uq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BISPhePp.js";import"./paper-plane-CZun4wFx.js";import"./index-CtNicNZp.js";import"./less-By2gp0Gl.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
