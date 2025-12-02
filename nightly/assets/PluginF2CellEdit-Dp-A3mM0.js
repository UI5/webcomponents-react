import{j as e}from"./iframe-ePItFB5B.js";import{useMDXComponents as o}from"./index-DDhKCT3A.js";import{I as l,F as r}from"./CommandsAndQueries-Bqqc5zN4.js";import{M as a,C as c}from"./blocks-b5KXpU9M.js";import"./Tag-DaF_Qhe4.js";import"./index-BB23O1Ug.js";import"./copy-BDQ8dZSb.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BJSBhIN7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tHf_ynpH.js";import"./index-BW9_RjV3.js";import"./index-CHJN7UF8.js";import"./Link-DCRCVgwG.js";import"./index-CauWo2vq.js";import"./index-Dot01Rcg.js";import"./index-DwS7NZjH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BZQxW830.js";import"./addCustomCSSWithScoping-DQC1mn0S.js";import"./index-DsBJl3xg.js";import"./information-jDHGU4wN.js";import"./sys-enter-2-CYnnsJKJ.js";import"./alert-CaUEMWJO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ToSbXWZH.js";import"./delete-DwZg9P7Z.js";import"./settings-BcPS-7YZ.js";import"./NoData-DJFJrOTo.js";import"./IllustratedMessage-Bmr5Yv3g.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DSxvsqTt.js";import"./index-CM9pher7.js";import"./index-n2XRoQpy.js";import"./slim-arrow-down-Bbay6SzC.js";import"./Input-1ziOkLBO.js";import"./ResponsivePopoverCommon.css-CK1jZSgX.js";import"./ValueStateMessage.css-Cge6AqxA.js";import"./Suggestions.css-qvsZ8K7i.js";import"./ListBoxItemGroupTemplate-tCIsdNqz.js";import"./ComboBoxItemGroup-BTYyH9JI.js";import"./ListItemBaseTemplate-BQfbgCmz.js";import"./Token-hnnzHjkz.js";import"./ScrollEnablement-DXbRc12V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwrIMAc3.js";import"./ToggleButton-BVCRpFrg.js";import"./SuggestionItem-DHkkhg33.js";import"./index-BJMjSX6m.js";import"./Option-8jo7-UGm.js";import"./index-BkpZUg2F.js";import"./SegmentedButton-B55zAlnK.js";import"./index-CZnOTK3W.js";import"./Select-DODjh9tK.js";import"./InvisibleMessage-66-idOyL.js";import"./slim-arrow-down-C3vG9300.js";import"./index-DEIYYpTL.js";import"./index-CRvZRH3h.js";import"./index-BpeQPuHK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIN5xraI.js";import"./group-2-CI-KJk4K.js";import"./sort-descending-DBtsyD-3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D8vqCrQI.js";import"./utils-eGR0B54I.js";import"./index-CIqT6e3U.js";import"./index-1WOlGoMF.js";import"./index-rRzkNuJB.js";import"./navigation-down-arrow-hSRSXRoR.js";import"./navigation-right-arrow-BxDoSopC.js";import"./navigation-right-arrow-DFeuYejb.js";import"./useCurrentTheme-C0xCGTPu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CuUMSyha.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DsyOH-5s.js";import"./paper-plane-BtGnmdBy.js";import"./index-CFAUo9FD.js";import"./less-BQZO-GV3.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
