import{j as o}from"./iframe-BLa6WP-Y.js";import{useMDXComponents as h}from"./index-DmyZ7oDn.js";import{A as n}from"./ArgTypesWithNote-BD6fleI1.js";import{C as x}from"./ControlsWithNote-BqzULgtj.js";import{D as j}from"./DocsHeader-D_QFI550.js";import{F as b}from"./CommandsAndQueries--XH3UvBD.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-B3YWg1xO.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-D_XmwHWs.js";import{T as d}from"./index-DLeBwmlv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQvFUkOP.js";import"./information-CXW8jYRn.js";import"./sys-enter-2-6G8ZBE6B.js";import"./alert-DchNyR7C.js";import"./Tag-BvWs66nb.js";import"./index-DuOzvotb.js";import"./index-CMlbrigZ.js";import"./Link-DFlOAi3a.js";import"./copy-BXiSgb7G.js";import"./copy-DLqEfzA0.js";import"./GitHub-Mark-BKkgyDPl.js";import"./TableOfContent-e5azbSS1.js";import"./index-BxQvAqCu.js";import"./index-Dw-Jiryq.js";import"./addCustomCSSWithScoping-EByzACcK.js";import"./index-o1aXZ_iF.js";import"./index-9PttVNs-.js";import"./index-CD532uFx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtI0CwXV.js";import"./Select-DFDzYy_c.js";import"./InvisibleMessage-BbXAREzN.js";import"./slim-arrow-down-CmTuLlvX.js";import"./slim-arrow-down-DW1bb7Yi.js";import"./ResponsivePopoverCommon.css-Ce2_DLGD.js";import"./ValueStateMessage.css-DNcxHwSS.js";import"./Option-X5MvP6Ez.js";import"./ListItemBaseTemplate-SBDokyJS.js";import"./ToolbarButton-DjU-tBNv.js";import"./overflow-D9tp7_Kv.js";import"./overflow-B3sqG1-s.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
