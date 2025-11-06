import{j as e}from"./iframe-qw_wjtNl.js";import{useMDXComponents as o}from"./index-CvAhzckH.js";import{I as l,F as r}from"./CommandsAndQueries-DWIFRiex.js";import{M as a,C as c}from"./blocks-Cj0GGGP0.js";import"./Tag-DzwN3Rd_.js";import"./index-BxhW2KQn.js";import"./copy-6F9M-W0B.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CAfd5EST.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DkBb4DU7.js";import"./index-JDJrS9Ll.js";import"./index-BjZZqbZ8.js";import"./Link-D-ZYRyi4.js";import"./index-8ixRb_fG.js";import"./index-ClMjTnJ2.js";import"./index-CuOh1gGP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8mn_iQe.js";import"./addCustomCSSWithScoping-CztL__nC.js";import"./index-BdvjziP2.js";import"./information-GIBAMn_C.js";import"./sys-enter-2-Djyl2MPl.js";import"./alert-B6KZwVKr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D6h30yd_.js";import"./delete-h0aT8AVb.js";import"./settings-DB2h-uz8.js";import"./NoData-BAGQwhIK.js";import"./IllustratedMessage-CNDFipk9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-DVQQUXOf.js";import"./index-gQhHuDtz.js";import"./index--jeA-nPD.js";import"./slim-arrow-down-C7tvWC8C.js";import"./Input-BRIiCfgn.js";import"./ResponsivePopoverCommon.css-BJPXKYSd.js";import"./ValueStateMessage.css-CPuzDd78.js";import"./Suggestions.css-D0oXmqLX.js";import"./ListBoxItemGroupTemplate-COpsVFza.js";import"./ComboBoxItemGroup-CuHzLJ6_.js";import"./ListItemBaseTemplate-Dd1lTm6q.js";import"./Token-DzZ0_ysg.js";import"./ScrollEnablement-BjXact8U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCxLbPzf.js";import"./ToggleButton-CpsjIwWA.js";import"./SuggestionItem-dN69XrVf.js";import"./index-8HQvYLzF.js";import"./Option-CFeMc4Ab.js";import"./index-BrmJJ0nJ.js";import"./SegmentedButton-jZiliEy1.js";import"./index-Bm7nt3MU.js";import"./Select-DrpdgADy.js";import"./InvisibleMessage-BeRSLPnc.js";import"./slim-arrow-down-BSh7m90B.js";import"./index-CraAWzST.js";import"./index-BaRBa3SP.js";import"./index-Ds2AFYTa.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DzCjRTbW.js";import"./group-2-ZVRD52bo.js";import"./sort-descending-KiWNCiTs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UuMtVOVu.js";import"./utils-6d5OHNfa.js";import"./index-OZfm5yOC.js";import"./index-C9QdKJZX.js";import"./index-DKsk6U_B.js";import"./navigation-down-arrow-BXwF2ivk.js";import"./navigation-right-arrow-Bt4GUYcC.js";import"./navigation-right-arrow-DDTiNM5w.js";import"./useCurrentTheme-BkU3ks1S.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C9Bu16Dr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cnj3p2ky.js";import"./paper-plane-UcJDeTb8.js";import"./index-DUYAr_8G.js";import"./less-D0rWAHm3.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
