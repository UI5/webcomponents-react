import{j as o}from"./iframe-0eQE2YFm.js";import{useMDXComponents as h}from"./index-CrzDrume.js";import{A as n}from"./ArgTypesWithNote-BP2XfuEC.js";import{C as x}from"./ControlsWithNote-CuCW3ws0.js";import{D as j}from"./DocsHeader-CWIHGE1q.js";import{F as b}from"./CommandsAndQueries-vs4Uf2fG.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DA7tG1fG.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-BRTxZsnk.js";import{T as d}from"./index-CWVm26IK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CO0N_mR_.js";import"./information-DHaKlJ23.js";import"./sys-enter-2-CjOjN1qK.js";import"./alert-D98VDEUp.js";import"./Tag-D9KB_OaV.js";import"./index-Cl7aYaAj.js";import"./index-DXkWzVKM.js";import"./Link-CbRTBueg.js";import"./copy-DNliRkqn.js";import"./copy-BusSvtxV.js";import"./GitHub-Mark-oLHpgb8y.js";import"./TableOfContent-CZ69pxJx.js";import"./index-CAidMbCx.js";import"./index-nxBbAPWP.js";import"./index-CX4m4aKj.js";import"./index-DIoC19fn.js";import"./index-DCkfYqwc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwbZNxPW.js";import"./addCustomCSSWithScoping-CEa4HZHN.js";import"./Select-Dkvc-1du.js";import"./InvisibleMessage-BLfENYQH.js";import"./slim-arrow-down-BPzYFF0q.js";import"./slim-arrow-down-CkX7thXh.js";import"./ResponsivePopoverCommon.css-B4yMTcW1.js";import"./ValueStateMessage.css-CDY6pP0f.js";import"./Option-CJ-Q9Osb.js";import"./ListItemBaseTemplate-CXUx-zU1.js";import"./ToolbarButton--zSbAQko.js";import"./overflow-DhIDKIso.js";import"./ToolbarSpacer-ZpxKYHap.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
