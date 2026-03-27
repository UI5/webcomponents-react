import{j as e}from"./iframe-GiALwnwk.js";import{useMDXComponents as o}from"./index-D5Br25pp.js";import{I as r}from"./CommandsAndQueries-C_IHadBx.js";import{M as l,C as a}from"./blocks-CWQEoHYq.js";import"./Tag-LkaAJwXo.js";import"./index-Df-74Kk_.js";import"./copy-BjtWQX8c.js";import{F as c}from"./Footer-CTpmUzQu.js";import"./PageNotFound-lhidYwaf.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C0drGsRM.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cl18BXak.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./index-C2OBDsL0.js";import"./index-_Dwwjvl6.js";import"./index-D48RNIki.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./index-DmWjxGkj.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C6gOy1mt.js";import"./delete-DW7iMKa4.js";import"./settings-DhekAkc-.js";import"./NoData-Ck7AmFs7.js";import"./NoFilterResults-Bdr0pWK1.js";import"./index-CSqY6oqd.js";import"./IllustratedMessage-CWorwHI8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-XPdaETP2.js";import"./Input-CAEdEQYs.js";import"./ResponsivePopoverCommon.css-Dd9wsj0Z.js";import"./ValueStateMessage.css-CsbnVp72.js";import"./Suggestions.css-Dyj9iu2Q.js";import"./ListBoxItemGroupTemplate-D9WXmJvJ.js";import"./ComboBoxItemGroup-D_9tYabb.js";import"./ListItemBaseTemplate-GKtph4El.js";import"./Token-DqvIjy0G.js";import"./ScrollEnablement-Dfwd2yQV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmNegGRy.js";import"./ToggleButton-CNcKoSZH.js";import"./multiselect-all-D9lBPv0A.js";import"./SuggestionItem-Cg2rZPAd.js";import"./index-CicHf-ly.js";import"./Option-BhicZcBl.js";import"./index-BbmFzA7n.js";import"./SegmentedButton-CFgw25ym.js";import"./index-COLQUQjD.js";import"./Select-wAYP5Lkd.js";import"./InvisibleMessage-C6bw_76w.js";import"./index-UQ8-K6Hp.js";import"./index-DdEYvRu2.js";import"./index-DBmUjfqO.js";import"./index-CSIhU0w2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CTpqP-um.js";import"./group-2-CYIXDJv4.js";import"./sort-descending-DYYr51Ys.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8KGwsoJ.js";import"./utils-CfCxZg4A.js";import"./index-Bsb-fTU5.js";import"./index-CKCwf71g.js";import"./index-1SgfqZTS.js";import"./navigation-down-arrow-Dw3dfCIj.js";import"./navigation-right-arrow-CIGq5ecr.js";import"./navigation-right-arrow-C6hsZ--E.js";import"./useCurrentTheme-Bp92R9Yj.js";import"./index-BiTyXHR_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EHylbWiC.js";import"./paper-plane-BcYb5zY2.js";import"./index-WUkGkR3K.js";import"./less-BKVo8B_X.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
