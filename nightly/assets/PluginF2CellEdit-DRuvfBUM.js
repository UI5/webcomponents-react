import{j as e}from"./iframe-43wlDzrj.js";import{useMDXComponents as o}from"./index-XbeLC3PN.js";import{I as r,F as l}from"./CommandsAndQueries-BVePbTmS.js";import{M as a,C as c}from"./blocks-VCr_TDgJ.js";import"./Tag-DvuRdu_J.js";import"./index-D_51MvSW.js";import"./copy-CHCJaVsW.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D10oF3Zp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeIthXDN.js";import"./index-NATKJxhC.js";import"./index-CYHyRuCO.js";import"./Link-N85W-l5g.js";import"./addCustomCSSWithScoping-iHDWQtL_.js";import"./index-DHTRveDi.js";import"./index-C_V3uMP5.js";import"./index-Cx3qav0q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D888T4vP.js";import"./index-CNoVY_XQ.js";import"./information-CaFqdV1q.js";import"./sys-enter-2-C8G6jLKW.js";import"./alert-Id5Wcp3M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGgp7AI6.js";import"./delete-CGKk-GHt.js";import"./settings-azhe1KGA.js";import"./NoData-BUEDhyou.js";import"./IllustratedMessage-DI5ozM4h.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-B47dMSPk.js";import"./index-DLDDGmPM.js";import"./slim-arrow-down-C0QargdW.js";import"./Input-BgaYHg51.js";import"./ResponsivePopoverCommon.css-CvwmGqLs.js";import"./ValueStateMessage.css-BHLQ2DbP.js";import"./Suggestions.css-BTUxUlaU.js";import"./ListBoxItemGroupTemplate-_jq9N5mv.js";import"./ComboBoxItemGroup-BnIMpk3_.js";import"./ListItemBaseTemplate-BNZLQVJb.js";import"./Token-DoODEqch.js";import"./ScrollEnablement-Cm1ZvOJx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1ufjNVS.js";import"./ToggleButton-DZrdfmOA.js";import"./SuggestionItem-5jEGmJUe.js";import"./index-D_dLm55z.js";import"./Option-CJ58wD00.js";import"./index-wy3OMWOb.js";import"./SegmentedButton-B-jkLKht.js";import"./index-t8OF5k03.js";import"./Select-BntRU9MY.js";import"./InvisibleMessage-CWwBH76X.js";import"./slim-arrow-down-CeCiJzmU.js";import"./useIsRTL-DZbwhoX7.js";import"./index-BzUhYjna.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CBaC_AY2.js";import"./group-2-BtuK6gfj.js";import"./sort-descending-upcXrfhH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ds45T-GS.js";import"./utils-BQmyXk_Q.js";import"./index-DI_L1vtw.js";import"./index-BVV-gDdT.js";import"./index-C73gXked.js";import"./navigation-down-arrow-CE61iwfG.js";import"./navigation-right-arrow-Dd3smTto.js";import"./navigation-right-arrow-WYE_8Vwt.js";import"./useCurrentTheme-B63DugkT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-cIZdWKhJ.js";import"./debounce-D7W5PopO.js";import"./paper-plane-xHzyfFIj.js";import"./index-Cz9Roaqc.js";import"./less-D_D0iQDA.js";import"./index-Cb6A3wNx.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
