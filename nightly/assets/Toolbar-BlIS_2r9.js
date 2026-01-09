import{j as o}from"./iframe-Cr6oQmRd.js";import{useMDXComponents as h}from"./index-evhaF9WH.js";import{A as n}from"./ArgTypesWithNote-CrxJkNTs.js";import{C as x}from"./ControlsWithNote-DR3nmE-h.js";import{D as j}from"./DocsHeader-BvFPgHhe.js";import{F as b}from"./CommandsAndQueries-DyaEp24s.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BuJgXu1r.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DSK7bYNu.js";import{T as d}from"./index-Cco-JSHD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0N3ti0U.js";import"./information-ClN6WTRB.js";import"./sys-enter-2-Bqn_SCi3.js";import"./alert-D5OzLbEL.js";import"./Tag-BQohtkMw.js";import"./index-1zaXUkR9.js";import"./index-D3MvNgPx.js";import"./Link-Zz-QOIrn.js";import"./copy-Cx5K14FI.js";import"./copy-CZb07l2e.js";import"./GitHub-Mark-aSkr3YYx.js";import"./TableOfContent-C6-4XiSf.js";import"./index-TJ6Pynu-.js";import"./index-ClHBD-hy.js";import"./index-DcIQ9jq2.js";import"./index-D6mcpJOs.js";import"./index-L71irp-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN2SmbWo.js";import"./addCustomCSSWithScoping-zjLKSZUa.js";import"./Select-CcNl591L.js";import"./InvisibleMessage-thzwE5Eq.js";import"./slim-arrow-down-ZsLuCJkq.js";import"./slim-arrow-down-DRXwOi-S.js";import"./ResponsivePopoverCommon.css-Cg9mOybv.js";import"./ValueStateMessage.css-D7Snw4FC.js";import"./Option-BERpoTxk.js";import"./ListItemBaseTemplate-FGeazb6H.js";import"./ToolbarButton-C8QZAmnP.js";import"./overflow-DFZjIDJO.js";import"./ToolbarSpacer-DFS4Gpvt.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
