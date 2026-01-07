import{j as e}from"./iframe-datodc_T.js";import{useMDXComponents as o}from"./index-c_OJYfdv.js";import{I as l,F as r}from"./CommandsAndQueries-9K4be_0B.js";import{M as a,C as c}from"./blocks-C83taKT5.js";import"./Tag-aYNaIA2f.js";import"./index-BxYLcFT1.js";import"./copy-fv_X0Lju.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BaM2_rwk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaqpJvlq.js";import"./index-D2t_qzWG.js";import"./index-DHA5QYCq.js";import"./Link-CguLCm0R.js";import"./index-Dsm5uoLy.js";import"./index-Be6r5cNn.js";import"./index-D6USDY88.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpNALNgF.js";import"./addCustomCSSWithScoping-DKvV4UVz.js";import"./index-CjE0y9ul.js";import"./information-BVFOZm1x.js";import"./sys-enter-2-D-jHJs9Q.js";import"./alert-Bayru5wq.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CAzHk7rR.js";import"./delete-DXGxUBFJ.js";import"./settings-CnIM11gG.js";import"./NoData-Bg_nN4Ms.js";import"./IllustratedMessage-FAiLLqQm.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-C_Ze1Ot5.js";import"./index-DL49zsqR.js";import"./index-Dm0QMFQr.js";import"./slim-arrow-down-BpOTE9Sk.js";import"./Input-CDJ2DRSv.js";import"./ResponsivePopoverCommon.css-DAKPNunD.js";import"./ValueStateMessage.css-CEIz9T_f.js";import"./Suggestions.css-ChFuC62o.js";import"./ListBoxItemGroupTemplate-xCqQRAqq.js";import"./ComboBoxItemGroup-BQPgaauk.js";import"./ListItemBaseTemplate-BzV0IEmk.js";import"./Token-CJyx5jqh.js";import"./ScrollEnablement-D4RYTcKh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6D8woMn.js";import"./ToggleButton-BVZwG_x-.js";import"./SuggestionItem-CqDeh5_U.js";import"./index-CbCR8boR.js";import"./Option-CVMzB-n9.js";import"./index-D9bgmN4m.js";import"./SegmentedButton-CtnCASEY.js";import"./index-DZXo1Lf-.js";import"./Select-K4JlHpwq.js";import"./InvisibleMessage-DefiGhym.js";import"./slim-arrow-down-CHOtDAsV.js";import"./index-DREcmMyl.js";import"./index-CeAFf5ct.js";import"./index-BcGlK5zk.js";import"./index-C_9-hdCb.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BPHKdgmP.js";import"./group-2-BVTcmh9u.js";import"./sort-descending-COPXAaLI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-FSQedhzd.js";import"./utils-CpZ624O0.js";import"./index-Bxul-iwv.js";import"./index-aiYgqcNK.js";import"./index-BN9iyOuA.js";import"./navigation-down-arrow-BZsH8zxo.js";import"./navigation-right-arrow-S8XLmecj.js";import"./navigation-right-arrow-9AFNUP8t.js";import"./useCurrentTheme-D5sOw72D.js";import"./index-nqz7Kjs0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csf7JH7H.js";import"./paper-plane-Dsk0svE7.js";import"./index-DLlxXcZX.js";import"./less-DpRUb2Cv.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
