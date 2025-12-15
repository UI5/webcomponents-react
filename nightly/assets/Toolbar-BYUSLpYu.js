import{j as o}from"./iframe-BVsLYlhe.js";import{useMDXComponents as h}from"./index-DavU5a3Y.js";import{A as n}from"./ArgTypesWithNote-DXBdJ7lC.js";import{C as x}from"./ControlsWithNote-CGEaDRv0.js";import{D as j}from"./DocsHeader-DoAVvyax.js";import{F as b}from"./CommandsAndQueries-Bi9b4xK_.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BwdcnqOn.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DsugqRQq.js";import{T as d}from"./index-Caip4Msx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Chy_S0qP.js";import"./information-Q1gDT6BU.js";import"./sys-enter-2-CVfnD9eL.js";import"./alert-BQuV4PvU.js";import"./Tag-CNJ-l2ra.js";import"./index-BZsG0oyU.js";import"./index-CQv5SAoi.js";import"./Link-mimmL_0g.js";import"./copy-CTnQUdWw.js";import"./copy-hvSX-Foh.js";import"./GitHub-Mark-CEEZzxvN.js";import"./TableOfContent--O-E1U53.js";import"./index-BBlqkBew.js";import"./index-CppXcbvf.js";import"./index-pqTqdxQB.js";import"./index-bVRMu9zO.js";import"./index-2NXGICNv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dhuu23v1.js";import"./addCustomCSSWithScoping-CKzpaFfQ.js";import"./Select-B9O7SbWK.js";import"./InvisibleMessage-COd6vRv-.js";import"./slim-arrow-down-CyFYuexk.js";import"./slim-arrow-down-DhCWTPrz.js";import"./ResponsivePopoverCommon.css-uHz60RXl.js";import"./ValueStateMessage.css-BGnf7WuL.js";import"./Option-BmneA1aN.js";import"./ListItemBaseTemplate-DTp4ZwAc.js";import"./ToolbarButton-Bh9DImOV.js";import"./overflow-CvJUzxEO.js";import"./ToolbarSpacer-C1zhMyVL.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
