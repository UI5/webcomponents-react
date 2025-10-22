import{j as o}from"./iframe-CqyMw63j.js";import{useMDXComponents as h}from"./index-GHxgs1Oh.js";import{A as n}from"./ArgTypesWithNote-DhjYl0xC.js";import{C as x}from"./ControlsWithNote-Ck71R3qs.js";import{D as j}from"./DocsHeader-DC4NOlH0.js";import{F as b}from"./CommandsAndQueries-Ckqtj5q6.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-gNAN3wnS.js";import{C as r,D as a,O,T as i,a as c,b as l,c as m}from"./Toolbar.stories-WCHtMw1L.js";import{T as d}from"./index-20nt71u1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZeMBOtb.js";import"./information-B-SB47kj.js";import"./sys-enter-2-8wJJb_fs.js";import"./alert-DS7w9_j5.js";import"./Tag-9sg0d6U8.js";import"./index-fW-mpTRV.js";import"./index-CRtLMoP1.js";import"./Link-8hzPxLpd.js";import"./copy-C_O2G0CQ.js";import"./copy-CygH_bff.js";import"./GitHub-Mark-Burz5wza.js";import"./TableOfContent-CyJZKYaH.js";import"./index-Ccu9AWNy.js";import"./index-CyG-uGBl.js";import"./index-B8X3UXQy.js";import"./index-DqKKFvdB.js";import"./index-CEokL_Ra.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hBi7rm2H.js";import"./addCustomCSSWithScoping-C9ZUc-46.js";import"./Select-Xhunz0DK.js";import"./InvisibleMessage-BX0MFDY5.js";import"./slim-arrow-down-x1-wAbSu.js";import"./slim-arrow-down-D-ZUvWXK.js";import"./ResponsivePopoverCommon.css-17WbdJEp.js";import"./ValueStateMessage.css-DVx3cVXN.js";import"./Option-DOo6z9Dp.js";import"./ListItemBaseTemplate-CVZqI9dc.js";import"./ToolbarButton-DKIatPht.js";import"./overflow-CmH3-eWF.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:a}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:a}),`
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
`,o.jsx(p,{of:i}),`
`,o.jsx(n,{metaOf:r,of:i}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function co(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{co as default};
