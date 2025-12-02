import{j as o}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as h}from"./index-7yLcmjFP.js";import{A as n}from"./ArgTypesWithNote-n8jO8V14.js";import{C as x}from"./ControlsWithNote-Xba4zRPV.js";import{D as j}from"./DocsHeader-CZJ1s6Cq.js";import{F as b}from"./CommandsAndQueries-B5y1yjIv.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CBo7THUN.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DmntTjSz.js";import{T as d}from"./index-ax0duu3e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qq5TSXaV.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./Tag-BnlqX_yt.js";import"./index-BCADQjVB.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./copy-DRncM3oG.js";import"./copy-CcXkheL2.js";import"./GitHub-Mark-AuYrpZ4h.js";import"./TableOfContent-CwQN62Px.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./Select-CuF6Vj0b.js";import"./InvisibleMessage-LTfrv4dT.js";import"./slim-arrow-down-DYL641WE.js";import"./slim-arrow-down-Y4c6YvG2.js";import"./ResponsivePopoverCommon.css-LID13WBa.js";import"./ValueStateMessage.css-DQQ-VE9Z.js";import"./Option-v8zhZtfK.js";import"./ListItemBaseTemplate-DUdMr_EH.js";import"./ToolbarButton-B4gjBv-8.js";import"./overflow-CXovIEF5.js";import"./ToolbarSpacer-CRpm68Mv.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
