import{j as e}from"./iframe-BIP38Qmu.js";import{useMDXComponents as o}from"./index-CCzfQ4AK.js";import{I as r}from"./CommandsAndQueries-BAg-w2Ve.js";import{M as l,C as a}from"./blocks-69-jnurL.js";import"./Tag-D0zcjL-3.js";import"./index-C_7tcSj3.js";import"./copy-nvOf1vVL.js";import{F as c}from"./Footer-DAbghHc6.js";import"./PageNotFound-z2fC1f6d.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D-G1sdpB.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B13MM4G6.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./index-BlYNx0T3.js";import"./index-C0fOqYC4.js";import"./index-BEp_fWNn.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./index-pu7JlX44.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dz4xcjRe.js";import"./delete-Dur4E_xL.js";import"./settings-De85Y9Vl.js";import"./NoData-CvrvV3LA.js";import"./NoFilterResults-CDQjvK-k.js";import"./index-IvByI7by.js";import"./IllustratedMessage-DykZSGsY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DE6oriP5.js";import"./Input-Vh2SZ5wm.js";import"./ResponsivePopoverCommon.css-BkF_hMva.js";import"./ValueStateMessage.css-CUWnXMd3.js";import"./Suggestions.css-B5HWK93E.js";import"./ListBoxItemGroupTemplate-DSD3qJlV.js";import"./ComboBoxItemGroup-D5nL8mXK.js";import"./ListItemBaseTemplate-C-sRh5WR.js";import"./Token-DrBChGXT.js";import"./ScrollEnablement-CtvtwLeU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BzHjrys2.js";import"./ToggleButton-BNbivUIh.js";import"./multiselect-all-UIxR7RvH.js";import"./SuggestionItem-BKrlsw9a.js";import"./index-CvzhRPgo.js";import"./Option-CHiJn1LV.js";import"./index-BPqgJU8W.js";import"./SegmentedButton-C8xvUBR3.js";import"./index-DcOjdeVc.js";import"./Select-WWVP6knv.js";import"./InvisibleMessage-CSZZfWPC.js";import"./index-C-XA25zK.js";import"./index-Ci5YREF7.js";import"./index-DSZlMzTu.js";import"./index-Bt4sAh6G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CzEBxE2M.js";import"./group-2-J7qnivyy.js";import"./sort-descending-D059dpAr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-FlYCK5.js";import"./utils-Cuf4pSoq.js";import"./index-CF1gGx4H.js";import"./index-Dk6p7GrR.js";import"./index-BIvl_-WU.js";import"./navigation-down-arrow-D-lJHCSC.js";import"./navigation-right-arrow-BBJGgKV7.js";import"./navigation-right-arrow-8O47gqPc.js";import"./useCurrentTheme-CMhG7RYX.js";import"./index-_Oe3u67s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-yBtQpEip.js";import"./paper-plane-4-sb9eyj.js";import"./index-BfK4ShoC.js";import"./less-BSDtBstK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
