import{j as e}from"./iframe-BFWc6ije.js";import{useMDXComponents as o}from"./index-DIwiR8-R.js";import{I as l,F as r}from"./CommandsAndQueries-RvyhHzLx.js";import{M as a,C as c}from"./blocks-_C0Ko-FB.js";import"./Tag-BlcbvGrz.js";import"./index-S-jzd0og.js";import"./copy-B0915CdE.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DMwZPbok.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWXRaFCB.js";import"./index-BJhTX5aa.js";import"./index-Ammjaz44.js";import"./Link-C0nE2LNS.js";import"./index-D6ti5Aap.js";import"./index-BNrsjj3y.js";import"./index-BeiCFHJ0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NyszqC-C.js";import"./addCustomCSSWithScoping-DHZr8-1Q.js";import"./index-DYh3DUHT.js";import"./information-gUiWTFs7.js";import"./sys-enter-2-Czjj6c4O.js";import"./alert-Dwrii-iz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-2a6sZTKt.js";import"./delete-GLZPXNIt.js";import"./settings-Bl3VKOzY.js";import"./NoData-D1FNpf90.js";import"./IllustratedMessage-Col1197V.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BHuYeTyV.js";import"./index-DgCS7Nk3.js";import"./index-SZqCzEgh.js";import"./slim-arrow-down-Dv1ZFOOG.js";import"./Input-BTIWHmaN.js";import"./ResponsivePopoverCommon.css-c4jpBfVX.js";import"./ValueStateMessage.css-C8t0n2is.js";import"./Suggestions.css-Cj5eaUvh.js";import"./ListBoxItemGroupTemplate--RkL3eX-.js";import"./ComboBoxItemGroup-CvfuwnhX.js";import"./ListItemBaseTemplate-DWiE6hVW.js";import"./Token-RwPCKO7L.js";import"./ScrollEnablement-BS-59KGT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3Dr6elZ5.js";import"./ToggleButton-NLglJiSM.js";import"./SuggestionItem-B18x_0Bw.js";import"./index-_nYMLiJq.js";import"./Option-BCCI7jGA.js";import"./index-DYvMbD0V.js";import"./SegmentedButton-2c88fWgR.js";import"./index-IKSBMBYh.js";import"./Select-DGk89UWd.js";import"./InvisibleMessage-gz9Baj7W.js";import"./slim-arrow-down-DbgE6iuN.js";import"./index-RsMAEwo8.js";import"./index-DNOnKtp6.js";import"./index-fezgehlA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTa28ct7.js";import"./group-2-1vH7OeUe.js";import"./sort-descending-6IaS3sEK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8A7JpsJT.js";import"./utils-_MgrmSbV.js";import"./index-CFTVOaaJ.js";import"./index-c-viX2G1.js";import"./index-Tigp63LJ.js";import"./navigation-down-arrow-C3oL93Ku.js";import"./navigation-right-arrow-D0tZtsPJ.js";import"./navigation-right-arrow-OUJD2N61.js";import"./useCurrentTheme-BdY6233y.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bfz-LgXH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DrH-Pm0z.js";import"./paper-plane-CCOFurtH.js";import"./index-BqcaYpg7.js";import"./less-BXPL7yK5.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
