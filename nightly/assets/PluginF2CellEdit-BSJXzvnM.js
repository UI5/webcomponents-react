import{j as e}from"./iframe-DEt5SpxN.js";import{useMDXComponents as o}from"./index-D4hcUogq.js";import{I as l,F as r}from"./CommandsAndQueries-BPAKOD0B.js";import{M as a,C as c}from"./blocks-CbBrNn_2.js";import"./Tag-Btd7K0TJ.js";import"./index-Bn-DAxDV.js";import"./copy-DO8SZxEM.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BVHpRQOq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C60Z0fiQ.js";import"./index-BBkT8flo.js";import"./index-DQCvCv0f.js";import"./Link-QmS19gJn.js";import"./index-Ct7FOHD-.js";import"./index-aE62-2rm.js";import"./index-BgkB1LC-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L-EUKjf-.js";import"./addCustomCSSWithScoping-DWFhiVTm.js";import"./index-Cgb532fA.js";import"./information-W2yufBl5.js";import"./sys-enter-2-QAd8vpRe.js";import"./alert-Bh8lKzJU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcjM0_PX.js";import"./delete-COMiZuoG.js";import"./settings-Dr7Dz5uy.js";import"./NoData-BTrfsGm2.js";import"./IllustratedMessage-CVkgZe_S.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DdPCGDkQ.js";import"./index-DegFbmY9.js";import"./index-DRGeR7Cs.js";import"./slim-arrow-down-CgwBPz7g.js";import"./Input-CkfVEmR9.js";import"./ResponsivePopoverCommon.css-4fjWBy7h.js";import"./ValueStateMessage.css-BuVzQMo_.js";import"./Suggestions.css-CTEqZ7Jq.js";import"./ListBoxItemGroupTemplate-DSP_W8aI.js";import"./ComboBoxItemGroup-BT8bK6Wu.js";import"./ListItemBaseTemplate-cjvzi6zR.js";import"./Token-wBbWayB1.js";import"./ScrollEnablement-B6pFrG42.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BTQunUKa.js";import"./ToggleButton-D2MXehba.js";import"./SuggestionItem-Dj_zg9IL.js";import"./index-KKknYiyd.js";import"./Option-Cuq8HYx9.js";import"./index-dFGKlIjF.js";import"./SegmentedButton-f9AnvEva.js";import"./index-DScPGxep.js";import"./Select-DsO-cvnD.js";import"./InvisibleMessage-_ZcUiZFQ.js";import"./slim-arrow-down-Da8Aw9RY.js";import"./index-CvJI_k_L.js";import"./index-DCTt2WWj.js";import"./index-F4cfNB22.js";import"./IconDesign-DXd8PPVF.js";import"./filter-NSZF4DBT.js";import"./group-2-BG7X54j2.js";import"./sort-descending-DPBE9T3s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk4rB77W.js";import"./utils-BLvTxsGy.js";import"./index-D-r2RDzW.js";import"./index-DmcsvV0M.js";import"./index-C1JwcYBj.js";import"./navigation-down-arrow-CWO8eaa_.js";import"./navigation-right-arrow-BJ1HFNO9.js";import"./navigation-right-arrow-DPSwNoIQ.js";import"./useCurrentTheme-BOBJiUUr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-w3A3CH3e.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6kqfXmQ.js";import"./paper-plane-YrBXnPrz.js";import"./index-DkV1yrrg.js";import"./less-DrAkGCkV.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
