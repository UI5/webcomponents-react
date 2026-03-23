import{j as e}from"./iframe-a0uMhM0K.js";import{useMDXComponents as o}from"./index-BsqnGYZV.js";import{I as r}from"./CommandsAndQueries-Daj0tnDY.js";import{M as l,C as a}from"./blocks-GWXZJNmq.js";import"./Tag-BaNCkHdE.js";import"./index-BfgNdjah.js";import"./copy-Ba79n2H6.js";import{F as c}from"./Footer-UprvpWI8.js";import"./PageNotFound-C4t5kuHt.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-YpZ0GhC2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C9XRs14a.js";import"./index-BwlpwmJL.js";import"./index-1tRSjVgF.js";import"./index-CSZ4nu-Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-F25ehqhC.js";import"./addCustomCSSWithScoping-DssrUnNY.js";import"./index-BsmCDa7r.js";import"./index-CqObD5eZ.js";import"./index-C3E6FzVb.js";import"./information-DnAoFJ5t.js";import"./sys-enter-2-DG20pJAR.js";import"./alert-CaXXBJy4.js";import"./index-Dk4guAK8.js";import"./Illustrations-Do7SV7fL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DI7as0nc.js";import"./delete-CHUFQ_Wx.js";import"./settings-0W4GYaRC.js";import"./NoData-C84zCcIQ.js";import"./NoFilterResults-CalnQnoH.js";import"./index-C3VG9dWs.js";import"./IllustratedMessage-6HZ5lnOp.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CQrOQkiM.js";import"./Input-cpApaPQM.js";import"./ResponsivePopoverCommon.css-CmTsDlHw.js";import"./ValueStateMessage.css-BRKXcIHj.js";import"./Suggestions.css-COVTnGJE.js";import"./ListBoxItemGroupTemplate-BmSBtRf2.js";import"./ComboBoxItemGroup-B5J72oZn.js";import"./ListItemBaseTemplate-Bvq28n1p.js";import"./Token-BTe6Dqe3.js";import"./ScrollEnablement-BVy3cq7b.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B1cxGoSI.js";import"./ToggleButton-CDAZTyeN.js";import"./multiselect-all-BBXS-Ub9.js";import"./SuggestionItem-_JxlPU60.js";import"./index-D9Od-yF4.js";import"./Option-BcWQble4.js";import"./index-CO9KWXos.js";import"./SegmentedButton-BBAnOIL_.js";import"./index-aqjhKmIi.js";import"./Select-Dh14rH5k.js";import"./InvisibleMessage-izuFC8Iy.js";import"./index-BLYN_WbG.js";import"./index-yNBIcJ04.js";import"./index-DELXSaBp.js";import"./index-CDAiDCq4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BceI_bVx.js";import"./group-2-Dc2Sp64W.js";import"./sort-descending-uLy3-9KR.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DsvBCAhC.js";import"./utils-CPpPlE2x.js";import"./index-DsURjSQ9.js";import"./index-Cma-sbNZ.js";import"./index-C-nOKAHu.js";import"./navigation-down-arrow-KRMhOoWK.js";import"./navigation-right-arrow-DlOUO2TW.js";import"./navigation-right-arrow-DE4TJjHn.js";import"./useCurrentTheme-Bd3jJx1F.js";import"./index-BuPDweMG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-9TsxZjtE.js";import"./paper-plane-B5upeV1m.js";import"./index-BD5Z38ff.js";import"./less-DeRh0NtQ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
