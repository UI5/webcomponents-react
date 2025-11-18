import{j as e}from"./iframe-B_Wb0L56.js";import{useMDXComponents as o}from"./index-307InIrT.js";import{I as l,F as r}from"./CommandsAndQueries-DZD1CEEu.js";import{M as a,C as c}from"./blocks-BG9i3u3d.js";import"./Tag-BJqa-9S6.js";import"./index-IQMTO30I.js";import"./copy-B8s392ic.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D2vA9uBw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1-6BxML.js";import"./index-CTXSjodk.js";import"./index-6_sfbhaU.js";import"./Link-mQObbT4s.js";import"./index-B6cUzUVp.js";import"./index-DKVx4eTx.js";import"./index-BzKebhUC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNNLg8qF.js";import"./addCustomCSSWithScoping-CLC5si1k.js";import"./index-DOJ9CtkL.js";import"./information-CNVdTL1g.js";import"./sys-enter-2-YeZbpBvt.js";import"./alert-BrJW2BAH.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D0ei0ZuD.js";import"./delete-yizw3Nd_.js";import"./settings-Z8JiUEHk.js";import"./NoData-BXXzYKHm.js";import"./IllustratedMessage-C-PTvkiQ.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Dl5aZcs3.js";import"./index-HqvTsmff.js";import"./index-DRaRyi79.js";import"./slim-arrow-down-C0o9FaNn.js";import"./Input-DOSA1gj5.js";import"./ResponsivePopoverCommon.css-Bv2xf9qt.js";import"./ValueStateMessage.css-0XZoqLsO.js";import"./Suggestions.css-DyTJTEQX.js";import"./ListBoxItemGroupTemplate-Dm-XJTSL.js";import"./ComboBoxItemGroup-BiM99Ixa.js";import"./ListItemBaseTemplate-D-PBqwpz.js";import"./Token-BHMMMhCD.js";import"./ScrollEnablement-CH2t3NPn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dko9W1lQ.js";import"./ToggleButton-CRq8bV8B.js";import"./SuggestionItem-8yq177mX.js";import"./index-DSsZL42Q.js";import"./Option-T3GgrmoY.js";import"./index-B3RRxnRL.js";import"./SegmentedButton-DUyioROv.js";import"./index-D5_ZfJ5N.js";import"./Select-Bf7b8VrB.js";import"./InvisibleMessage-D0Kxo4HB.js";import"./slim-arrow-down-DqloInc9.js";import"./index-DkWPeISK.js";import"./index-2TWARYFI.js";import"./index-744O76gW.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CobfnnXw.js";import"./group-2-DMZc4frg.js";import"./sort-descending-C8Z32LYO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BnfHDuuy.js";import"./utils-C8OSDLXz.js";import"./index-CaT9ZYZr.js";import"./index-Bq2hbA6h.js";import"./index-GUfgErK1.js";import"./navigation-down-arrow-CQ5WMHeX.js";import"./navigation-right-arrow-B7l-Sd1s.js";import"./navigation-right-arrow-mIKtPw9Z.js";import"./useCurrentTheme-D8exwLuJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BSVh1B3z.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7XnIEYeH.js";import"./paper-plane-C-rRvcez.js";import"./index-BplSwyVb.js";import"./less-Byci0Gnt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
