import{j as e}from"./iframe-DVlTfEM-.js";import{useMDXComponents as o}from"./index-k_8IF_2O.js";import{I as l,F as r}from"./CommandsAndQueries-BkPdYDds.js";import{M as a,C as c}from"./blocks-DrSp3MOM.js";import"./Tag-BNH48-R1.js";import"./index-Cikr51XZ.js";import"./copy-Do4831X0.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dc4CzVRx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8q9J4Er.js";import"./index-D5QdPm5n.js";import"./index-VtIqKiJ-.js";import"./Link-B2NzUiP2.js";import"./index-I1wK0hXe.js";import"./index-gAu6pc3o.js";import"./index-B-srII_E.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuLQb_Od.js";import"./addCustomCSSWithScoping-DyDcwna5.js";import"./index-CyKhe59o.js";import"./information-CmhnSrRB.js";import"./sys-enter-2-ty4GJ2q8.js";import"./alert-MBG6abBg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DkCO8Xag.js";import"./delete-D8PsoqYs.js";import"./settings-BvZiD-4L.js";import"./NoData-CSkDH6ij.js";import"./IllustratedMessage-UOdpDpe-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-Cr9VJd-6.js";import"./index-zssJOUHP.js";import"./index-DjSKLUSQ.js";import"./slim-arrow-down-Cl15R1ZF.js";import"./Input-BGJxuKnZ.js";import"./ResponsivePopoverCommon.css-oNmL3crK.js";import"./ValueStateMessage.css-CtUL6j0K.js";import"./Suggestions.css-CM1R5dIm.js";import"./ListBoxItemGroupTemplate-BP2e86jZ.js";import"./ComboBoxItemGroup-BqFAfTuf.js";import"./ListItemBaseTemplate-C_4eP7YO.js";import"./Token-DvVKUdOw.js";import"./ScrollEnablement-D7Xa6acP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C3KQCuJV.js";import"./ToggleButton-fm8RXqSV.js";import"./SuggestionItem-CRJSj9d9.js";import"./index-DL3kJ6Ys.js";import"./Option-bA3BQjg2.js";import"./index-Chk0CywK.js";import"./SegmentedButton-CHFmZDT5.js";import"./index-B43_nY2G.js";import"./Select-D18nbPyu.js";import"./InvisibleMessage-CRYSMjmC.js";import"./slim-arrow-down-CiXqYYHt.js";import"./index-iqm3GyJh.js";import"./index-CkVXAiTR.js";import"./index-Dyam-MVy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-scTLOOoX.js";import"./group-2-dWyvSvql.js";import"./sort-descending-B0NwIWrn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmrYW8iD.js";import"./utils-Cr5WVsBR.js";import"./index-BFCC2aiM.js";import"./index-CMeIuUOs.js";import"./index-BL4PIRcT.js";import"./navigation-down-arrow-BUDUl4ig.js";import"./navigation-right-arrow-Dfp0sj6x.js";import"./navigation-right-arrow-DYueMaPq.js";import"./useCurrentTheme--PrL2jjb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D3bUPVNG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-EPGyQxGy.js";import"./paper-plane-Bmo31A5w.js";import"./index-B4QIzuUd.js";import"./less-DHSI_jam.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
