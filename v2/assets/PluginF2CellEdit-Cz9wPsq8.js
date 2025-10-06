import{j as e}from"./iframe-CIFZFrG2.js";import{useMDXComponents as o}from"./index-CzlgAQtr.js";import{I as l,F as r}from"./CommandsAndQueries-BlZNZtUo.js";import{M as a,C as c}from"./blocks-ClculhSc.js";import"./Tag-C9R72Ii-.js";import"./index-B9QNJxWD.js";import"./copy-CVO7dQ0j.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CgEPUpLL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2ynVlET.js";import"./index-Raa53yj5.js";import"./index-BRYLHUCr.js";import"./Link-C5_8cjV3.js";import"./index-CyeOYd2G.js";import"./index-CysqO__p.js";import"./index--ZLvsvkR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CxDbWVSp.js";import"./addCustomCSSWithScoping-Bq-MB79n.js";import"./index-Ddm49m6x.js";import"./information-C9kryg9s.js";import"./sys-enter-2-Dnan1hPQ.js";import"./alert-OVbD1hF6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYyXPrOv.js";import"./delete-BA6UzrB5.js";import"./settings-DIaelliX.js";import"./NoData-B1FuXvEI.js";import"./IllustratedMessage-21oYVbbQ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DPJreZ8p.js";import"./index-cGU9T9rn.js";import"./index-DkhbK58W.js";import"./slim-arrow-down-2FoyFrsV.js";import"./Input-DlFlJtjB.js";import"./ResponsivePopoverCommon.css-cwzG2gc0.js";import"./ValueStateMessage.css-ikIAfSqI.js";import"./Suggestions.css-Cmt6_gCv.js";import"./ListBoxItemGroupTemplate-c0BR_adj.js";import"./ComboBoxItemGroup-jwje7hSK.js";import"./ListItemBaseTemplate-WTKsn73S.js";import"./Token-BaR6rmNc.js";import"./ScrollEnablement-BkzfVfom.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zd36OJtU.js";import"./ToggleButton-CKdRk_TU.js";import"./SuggestionItem-i1kLLZMq.js";import"./index-DiirMTfI.js";import"./Option-DiunOkpg.js";import"./index-C1tXGYmS.js";import"./SegmentedButton-DnLPeF-z.js";import"./index-BU8EJGfi.js";import"./Select-Il0Dpto4.js";import"./InvisibleMessage-SsPOIlta.js";import"./slim-arrow-down-CuXz1j7I.js";import"./index-DsLGmJL5.js";import"./index-Cp4nBRod.js";import"./index-DlBqic0j.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CzaibK8v.js";import"./group-2-BvqITDwo.js";import"./sort-descending-DNmo5GvA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-W-uq8jIV.js";import"./utils-7Audpv7t.js";import"./index-dUb3oqow.js";import"./index-DkmXSgWz.js";import"./index-DtGC_2bD.js";import"./navigation-down-arrow-DNMDmuFC.js";import"./navigation-right-arrow-D_akLMwW.js";import"./navigation-right-arrow-n0EeNTkG.js";import"./useCurrentTheme-C9k3MOJ-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HSQA-4PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCLO5KRo.js";import"./paper-plane-Df4G7ZiX.js";import"./index-B3X4PJbz.js";import"./less-PsQqjzYZ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
