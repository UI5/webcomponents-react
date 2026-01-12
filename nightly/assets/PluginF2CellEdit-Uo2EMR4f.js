import{j as e}from"./iframe-B3T0Oj7B.js";import{useMDXComponents as o}from"./index-D3UxDze4.js";import{I as l,F as r}from"./CommandsAndQueries-DvsDK9ZB.js";import{M as a,C as c}from"./blocks-CyPgi3fl.js";import"./Tag-BebiXErc.js";import"./index-dJAxIfZY.js";import"./copy-_Qj_KEfj.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CLdVk_2J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D37akpKi.js";import"./index-B8hvCU9O.js";import"./index-BctJwJOg.js";import"./Link-Bk4EX_BP.js";import"./index-Bik-cKeX.js";import"./index-D_qT_Ogl.js";import"./index-CpVd5OAx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVuzLNiB.js";import"./addCustomCSSWithScoping-BR9GACjU.js";import"./index-BywqBC1y.js";import"./information-CDiFrRjk.js";import"./sys-enter-2-CspjHMoa.js";import"./alert-BsEVUmBp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXXzDXeg.js";import"./delete-DoH2BMDU.js";import"./settings-D4LWYr7c.js";import"./NoData-DPlWgMdh.js";import"./IllustratedMessage-CTn70Kkd.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B5oTX081.js";import"./index-D_ervA3L.js";import"./index-BUUNpLyt.js";import"./slim-arrow-down-CacMbODe.js";import"./Input-B0UijuIu.js";import"./ResponsivePopoverCommon.css-Dq6Kf127.js";import"./ValueStateMessage.css-BCQWXayY.js";import"./Suggestions.css-Dh9vGknx.js";import"./ListBoxItemGroupTemplate-BF1ZMdMn.js";import"./ComboBoxItemGroup-Dpv9BmJs.js";import"./ListItemBaseTemplate-BJJTqK00.js";import"./Token-kg9GxVv1.js";import"./ScrollEnablement-CfYd06M2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFRLr_io.js";import"./ToggleButton-MEuIik9w.js";import"./SuggestionItem-Bh2xAfSB.js";import"./index-CmMlZf5u.js";import"./Option-B57NkkPv.js";import"./index-DSYwj30z.js";import"./SegmentedButton-COs6qsY4.js";import"./index-DjcU9zEx.js";import"./Select-g-D7vPwS.js";import"./InvisibleMessage-CAuS8-0Y.js";import"./slim-arrow-down-tnJadlmU.js";import"./index-18Hv_f08.js";import"./index-Bg2b-U4S.js";import"./index-CxcnGbRu.js";import"./index-4zbN5094.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zPNv8kbn.js";import"./group-2-CVriVckM.js";import"./sort-descending-BXBa6N4F.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cddj7KtI.js";import"./utils-BEKiXHya.js";import"./index-DXpg7xk7.js";import"./index-BDmNg7zx.js";import"./index-DhFaY-S7.js";import"./navigation-down-arrow-Crva_6Xt.js";import"./navigation-right-arrow-CzyBM415.js";import"./navigation-right-arrow-DCKCZfxz.js";import"./useCurrentTheme-eSQOFi4m.js";import"./index-zGZbQuqh.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BlmVpLoY.js";import"./paper-plane-CR0-psxw.js";import"./index-DhLMwIyh.js";import"./less-DTZtCal7.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
