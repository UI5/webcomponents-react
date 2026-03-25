import{j as o}from"./iframe-iYU5spAk.js";import{useMDXComponents as x}from"./index-BzD2IrSQ.js";import{A as n}from"./ArgTypesWithNote-DRIPy1P-.js";import{C as j}from"./ControlsWithNote-DYiwBMQ2.js";import{D as b}from"./DocsHeader-_GpZrLV2.js";import{F as u}from"./Footer-BTHx_eA0.js";import"./CommandsAndQueries-BRXiW4dn.js";import"./PageNotFound-C8n2TUKE.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-BI7QxqeB.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-CzKbSBCL.js";import{T as h}from"./index-BGhN-qdA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cq3_Xc9J.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./Tag-BusGuvh6.js";import"./index-DUNXsDMC.js";import"./index-DqeVDsPv.js";import"./Link-DNrZNopF.js";import"./copy-CLCoEAhJ.js";import"./copy-DCVJQWNc.js";import"./GitHub-Mark-oclh5OA_.js";import"./TableOfContent-ZERqextU.js";import"./index-B2lbw_UO.js";import"./index-BWMAVmh3.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CQs_LxQY.js";import"./index-BOBsR-wV.js";import"./InvisibleMessage-BqlPeigB.js";import"./Input-CPcEboco.js";import"./ResponsivePopoverCommon.css-MzYjXUbZ.js";import"./ValueStateMessage.css-CiiA2s3E.js";import"./Suggestions.css-CltR8Y_x.js";import"./SuggestionItem-D5XWHwVx.js";import"./ListItemBaseTemplate-D-bV5LoH.js";import"./ComboBoxItemGroup-KbtZd36F.js";import"./ListBoxItemGroupTemplate-ClX62AQ5.js";import"./index-BYNplDm6.js";import"./DatePicker-DD1HEKYN.js";import"./query-CzSBusdE.js";import"./Calendar-BFVNcDdA.js";import"./Gregorian-m5Qxl3-2.js";import"./FormatUtils-DSiJvM1G.js";import"./slim-arrow-left-D1xNjrHC.js";import"./appointment-2-B05Eukdm.js";import"./DateTimeInput-Qy8Dl96C.js";import"./index-BdYyxTLQ.js";import"./index-D-iEqBAI.js";import"./Token-DllBa28z.js";import"./ScrollEnablement-BzR7P6Ev.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-cf92RqQJ.js";import"./ToggleButton-XRDOJStY.js";import"./multiselect-all-B_UBRtV6.js";import"./index-Pg7LBmRF.js";import"./index-CdP1nluN.js";import"./less-CMvrZdAD.js";import"./ToolbarSpacer-CJ0YmMML.js";import"./ToolbarButton-_KzTtd1v.js";import"./overflow-BBDHCn90.js";import"./Select-DotgCPCG.js";import"./Option-WemDvLcT.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
`,o.jsx(b,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(j,{of:s}),`
`,o.jsx(e.h2,{id:"toolbaritem",children:"ToolbarItem"}),`
`,o.jsx(e.p,{children:"ToolbarItem wrapper used to add any component to Toolbar."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To display the radio buttons and checkboxes in a column in the overflow popover, the ",o.jsx(e.code,{children:"toolbar-item-group"})," CSS class is used:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,o.jsx(p,{of:w}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
`,o.jsx(p,{of:O}),`
`,o.jsx(e.h3,{id:"example-code",children:"Example Code"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`function ToolbarWithPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<PopoverDomRef>(null);
  return (
    <>
      <Toolbar>
        <ToolbarButton
          onClick={(e) => {
            const { targetRef } = e.detail;
            e.preventDefault();
            if (popoverRef.current) {
              popoverRef.current.opener = targetRef;
              setPopoverOpen(true);
            }
          }}
          text="Open Popover"
        />
      </Toolbar>
      <Popover
        open={popoverOpen}
        ref={popoverRef}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Content
      </Popover>
    </>
  );
}
`})}),`
`,o.jsx(g,{children:v}),`
`,o.jsx(e.h2,{id:"toolbaritem-1",children:"ToolbarItem"}),`
`,o.jsxs(e.p,{children:[o.jsx(i,{of:a}),'"']}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(i,{of:h}),`
`,o.jsx(n,{metaOf:r,of:h}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(u,{})]})}function qo(t={}){const{wrapper:e}={...x(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{qo as default};
