import{j as e}from"./iframe-CqyMw63j.js";import{useMDXComponents as o}from"./index-GHxgs1Oh.js";import{I as l,F as r}from"./CommandsAndQueries-Ckqtj5q6.js";import{M as a,C as c}from"./blocks-gNAN3wnS.js";import"./Tag-9sg0d6U8.js";import"./index-DZeMBOtb.js";import"./copy-CygH_bff.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-VpVdQnD5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ccu9AWNy.js";import"./index-CyG-uGBl.js";import"./index-CRtLMoP1.js";import"./Link-8hzPxLpd.js";import"./index-B8X3UXQy.js";import"./index-DqKKFvdB.js";import"./index-CEokL_Ra.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hBi7rm2H.js";import"./addCustomCSSWithScoping-C9ZUc-46.js";import"./index-fW-mpTRV.js";import"./information-B-SB47kj.js";import"./sys-enter-2-8wJJb_fs.js";import"./alert-DS7w9_j5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BrgeZPp4.js";import"./delete-D9-ge-rM.js";import"./settings-cGyMTSk-.js";import"./NoData-xKoSmblb.js";import"./IllustratedMessage-BCxnQs3b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Ce8Tfk62.js";import"./index-LdWS7TCa.js";import"./index-DIUizzAk.js";import"./slim-arrow-down-D-ZUvWXK.js";import"./Input-BOVuOoq4.js";import"./ResponsivePopoverCommon.css-17WbdJEp.js";import"./ValueStateMessage.css-DVx3cVXN.js";import"./Suggestions.css-C_lAbcHi.js";import"./ListBoxItemGroupTemplate-CPI18sru.js";import"./ComboBoxItemGroup-CwJsZ4Zp.js";import"./ListItemBaseTemplate-CVZqI9dc.js";import"./Token-C7-_a1HK.js";import"./ScrollEnablement-BwuxTfsa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C-NVnbST.js";import"./ToggleButton-CyG3PucO.js";import"./SuggestionItem-LjByQWOY.js";import"./index-BA70ykXq.js";import"./Option-DOo6z9Dp.js";import"./index-DsjEg4fj.js";import"./SegmentedButton-Bx24Atny.js";import"./index-BvrBc5_J.js";import"./Select-Xhunz0DK.js";import"./InvisibleMessage-BX0MFDY5.js";import"./slim-arrow-down-x1-wAbSu.js";import"./index-rkzVTVvZ.js";import"./index-BSkVtYZm.js";import"./index-uyWLtESg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-39_bl0se.js";import"./group-2-DTudhwRg.js";import"./sort-descending-d65eGOj2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7A2D9qJE.js";import"./utils-D3iBktXL.js";import"./index-_WcNH8h5.js";import"./index-4BLCxvrL.js";import"./index-By6IU_b1.js";import"./navigation-down-arrow-BhNxTQs3.js";import"./navigation-right-arrow-7IyEfa1Z.js";import"./navigation-right-arrow-D0FoUvYd.js";import"./useCurrentTheme-CPkJtYyP.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C4qlmx2T.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DGuc5LLn.js";import"./paper-plane-DpFQXuCc.js";import"./index-BbbdvkN_.js";import"./less-DyBbCAMz.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
