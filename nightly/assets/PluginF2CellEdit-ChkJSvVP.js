import{j as e}from"./iframe-3Rg5Wd99.js";import{useMDXComponents as o}from"./index-BTtluBKc.js";import{I as l,F as r}from"./CommandsAndQueries-4irgK4g8.js";import{M as a,C as c}from"./blocks-DwXr0juD.js";import"./Tag-D-xjyjYI.js";import"./index-BjGGvrQp.js";import"./copy-BR2g9NKm.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BtKyMCwH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BoknKV7T.js";import"./index-BWLi-wcN.js";import"./index-LZ61FQm1.js";import"./Link-BMrxlNgv.js";import"./index-ClS56Mg1.js";import"./index-QO9zmO89.js";import"./index-C9Yy8pBH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-apWy6mIw.js";import"./addCustomCSSWithScoping-mB2SNd7y.js";import"./index-BPXqXslV.js";import"./information-COV3mgHm.js";import"./sys-enter-2-C-L-yMS4.js";import"./alert-ClJ7IdSm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-AybIUtZQ.js";import"./delete-C18fTeGA.js";import"./settings-DOb4jD36.js";import"./NoData-Dzqqxzcq.js";import"./IllustratedMessage-XT-qOyRh.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-RUBH0lOK.js";import"./index-cf0CgG6G.js";import"./index-CnMsIOMu.js";import"./slim-arrow-down-DPxeYNIS.js";import"./Input-RaRxEcJv.js";import"./ResponsivePopoverCommon.css-BnKNuLK_.js";import"./ValueStateMessage.css-D2xuJszB.js";import"./Suggestions.css-C-SIx5Gu.js";import"./ListBoxItemGroupTemplate-CkqhRzfm.js";import"./ComboBoxItemGroup-BGauKTTc.js";import"./ListItemBaseTemplate-CCNKkYk5.js";import"./Token-FJAepxqH.js";import"./ScrollEnablement-e6-Wl8Ct.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cd6yodnz.js";import"./ToggleButton-CKU3XZkp.js";import"./SuggestionItem-1xa7THEm.js";import"./index-D2rLPQ18.js";import"./Option-CtvAXvoh.js";import"./index-CCkYF5EZ.js";import"./SegmentedButton-BMw95QgJ.js";import"./index-mj1iThEp.js";import"./Select-DK_4ZOyC.js";import"./InvisibleMessage-PSe-IXvc.js";import"./slim-arrow-down-BIyrlIQV.js";import"./index-Dnit8d_5.js";import"./index-BVN7UCZF.js";import"./index-mJSdXP-Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CknUQnqi.js";import"./group-2-BYSUkX7I.js";import"./sort-descending-BGvYR9pA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-De9vUNgF.js";import"./utils--AtpiRwX.js";import"./index-wOoILpmg.js";import"./index-CcNWTncD.js";import"./index-BPKkC6Cq.js";import"./navigation-down-arrow-CE59kIds.js";import"./navigation-right-arrow-5K5Bx0O1.js";import"./navigation-right-arrow-CrmWEXO3.js";import"./useCurrentTheme-CT2jPT6F.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DwlQ-CyJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DFX8rm6i.js";import"./paper-plane-DMs4w7xh.js";import"./index-dsSG16Z8.js";import"./less-4xUDvpDF.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
