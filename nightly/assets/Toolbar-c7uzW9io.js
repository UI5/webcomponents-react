import{j as o}from"./iframe-DjjZnZd-.js";import{useMDXComponents as h}from"./index-CHlimz1C.js";import{A as n}from"./ArgTypesWithNote-CghU0XYN.js";import{C as x}from"./ControlsWithNote-B7_TuRmB.js";import{D as j}from"./DocsHeader-D0B1H-CU.js";import{F as b}from"./CommandsAndQueries-WOCJDSHC.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BmkOoUGB.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-CTPbyG-W.js";import{T as d}from"./index-mwzBMyJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CA-PQGxD.js";import"./information-DMdo7dcL.js";import"./sys-enter-2-CptPzh8p.js";import"./alert-CrXk_arY.js";import"./Tag-CUGM_Neu.js";import"./index-BcQoqGu9.js";import"./index-BFZ4A4pM.js";import"./Link-DOn3kiwy.js";import"./copy-D4XaW_IT.js";import"./copy-ZK04gjjU.js";import"./GitHub-Mark-gWNFyJ1u.js";import"./TableOfContent-D7cDbF3M.js";import"./index-CT-jhGw4.js";import"./index-BgVmtdEP.js";import"./index-DmOXd_eL.js";import"./index-nsJY5Xz1.js";import"./index-BB6l50am.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B12gaSwN.js";import"./addCustomCSSWithScoping-vHMhzzpD.js";import"./Select-5vzl-izW.js";import"./InvisibleMessage-8UwgTYD7.js";import"./slim-arrow-down-DPNABw5m.js";import"./slim-arrow-down-CxXp2snF.js";import"./ResponsivePopoverCommon.css-C4iintSn.js";import"./ValueStateMessage.css-Cunvc68_.js";import"./Option-DqRKlcDR.js";import"./ListItemBaseTemplate-6SXMeQ_0.js";import"./ToolbarButton-c9QQY_yK.js";import"./overflow-e3q8-AK4.js";import"./ToolbarSpacer-C8RWWsgV.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
