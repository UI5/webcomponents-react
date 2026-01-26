import{j as e}from"./iframe-BlUygxfZ.js";import{useMDXComponents as o}from"./index-CXAabkf3.js";import{I as l,F as r}from"./CommandsAndQueries-CeFRywr5.js";import{M as a,C as c}from"./blocks-C4NQ4-im.js";import"./Tag-CUR2rrlg.js";import"./index-Dh-78LPx.js";import"./copy-C0O91PIx.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C4XrPa9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0J408xz.js";import"./index-DFYqP0N6.js";import"./index-t0s0GVf0.js";import"./Link-Czimy6hK.js";import"./index-Dn8Ref-F.js";import"./index-C_DCdzmu.js";import"./index-nb0q6IbV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbJvTexr.js";import"./addCustomCSSWithScoping-DHyjDtb3.js";import"./index-B6coDb7Z.js";import"./information-zlNYGB6Q.js";import"./sys-enter-2-Ccj_DCkA.js";import"./alert-LdJbGRSH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CgXczKDb.js";import"./delete-BZs0a-1H.js";import"./settings-BVrFU0mX.js";import"./NoData-D4bv1jPS.js";import"./IllustratedMessage-D3TBiFcy.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-9ofLVooP.js";import"./index-84lCpQlY.js";import"./index-CSl--qbo.js";import"./slim-arrow-down-CgDsJMzW.js";import"./Input-CAJFmB2Z.js";import"./ResponsivePopoverCommon.css-DwHTCDww.js";import"./ValueStateMessage.css-C3alblsY.js";import"./Suggestions.css-CLTa6LPz.js";import"./ListBoxItemGroupTemplate-CIs0oSQk.js";import"./ComboBoxItemGroup-Ceh1JxvS.js";import"./ListItemBaseTemplate-CMAdUbXU.js";import"./Token-BTUJFvLX.js";import"./ScrollEnablement-DSwNOA6D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BqadHOpo.js";import"./ToggleButton-BG1bNuXR.js";import"./SuggestionItem-D0KUwh3K.js";import"./index-B9UBVLPX.js";import"./Option-h_6RFh1c.js";import"./index-DhgCGgHe.js";import"./SegmentedButton-DH2HX0sk.js";import"./index-CHKENjHC.js";import"./Select-CP3bsgEY.js";import"./InvisibleMessage-D6EiZ3B3.js";import"./slim-arrow-down-DNdnjurS.js";import"./index-2fqu4ZUm.js";import"./index-BbCJyiwr.js";import"./index-DUvesvaX.js";import"./index-C5uNCv6R.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGGrEzLl.js";import"./group-2-Bzo2NSpJ.js";import"./sort-descending--Hwn5uWZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5Y2dYwJ.js";import"./utils-DbuWLHgd.js";import"./index-l2Om9n2s.js";import"./index-ec7XPWwz.js";import"./index-DsTqha7i.js";import"./navigation-down-arrow-DDmPzf56.js";import"./navigation-right-arrow-D1dkuTqT.js";import"./navigation-right-arrow-BQIRTW5E.js";import"./useCurrentTheme-BPj60tYc.js";import"./index-DJOUc43H.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-RZAVCFXP.js";import"./paper-plane-CKvhYw7h.js";import"./index-DF9Z0-Xx.js";import"./less-BQUCisQp.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
