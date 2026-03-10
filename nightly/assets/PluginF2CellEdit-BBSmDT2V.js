import{j as e}from"./iframe-xWXly7Ei.js";import{useMDXComponents as o}from"./index-BkV3w5d0.js";import{I as r}from"./CommandsAndQueries-cQGlKyLD.js";import{M as l,C as a}from"./blocks-BK-gEy5G.js";import"./Tag-C8IzARdb.js";import"./index-BakXc7t8.js";import"./copy-DY9Bhohc.js";import{F as c}from"./Footer-CjsfyNRg.js";import"./PageNotFound-BQRcUr7m.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CDFMCLtw.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dpfp2JXt.js";import"./index-BTgCG8OL.js";import"./index-B5aWf-WN.js";import"./index-1-wUIWqO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B64w7jYZ.js";import"./addCustomCSSWithScoping-Dr_4npAd.js";import"./index-BcAVbI4W.js";import"./index-P_dJFF81.js";import"./index-CbssaC5W.js";import"./information-3IM7ZiM-.js";import"./sys-enter-2-Cbpg-U0q.js";import"./alert-gk5TVJR_.js";import"./index-D8yJKpQG.js";import"./Illustrations-VX2U6euS.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C0EeoQOf.js";import"./delete-Daj5aG2H.js";import"./settings-JEJGhDXa.js";import"./NoData-CUNc-SJj.js";import"./NoFilterResults-DvZ6DrPN.js";import"./index-BzwYG95X.js";import"./IllustratedMessage-Be1pREre.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-TGWaISd0.js";import"./Input-CDjEum2n.js";import"./ResponsivePopoverCommon.css-8bAtFiUD.js";import"./ValueStateMessage.css-BYQRLYZ0.js";import"./Suggestions.css-CNN403-Y.js";import"./ListBoxItemGroupTemplate-CuHmPnrx.js";import"./ComboBoxItemGroup-COAcu647.js";import"./ListItemBaseTemplate-GzRG8w-c.js";import"./Token-BEDcAYgp.js";import"./ScrollEnablement-DYlMFsuu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-iey8o9JN.js";import"./ToggleButton-CW6tueV4.js";import"./multiselect-all-CtBIMUjF.js";import"./SuggestionItem-ywTbVMDQ.js";import"./index-B1qnChHa.js";import"./Option-B7m8nxQ-.js";import"./index-DNsMOtVs.js";import"./SegmentedButton-CL3kzHDq.js";import"./index-DokxMw3O.js";import"./Select-BWiWS1At.js";import"./InvisibleMessage-CC4MNG7R.js";import"./index-CwxYOeSe.js";import"./index-Dv57lb5x.js";import"./index-jPeizMn4.js";import"./index-DEdFN2d4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dkcd59kF.js";import"./group-2-CsBD2zZA.js";import"./sort-descending-BQOuvjyZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk8WJ0QW.js";import"./utils-B3KTizs4.js";import"./index-B1H_35uI.js";import"./index-wRDrCSQt.js";import"./index-DKiHuygv.js";import"./navigation-down-arrow-Dex1asDk.js";import"./navigation-right-arrow-D1hOWf48.js";import"./navigation-right-arrow-DtQN-gk3.js";import"./useCurrentTheme-CGLlYyfP.js";import"./index-D_FJo5s9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYgZebj6.js";import"./paper-plane-DeM9JyhI.js";import"./index-BVX4T61_.js";import"./less-ChsYqecD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
