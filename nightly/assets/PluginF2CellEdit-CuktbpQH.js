import{j as e}from"./iframe-THm39tdL.js";import{useMDXComponents as o}from"./index-B4tiZj28.js";import{I as l,F as r}from"./CommandsAndQueries-CM3XC2Lj.js";import{M as a,C as c}from"./blocks-exNB_fpK.js";import"./Tag-DAVE_HUz.js";import"./index-GpdeEFTa.js";import"./copy-BpRW8fgI.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CVT2-F1V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPta9qsd.js";import"./index-Dg0TKbRC.js";import"./index-DLy3fIdu.js";import"./Link-CGyr18oq.js";import"./index-BziYS9gD.js";import"./index-Dfp6johM.js";import"./index-KiDRbvAF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGXn0jIO.js";import"./addCustomCSSWithScoping-msj5utEH.js";import"./index-BQ6gEIJW.js";import"./information-Cma2Q91K.js";import"./sys-enter-2-iw8Fxy6e.js";import"./alert-Buz1y0R3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-gfd4y1HT.js";import"./delete-0fDb3pV1.js";import"./settings-CY8QoXJB.js";import"./NoData-C7YE6Tud.js";import"./IllustratedMessage-CwBEdHyI.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BtIdSS61.js";import"./index-CF50Srtj.js";import"./index-MWxZbhrE.js";import"./slim-arrow-down-F0Pm_4oK.js";import"./Input-BhtW4_5c.js";import"./ResponsivePopoverCommon.css-BUxGZes4.js";import"./ValueStateMessage.css-Bbj2XpR4.js";import"./Suggestions.css-tt1nfuuG.js";import"./ListBoxItemGroupTemplate-o9uQGfAz.js";import"./ComboBoxItemGroup-D2Ek2hZU.js";import"./ListItemBaseTemplate-M2eQiRWW.js";import"./Token-GBNwp73E.js";import"./ScrollEnablement-BuLvzDFb.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BfdqbOJt.js";import"./ToggleButton-BCPXY_Ug.js";import"./SuggestionItem-DkeJr8Uj.js";import"./index-BKb2eeim.js";import"./Option-BV6lO7dz.js";import"./index-Bg5k6qvB.js";import"./SegmentedButton-CFw5tEED.js";import"./index-CEaBFzJC.js";import"./Select-BdWwnW7P.js";import"./InvisibleMessage-Ce4CN5Vg.js";import"./slim-arrow-down-B5JPuMYZ.js";import"./index-BnrnCSjD.js";import"./index-C6R9FrtI.js";import"./index-DaOWCx8l.js";import"./index-CSWlCTzX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGPM4R0_.js";import"./group-2-09PNMZ-u.js";import"./sort-descending-DNDw-3QK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGou595l.js";import"./utils-BtvyjyGh.js";import"./index-BczVQc8C.js";import"./index-Cv0Q1UgH.js";import"./index-Bk-Qx2M8.js";import"./navigation-down-arrow-DEN2N7AT.js";import"./navigation-right-arrow-D2uUmPNT.js";import"./navigation-right-arrow-BW1qFR6l.js";import"./useCurrentTheme-BVOqA9kw.js";import"./index-CUY0Gfu8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DmNCTJWW.js";import"./paper-plane-BcpS0W6p.js";import"./index-BPR-maoO.js";import"./less-Dxs7OAKQ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
