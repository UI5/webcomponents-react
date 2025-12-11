import{j as e}from"./iframe-BO0jLSss.js";import{useMDXComponents as o}from"./index-DKYRdGJC.js";import{I as l,F as r}from"./CommandsAndQueries-CgQBaZ0f.js";import{M as a,C as c}from"./blocks-B4u3eIrx.js";import"./Tag-GPe-hxqe.js";import"./index-CblgVrgk.js";import"./copy-D8dGmaRo.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D7MtjTzc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DelbaEfh.js";import"./index-ZGr5TJVA.js";import"./index-CpvGRbxq.js";import"./Link-C1ayfMxn.js";import"./index-CEuImug1.js";import"./index-MgaH4Bh7.js";import"./index-CQJ8H28h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3DyNz5yK.js";import"./addCustomCSSWithScoping-tlJvF9vw.js";import"./index-Cxn0-wv1.js";import"./information-D3uCnnkd.js";import"./sys-enter-2-wxpj1ZiR.js";import"./alert-BevRZGbf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-WOPC9WGY.js";import"./delete-CXSVZr3J.js";import"./settings-10XeLyfQ.js";import"./NoData-Bp9WgEt4.js";import"./IllustratedMessage-CkbG5ZvE.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CQFTLeWZ.js";import"./index-CCjPGqWt.js";import"./index-DSkwQ9bU.js";import"./slim-arrow-down-BTwGuTkB.js";import"./Input-BW36Az8s.js";import"./ResponsivePopoverCommon.css-JDR8aaaw.js";import"./ValueStateMessage.css-DX9Ekmj2.js";import"./Suggestions.css-BcCiMvmK.js";import"./ListBoxItemGroupTemplate-2cOZvPZ_.js";import"./ComboBoxItemGroup-CPX37NIp.js";import"./ListItemBaseTemplate-KzzU4Rx3.js";import"./Token-BbkDyfWL.js";import"./ScrollEnablement-Dc2oxzPB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dn6AUPyj.js";import"./ToggleButton-XZE7B9VL.js";import"./SuggestionItem-BfhP-dC0.js";import"./index-BzqKXdxx.js";import"./Option-CNIcjJ6X.js";import"./index-C7e3H0Lc.js";import"./SegmentedButton-u_VBq4Z5.js";import"./index-3cbxcu0U.js";import"./Select-tyOKBt9U.js";import"./InvisibleMessage-Ckou_TOv.js";import"./slim-arrow-down-BpthopxW.js";import"./index-BNFz1DGk.js";import"./index-d6hdHjrN.js";import"./index-y6EH7Axm.js";import"./index-BWlaxzMP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CKdADjSP.js";import"./group-2-BVByTZBV.js";import"./sort-descending-CAs7fCPL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BfvWHhZL.js";import"./utils-C49Mq9vB.js";import"./index-DfdAm2kH.js";import"./index-CSVJMtfx.js";import"./index-DFflxCOc.js";import"./navigation-down-arrow-rNIcSUzY.js";import"./navigation-right-arrow-B6KhF_y0.js";import"./navigation-right-arrow-BWB9l_WM.js";import"./useCurrentTheme-D2TM_kNy.js";import"./index-CFGjj6s2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BupaFKFa.js";import"./paper-plane-nEhWEkVl.js";import"./index-Buj-2QJo.js";import"./less-BZcQvZ5K.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
