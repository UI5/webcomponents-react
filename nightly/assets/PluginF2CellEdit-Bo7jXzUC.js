import{j as e}from"./iframe-D8qIAX_f.js";import{useMDXComponents as o}from"./index-DiTh5Uxf.js";import{I as r}from"./CommandsAndQueries-KW_TEdhO.js";import{M as l,C as a}from"./blocks-CdiMt6d7.js";import"./Tag-DNk7gwKS.js";import"./index-CUBI-ScP.js";import"./copy-B-3EcH3S.js";import{F as c}from"./Footer-CDmCmrx9.js";import"./PageNotFound-DinCfZiZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DWxML14G.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-sqVv97Mp.js";import"./index-BFvnR1Pd.js";import"./index-D5GeJD0z.js";import"./index-DHpssY4F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5egdqPD.js";import"./addCustomCSSWithScoping-Dd8DeQed.js";import"./index-BWh6tnxq.js";import"./index-isyxk5XI.js";import"./index-D_VELT5i.js";import"./information-BSkhwjAM.js";import"./sys-enter-2-DXbxqs0w.js";import"./alert-D1bzSBmg.js";import"./index-CaB62qmL.js";import"./Illustrations-CZMe32im.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bnfme1CR.js";import"./delete-DKzsPxV3.js";import"./settings-Co-dt12h.js";import"./NoData-CnuitWCi.js";import"./NoFilterResults-B0VftMR5.js";import"./index-BZjfN2bH.js";import"./IllustratedMessage-D4OKg0ld.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BycYSYli.js";import"./Input-D0_UTDDL.js";import"./ResponsivePopoverCommon.css-BtulJSvz.js";import"./ValueStateMessage.css-BIixIGY4.js";import"./Suggestions.css-BhNcBbmQ.js";import"./ListBoxItemGroupTemplate-BJn4gBeU.js";import"./ComboBoxItemGroup-ezj5F7ji.js";import"./ListItemBaseTemplate-riJMQTas.js";import"./Token-BcYmw9w_.js";import"./ScrollEnablement-BgCuAdCA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DALcwdap.js";import"./ToggleButton-C3jU9kII.js";import"./multiselect-all-CaYmyguO.js";import"./SuggestionItem-_h5nzTSK.js";import"./index-0yjrcroP.js";import"./Option-DpFSS1nL.js";import"./index-SMtvyjeP.js";import"./SegmentedButton-D8_R1Jby.js";import"./index-BPpdvqUC.js";import"./Select-1OmCgp3X.js";import"./InvisibleMessage-B7bFjCnk.js";import"./index-IudE1LKk.js";import"./index-BGEKXSC0.js";import"./index-CT5M-svC.js";import"./index-DjTGYXxN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3JrpZ6b.js";import"./group-2-WoDpIjlk.js";import"./sort-descending-B4RgaCGU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-p_9aB8wm.js";import"./utils-BRwctz-8.js";import"./index-DW0jnqVx.js";import"./index-BSeapbsT.js";import"./index-Dm1qzLAZ.js";import"./navigation-down-arrow-BKjF3iRZ.js";import"./navigation-right-arrow-HHGkA-Ie.js";import"./navigation-right-arrow-BMk4pdcr.js";import"./useCurrentTheme-DWdXkjvV.js";import"./index-D-H2QYf3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NNdXKXQ8.js";import"./paper-plane-D1mqNsgN.js";import"./index-Brr52Ff4.js";import"./less-DV5NSC93.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
