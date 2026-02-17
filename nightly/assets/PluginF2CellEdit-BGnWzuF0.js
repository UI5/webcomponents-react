import{j as e}from"./iframe-Cs-5LFqP.js";import{useMDXComponents as o}from"./index-4_wYEVSM.js";import{I as l,F as r}from"./CommandsAndQueries-pWQonQL4.js";import{M as a,C as c}from"./blocks-Ml05RtQw.js";import"./Tag-ChHbpWGO.js";import"./index-Bj7p5WqA.js";import"./copy-DN4ABQ_i.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DLd06CvB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tt3zNDS3.js";import"./index-DkXjtxgK.js";import"./index-B7_af3sB.js";import"./Link-DZfJcWGy.js";import"./index-k6loN7up.js";import"./index-CHkORph3.js";import"./index-CmIMKxCO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Oma2N1kf.js";import"./addCustomCSSWithScoping-BCQiyr6x.js";import"./index-BUJAXr9p.js";import"./information-CG8AIpkm.js";import"./sys-enter-2-DunLLOB1.js";import"./alert-IqDG9ylo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CS-8nJYw.js";import"./delete-CLlnG484.js";import"./settings-envYxgNe.js";import"./NoData-MpM1Hboz.js";import"./IllustratedMessage-XiOi_O98.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CjSiJYQm.js";import"./index-Dkiu8AdL.js";import"./index-C0ZKe89Q.js";import"./slim-arrow-down-BP1y9etM.js";import"./Input-1lNxvEmx.js";import"./ResponsivePopoverCommon.css-Dby6EGP2.js";import"./ValueStateMessage.css-CRvqrXXK.js";import"./Suggestions.css-BOY3IfAD.js";import"./ListBoxItemGroupTemplate-r8OAnwHN.js";import"./ComboBoxItemGroup-B3ytlzdg.js";import"./ListItemBaseTemplate-D4Nb1LoU.js";import"./Token-DcgVtbgs.js";import"./ScrollEnablement-GTlRH6tE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DxclopY-.js";import"./ToggleButton-QtBZvedq.js";import"./SuggestionItem-D5nxLtbB.js";import"./index-Tx9ELn6M.js";import"./Option-CoAxKOIy.js";import"./index-y6qVrFsN.js";import"./SegmentedButton-xuXIvZlA.js";import"./index-BIsBvoOA.js";import"./Select-BEsYKhUS.js";import"./InvisibleMessage-CFCay4kG.js";import"./slim-arrow-down-Bbv1i9W9.js";import"./index-T4Qk8jiD.js";import"./index-plyixF0d.js";import"./index-DsJZZm7i.js";import"./index-h8anB-3B.js";import"./IconDesign-DXd8PPVF.js";import"./filter-TDf9rbaD.js";import"./group-2-BvoDnCtF.js";import"./sort-descending-FS751uDv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D06_Ki1H.js";import"./utils-C4L1GQet.js";import"./index-DuIEmgl0.js";import"./index-DD9TQMUS.js";import"./index-D8PWKVzq.js";import"./navigation-down-arrow-BLqwS3WT.js";import"./navigation-right-arrow-MiZu20cu.js";import"./navigation-right-arrow-mkQxvhCZ.js";import"./useCurrentTheme-Db8jJ0JU.js";import"./index-DPB7aPUP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DzZietn_.js";import"./paper-plane-CXGOFY1-.js";import"./index-C53XJ8_2.js";import"./less-bilrATQD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
