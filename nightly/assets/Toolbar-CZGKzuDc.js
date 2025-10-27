import{j as o}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as h}from"./index-BPvgxWCZ.js";import{A as n}from"./ArgTypesWithNote-BXPyRU14.js";import{C as x}from"./ControlsWithNote-DgPjGzi5.js";import{D as j}from"./DocsHeader-G7O3GL-a.js";import{F as b}from"./CommandsAndQueries-Q6uRMqWv.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-De_aBrmo.js";import{C as r,D as a,O,T as i,a as c,b as l,c as m}from"./Toolbar.stories-EewMXnNO.js";import{T as d}from"./index-kHA-lGi3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4cnUaLM.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./Tag-BKx3QN9f.js";import"./index-VZQHlfm7.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./copy-D7cIngW2.js";import"./copy-C1tv-pSG.js";import"./GitHub-Mark-JTvzvp0g.js";import"./TableOfContent-CnHAVL07.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";import"./Select-BM-L4rd4.js";import"./InvisibleMessage-BnecaueW.js";import"./slim-arrow-down-BF5Yax_r.js";import"./slim-arrow-down-BzVC3qLM.js";import"./ResponsivePopoverCommon.css-D4L-fz7S.js";import"./ValueStateMessage.css-Da6bxDPp.js";import"./Option-KMv42Mqm.js";import"./ListItemBaseTemplate-zRKoETe6.js";import"./ToolbarButton-C8TTGZa7.js";import"./overflow-D0ZpjiYm.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
