import{j as e}from"./iframe-BCLHYJgX.js";import{useMDXComponents as o}from"./index-6uEU24p4.js";import{I as l,F as r}from"./CommandsAndQueries-CO5L47ah.js";import{M as a,C as c}from"./blocks-Bs_XR2wS.js";import"./Tag-CyCEbX-5.js";import"./index-BaEPddIL.js";import"./copy-C8KGHNvK.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DD_BHl_O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cok_5_tC.js";import"./index-Cm3V18u1.js";import"./index-BK_ZHavx.js";import"./Link-Bn4h5ljW.js";import"./index-CCx-58F9.js";import"./index-Bu9oHGEl.js";import"./index-_pVZ4H5C.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DoVEwdyY.js";import"./addCustomCSSWithScoping-DNzt28js.js";import"./index-ryNQsvjz.js";import"./information-ddn69F5R.js";import"./sys-enter-2-Clp8AE05.js";import"./alert-bXCG-ij3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-7Zt1rPtU.js";import"./delete-DZ-sv9tn.js";import"./settings-DEZp58uU.js";import"./NoData-Bm6c65Rp.js";import"./IllustratedMessage-CpnLKog-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-0eiDXkdF.js";import"./index-DHFj9r2s.js";import"./index-CnUVMLwV.js";import"./slim-arrow-down-PQTwOB1y.js";import"./Input-CyIlmGcA.js";import"./ResponsivePopoverCommon.css-BG6tGGqw.js";import"./ValueStateMessage.css-CXTpMNNy.js";import"./Suggestions.css-Bad721NM.js";import"./ListBoxItemGroupTemplate-DHvQR70c.js";import"./ComboBoxItemGroup-Dv-3y-yt.js";import"./ListItemBaseTemplate-BybflgUy.js";import"./Token-C7Z0uXiZ.js";import"./ScrollEnablement-C_6ell_9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBy1q-np.js";import"./ToggleButton-Ch4ejuj2.js";import"./SuggestionItem-DOMiaiL4.js";import"./index-CsRnbpar.js";import"./Option-BM744F7n.js";import"./index-BKITVOdn.js";import"./SegmentedButton-BMBrktYn.js";import"./index-DgD7lXWr.js";import"./Select-CmILZVDu.js";import"./InvisibleMessage-DnmpScj3.js";import"./slim-arrow-down-DHuMktny.js";import"./index-BwWwsDip.js";import"./index-D0yr6pZg.js";import"./index-BPgVHXij.js";import"./index-P_S_jhxH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bn9RS1kX.js";import"./group-2-BYuBBp9R.js";import"./sort-descending-BJIWTPav.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlAPMqrc.js";import"./utils-BScKaUIi.js";import"./index-DY7zKARQ.js";import"./index-s-YoLh3T.js";import"./index-CLiMatz4.js";import"./navigation-down-arrow-B2J7F8t-.js";import"./navigation-right-arrow-ClWc3JFi.js";import"./navigation-right-arrow-CByHJpNk.js";import"./useCurrentTheme-BlqUDt0t.js";import"./index-DyAhltwy.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ByUnN_uG.js";import"./paper-plane-cWqe5jd6.js";import"./index-Oy3wJsZc.js";import"./less--DX0g4Ek.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
