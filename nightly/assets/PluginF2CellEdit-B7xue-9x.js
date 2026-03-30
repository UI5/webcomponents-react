import{j as e}from"./iframe-DMCuegit.js";import{u as o,M as l,C as r}from"./blocks-_hT2CGz-.js";import{I as a}from"./CommandsAndQueries-C9E2MGX7.js";import"./Tag-DKKBiDqY.js";import"./index-eKDFsa2E.js";import"./copy-CPtUp5y0.js";import{F as c}from"./Footer-0Wa-LUTc.js";import"./PageNotFound-BG19bJbD.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D-i6P8d2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CmPTNs7p.js";import"./index-C9z-ZS1p.js";import"./index-C1STFZgh.js";import"./index-Di3QE5re.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5tqyg7w.js";import"./addCustomCSSWithScoping-C0Smz55A.js";import"./index-otx7j-A2.js";import"./index-Dzpyi8IH.js";import"./index-D62lIz3L.js";import"./information-5_fbL55R.js";import"./sys-enter-2-Dil9t1r8.js";import"./alert-D7vPLYbi.js";import"./index-DEoJMyHo.js";import"./Illustrations-bTO4h7is.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CPITllAz.js";import"./delete-90NTeC2G.js";import"./settings-BG5LV0dM.js";import"./NoData-DxVxgFNc.js";import"./NoFilterResults-DMxlrcRZ.js";import"./index-63F5wA8L.js";import"./IllustratedMessage-ChulAt0j.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D-POlRPn.js";import"./Input-DirUDi6l.js";import"./ResponsivePopoverCommon.css-MXP7eeX6.js";import"./ValueStateMessage.css-D7j-2cj5.js";import"./Suggestions.css-Dvj1z-OQ.js";import"./ListBoxItemGroupTemplate-DOKgNhxC.js";import"./ComboBoxItemGroup-2Q_3jSBR.js";import"./ListItemBaseTemplate-BtXEjops.js";import"./Token-Dnuzgc0h.js";import"./ScrollEnablement-CBsMaVqO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DPUfNWM3.js";import"./ToggleButton-CVG3irva.js";import"./multiselect-all-BNqAQuwc.js";import"./SuggestionItem-CyvdCOt4.js";import"./index-DxWvkwco.js";import"./Option-K8omM4DC.js";import"./index-OeONlChn.js";import"./SegmentedButton-Bb6xVT4r.js";import"./index-DCMtMQFC.js";import"./Select-47892hrl.js";import"./InvisibleMessage-C3Ae3U1K.js";import"./index-Bl1X9PN5.js";import"./index-DBNpGVow.js";import"./index-BhAgdMmO.js";import"./index-CFS5q5jB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1hkl8V2.js";import"./group-2-CV4D2AOR.js";import"./sort-descending-BHZhyBvt.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DyUeQWg1.js";import"./utils-C6QaWlgq.js";import"./index-Cr983ZDU.js";import"./index-D4mlnoSI.js";import"./index-C773jyxg.js";import"./navigation-down-arrow-DVefUV5T.js";import"./navigation-right-arrow-DcZIB6we.js";import"./navigation-right-arrow-DoT4kgVk.js";import"./useCurrentTheme-D1A3ODx0.js";import"./index-E66unuDm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D9xi9QIt.js";import"./paper-plane-DLKkAQKF.js";import"./index-GAFO2n_O.js";import"./less-BieZFKIn.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(a,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(r,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function _e(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{_e as default};
