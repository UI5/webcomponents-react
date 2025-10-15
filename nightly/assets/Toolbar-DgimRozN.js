import{j as o}from"./iframe-DNwXmN6w.js";import{useMDXComponents as h}from"./index-Dbs3KJZC.js";import{A as n}from"./ArgTypesWithNote-DA2oyvkd.js";import{C as x}from"./ControlsWithNote-BubmKZw0.js";import{D as j}from"./DocsHeader-B68qGWWI.js";import{F as b}from"./CommandsAndQueries-BAoKQ9N_.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-ClaQShTE.js";import{C as r,D as a,O,T as i,a as c,b as l,c as m}from"./Toolbar.stories-D9jiCdqr.js";import{T as d}from"./index-FPhe5khb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYGT2EhP.js";import"./information-BcSrdT-8.js";import"./sys-enter-2-D4ODuMey.js";import"./alert-Dl0J_z1v.js";import"./Tag-9F78ZQdp.js";import"./index-CBh039oE.js";import"./index-B8OlZcJ4.js";import"./Link-C02NJVw1.js";import"./copy-CEU6cvPY.js";import"./copy-EN-_ABXk.js";import"./GitHub-Mark-7ysssstv.js";import"./TableOfContent-BZ8zuPOd.js";import"./index-DuyT38UB.js";import"./index-aVApIanM.js";import"./index-BLy7Rxlq.js";import"./index-nHmWKiTx.js";import"./index-rN24S36o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNrVdT-5.js";import"./addCustomCSSWithScoping-os-Xpktn.js";import"./Select-1NfyOvLt.js";import"./InvisibleMessage-R_WRhHfZ.js";import"./slim-arrow-down-DIzrL0Ja.js";import"./slim-arrow-down-yZ0Tj4rx.js";import"./ResponsivePopoverCommon.css-CsNV6Vt5.js";import"./ValueStateMessage.css-BmoKZehd.js";import"./Option-8CI-W5Cq.js";import"./ListItemBaseTemplate-D49sgBgx.js";import"./ToolbarButton-BZWyaA9x.js";import"./overflow-DondHX3Y.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:a}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:a}),`
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
`,o.jsx(p,{of:i}),`
`,o.jsx(n,{metaOf:r,of:i}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function co(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{co as default};
