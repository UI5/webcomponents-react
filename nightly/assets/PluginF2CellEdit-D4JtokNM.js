import{j as e}from"./iframe-CLKwUGEX.js";import{useMDXComponents as o}from"./index-DCuwspND.js";import{I as l,F as r}from"./CommandsAndQueries-dz6NHoyr.js";import{M as a,C as c}from"./blocks-Dh7hbfcJ.js";import"./Tag-CfLVXJVc.js";import"./index-h52TWGHx.js";import"./copy-BrK10eH_.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DdSElbyf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Veg9_1qu.js";import"./index-ZH4BIl7e.js";import"./index-CkL1gWNe.js";import"./Link-Bqvbz9lT.js";import"./index-CL8a7czm.js";import"./index-CRtbNwl1.js";import"./index-BIRKClWd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYpAqTMA.js";import"./addCustomCSSWithScoping-Ckj5BS6-.js";import"./index-CuwqMzEM.js";import"./information-D0EfmlkL.js";import"./sys-enter-2-CbYR1yRQ.js";import"./alert-B6Esz0N1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cq8bkL-u.js";import"./delete-zgSUoyOg.js";import"./settings-CBLLXz6N.js";import"./NoData-DSW01fss.js";import"./IllustratedMessage-DAmuZ2UN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BA9ELEvi.js";import"./index-ka-ToCm_.js";import"./index-BHjhclkw.js";import"./slim-arrow-down-fLJI98pt.js";import"./Input-gdpdxYMJ.js";import"./ResponsivePopoverCommon.css-DtENZeG8.js";import"./ValueStateMessage.css-B4kKha1P.js";import"./Suggestions.css-BCv_xKxV.js";import"./ListBoxItemGroupTemplate-9TRbrDJ2.js";import"./ComboBoxItemGroup-P9iDEYGv.js";import"./ListItemBaseTemplate-CXA-fGl_.js";import"./Token-BM0X9bQT.js";import"./ScrollEnablement-DHvtGpUc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CYUOfpyN.js";import"./ToggleButton-rcmCnfHw.js";import"./SuggestionItem-IrwYDQ3Z.js";import"./index--P7kWLvm.js";import"./Option-CAO0eJwC.js";import"./index-BgqJi3Py.js";import"./SegmentedButton-Du7zSbut.js";import"./index-DcGyQm7o.js";import"./Select-Cy1yC1om.js";import"./InvisibleMessage-DsuuJ4si.js";import"./slim-arrow-down-NfxAXgq9.js";import"./index-7v9TUzFY.js";import"./index-u6yZ5lZT.js";import"./index-D_cyz0Cs.js";import"./index-FsTUQbBQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcOrZlNJ.js";import"./group-2-Cx0jhwyi.js";import"./sort-descending-BL8Dl8a2.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D85Rx8La.js";import"./utils-Bfz42nTV.js";import"./index-Z-BdczqP.js";import"./index-Dq44XCib.js";import"./index-B31IT1af.js";import"./navigation-down-arrow-Dx9epi_Y.js";import"./navigation-right-arrow-Dk1AH9Ft.js";import"./navigation-right-arrow-BcI6851b.js";import"./useCurrentTheme-BkslSs8D.js";import"./index-BvhjsuIG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-YHsws3VW.js";import"./paper-plane-C2yCzXa-.js";import"./index-CPp6j0v_.js";import"./less-BUl18ff9.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
