import{j as e}from"./iframe-BN0GWVQe.js";import{useMDXComponents as o}from"./index-BLbTpX55.js";import{I as l,F as r}from"./CommandsAndQueries-C4w7BIRn.js";import{M as a,C as c}from"./blocks-D3wn40tr.js";import"./Tag-CZAeCV6F.js";import"./index-Bxb5YZWP.js";import"./copy-B0NSZ-1k.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-7de-hSrh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEhXLrZk.js";import"./index-Dt-X_HjL.js";import"./index-BtPW2b7B.js";import"./Link-Br_XV4sE.js";import"./index-BqPBCR84.js";import"./index-BQ2VPUfC.js";import"./index-CGlofGT5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Du_vcu6e.js";import"./addCustomCSSWithScoping-D2hXBZmk.js";import"./index-BaX--um2.js";import"./information-b87QwzTv.js";import"./sys-enter-2-C5oyesud.js";import"./alert-DOWzv_2H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-BtNJyH.js";import"./delete-B-dRIfah.js";import"./settings-O_gAmrE7.js";import"./NoData-B6r5wtfr.js";import"./IllustratedMessage-CHylU20L.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BD6ty48g.js";import"./index-D6WGsm7x.js";import"./index-CS6KO8cx.js";import"./slim-arrow-down-xoHclsMi.js";import"./Input-BT1uTnSo.js";import"./ResponsivePopoverCommon.css-DtFcvyzi.js";import"./ValueStateMessage.css-DGbWuuCH.js";import"./Suggestions.css-BeDi0pBK.js";import"./ListBoxItemGroupTemplate-Dzhkqyak.js";import"./ComboBoxItemGroup-KbV6i136.js";import"./ListItemBaseTemplate-BfCP6G70.js";import"./Token-C1ZTtDz_.js";import"./ScrollEnablement-iDo916Z3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6-433jt.js";import"./ToggleButton-ybF8gCpz.js";import"./SuggestionItem-Bgm-HNu4.js";import"./index-DW2XUEdT.js";import"./Option-B9k-7Ahv.js";import"./index-D8K4Qq5D.js";import"./SegmentedButton-C7VWunBd.js";import"./index-DNhI0FWS.js";import"./Select-CJ0wONEr.js";import"./InvisibleMessage-CRMlkkCP.js";import"./slim-arrow-down-B5np2n8S.js";import"./index-C4H-ZzEe.js";import"./index-92cS-QUv.js";import"./index-D6tqan70.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEM9HxMz.js";import"./group-2-BMZwrYYd.js";import"./sort-descending-BlHz6r-B.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CsK0f-Ik.js";import"./utils-ChyEe21I.js";import"./index-Lp9IxDFm.js";import"./index-CojJHUo4.js";import"./index-DUZ2D5ri.js";import"./navigation-down-arrow-2gSQh0oE.js";import"./navigation-right-arrow-BLvXVY5g.js";import"./navigation-right-arrow-X8mU-9lc.js";import"./useCurrentTheme-BB3WFm2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-As2m_wDV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgYFYmB4.js";import"./paper-plane-vPmlwkwT.js";import"./index-B4Hn3DKa.js";import"./less-rqU1UIrN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
