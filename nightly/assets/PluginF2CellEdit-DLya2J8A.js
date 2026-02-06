import{j as e}from"./iframe-D_72XrxV.js";import{useMDXComponents as o}from"./index-66RF5jzG.js";import{I as l,F as r}from"./CommandsAndQueries-B5MqblA3.js";import{M as a,C as c}from"./blocks-Cdh_AmAk.js";import"./Tag-FVV8VuJS.js";import"./index-CeLdj5R8.js";import"./copy-jn1S9mhy.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CDy71CRU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtHwk6MR.js";import"./index-B5YLKK6V.js";import"./index-DC83-RSZ.js";import"./Link-BEWshBTo.js";import"./index-DhXDNTqP.js";import"./index-CawoDp7x.js";import"./index-DXJ6eoJD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jUCNgYAQ.js";import"./addCustomCSSWithScoping-CVFgCYWk.js";import"./index-DkMaspDs.js";import"./information-C_2BZUqW.js";import"./sys-enter-2-C5Wnyt7l.js";import"./alert-CbokyiOI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Csj2HO8L.js";import"./delete-CeOcUIER.js";import"./settings-Cn5wwyPF.js";import"./NoData-PopUoBYo.js";import"./IllustratedMessage-DZ41JI5v.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CTXQ89WT.js";import"./index-Bu9F4FMc.js";import"./index-BXLU2QyI.js";import"./slim-arrow-down-4pwOw1KN.js";import"./Input-ctWP6EpA.js";import"./ResponsivePopoverCommon.css-CXO0egQQ.js";import"./ValueStateMessage.css-BtHvb9Z3.js";import"./Suggestions.css-Dcnh6jB1.js";import"./ListBoxItemGroupTemplate-DHFu76gC.js";import"./ComboBoxItemGroup-CZO-aXf1.js";import"./ListItemBaseTemplate-DCTXILqJ.js";import"./Token-CAt0kzvm.js";import"./ScrollEnablement-yQTiHpLV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DNgCtY9E.js";import"./ToggleButton-BNhJm5oM.js";import"./SuggestionItem-B4SVsFoO.js";import"./index-BXyhN-98.js";import"./Option-BNEZgQiG.js";import"./index-CQ46V3BB.js";import"./SegmentedButton-BDhAyQvz.js";import"./index-Cz4hAL11.js";import"./Select-CdrF46G-.js";import"./InvisibleMessage-DtML4eYo.js";import"./slim-arrow-down-CwKrWZlT.js";import"./index-CGCbfSVl.js";import"./index-rD0q-lzh.js";import"./index-CeS7n61h.js";import"./index-DGCvl-Xm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BH8RStDa.js";import"./group-2-ep49yjAi.js";import"./sort-descending-DxUdn13J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZ2gbzTy.js";import"./utils-BWLKg-TT.js";import"./index-BHGBSUlQ.js";import"./index-GvIpKsjG.js";import"./index-5Qz0hHSk.js";import"./navigation-down-arrow-B9jvvqZn.js";import"./navigation-right-arrow-BfmQEaOh.js";import"./navigation-right-arrow-IOAC3A0T.js";import"./useCurrentTheme-B97NpVFX.js";import"./index-BUtpH4Q1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwZ1F38u.js";import"./paper-plane-Dv362znJ.js";import"./index-DPiIKAxE.js";import"./less-C7rJWOWo.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
