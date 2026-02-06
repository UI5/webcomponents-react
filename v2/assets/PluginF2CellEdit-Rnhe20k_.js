import{j as e}from"./iframe-oB-4R5Rt.js";import{useMDXComponents as o}from"./index-CPM_KuJ1.js";import{I as l,F as r}from"./CommandsAndQueries-V7DYmci2.js";import{M as a,C as c}from"./blocks-BSJ2p1aB.js";import"./Tag-D-nP8Atk.js";import"./index-D9a9y2w1.js";import"./copy-BEsfMMdz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-4VAmKrJC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgFkqkoM.js";import"./index-ByTtsog6.js";import"./index-QtLlbt_o.js";import"./Link-DOQS5UBs.js";import"./index-CTKLJSsf.js";import"./index-DzeBy8FO.js";import"./index-CQQbQqNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1pBRLIk.js";import"./addCustomCSSWithScoping-Bfd00zUa.js";import"./index-BRbXVYQh.js";import"./information-BRyOdl2D.js";import"./sys-enter-2-DyCH1cMA.js";import"./alert-BVT2hG_8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B85Kwi0U.js";import"./delete-DTD52Dt-.js";import"./settings-C_n4xVXc.js";import"./NoData-Cl-2h7pm.js";import"./IllustratedMessage-0CeFZb1f.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-c6iHh6_s.js";import"./index-DAe_C3xM.js";import"./index-QijUrmH0.js";import"./slim-arrow-down-CXy1laZl.js";import"./Input-CmhKXc0K.js";import"./ResponsivePopoverCommon.css-BI55EcO7.js";import"./ValueStateMessage.css-BBVlRBqU.js";import"./Suggestions.css-hXMoKZOy.js";import"./ListBoxItemGroupTemplate-M1QDvz3X.js";import"./ComboBoxItemGroup-Bx9p2mC6.js";import"./ListItemBaseTemplate-Bah4nUE4.js";import"./Token-jwxYX-yd.js";import"./ScrollEnablement-oY_T1yvo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-IaHLS1HF.js";import"./ToggleButton-DY0lb3z6.js";import"./SuggestionItem-2gqz2T4s.js";import"./index-BWPeagQl.js";import"./Option-cV3MYBFS.js";import"./index-BzBis61R.js";import"./SegmentedButton-DCb2A_xv.js";import"./index-CAA2J6fr.js";import"./Select-DmNHfi17.js";import"./InvisibleMessage-MKUVNUZM.js";import"./slim-arrow-down-enTMIpdD.js";import"./index-C_xnFlWE.js";import"./index-Cv0_3GO5.js";import"./index-BRv3mF1V.js";import"./index-Crwyz8ZA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6MPiSVH.js";import"./group-2-Cd1iqfwu.js";import"./sort-descending-B1MDHvU-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Z4g25ytt.js";import"./utils-B5Fc9P4b.js";import"./index-DpDL8a8s.js";import"./index-Ql5yF9yx.js";import"./index-BPoxwQOt.js";import"./navigation-down-arrow-Dkon3Z8u.js";import"./navigation-right-arrow-Dm6-IpRK.js";import"./navigation-right-arrow-BNSorjsP.js";import"./useCurrentTheme-CjUUgy0P.js";import"./index-D-67tr6h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C-6qlPxf.js";import"./paper-plane-B_Zq24If.js";import"./index-BeY4v2SL.js";import"./less-Bv-Ti7Zp.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
