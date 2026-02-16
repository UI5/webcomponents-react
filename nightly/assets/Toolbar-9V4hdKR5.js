import{j as o}from"./iframe-COmYM7FM.js";import{useMDXComponents as f}from"./index-nJK3ZT8W.js";import{A as t}from"./ArgTypesWithNote-Plez4xF8.js";import{C as x}from"./ControlsWithNote-D0uv15nF.js";import{D as j}from"./DocsHeader-CST8qEMS.js";import{F as b}from"./CommandsAndQueries-BOWLtTE6.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DAY1TuCU.js";import{C as n,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-B5yzd5Cs.js";import{T as d}from"./index-Bef-Lm9H.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8dZG1YHw.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./Tag-C7vo2194.js";import"./index-DFr8Hmr1.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./copy-Dq2e23NG.js";import"./copy-CXZAgH3a.js";import"./GitHub-Mark-qFlD-nLv.js";import"./TableOfContent-tjnC9ti3.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./Select-B6eJ5Vgx.js";import"./InvisibleMessage-B-FhaSLI.js";import"./slim-arrow-down-LiCVxuMd.js";import"./slim-arrow-down-jGOJjhpo.js";import"./ResponsivePopoverCommon.css-C4KWqDDR.js";import"./ValueStateMessage.css-DI3W06n_.js";import"./Option-CKR1byVj.js";import"./ListItemBaseTemplate-B6EaFX9g.js";import"./ToolbarButton-C3FwjFmq.js";import"./overflow-DYUd4qgm.js";import"./ToolbarSpacer-Dbfjzi9Z.js";function h(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:n}),`
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
