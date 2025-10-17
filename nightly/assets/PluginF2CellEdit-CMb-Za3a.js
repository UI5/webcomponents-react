import{j as e}from"./iframe-CYi73OmP.js";import{useMDXComponents as o}from"./index-Dt90fsaF.js";import{I as l,F as r}from"./CommandsAndQueries-BrIX07He.js";import{M as a,C as c}from"./blocks-vDcvm_c-.js";import"./Tag-CriFgWmH.js";import"./index-BBMPc3L0.js";import"./copy-LPsKpGQA.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CnnPd9hw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HYZOU_1D.js";import"./index-CZYlbhmv.js";import"./index-C4wC4Ofz.js";import"./Link-CjT6BL8J.js";import"./index-BbTynw39.js";import"./index-KAzf1qB6.js";import"./index-BaDKwi6p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWMkLVHm.js";import"./addCustomCSSWithScoping-COZN1IbI.js";import"./index-BTCXnKhc.js";import"./information-C2FlC8X_.js";import"./sys-enter-2-DuV3U0aL.js";import"./alert-CP7qxv0u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxYW60hZ.js";import"./delete-xFbi_-wC.js";import"./settings-0opYo2Jr.js";import"./NoData-sI1XyAen.js";import"./IllustratedMessage-CHhSpY83.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-4sLj_wxI.js";import"./index-E4itPGQP.js";import"./index-C10zcdB8.js";import"./slim-arrow-down-D0SdHrd1.js";import"./Input-CkTLFzaW.js";import"./ResponsivePopoverCommon.css-B7aCnJ_6.js";import"./ValueStateMessage.css-Kd5nnHFH.js";import"./Suggestions.css-eFUrfSNb.js";import"./ListBoxItemGroupTemplate-BSgwyZvo.js";import"./ComboBoxItemGroup-DSrVKCES.js";import"./ListItemBaseTemplate-iYm3fW7D.js";import"./Token-fT8TuGWc.js";import"./ScrollEnablement-CMSiyGPr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DvFHooIN.js";import"./ToggleButton-M9DFkWHO.js";import"./SuggestionItem-XxFpxKzR.js";import"./index-CJYGPrkA.js";import"./Option-RzwHVxqI.js";import"./index-C4WCFPR-.js";import"./SegmentedButton-BUOZ4yCF.js";import"./index-DHGFCFdp.js";import"./Select-DjRpqOSl.js";import"./InvisibleMessage-k37olEit.js";import"./slim-arrow-down-B-WSvZWG.js";import"./index-D0BFqai2.js";import"./index-BquyjLBw.js";import"./index-DzRfQBko.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6hcRg8y.js";import"./group-2-9hVkaIla.js";import"./sort-descending-BOaZ_83J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bbj4khLj.js";import"./utils-DFJ-XhsT.js";import"./index-CmHQyBLd.js";import"./index-DwCYZdGU.js";import"./index-CYe6Ma7u.js";import"./navigation-down-arrow-D9GAp0iJ.js";import"./navigation-right-arrow-BXBiRuUx.js";import"./navigation-right-arrow-BQc2k2m7.js";import"./useCurrentTheme-B3JSS_WV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-COBLEdDa.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CF7dzU0W.js";import"./paper-plane-Bv6M5PcU.js";import"./index-CtRWkyeb.js";import"./less-D2zQaX4u.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
