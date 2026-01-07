import{j as e}from"./iframe-CfxMerL-.js";import{useMDXComponents as o}from"./index-VbSVpo3U.js";import{I as l,F as r}from"./CommandsAndQueries-Dg2B8ke5.js";import{M as a,C as c}from"./blocks-MJ_5uOZ-.js";import"./Tag-BNqMWY4P.js";import"./index-BI2nwMUJ.js";import"./copy-B6ViSnKB.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B_Wpf4B4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DP6bCfzy.js";import"./index-IP6CGDwM.js";import"./index-BYZXhHpQ.js";import"./Link-BitnWoH9.js";import"./index-BTQ4bVGw.js";import"./index-DTz3tRU0.js";import"./index-DjUM5b1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC5ToBw2.js";import"./addCustomCSSWithScoping-El6BaIIi.js";import"./index-B0xbheog.js";import"./information-V-ZI-MUr.js";import"./sys-enter-2-BPqtZ6Ae.js";import"./alert-BY-nhKm6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BsCEz7ib.js";import"./delete-D7RS9M-y.js";import"./settings-DEtPc8Wj.js";import"./NoData-B_-T5WI3.js";import"./IllustratedMessage-BZNw5Wiu.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BnYjPhI7.js";import"./index-bif26s3P.js";import"./index-Cwf7lSCC.js";import"./slim-arrow-down-d9rX3ebS.js";import"./Input-D3np0nF3.js";import"./ResponsivePopoverCommon.css-DjynAZOg.js";import"./ValueStateMessage.css-DkCKabc6.js";import"./Suggestions.css-MQWeG9TG.js";import"./ListBoxItemGroupTemplate-CM5NZpBA.js";import"./ComboBoxItemGroup-BrUfLYBK.js";import"./ListItemBaseTemplate-Cy-PquU_.js";import"./Token-ne2P8_To.js";import"./ScrollEnablement-ziMxJENG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BVYApwgA.js";import"./ToggleButton-BZRyXu7G.js";import"./SuggestionItem-BlVIKvF5.js";import"./index-BAwfKYgr.js";import"./Option-C1QKLt8h.js";import"./index-HY2ZsT1u.js";import"./SegmentedButton-B1Kk8DVS.js";import"./index-4mdijd2N.js";import"./Select-kSz6MKWU.js";import"./InvisibleMessage-et9yvTH3.js";import"./slim-arrow-down-Dqgy0Zme.js";import"./index-D8Qeadr9.js";import"./index-ri-WXBZU.js";import"./index-BKIcMWwD.js";import"./index-Cr9UVhXj.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Btv3_sW8.js";import"./group-2-nZBOHX9Q.js";import"./sort-descending-BSyKh4wL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFTNZfH.js";import"./utils-DGabngUu.js";import"./index-BRkWBZ5K.js";import"./index-CHJ4GtUC.js";import"./index-BPqtDCmb.js";import"./navigation-down-arrow-7qCnXGQg.js";import"./navigation-right-arrow-BsRz9Oss.js";import"./navigation-right-arrow-B0sX5CVs.js";import"./useCurrentTheme-BhGBafEw.js";import"./index-C5nYMhvF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1OO3TS9.js";import"./paper-plane-CwGGMTBs.js";import"./index-BAq-T-Uj.js";import"./less-DABYie6s.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
