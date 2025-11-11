import{j as o}from"./iframe-eDai9lNh.js";import{useMDXComponents as h}from"./index-DWaT93aF.js";import{A as n}from"./ArgTypesWithNote-Be8JeCHd.js";import{C as x}from"./ControlsWithNote-PgUKowHt.js";import{D as j}from"./DocsHeader-CSlQYW0N.js";import{F as b}from"./CommandsAndQueries-DdbJ0tNe.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-D3QMf_Nj.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-CSNQGL85.js";import{T as d}from"./index-C158rScc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzhxwyLf.js";import"./information-DqhxapEK.js";import"./sys-enter-2-Cyu-GNYt.js";import"./alert-p2WK74VT.js";import"./Tag-BEY0r0J2.js";import"./index-CfUZ5M--.js";import"./index-6ZlW-CM4.js";import"./Link-ZNB4Pnda.js";import"./copy-OVgbw2j0.js";import"./copy-D01F59bh.js";import"./GitHub-Mark-TrznzmQN.js";import"./TableOfContent-DE6rjTP5.js";import"./index-Cch7pNGQ.js";import"./index-lMWu8Jr6.js";import"./index-DjL8CZ6c.js";import"./index--RcUy8xr.js";import"./index-asMoAFqv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbjGEabH.js";import"./addCustomCSSWithScoping-Cxdlbo61.js";import"./Select-Cggb-coC.js";import"./InvisibleMessage-CerZda4F.js";import"./slim-arrow-down-DXROzh0h.js";import"./slim-arrow-down-kG6DCveM.js";import"./ResponsivePopoverCommon.css-Cub4Z5jf.js";import"./ValueStateMessage.css-DUX2b4_-.js";import"./Option-s7hK9Co0.js";import"./ListItemBaseTemplate-CGHSadDi.js";import"./ToolbarButton-BJOjVeYK.js";import"./overflow-C4JlMeBi.js";import"./ToolbarSpacer-CY8ow772.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
