import{j as o}from"./iframe-CptD6jcI.js";import{useMDXComponents as h}from"./index-fCXI9bYA.js";import{A as n}from"./ArgTypesWithNote-CBqu-eCl.js";import{C as x}from"./ControlsWithNote-e4fYtvzI.js";import{D as j}from"./DocsHeader-DDhS7rer.js";import{F as b}from"./CommandsAndQueries-DdKyoCdZ.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BIcH59f6.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-CfagnGZS.js";import{T as d}from"./index-BTV8DtOU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iKMFJQaw.js";import"./information-_8TOion-.js";import"./sys-enter-2-etHRmL56.js";import"./alert-DCc-ugqC.js";import"./Tag-BGUo9GB2.js";import"./index-DF7XtlGw.js";import"./index-Bhv4kUG7.js";import"./Link-BtaWbEJj.js";import"./copy-D4qvgl1G.js";import"./copy-B9_rc4hl.js";import"./GitHub-Mark-DukNVPVs.js";import"./TableOfContent-BtRD7nAW.js";import"./index-CEYNy4qZ.js";import"./index-CBzPckl1.js";import"./index-CDMlRbU-.js";import"./index-B4fjS4Ci.js";import"./index-DUbGwyGv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbqdlCgb.js";import"./addCustomCSSWithScoping-CNZcQBPm.js";import"./Select-Ctxh64Gj.js";import"./InvisibleMessage-F5htpLuT.js";import"./slim-arrow-down-BhV5Za_4.js";import"./slim-arrow-down-CjyrJWSM.js";import"./ResponsivePopoverCommon.css-rLzLw65f.js";import"./ValueStateMessage.css-DacNSHpQ.js";import"./Option-B6yV-Jjr.js";import"./ListItemBaseTemplate-BppEr7SM.js";import"./ToolbarButton-Dy7Wyqz7.js";import"./overflow-CzhoadNP.js";import"./ToolbarSpacer-OyVYKoAH.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
