import{j as e}from"./iframe-DMsBkhV6.js";import{useMDXComponents as o}from"./index-DRmP5vAG.js";import{I as r}from"./CommandsAndQueries-DpukJ1Hp.js";import{M as l,C as a}from"./blocks-DLa5hkYX.js";import"./Tag-BmcB_JoS.js";import"./index-DCIOC28Z.js";import"./copy-CD95AZM0.js";import{F as c}from"./Footer-BOw4Z5DY.js";import"./PageNotFound-DjLaegFZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D2IcS3ZP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CSEVwGcN.js";import"./index-Bz_iFKqi.js";import"./index-bqOHt3_F.js";import"./index-Ct0KsXWt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSKWwKcd.js";import"./addCustomCSSWithScoping-BbL9ROxJ.js";import"./index-DsnyfM-a.js";import"./index-D8IUoaKA.js";import"./index-CsdED7a8.js";import"./information-B9kPmlYt.js";import"./sys-enter-2-DFXWrXkU.js";import"./alert-BM02Ke2L.js";import"./index-BzYJTbyT.js";import"./Illustrations-BuKaE0Lu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ueS9H92b.js";import"./delete-CHTfP-Kt.js";import"./settings-BLF4w1HS.js";import"./NoData-DlSNP7WF.js";import"./NoFilterResults-Cjyj15R0.js";import"./index-2yg_p-0e.js";import"./IllustratedMessage-etYmXr5W.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BJqBraCz.js";import"./Input-Uf7jhdsj.js";import"./ResponsivePopoverCommon.css-BkDEP9by.js";import"./ValueStateMessage.css-BOfdrSqA.js";import"./Suggestions.css-CGPwNADp.js";import"./ListBoxItemGroupTemplate-_0Dwsw5E.js";import"./ComboBoxItemGroup-DaTElG3f.js";import"./ListItemBaseTemplate-YIQ1K6S5.js";import"./Token-ZdRf4EiI.js";import"./ScrollEnablement-COba7ibi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DrpX4RCW.js";import"./ToggleButton-CrhejzgI.js";import"./multiselect-all-D_WUNEQL.js";import"./SuggestionItem-CAv3FUFe.js";import"./index-ohvCQnZa.js";import"./Option-CaNyZKGp.js";import"./index-C3f11o7B.js";import"./SegmentedButton-B1wjIz-p.js";import"./index-B5ufxdTz.js";import"./Select-CbPjmsG8.js";import"./InvisibleMessage-DRj0d5Uv.js";import"./index-9vqhJGXS.js";import"./index-DLUlNmzM.js";import"./index-BNhRrdmr.js";import"./index-BYW_tyTv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CM4efI86.js";import"./group-2-BPP57I-Z.js";import"./sort-descending-DmVlxwNX.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAZhX22Y.js";import"./utils-DLVR_ZqH.js";import"./index-BhKQSOJa.js";import"./index-DLPYNRsQ.js";import"./index-BVEb-vDJ.js";import"./navigation-down-arrow-B5mwPXMM.js";import"./navigation-right-arrow-DD2gNJ11.js";import"./navigation-right-arrow-X6oG7L7N.js";import"./useCurrentTheme-BVLXkGO3.js";import"./index-I52ieGsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_v8Eyxn.js";import"./paper-plane-DZMdtTIa.js";import"./index-D8XrUqKf.js";import"./less-mQfVbBaX.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
