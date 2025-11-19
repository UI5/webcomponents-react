import{j as o}from"./iframe-DNMTfzpK.js";import{useMDXComponents as h}from"./index-BN2xRXE4.js";import{A as n}from"./ArgTypesWithNote-Ba-zOtNp.js";import{C as x}from"./ControlsWithNote-Bm6pwLxQ.js";import{D as j}from"./DocsHeader-BUJ-uh18.js";import{F as b}from"./CommandsAndQueries-p_oo0qut.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-D7TGtWIi.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-BDZNsrAZ.js";import{T as d}from"./index-BV-OUxMy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-T3fFkT4y.js";import"./information-CfBdub9z.js";import"./sys-enter-2-D1yMqvha.js";import"./alert-ovSFIgO_.js";import"./Tag-DMQsT8Q8.js";import"./index-BVaTbyf5.js";import"./index-3Dfb5Jbe.js";import"./Link-QK9m66TA.js";import"./copy-D2fSnfVl.js";import"./copy-mCRNeeck.js";import"./GitHub-Mark-Dh9D3dJo.js";import"./TableOfContent-CHa5NTHN.js";import"./index-c_AmigIx.js";import"./index-B8yoe6T_.js";import"./index-CijDEz0A.js";import"./index-BmIqw6uo.js";import"./index-BXvVq-3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdXxvAEF.js";import"./addCustomCSSWithScoping-DGsOsNkK.js";import"./Select-nYImCzGD.js";import"./InvisibleMessage-BAVpRLuQ.js";import"./slim-arrow-down-BINXR2kD.js";import"./slim-arrow-down-BeqBYoq7.js";import"./ResponsivePopoverCommon.css-BpovPhMy.js";import"./ValueStateMessage.css-jWH0iavP.js";import"./Option-BWgO6mlW.js";import"./ListItemBaseTemplate-mKi-cdJU.js";import"./ToolbarButton-C3AV18gf.js";import"./overflow-g5Q9ArSx.js";import"./ToolbarSpacer-AGigiHQb.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
