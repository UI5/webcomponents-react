import{j as o}from"./iframe-DzsY3-MS.js";import{useMDXComponents as h}from"./index-DFSYB4hO.js";import{A as n}from"./ArgTypesWithNote-Bs7c56s2.js";import{C as x}from"./ControlsWithNote-xp0YhEc5.js";import{D as j}from"./DocsHeader-Cq6IcOwz.js";import{F as b}from"./CommandsAndQueries-DBuYeihv.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DS0Y1BZg.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DtaUPoAG.js";import{T as d}from"./index-PdMN69Bt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdAKftEE.js";import"./information-a2aTFncM.js";import"./sys-enter-2-7qDJkwn8.js";import"./alert-BRYQ7SuA.js";import"./Tag-L2pUIWpP.js";import"./index-C5c1rTpg.js";import"./index-BfsMxbQ9.js";import"./Link-3hYic3jw.js";import"./copy-UgNSKKPX.js";import"./copy-BminF4Iy.js";import"./GitHub-Mark-Bq8LtgDP.js";import"./TableOfContent-D6dPMkmb.js";import"./index-DKfHbnjd.js";import"./index-DkJZCu2R.js";import"./index-BndW4ILr.js";import"./index-DQ0Bmg4X.js";import"./index-DTlY8Kzq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7IVEmPi.js";import"./addCustomCSSWithScoping-0WSQwudS.js";import"./Select-BGW-2fE4.js";import"./InvisibleMessage-Cb7HEOO2.js";import"./slim-arrow-down-DMe2ZC5d.js";import"./slim-arrow-down-CkH4Whvo.js";import"./ResponsivePopoverCommon.css-CLPuLjYm.js";import"./ValueStateMessage.css-Di8Y_FaV.js";import"./Option-B5iYKL3-.js";import"./ListItemBaseTemplate-C_vIHZba.js";import"./ToolbarButton-CJSoElQd.js";import"./overflow-GpFyFZv0.js";import"./ToolbarSpacer-MUPSig2P.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsx(s,{of:O}),`
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
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function lo(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{lo as default};
