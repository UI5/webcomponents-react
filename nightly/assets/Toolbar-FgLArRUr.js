import{j as o}from"./iframe-ERwSzs3g.js";import{useMDXComponents as f}from"./index-C_Wbk-9f.js";import{A as t}from"./ArgTypesWithNote-DjezXBHq.js";import{C as x}from"./ControlsWithNote-Bv8JsWe_.js";import{D as j}from"./DocsHeader-Bv58yv9U.js";import{F as b}from"./CommandsAndQueries-Dd3ZB-Zm.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CPggC12N.js";import{C as n,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-U-eydy6X.js";import{T as d}from"./index-CbVTQY_j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaDxd8lJ.js";import"./information-CHdxYb5g.js";import"./sys-enter-2-CJZeFu0K.js";import"./alert-DqHHhUpv.js";import"./Tag-B-CdIpAx.js";import"./index-BcvsAi-y.js";import"./index-I8Rn_Xtk.js";import"./Link-BEsTVss7.js";import"./copy-CSXF2cyh.js";import"./copy-CudSiVH8.js";import"./GitHub-Mark-Bu8jRQF_.js";import"./TableOfContent-3se_hcJR.js";import"./index-D0Kgz2KY.js";import"./index-CL--3ayL.js";import"./index-RyYuggn2.js";import"./index--5AI5DCY.js";import"./index-CZ9mn71l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxRB-GRE.js";import"./addCustomCSSWithScoping-Clegv1AW.js";import"./Select-Uz-gzee2.js";import"./InvisibleMessage-CtK1BuKZ.js";import"./slim-arrow-down-BdCansBN.js";import"./slim-arrow-down-2J31Ucf0.js";import"./ResponsivePopoverCommon.css-DReQi8ZR.js";import"./ValueStateMessage.css-Lf_StamT.js";import"./Option-Br2Csiuj.js";import"./ListItemBaseTemplate-BQH3JJKy.js";import"./ToolbarButton-63vTfQH7.js";import"./overflow-Boz0R153.js";import"./ToolbarSpacer-yx08lMDe.js";function h(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:n}),`
`,o.jsx(j,{of:n,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
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
`,o.jsx(t,{metaOf:n,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(t,{metaOf:n,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(t,{metaOf:n,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(t,{metaOf:n,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t,{metaOf:n,of:m}),`
`,o.jsx(b,{})]})}function lo(r={}){const{wrapper:e}={...f(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(h,{...r})}):h(r)}export{lo as default};
