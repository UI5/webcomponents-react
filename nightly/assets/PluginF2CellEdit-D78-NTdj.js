import{j as e}from"./iframe-DsgKHrOc.js";import{useMDXComponents as o}from"./index-R1G5OZPs.js";import{I as l,F as r}from"./CommandsAndQueries-D_2jUbP4.js";import{M as a,C as c}from"./blocks-CQue4LlW.js";import"./Tag-BTAP7zi_.js";import"./index-B3N-7g7X.js";import"./copy-DlTApuN1.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-i7kpTZ_A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNMfu1Bq.js";import"./index-CnrY0exf.js";import"./index-BdUiiHhG.js";import"./Link-DoHEtv1B.js";import"./index-Dm9AGWV-.js";import"./index-BomSeR7F.js";import"./index-W4kN-wgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BfAO3hVt.js";import"./addCustomCSSWithScoping-CsuAJYaG.js";import"./index-0Q75H94O.js";import"./information-ls1iI2xZ.js";import"./sys-enter-2-BOSLgeP2.js";import"./alert-BH6ifEnA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SSqF3mYr.js";import"./delete-BXxwRw5y.js";import"./settings-BDZ662oR.js";import"./NoData-mzNWeO_R.js";import"./IllustratedMessage-CwAF6TLx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CBmQxRIQ.js";import"./index-CO7AsHeT.js";import"./index-DPmxY5Fk.js";import"./slim-arrow-down-BFPvdtk4.js";import"./Input-CLRI9CEh.js";import"./ResponsivePopoverCommon.css-Dz_dByIm.js";import"./ValueStateMessage.css-C1b8jnbg.js";import"./Suggestions.css-Y2NBFohg.js";import"./ListBoxItemGroupTemplate-Cu8LS11Q.js";import"./ComboBoxItemGroup-zDzTNuwT.js";import"./ListItemBaseTemplate-Ch-vNojB.js";import"./Token-DNwyr1VA.js";import"./ScrollEnablement-CijCXV-f.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CPkU6wJ3.js";import"./ToggleButton-COie_AKR.js";import"./SuggestionItem-B4-4_m5w.js";import"./index-HXM5p6gS.js";import"./Option-CQ19A_kf.js";import"./index-0mAv68Ot.js";import"./SegmentedButton-h60sJA6a.js";import"./index-C8-_l6KY.js";import"./Select-MmIlw-od.js";import"./InvisibleMessage-q1FFN4_p.js";import"./slim-arrow-down-BLSo6u6P.js";import"./index-DK0w5O82.js";import"./index-Dn-44Img.js";import"./index-CUAjbgKI.js";import"./index-CLFnZnkT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DY9qOiNW.js";import"./group-2-B0_QXr5r.js";import"./sort-descending-B2J58p1j.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE-0JGpI.js";import"./utils-BcerUUFZ.js";import"./index-QVkFgjH8.js";import"./index-0oo2lNeo.js";import"./index-DaiJcS-C.js";import"./navigation-down-arrow-bXhK5skS.js";import"./navigation-right-arrow-uarvhyB4.js";import"./navigation-right-arrow-7Xw2c4NW.js";import"./useCurrentTheme-BDtdl0D9.js";import"./index-NzD9g4E3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-IwUpqcbd.js";import"./paper-plane-DoDYrXu7.js";import"./index-B6hPTyEO.js";import"./less-BPtBbolb.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
