import{j as e}from"./iframe-Dy0Vcyg3.js";import{useMDXComponents as o}from"./index-D0O3WS9u.js";import{I as l,F as r}from"./CommandsAndQueries-BbCratpG.js";import{M as a,C as c}from"./blocks-DQpqsYLC.js";import"./Tag-DXMLJOuX.js";import"./index-nlWOetEC.js";import"./copy-BxlHwQsP.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CYHoBY8v.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMTL_1tu.js";import"./index-BRFe_2UD.js";import"./index-0ZDpj1Mu.js";import"./Link-DNkb161-.js";import"./index-DKPC3_SO.js";import"./index-D_r2NSA0.js";import"./index-C5s5hQAS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-01L-n9vL.js";import"./addCustomCSSWithScoping-nI6ifFmX.js";import"./index-DLHjFZTm.js";import"./information-BWURtjFA.js";import"./sys-enter-2-D7LiZd3_.js";import"./alert-CoPtJvs8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-dkAXnipr.js";import"./delete-BYhpf2jF.js";import"./settings-BZhNQSdh.js";import"./NoData-BOK9z97z.js";import"./IllustratedMessage-BJD0KkWB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-lmbuGEH-.js";import"./index-DzrRbZFE.js";import"./index-De6Jkvg9.js";import"./slim-arrow-down-KQetxSCA.js";import"./Input-DUm1g3II.js";import"./ResponsivePopoverCommon.css-0gtwTwlc.js";import"./ValueStateMessage.css-CqzpiX8G.js";import"./Suggestions.css-C-TebQWZ.js";import"./ListBoxItemGroupTemplate-Bao4syhQ.js";import"./ComboBoxItemGroup-sVlirqx1.js";import"./ListItemBaseTemplate-BQNNSgaC.js";import"./Token-DRKQmCcw.js";import"./ScrollEnablement-Ba4Wf0S8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-QXpolB0M.js";import"./ToggleButton-wPcmOR8q.js";import"./SuggestionItem-u0isYGwD.js";import"./index-BE5XNI17.js";import"./Option-DURHFvsu.js";import"./index-Dn60_PGH.js";import"./SegmentedButton--YNa3vua.js";import"./index-D3ZVC3jU.js";import"./Select-DjzM7l1z.js";import"./InvisibleMessage-DOS3eHIH.js";import"./slim-arrow-down-tdJshJ_8.js";import"./index-B6XxYOg-.js";import"./index-DihO4jCR.js";import"./index-zvcZ-4bx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6frFTFpf.js";import"./group-2-Yb8lcurx.js";import"./sort-descending-B0xSjoj0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UQjpo2rY.js";import"./utils-_2mEl_F_.js";import"./index-XYGDqR0-.js";import"./index-B8bpeD_U.js";import"./index-DA4_n7ku.js";import"./navigation-down-arrow-C202Rycb.js";import"./navigation-right-arrow-CK8BM-ml.js";import"./navigation-right-arrow-DGzC3PDm.js";import"./useCurrentTheme-ljABpVn3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DfUhPIiB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-GvvBhc-H.js";import"./paper-plane-DxCnK-Wp.js";import"./index-DyLYJM1Y.js";import"./less-L4Koo52C.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
