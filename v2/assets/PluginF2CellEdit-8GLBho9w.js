import{j as e}from"./iframe-DZzGW3BN.js";import{useMDXComponents as o}from"./index-4a2WG_Ci.js";import{I as l,F as r}from"./CommandsAndQueries-agOrjqHb.js";import{M as a,C as c}from"./blocks-CBLhE6Mj.js";import"./Tag-DsKJkF-r.js";import"./index-CwFc8wWn.js";import"./copy-Dn2hDQ0W.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-QCfpKmZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRP5oWUe.js";import"./index-kAqP9TvQ.js";import"./index-Dq5fA6-V.js";import"./Link-S_PR-7tK.js";import"./index-KWsyOko9.js";import"./index-Cwa4PueL.js";import"./index-DDMDh9Sd.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsBnjZtI.js";import"./addCustomCSSWithScoping-63LVGehW.js";import"./index-d1jeh3JQ.js";import"./information-BknITroB.js";import"./sys-enter-2-KPnKgmjd.js";import"./alert-mneIjgbe.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BniSdvIz.js";import"./delete-DuV86wpx.js";import"./settings-8s6k8EjZ.js";import"./NoData-CShc9ggy.js";import"./IllustratedMessage-CD31dXEh.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-Dy7bfHGF.js";import"./index-JZqV8G1u.js";import"./index-BwppftZR.js";import"./slim-arrow-down-D8mH76_5.js";import"./Input-6XkWZ1o_.js";import"./ResponsivePopoverCommon.css-BNCzU2w3.js";import"./ValueStateMessage.css-Uirvf2-h.js";import"./Suggestions.css-Bxrtjpe4.js";import"./ListBoxItemGroupTemplate-EqN2wsVW.js";import"./ComboBoxItemGroup-DLN7zx_c.js";import"./ListItemBaseTemplate-B5pUU0jJ.js";import"./Token-Bd6GT3me.js";import"./ScrollEnablement-Dlejz-Cm.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSpNUPFr.js";import"./ToggleButton-D7gJFlAG.js";import"./SuggestionItem-Dj5VdsGP.js";import"./index-Djf9F3Nl.js";import"./Option-qqPbvFNI.js";import"./index-CAPm8wXz.js";import"./SegmentedButton-IKOAniKG.js";import"./index-hcUm0XD3.js";import"./Select-TodLTqUS.js";import"./InvisibleMessage-CpiIl6ef.js";import"./slim-arrow-down-DwujDOXN.js";import"./index-BlCx-VbN.js";import"./index-Bwfdl3tG.js";import"./index-7ORqBvwq.js";import"./index-5lzKqf_E.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtZcXXHD.js";import"./group-2-DTjJUMyx.js";import"./sort-descending-BBFN1NhL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dz95Acax.js";import"./utils-Dnf_XIlj.js";import"./index-ujWlR76e.js";import"./index-DzxIJEJi.js";import"./index-DEgJlCnW.js";import"./navigation-down-arrow-Ck09O8Ee.js";import"./navigation-right-arrow-DVL0ymcw.js";import"./navigation-right-arrow-ClbiDJLo.js";import"./useCurrentTheme-CWgqZovn.js";import"./index-yeM0YfxH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgKuSHBl.js";import"./paper-plane-D5SdZPIp.js";import"./index-C79XlDu9.js";import"./less-CgHtMiYC.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
