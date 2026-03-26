import{j as e}from"./iframe-CN9FvYjd.js";import{useMDXComponents as o}from"./index-CHfbFhXP.js";import{I as r}from"./CommandsAndQueries-BOIWtnt6.js";import{M as l,C as a}from"./blocks-BRVkHd00.js";import"./Tag-B_RTkJ1G.js";import"./index-CjC-3bum.js";import"./copy-CqLNgdQ9.js";import{F as c}from"./Footer-Dl9losBY.js";import"./PageNotFound-YEpHz0H_.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DVUvRB2v.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Wi8OmUZE.js";import"./index-LGty0-Ee.js";import"./index-qceCjzn0.js";import"./index-CdwqdKec.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tlJUacgC.js";import"./addCustomCSSWithScoping-DzgJsuLH.js";import"./index-BFwC892N.js";import"./index-BbQq-ZOq.js";import"./index-DHHIsfuO.js";import"./information-DYxN2cHX.js";import"./sys-enter-2-Cmiit89U.js";import"./alert-DCHWGnHk.js";import"./index-ZHKOt3Ry.js";import"./Illustrations-SwtMVqU-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-PDVLg9Jo.js";import"./delete-sXux0RBx.js";import"./settings-CoLrjw8E.js";import"./NoData-DMviX8Pb.js";import"./NoFilterResults-CIrVjJf-.js";import"./index-DsUlZWap.js";import"./IllustratedMessage-CNrlCgrH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BziUOht8.js";import"./Input--XH3wXXZ.js";import"./ResponsivePopoverCommon.css-DFlXT8Yt.js";import"./ValueStateMessage.css-DaIbDu_s.js";import"./Suggestions.css-C1rlY3G7.js";import"./ListBoxItemGroupTemplate-3j4IvakF.js";import"./ComboBoxItemGroup-XgTm2oPa.js";import"./ListItemBaseTemplate-inTV_ZQx.js";import"./Token-CM9W4z5A.js";import"./ScrollEnablement-Be-lL4pM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bpw8kHSv.js";import"./ToggleButton-LVDrAlrT.js";import"./multiselect-all-DRLXqwh4.js";import"./SuggestionItem-DIJ09gIE.js";import"./index-CYelxgbb.js";import"./Option-C9NgJRXg.js";import"./index-qj_fITSG.js";import"./SegmentedButton-CPYEaCpP.js";import"./index-Cwn8NjgW.js";import"./Select-EDC4gd3g.js";import"./InvisibleMessage-U36VH6c8.js";import"./index-DQr4HfAy.js";import"./index-I5TiD3Wv.js";import"./index-Bv-lpTUK.js";import"./index-C4sRNL_2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D1qMoNlt.js";import"./group-2-D359kW4P.js";import"./sort-descending-iarK2oXR.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C9G9oavp.js";import"./utils-BbuVUQyZ.js";import"./index-Dfrdccyw.js";import"./index-l5vhLjKD.js";import"./index-xq182KXJ.js";import"./navigation-down-arrow-4oBIf6f6.js";import"./navigation-right-arrow-BSY5C0HZ.js";import"./navigation-right-arrow-CajLQNlB.js";import"./useCurrentTheme-DktBLXlE.js";import"./index-LF1Yh8x4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BW8x1c9w.js";import"./paper-plane-CNhlmnjY.js";import"./index-6r62860r.js";import"./less-BV_UcSh5.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
