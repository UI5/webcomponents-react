import{j as e}from"./iframe-CCKRZdbF.js";import{useMDXComponents as o}from"./index-BW1v5Z1e.js";import{I as r,F as l}from"./CommandsAndQueries-D1vMTwJ_.js";import{M as a,C as c}from"./blocks-DizR4yrp.js";import"./Tag-D_1GVpYe.js";import"./index-BXous6Vg.js";import"./copy-DCYvEQ2A.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BY_i5uVM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ppkYs0Pw.js";import"./index-TT9wAavy.js";import"./index-C4ynR4jc.js";import"./Link-DVIX6xLA.js";import"./index-Xy0A6wMV.js";import"./index-BMpz4bfD.js";import"./index-byvg7TJC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di3RALWU.js";import"./addCustomCSSWithScoping-BCWPiCrh.js";import"./index-DgC4fDU8.js";import"./information-DXZj2K0P.js";import"./sys-enter-2-_UoM3OrC.js";import"./alert-BYsKIWrN.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DlXGJ_VL.js";import"./delete-D8TdfBV2.js";import"./settings-DOirttvF.js";import"./NoData-DD85yEi3.js";import"./IllustratedMessage-Clfpji7f.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-_rMq9ILm.js";import"./index-BkArYS5g.js";import"./slim-arrow-down-BZhadXVl.js";import"./Input-C5oVUkIB.js";import"./ResponsivePopoverCommon.css-Bikw0MiR.js";import"./ValueStateMessage.css-BuporDJE.js";import"./Suggestions.css-0ImH9Wru.js";import"./ListBoxItemGroupTemplate-ognKSaX6.js";import"./ComboBoxItemGroup-d7zArK7N.js";import"./ListItemBaseTemplate-BkJwMcM3.js";import"./Token-BEFr1xPt.js";import"./ScrollEnablement-BBtwJSnx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DBjVOyrh.js";import"./ToggleButton-B3jU_WZR.js";import"./SuggestionItem-CBgTR6O3.js";import"./index-BAMuu1mV.js";import"./Option-DaCvETte.js";import"./index-BrrdD8jw.js";import"./SegmentedButton-tNr2gkyL.js";import"./index-C329Ucmy.js";import"./Select-CaT0Uyc0.js";import"./InvisibleMessage-4YLx3Nor.js";import"./slim-arrow-down-CfkSdpPj.js";import"./index-CriRaI3g.js";import"./index-DYCg0rFm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-4F45alAB.js";import"./group-2-ChPXGWJ0.js";import"./sort-descending-CANJAVhZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Y-BADZTS.js";import"./utils-DSjF8HMp.js";import"./index-Cj12FuCk.js";import"./index-D6hI8QST.js";import"./index-Bk7OThpJ.js";import"./navigation-down-arrow-BqWqvXKw.js";import"./navigation-right-arrow-EEj5yORF.js";import"./navigation-right-arrow-lOLkkaQa.js";import"./useCurrentTheme-Cidp3UIH.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D1F5uvoT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dajtv9JX.js";import"./paper-plane-C6c1Gi-x.js";import"./index-DKHGOPrC.js";import"./less-TJfV8SH9.js";import"./index-X_VuPj-3.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};
