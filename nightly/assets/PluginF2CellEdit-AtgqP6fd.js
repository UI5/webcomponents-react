import{j as e}from"./iframe-B-JB9Mrg.js";import{useMDXComponents as o}from"./index-C6ab_87c.js";import{I as r}from"./CommandsAndQueries-BMpPCtQI.js";import{M as l,C as a}from"./blocks-gUSy1z8f.js";import"./Tag-rJaILc04.js";import"./index-BUD8Dloj.js";import"./copy-B23uPwnI.js";import{F as c}from"./Footer-BoXWBFNs.js";import"./PageNotFound-DwjQIJMb.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DaNK7-Ll.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CUeYoLvN.js";import"./index-UGbMf_4Y.js";import"./index-4LdkJtv9.js";import"./index-BmSIhnsV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_QxycfjS.js";import"./addCustomCSSWithScoping-DBFLD3Dt.js";import"./index-BNovRndr.js";import"./index-CxXKp92D.js";import"./index-C_JAtQ1_.js";import"./information-Bvi5gDZ4.js";import"./sys-enter-2-CDMo7mQ9.js";import"./alert-B5324jWv.js";import"./index-COHIvdEC.js";import"./Illustrations-BGg5U59s.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Be6NOHlY.js";import"./delete-3GTPVXil.js";import"./settings-DtUWdw7m.js";import"./NoData-CqmmXc4T.js";import"./NoFilterResults-BnmI-198.js";import"./index-CseK5512.js";import"./IllustratedMessage-BE_dLy6F.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-XeWxte10.js";import"./Input-DVI6zxdj.js";import"./ResponsivePopoverCommon.css-BukAVbLV.js";import"./ValueStateMessage.css-BGkMAg00.js";import"./Suggestions.css-BOQhUGDm.js";import"./ListBoxItemGroupTemplate-B5f3QW-p.js";import"./ComboBoxItemGroup-BED3ASNR.js";import"./ListItemBaseTemplate-DLFTdIKJ.js";import"./Token-BrjbTrZO.js";import"./ScrollEnablement-5XSvrzux.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Mn8j4CUx.js";import"./ToggleButton--NP7uZ1N.js";import"./multiselect-all-BkqJOriD.js";import"./SuggestionItem-BB1hjhsG.js";import"./index-CYoovnFi.js";import"./Option-hbNFYygs.js";import"./index-CIOInWay.js";import"./SegmentedButton-BUxCVNIT.js";import"./index-DQsL7B1E.js";import"./Select-CbAKq5TP.js";import"./InvisibleMessage-DXutdx3u.js";import"./index-DSKzdah0.js";import"./index-BwU-fEzR.js";import"./index-BtRXlCJP.js";import"./index-Cm1_U4l_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClesWLLH.js";import"./group-2-ClxNwCtd.js";import"./sort-descending-ig1DIecm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrTPER5S.js";import"./utils-C0kltqQX.js";import"./index-DGnoGB6v.js";import"./index-BNBXaPeN.js";import"./index-BL0SVaRR.js";import"./navigation-down-arrow-C6vpMOiA.js";import"./navigation-right-arrow-C07xQ28g.js";import"./navigation-right-arrow-BIYn3DeP.js";import"./useCurrentTheme-CPkepCy-.js";import"./index-BvAhuiTe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClKF0kCB.js";import"./paper-plane-DQ_mbMQX.js";import"./index-BVwW0K7f.js";import"./less-BfR-USy3.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
