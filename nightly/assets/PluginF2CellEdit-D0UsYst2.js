import{j as e}from"./iframe-CqyRxNKY.js";import{useMDXComponents as o}from"./index-CXuCYMlQ.js";import{I as l,F as r}from"./CommandsAndQueries-DLVKRV5D.js";import{M as a,C as c}from"./blocks-05z5mbmD.js";import"./Tag-DuSXABBC.js";import"./index-C2IzZWSs.js";import"./copy-B4Tt60gX.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CBm2X1QF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-H9dUlo5Q.js";import"./index-BseYaHXw.js";import"./index-4M_RVJJe.js";import"./Link-CXMFuXBh.js";import"./index-DzGBN3np.js";import"./index-CcSvXznG.js";import"./index-CwxFUtHh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bdq0yBwh.js";import"./addCustomCSSWithScoping-Bi_7urmM.js";import"./index-BymRtllO.js";import"./information-Ezgcqzkg.js";import"./sys-enter-2-5MMglnM6.js";import"./alert-BAouMQ7q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BuNqlAjt.js";import"./delete-BbGK1u87.js";import"./settings-DIlRpxvA.js";import"./NoData-BxK7Pf7G.js";import"./IllustratedMessage-DT058xfx.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-kuqPc1vX.js";import"./index-BM2t6dv5.js";import"./index-CorD3FCo.js";import"./slim-arrow-down-XrizyWJX.js";import"./Input-Btn3NqEP.js";import"./ResponsivePopoverCommon.css-BHPxlmcC.js";import"./ValueStateMessage.css-mCgjmZWa.js";import"./Suggestions.css-Ppn_4y7L.js";import"./ListBoxItemGroupTemplate-COFn4xTr.js";import"./ComboBoxItemGroup-BR6fMrLl.js";import"./ListItemBaseTemplate-DexxF4Wd.js";import"./Token-Dwa2qLYj.js";import"./ScrollEnablement-DWFfp1Ql.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDPTJ4VI.js";import"./ToggleButton-ChKD3yaL.js";import"./SuggestionItem-tcsJtTjM.js";import"./index-CLWuTNUb.js";import"./Option-CLygUspk.js";import"./index-BPBdqMTp.js";import"./SegmentedButton-DtCM4MtJ.js";import"./index-QLIu92PZ.js";import"./Select-CS7kvNev.js";import"./InvisibleMessage-fNBDK7S3.js";import"./slim-arrow-down-C6i4R0LO.js";import"./index-ByR0cNcw.js";import"./index-DGvdc7FV.js";import"./index-WMMIdr0v.js";import"./index-B3oIoIuT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CIu0BZu0.js";import"./group-2-iMc-Tv7m.js";import"./sort-descending-DV0fc1pJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-KnanNVk9.js";import"./utils-D28-Pdwf.js";import"./index-DLnOQir-.js";import"./index-xFlZ9F3z.js";import"./index-C-6D1Wpo.js";import"./navigation-down-arrow-BcxM96MS.js";import"./navigation-right-arrow-rjgI-qTH.js";import"./navigation-right-arrow-CLMRBwo6.js";import"./useCurrentTheme-CtkLN-hF.js";import"./index-B2kdW0ae.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVxv5eSK.js";import"./paper-plane-DMN-jmcN.js";import"./index-TNQ5kc5_.js";import"./less-CvdXbD0I.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
