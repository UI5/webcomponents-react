import{j as o}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as h}from"./index-Jmw_4WZV.js";import{A as n}from"./ArgTypesWithNote-DD7X9XvZ.js";import{C as x}from"./ControlsWithNote-DsI0yJ_c.js";import{D as j}from"./DocsHeader-M7v8s38F.js";import{F as b}from"./CommandsAndQueries--8Ahr2u6.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-9PHEB2Ze.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-BAXqvQSr.js";import{T as d}from"./index-BobZcNF_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-NAUCyd.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./Tag-DEHlwQE8.js";import"./index-CNLcYPCr.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./copy-XDqr6iKY.js";import"./copy-ClXhTaxL.js";import"./GitHub-Mark-_pFNYc1m.js";import"./TableOfContent-C_C39Km7.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./Select-wk3vy9-X.js";import"./InvisibleMessage-BMxlV3uh.js";import"./slim-arrow-down-CW8gGJol.js";import"./slim-arrow-down-Cv1cFJAK.js";import"./ResponsivePopoverCommon.css-XADsAOoO.js";import"./ValueStateMessage.css-IPM013Bi.js";import"./Option-DuXsqB-8.js";import"./ListItemBaseTemplate-BhmRBGhv.js";import"./ToolbarButton-DrguiI2_.js";import"./overflow-iSYOGHFk.js";import"./ToolbarSpacer-ByJcvXCJ.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
