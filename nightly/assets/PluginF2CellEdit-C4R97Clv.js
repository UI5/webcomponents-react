import{j as e}from"./iframe-Dp_0Yhmg.js";import{useMDXComponents as o}from"./index-BMV3GZRz.js";import{I as r}from"./CommandsAndQueries-DDLi5yBU.js";import{M as l,C as a}from"./blocks-CKlkgOe3.js";import"./Tag-CNZu_-1j.js";import"./index-nFX3Pl_S.js";import"./copy-BMHKKbyO.js";import{F as c}from"./Footer-Pq4yDBwS.js";import"./PageNotFound-BsRlbC58.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-V88yIYjm.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DcMDvp4G.js";import"./index-DzgaNcC5.js";import"./index-C5vcogVt.js";import"./index-T5J1jf5G.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCqFx9Uj.js";import"./addCustomCSSWithScoping-CZYJlNXb.js";import"./index-Cu_XsrMy.js";import"./index-DXry597q.js";import"./index-DjJhZI7Y.js";import"./information-gl9SwVgW.js";import"./sys-enter-2-0WtHGlhQ.js";import"./alert-Bcw4Fg6E.js";import"./index-DpBR8FGa.js";import"./Illustrations-bZxTgUi1.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DZlU0_nw.js";import"./delete-DqKBQPKu.js";import"./settings-O9lrexvt.js";import"./NoData-Dg0Hqj8X.js";import"./NoFilterResults-BPGK8QO_.js";import"./index-K5CBibs9.js";import"./IllustratedMessage-BMmkB-iU.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-tFfwrzuZ.js";import"./slim-arrow-down-BC4mtdbv.js";import"./Input-CRrnYeQZ.js";import"./ResponsivePopoverCommon.css-h1W8s5fZ.js";import"./ValueStateMessage.css-Bf7fXuVn.js";import"./Suggestions.css-nwnFE4qJ.js";import"./ListBoxItemGroupTemplate-BKRsXqLf.js";import"./ComboBoxItemGroup-D-EcnRF3.js";import"./ListItemBaseTemplate-BZikYPsL.js";import"./Token-BlNZY41K.js";import"./ScrollEnablement-DIUnalZp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B-TzNdgp.js";import"./ToggleButton-BjDcT3J0.js";import"./SuggestionItem-BE-Ftq-K.js";import"./index-Cfr2EVXu.js";import"./Option-DPpzprMH.js";import"./index-DrO4gkBj.js";import"./SegmentedButton-7Tky5Pfm.js";import"./index-DrYCygiX.js";import"./Select-CURJ6tOv.js";import"./InvisibleMessage-B2w_5M6j.js";import"./slim-arrow-down-CDgGjVrM.js";import"./index-CFOVWAzR.js";import"./index-DMoBwtGT.js";import"./index-CHwuhYIq.js";import"./index-cGopohf8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Da6TJjGQ.js";import"./group-2-CLfZKXSW.js";import"./sort-descending-CRkRUk04.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bql-qSdh.js";import"./utils-CxnTFJIb.js";import"./index-D8f-xZlT.js";import"./index-DovYOhn7.js";import"./index-BmzNDvvc.js";import"./navigation-down-arrow-DZaQ3Z_i.js";import"./navigation-right-arrow-CbfpzaeK.js";import"./navigation-right-arrow-CH2tup3m.js";import"./useCurrentTheme-DddtRzkQ.js";import"./index-CjzqcDm-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-anVy-FXS.js";import"./paper-plane-FPbukG19.js";import"./index-BPv30PhM.js";import"./less-CaYfSCWa.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(c,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};
