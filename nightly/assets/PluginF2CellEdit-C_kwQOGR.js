import{j as e}from"./iframe-DncksSc9.js";import{useMDXComponents as o}from"./index-DHwy2cP9.js";import{I as r,F as l}from"./CommandsAndQueries-CDnFth_H.js";import{M as a,C as c}from"./blocks-CrR4TToZ.js";import"./Tag-CydY6GNK.js";import"./index-Bxx2fk60.js";import"./copy-DLEpwWX6.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-onwCzFR9.js";import"./preload-helper-PPVm8Dsz.js";import"./index--l4k2_pu.js";import"./index-LgvpS8l8.js";import"./index-DM-1F5s9.js";import"./Link-DA9rizI6.js";import"./index-DjMKVIn1.js";import"./index-9yiQ979H.js";import"./index-ozB3DgLW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0ZXAWvt.js";import"./addCustomCSSWithScoping-CHaIArZr.js";import"./index-Bbgh-_Am.js";import"./information-DaRpWkOX.js";import"./sys-enter-2-oWYvZ3n3.js";import"./alert-DDv07Q-F.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CtelhZjf.js";import"./delete-C8B1Co0i.js";import"./settings-B4D9jFyf.js";import"./NoData-0pXCNlwj.js";import"./IllustratedMessage-Biu-Y2PO.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-DLX-UAid.js";import"./index-Cl9Lgdz7.js";import"./slim-arrow-down-Dw4qZkUc.js";import"./Input-HjE4MzLi.js";import"./ResponsivePopoverCommon.css-D7l99RH0.js";import"./ValueStateMessage.css-CDVm0-OH.js";import"./Suggestions.css-Di4bJ4Mv.js";import"./ListBoxItemGroupTemplate-BwHMeEo2.js";import"./ComboBoxItemGroup-CoTRrzsz.js";import"./ListItemBaseTemplate-DgydtAbW.js";import"./Token-Cmmtifzz.js";import"./ScrollEnablement-P--ZLWUn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-OppmVys6.js";import"./ToggleButton-DKYgle8i.js";import"./SuggestionItem-DgjKJ3SY.js";import"./index-DeJkkzWj.js";import"./Option-DDPjWDk1.js";import"./index-JrTo95Fm.js";import"./SegmentedButton-CLC_XxdM.js";import"./index-B_8t13HI.js";import"./Select-D1ki5xZv.js";import"./InvisibleMessage-B0PSwWLP.js";import"./slim-arrow-down-BB45oQEO.js";import"./index-83abA5iC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DaZDbBT4.js";import"./group-2-B5P3PhAn.js";import"./sort-descending-VXAY9Zz-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B70SChhh.js";import"./utils-Qp_0Ohai.js";import"./index-CKQ5y9RK.js";import"./index-DcM8rOK1.js";import"./index-Bn_XXlzK.js";import"./navigation-down-arrow-DE2B6sGV.js";import"./navigation-right-arrow-zAMyMa8Q.js";import"./navigation-right-arrow-CzaD2I1v.js";import"./useCurrentTheme-DwePz3I6.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D-zrcSGE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-SpXXo_HP.js";import"./paper-plane-CXqmWy3W.js";import"./index-CIKjtRh_.js";import"./less-CeDgCnwC.js";import"./index-CqDygOHO.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
