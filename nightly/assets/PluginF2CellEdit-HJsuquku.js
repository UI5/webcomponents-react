import{j as e}from"./iframe-DDwr9UO6.js";import{useMDXComponents as o}from"./index-CQ-nOjPT.js";import{I as r}from"./CommandsAndQueries-CW-He0gJ.js";import{M as l,C as a}from"./blocks-4n5he8k4.js";import"./Tag-85Xc8Sa5.js";import"./index-Vbr96S-1.js";import"./copy-DiJyffUH.js";import{F as c}from"./Footer-DJ4mPzj6.js";import"./PageNotFound-4kcWV7p6.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D-XOdvyW.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ioSKjh9y.js";import"./index-BlO2ebQP.js";import"./index-DBFNlRvR.js";import"./index-DlsPhuqx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4AOINVU.js";import"./addCustomCSSWithScoping-BY1iD3uW.js";import"./index-BmgPGln0.js";import"./index-BubbpkEs.js";import"./index-CwOzyR0V.js";import"./information-B0DjFwsh.js";import"./sys-enter-2-CHn1eYD9.js";import"./alert-t6gJkZ57.js";import"./index-DJm0resn.js";import"./Illustrations-CKFjYZ6M.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DvrM5NOP.js";import"./delete-CnbCzWbj.js";import"./settings-Ch08yiWE.js";import"./NoData-4GIocKhd.js";import"./NoFilterResults-B4DPdeet.js";import"./index-D5xRes8S.js";import"./IllustratedMessage-DtlzznLL.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BXJwcQQG.js";import"./Input-DInMIBTe.js";import"./ResponsivePopoverCommon.css-DVrY-Ohc.js";import"./ValueStateMessage.css-CQmBeT7b.js";import"./Suggestions.css-BmvaYmek.js";import"./ListBoxItemGroupTemplate-B-K43gLI.js";import"./ComboBoxItemGroup-BqI4sbwM.js";import"./ListItemBaseTemplate-DYSR2mJj.js";import"./Token-DCciEgLN.js";import"./ScrollEnablement-BO8X0bLa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWTSAHcw.js";import"./ToggleButton-BHUbnu3Z.js";import"./multiselect-all-CImnb8qK.js";import"./SuggestionItem-D3aPEE1q.js";import"./index-DeIhhhj4.js";import"./Option-jQcbOOHD.js";import"./index-BVaMi0i5.js";import"./SegmentedButton-C5-qziHY.js";import"./index-BzOkRawL.js";import"./Select--m8ZPefa.js";import"./InvisibleMessage-DCXJk4rP.js";import"./index-BN3GamvY.js";import"./index-DcZRAYxL.js";import"./index-XVwKOOTJ.js";import"./index-CgeWzUMI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-lC1PAHmf.js";import"./group-2-Bthb7zJo.js";import"./sort-descending-C-K6Ysjt.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CnRGw2Cu.js";import"./utils-DxckeIWg.js";import"./index-BD_Jst0w.js";import"./index-JNC6BieY.js";import"./index-Cx1xQlOJ.js";import"./navigation-down-arrow-CJcOr1ZL.js";import"./navigation-right-arrow-CQs_7-hB.js";import"./navigation-right-arrow-DzRJQC_-.js";import"./useCurrentTheme-6r6M5Xd5.js";import"./index-CJWNtEi-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CL5Aty9r.js";import"./paper-plane-CQwjrpMY.js";import"./index-BO23DQR-.js";import"./less-DL-_Ursx.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
