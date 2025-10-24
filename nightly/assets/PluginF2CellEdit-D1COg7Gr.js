import{j as e}from"./iframe-DGliVLqx.js";import{useMDXComponents as o}from"./index-BKdQ_dPP.js";import{I as l,F as r}from"./CommandsAndQueries-DhC-K5aV.js";import{M as a,C as c}from"./blocks-DSVMoi0f.js";import"./Tag-D0qHMP--.js";import"./index-CUMj3eTR.js";import"./copy-BXMLotg5.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Di1JYyty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-0zoKCck7.js";import"./index-DDYQS3It.js";import"./index-C2z7U0T0.js";import"./Link-NPuKH9vo.js";import"./index-xskusYgR.js";import"./index-usRBaxBR.js";import"./index-Bnhuo37k.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xhvQd63o.js";import"./addCustomCSSWithScoping-H3JndsVD.js";import"./index-C-ihtk73.js";import"./information-DwX5G7SH.js";import"./sys-enter-2-CLhjZKEg.js";import"./alert-D8WWgafc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BPXdiIGy.js";import"./delete-VNiEmKzB.js";import"./settings-Bn4IMpxs.js";import"./NoData-CrO-Ojbp.js";import"./IllustratedMessage-CQ-pThL8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-zmPXMY8f.js";import"./index-BPpKon_v.js";import"./index-ZlqYo9cE.js";import"./slim-arrow-down-BPCmfgSQ.js";import"./Input-B1uSH_6j.js";import"./ResponsivePopoverCommon.css-C-Hps5ad.js";import"./ValueStateMessage.css-Dg_RR3hb.js";import"./Suggestions.css-OrfoYcSp.js";import"./ListBoxItemGroupTemplate-B1B8Njil.js";import"./ComboBoxItemGroup-CFqLv33P.js";import"./ListItemBaseTemplate-BLL1fYXv.js";import"./Token-BYnYPiQ0.js";import"./ScrollEnablement-7T92gtzO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMz5O0cu.js";import"./ToggleButton-gLJIOvzQ.js";import"./SuggestionItem-B0HnLZ2a.js";import"./index-JZkeV-N1.js";import"./Option-BLZmkEGm.js";import"./index-DgRC1GtG.js";import"./SegmentedButton-BgAef3sS.js";import"./index-CDBfsg8A.js";import"./Select-DlS9_dRk.js";import"./InvisibleMessage-CRsDkV-1.js";import"./slim-arrow-down-DPwEh6bg.js";import"./index-DW5AkRqQ.js";import"./index-4N3HClhe.js";import"./index-B9jV6fm0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-iCWrcMv0.js";import"./group-2-BiBRlmiZ.js";import"./sort-descending-CwrGqsAr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuqEh9jI.js";import"./utils-VIsRdQMv.js";import"./index-DN3oVk97.js";import"./index-mOI0MCrO.js";import"./index-DGwcjkeH.js";import"./navigation-down-arrow-Bi_8NERP.js";import"./navigation-right-arrow-CAlrOhev.js";import"./navigation-right-arrow-Cb1EEugd.js";import"./useCurrentTheme-CcMg6oDL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BUCpswoL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbsPXVbG.js";import"./paper-plane-Czf94RLw.js";import"./index-Bl0RftRs.js";import"./less-DTZLBQaX.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
