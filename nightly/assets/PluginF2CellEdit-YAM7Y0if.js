import{j as e}from"./iframe-BThE7jKf.js";import{useMDXComponents as o}from"./index-B2RJGRd4.js";import{I as l,F as r}from"./CommandsAndQueries-D1tgAUE5.js";import{M as a,C as c}from"./blocks-Dnvf3bz-.js";import"./Tag-9-1VZojo.js";import"./index-CTUpkleH.js";import"./copy-CbUREYSb.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cte-PI1R.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDRlpx-X.js";import"./index-Di66tdVG.js";import"./index-DcLqsBQ7.js";import"./Link-BAiulGQ4.js";import"./index-cpbfvu6C.js";import"./index-i-aKPvBx.js";import"./index-DLO7Rqwk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbRZFTjL.js";import"./addCustomCSSWithScoping-BhW-iIae.js";import"./index-Dg0PU8qR.js";import"./information-CcuaLhCB.js";import"./sys-enter-2-DHGMesz_.js";import"./alert-DuPQa3D0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CKwfTsTM.js";import"./delete-BqCAREpY.js";import"./settings-TqXR43qR.js";import"./NoData-DmCO7TIv.js";import"./IllustratedMessage-Bs5MaROT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CHmBr3w4.js";import"./index-Dr75E37T.js";import"./index-DvcdzHmC.js";import"./slim-arrow-down-Bz3-mcvJ.js";import"./Input-CbDmM0GF.js";import"./ResponsivePopoverCommon.css-DMYN2ItD.js";import"./ValueStateMessage.css-CvCL0Xij.js";import"./Suggestions.css-CGrcYFlL.js";import"./ListBoxItemGroupTemplate-_Besyw8f.js";import"./ComboBoxItemGroup-DAfVDG08.js";import"./ListItemBaseTemplate-xcFSnqWt.js";import"./Token-B6ErGNwX.js";import"./ScrollEnablement-_nV76HoB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cfqfrlti.js";import"./ToggleButton-DjH21DVy.js";import"./SuggestionItem-C8Yg-JWN.js";import"./index-CtKsJjs8.js";import"./Option-CSVQioik.js";import"./index-DsF8JQwb.js";import"./SegmentedButton-YWOzVeoF.js";import"./index-CCAH6gQH.js";import"./Select-CNSr5QHH.js";import"./InvisibleMessage-DJTpQpS-.js";import"./slim-arrow-down-hb2zYnU0.js";import"./index-C9n-DCcG.js";import"./index-E5ZX2AJ8.js";import"./index-BpiAnCwY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D6ZPV9ob.js";import"./group-2-B51gzcdA.js";import"./sort-descending-BN4uvKMV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-w-AwlVUJ.js";import"./utils-Bm75YCbD.js";import"./index-HDPq3XGJ.js";import"./index-BZBFFr3l.js";import"./index-BHuibshv.js";import"./navigation-down-arrow-DNBn6riX.js";import"./navigation-right-arrow-CEmB2JVm.js";import"./navigation-right-arrow-iXDAcUxC.js";import"./useCurrentTheme-ohrANfKQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-JOKJFWbc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DPG-qoPW.js";import"./paper-plane-Bi8pg9nf.js";import"./index-BVTuhwKz.js";import"./less-BKhFgDfk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
