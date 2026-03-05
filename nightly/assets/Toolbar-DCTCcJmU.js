import{j as o}from"./iframe-jlZ7haKH.js";import{useMDXComponents as f}from"./index-BDRke1Rk.js";import{A as t}from"./ArgTypesWithNote-wEoH4Di3.js";import{C as x}from"./ControlsWithNote-DFYrFrtH.js";import{D as j}from"./DocsHeader-BEuhV6a3.js";import{F as b}from"./Footer-Cyt0gd6r.js";import"./CommandsAndQueries-C62gP0Wv.js";import"./PageNotFound-D9hL323p.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as i,a as T,D as p}from"./blocks-GgaXKyV0.js";import{C as r,D as s,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-BgvPVMkB.js";import{T as d}from"./index-2VkaM4Yo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DB16QQd2.js";import"./information-D3vqfhW8.js";import"./sys-enter-2-D9bp2L1z.js";import"./alert-7poHLLeI.js";import"./Tag-BnvuCeE_.js";import"./index-EXbubmTe.js";import"./index-BtQ34sqz.js";import"./Link-CmI2uh2s.js";import"./copy-D99eCj_X.js";import"./copy-BXrubwPI.js";import"./GitHub-Mark-MLSQTUto.js";import"./TableOfContent-BshhcyQK.js";import"./index-BJRmM88L.js";import"./index-BcLhYSRh.js";import"./index-UUYL4bRA.js";import"./index-BfL44CNr.js";import"./index-DnDTeT16.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_1ld5sf.js";import"./addCustomCSSWithScoping-Cg_sPlM6.js";import"./Illustrations-DJD2oa8r.js";import"./i18n-defaults-C7ICj5-E.js";import"./Select-T7Cbny-Q.js";import"./InvisibleMessage-DF9bJNX1.js";import"./slim-arrow-down-OBUhn7dW.js";import"./slim-arrow-down-CBNyDt1h.js";import"./ResponsivePopoverCommon.css-C-1sAsFZ.js";import"./ValueStateMessage.css-vjmAhNEW.js";import"./Option-gWpmqGV0.js";import"./ListItemBaseTemplate-BrqWXWhE.js";import"./ToolbarButton-CFKQQvck.js";import"./overflow-DoulgTCx.js";import"./ToolbarSpacer-BTkZ6pSr.js";function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(i,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:s}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
`,o.jsx(i,{of:O}),`
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
`,o.jsx(T,{children:u}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(p,{of:d}),`
`,o.jsx(t,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(t,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(t,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(t,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function xo(n={}){const{wrapper:e}={...f(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(h,{...n})}):h(n)}export{xo as default};
