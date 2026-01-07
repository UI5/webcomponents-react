import{j as e}from"./iframe-BS2TrvrN.js";import{useMDXComponents as o}from"./index-Dp4awxsz.js";import{I as l,F as r}from"./CommandsAndQueries-C7ISLnYa.js";import{M as a,C as c}from"./blocks-AG6GRa5B.js";import"./Tag-CAsjs9Yd.js";import"./index-CnogY8gl.js";import"./copy-DWHxAwDZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BFKbgqVg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTiu8q4c.js";import"./index-Mu4Fq_pN.js";import"./index-BmL9Xifd.js";import"./Link-o9RgLDgA.js";import"./index-DaCCo5vH.js";import"./index-DMDLslui.js";import"./index-BzQgfOUJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXV-QRTV.js";import"./addCustomCSSWithScoping-BH8CiasF.js";import"./index-CJ7CYpRY.js";import"./information-B1mkkoXe.js";import"./sys-enter-2-DnLeBeIW.js";import"./alert-BREJIvMW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkyYsc9_.js";import"./delete--EJaBHtQ.js";import"./settings-CjHgbDvG.js";import"./NoData-uCs7mLL3.js";import"./IllustratedMessage-BYxajBDo.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-B4qjkeLD.js";import"./index-CuDN26eE.js";import"./index-Bg1SvpRp.js";import"./slim-arrow-down-C6f4nBya.js";import"./Input-Bv0sXAeB.js";import"./ResponsivePopoverCommon.css-BZWL9G4a.js";import"./ValueStateMessage.css-YDo57pkc.js";import"./Suggestions.css-DAjqdB6I.js";import"./ListBoxItemGroupTemplate-C3a7F9SG.js";import"./ComboBoxItemGroup-gEh305-y.js";import"./ListItemBaseTemplate-1DE2nZfk.js";import"./Token-geTKpS6b.js";import"./ScrollEnablement-BmiTc29C.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DDx_09pl.js";import"./ToggleButton-CcH_vL5C.js";import"./SuggestionItem-CWGXugmn.js";import"./index-DjLt-Et_.js";import"./Option-BGlTcCx4.js";import"./index-rnvXBaMA.js";import"./SegmentedButton-BRvRJYjJ.js";import"./index-Bo3gbuh_.js";import"./Select-DcELK7dP.js";import"./InvisibleMessage-CpZ2jbZ-.js";import"./slim-arrow-down-CP7_zG_U.js";import"./index-DrOVNHN1.js";import"./index-CAphs1al.js";import"./index-Bndb5wUT.js";import"./index-DZmbJFEp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CYZgLpPW.js";import"./group-2-Bjg8E7Od.js";import"./sort-descending-VYXIT-Q2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2nq9QYP.js";import"./utils-CSeio7PW.js";import"./index-BW-YQYzw.js";import"./index-SLFgJxKA.js";import"./index-DsLZqvCQ.js";import"./navigation-down-arrow-B8ST6yfY.js";import"./navigation-right-arrow-CcCTVMX2.js";import"./navigation-right-arrow-BWBp3NRa.js";import"./useCurrentTheme-BL8885Ei.js";import"./index-BR75lte5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dueog928.js";import"./paper-plane-AR1l5ZNk.js";import"./index-D26HhdRg.js";import"./less-BYcbCm1L.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
