import{j as e}from"./iframe-BeAHz6cC.js";import{useMDXComponents as o}from"./index-IuDgzHrg.js";import{I as l,F as r}from"./CommandsAndQueries-D97dtm9O.js";import{M as a,C as c}from"./blocks-BFIGDLi7.js";import"./Tag-D9qmbNXw.js";import"./index-BxL3HTx3.js";import"./copy-CeLNiPKq.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bef49mXS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cz53yeIo.js";import"./index-BJX7RQS4.js";import"./index-DADITnZh.js";import"./Link-DcHF9WJI.js";import"./index-B-C-Jm2N.js";import"./index-BgUv4ZgK.js";import"./index-dtYUUSxT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0TPubq3.js";import"./addCustomCSSWithScoping--2mgu3TN.js";import"./index-D74mYq85.js";import"./information-CKz_vH8g.js";import"./sys-enter-2-DjAoJc05.js";import"./alert-DbaxRKJL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYfsnrA-.js";import"./delete-BbZcD_Jy.js";import"./settings-B-7ACuFB.js";import"./NoData-DRgLX-o5.js";import"./IllustratedMessage-C5En4lhQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-0Ax5XtPu.js";import"./index-mMXt2Ig4.js";import"./index-BPce1aTx.js";import"./slim-arrow-down-CnwrFvZs.js";import"./Input-C1KpoHfz.js";import"./ResponsivePopoverCommon.css-DmlFnob0.js";import"./ValueStateMessage.css-DKcV5GT7.js";import"./Suggestions.css--wo_Z0Zb.js";import"./ListBoxItemGroupTemplate-Cg8nSs_y.js";import"./ComboBoxItemGroup-CACE9fiW.js";import"./ListItemBaseTemplate-SOqbHsMM.js";import"./Token-CPys-ICN.js";import"./ScrollEnablement-SmS2scF8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkxzzqLh.js";import"./ToggleButton-B1-jynwA.js";import"./SuggestionItem-DiIPrr67.js";import"./index-DFLqYco2.js";import"./Option-BP8-vTtd.js";import"./index-B86j6xyl.js";import"./SegmentedButton-CETefqCy.js";import"./index-r7IiC7sj.js";import"./Select-BJKmcwBb.js";import"./InvisibleMessage-BniauCX7.js";import"./slim-arrow-down-C6Y9ZcYg.js";import"./index-D6yRflfZ.js";import"./index-BfCFP5Is.js";import"./index-C6jXAYSN.js";import"./index-CvVdNUDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zo7K4tca.js";import"./group-2-BBGAdkSh.js";import"./sort-descending-C3RNb67b.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CGI_tmay.js";import"./utils-tfYvJxoP.js";import"./index-Dat5JbHB.js";import"./index-6ACe6tc9.js";import"./index-2vVJU3bI.js";import"./navigation-down-arrow-BZ4wl1wA.js";import"./navigation-right-arrow-DXJ8hwha.js";import"./navigation-right-arrow-C_x6dcVg.js";import"./useCurrentTheme-BmXY1mLX.js";import"./index-Be9aI4hM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DunOEBQz.js";import"./paper-plane-DZNu3P2r.js";import"./index-4NHwF18G.js";import"./less-GlUFt5eG.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
