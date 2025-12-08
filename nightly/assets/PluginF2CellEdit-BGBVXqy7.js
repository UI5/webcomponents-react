import{j as e}from"./iframe-CISvTVNI.js";import{useMDXComponents as o}from"./index-bSkbOjqc.js";import{I as l,F as r}from"./CommandsAndQueries-CBtnfpxG.js";import{M as a,C as c}from"./blocks-B14xai8l.js";import"./Tag-C1M5Bqsq.js";import"./index-DomH80TU.js";import"./copy-DUVHDUg7.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CSObzMGr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./index-CE7xV3os.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DV4j1UI6.js";import"./delete-7JFBm1Tm.js";import"./settings-kgiPQv_V.js";import"./NoData-DUEfNRQo.js";import"./IllustratedMessage-BlLIGWpl.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-ByS1wDeQ.js";import"./index-Bq6YA1OZ.js";import"./index-BWvn97oh.js";import"./slim-arrow-down-D3jugRKw.js";import"./Input-BXkax4Ai.js";import"./ResponsivePopoverCommon.css-DLVAVBHO.js";import"./ValueStateMessage.css-MWCPl9eb.js";import"./Suggestions.css-mYcKBr3o.js";import"./ListBoxItemGroupTemplate-Cq7WxQEJ.js";import"./ComboBoxItemGroup-Dt8qMQbh.js";import"./ListItemBaseTemplate-C6SuP-30.js";import"./Token-DTyOAcLh.js";import"./ScrollEnablement-DgFk1_fj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dtqu1SWh.js";import"./ToggleButton-DkGlogzG.js";import"./SuggestionItem-3yI78rM6.js";import"./index-C-QW4iFF.js";import"./Option--Q44HJGH.js";import"./index-BGo3CCkY.js";import"./SegmentedButton-G6ESX7bA.js";import"./index-DYcBIjee.js";import"./Select-BUoOKAbj.js";import"./InvisibleMessage-D74Q5wYE.js";import"./slim-arrow-down-BCtidmgu.js";import"./index-C__maydq.js";import"./index-DdNorZl8.js";import"./index-TfXtv-kl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IUv5q-Nd.js";import"./group-2-pZ5u8b6c.js";import"./sort-descending-DeiY6LR9.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DwAWNqSH.js";import"./utils-BVswc758.js";import"./index-DmEszc9N.js";import"./index-CTSNUJ9h.js";import"./index-CP1wr9dJ.js";import"./navigation-down-arrow-DmaxrwH-.js";import"./navigation-right-arrow-CpRUuEp7.js";import"./navigation-right-arrow-BJIZXTFA.js";import"./useCurrentTheme-B4X-989J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CMsN1t2K.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTE_y8fW.js";import"./paper-plane-BzsW306U.js";import"./index-DsfN-T3H.js";import"./less-CH3mR01q.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
