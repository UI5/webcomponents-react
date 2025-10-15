import{j as e}from"./iframe-BV6MX4jP.js";import{useMDXComponents as o}from"./index-BBPLoQd2.js";import{I as l,F as r}from"./CommandsAndQueries-B_NVK97H.js";import{M as a,C as c}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import"./copy-BuKjNY_z.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-T_cM7jH3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";import"./index-B6xBDYCv.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DluWfdk1.js";import"./delete-D-tF1QFK.js";import"./settings-nj9vexJs.js";import"./NoData-DatsDwUA.js";import"./IllustratedMessage-wCVUZOEy.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DlJ2uOES.js";import"./index-W67I1HN2.js";import"./index-DzPicj6D.js";import"./slim-arrow-down-CsSTo7HV.js";import"./Input-ChW7yv3W.js";import"./ResponsivePopoverCommon.css-ClpZBCpz.js";import"./ValueStateMessage.css-C_M3aJzp.js";import"./Suggestions.css-CSkW4QfO.js";import"./ListBoxItemGroupTemplate-CRxGMHEE.js";import"./ComboBoxItemGroup-Crq8AFMp.js";import"./ListItemBaseTemplate-BgQ118Dh.js";import"./Token-DBSnoolZ.js";import"./ScrollEnablement-CUGdZ0ua.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C95WGA7x.js";import"./ToggleButton-DZW5zV-q.js";import"./SuggestionItem-D06YVUYK.js";import"./index-stG37gxE.js";import"./Option-CLVxZm0T.js";import"./index-CPiHE6HM.js";import"./SegmentedButton-w_O6Zr0R.js";import"./index-DpOA1UAF.js";import"./Select-8EQsIG3h.js";import"./InvisibleMessage-DDCSdyz6.js";import"./slim-arrow-down-m4nfpNWT.js";import"./index-ConqiMdG.js";import"./index-Teu4gKwB.js";import"./index-Cel48Hnh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YqAR--zG.js";import"./group-2-sFLuQe_k.js";import"./sort-descending-D51ek0j-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bAeuC6z7.js";import"./utils-DdwGETq3.js";import"./index-CZ32PpE2.js";import"./index-Btqqk8wD.js";import"./index-CcZrpUmm.js";import"./navigation-down-arrow-e2PgOWNG.js";import"./navigation-right-arrow-Bh7h-vAT.js";import"./navigation-right-arrow-Dd5t9QGM.js";import"./useCurrentTheme-CNfb1pjw.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0G7QBXN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CTyFJzVy.js";import"./paper-plane-BI7RDtZg.js";import"./index-De8-qQne.js";import"./less-DfVJl5W-.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
