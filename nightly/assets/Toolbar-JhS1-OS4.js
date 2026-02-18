import{j as o}from"./iframe-BeAHz6cC.js";import{useMDXComponents as f}from"./index-IuDgzHrg.js";import{A as t}from"./ArgTypesWithNote-BK93y46k.js";import{C as x}from"./ControlsWithNote-BukBvQQM.js";import{D as j}from"./DocsHeader-kIeUPmA8.js";import{F as b}from"./CommandsAndQueries-D97dtm9O.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BFIGDLi7.js";import{C as n,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-Dadtmsxk.js";import{T as d}from"./index-D2CZda87.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxL3HTx3.js";import"./information-CKz_vH8g.js";import"./sys-enter-2-DjAoJc05.js";import"./alert-DbaxRKJL.js";import"./Tag-D9qmbNXw.js";import"./index-D74mYq85.js";import"./index-DADITnZh.js";import"./Link-DcHF9WJI.js";import"./copy-B_-U20rM.js";import"./copy-CeLNiPKq.js";import"./GitHub-Mark-BsL0uO8Y.js";import"./TableOfContent-C295TbGK.js";import"./index-Cz53yeIo.js";import"./index-BJX7RQS4.js";import"./index-B-C-Jm2N.js";import"./index-BgUv4ZgK.js";import"./index-dtYUUSxT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B0TPubq3.js";import"./addCustomCSSWithScoping--2mgu3TN.js";import"./Select-BJKmcwBb.js";import"./InvisibleMessage-BniauCX7.js";import"./slim-arrow-down-C6Y9ZcYg.js";import"./slim-arrow-down-CnwrFvZs.js";import"./ResponsivePopoverCommon.css-DmlFnob0.js";import"./ValueStateMessage.css-DKcV5GT7.js";import"./Option-BP8-vTtd.js";import"./ListItemBaseTemplate-SOqbHsMM.js";import"./ToolbarButton-Obi1ibRk.js";import"./overflow-CMni7Rk9.js";import"./ToolbarSpacer-DjludFgu.js";function h(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:n}),`
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
