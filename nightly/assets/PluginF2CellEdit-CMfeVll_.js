import{j as e}from"./iframe-DM8isA9c.js";import{useMDXComponents as o}from"./index-Do0cpSGj.js";import{I as l,F as r}from"./CommandsAndQueries-DM-8oq2s.js";import{M as a,C as c}from"./blocks-Crph7jgT.js";import"./Tag-BtR3uqsq.js";import"./index-BgbeFss3.js";import"./copy-DYIgCYkz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BU0X1VDJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C6UNmCtN.js";import"./index-BS8NgEfP.js";import"./index-FrVWogAp.js";import"./Link-j0sjRyW5.js";import"./index-B6NdOyDM.js";import"./index-Cf1wRWYr.js";import"./index-ozpDTdfP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9ZULNfD.js";import"./addCustomCSSWithScoping-AinZnCKl.js";import"./index-CNSbSmbI.js";import"./information-CLqibrfC.js";import"./sys-enter-2-COJQOFoX.js";import"./alert-WVpRlSFd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2oOM7FJV.js";import"./delete-DcA4Uhw4.js";import"./settings-BA2hgRK4.js";import"./NoData-ARVnaWFR.js";import"./IllustratedMessage-vNT1f4yz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BGQgzr7m.js";import"./index-Dy3LU6ky.js";import"./index-DHTTyH85.js";import"./slim-arrow-down-hG7sSDos.js";import"./Input-CVhk_ZAS.js";import"./ResponsivePopoverCommon.css-puXN3fh5.js";import"./ValueStateMessage.css-C0V4czBQ.js";import"./Suggestions.css-BYf_LmQ1.js";import"./ListBoxItemGroupTemplate-5cmjEtes.js";import"./ComboBoxItemGroup-Bv2u3bQ7.js";import"./ListItemBaseTemplate-TRbY2fc8.js";import"./Token-BPCkJQrI.js";import"./ScrollEnablement-UWaMLi5d.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-I6nsPbjR.js";import"./ToggleButton-Vr7STsGZ.js";import"./SuggestionItem-BbXDukLp.js";import"./index-NSnuf4-P.js";import"./Option-CQJiT04F.js";import"./index-BX4ZAVg2.js";import"./SegmentedButton-B4cfzXrG.js";import"./index-BQBBMnNM.js";import"./Select-NIzcg6U7.js";import"./InvisibleMessage-BSV5Kw4P.js";import"./slim-arrow-down-C4n1wmA7.js";import"./index-C87A-yQY.js";import"./index-DQMuxlK5.js";import"./index-DoaqSk9p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ieaXo1Jb.js";import"./group-2-CSOTY4tP.js";import"./sort-descending-DzANS_Yh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLiaJqlG.js";import"./utils-BnZETQEG.js";import"./index-C--tGAzN.js";import"./index-D5piz367.js";import"./index-BrgcTCqT.js";import"./navigation-down-arrow-CbZ1RQpJ.js";import"./navigation-right-arrow-C5TkdaxP.js";import"./navigation-right-arrow-DJCwyzqc.js";import"./useCurrentTheme-goNF4eXV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWyu-On_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CBtcGSGo.js";import"./paper-plane-DPYcr-IO.js";import"./index-l9sIIys5.js";import"./less-BmrMRYds.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
