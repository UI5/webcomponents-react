import{j as o}from"./iframe-DbW3_KqJ.js";import{useMDXComponents as s}from"./index-BOUZeiU3.js";import{M as i,C as m}from"./blocks-DqJAVTfM.js";import"./Tag-CrC0d5GD.js";import"./index-ImYws479.js";import{C as c}from"./ControlsWithNote-sP9I0HR5.js";import{D as a}from"./DocsHeader-CqTzeOns.js";import{F as d}from"./CommandsAndQueries-CJXOedaX.js";import{C as r,D as t}from"./Popover.stories-C_49vYZ5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cagswqpw.js";import"./sys-enter-2-DbM4lnFg.js";import"./alert-CAARFYG8.js";import"./index-D2hl9olI.js";import"./index-WvKt5Tsy.js";import"./Link-C0NTxSly.js";import"./copy-D6MG3lVg.js";import"./copy-D0b8WOcv.js";import"./GitHub-Mark-BjeYWFE_.js";import"./TableOfContent-Wm2jpON0.js";import"./index-Cbn-jnZC.js";import"./index-Dzqums5N.js";import"./index-xs8VNv2y.js";import"./index-1dv7YKpz.js";import"./index-CoALISWz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3tP5nwl9.js";import"./addCustomCSSWithScoping-U-EEhqSi.js";import"./settings-CPOuKNF_.js";import"./index-CGCQMYH4.js";import"./index-BAurpHKw.js";import"./ListItemStandard-Dh3kIvJd.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
