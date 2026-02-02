import{j as o}from"./iframe-D9fHiNXF.js";import{useMDXComponents as s}from"./index-DRx499Oz.js";import{M as i,C as m}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import{C as c}from"./ControlsWithNote-_PgGUMw2.js";import{D as a}from"./DocsHeader-fdSKAoIc.js";import{F as d}from"./CommandsAndQueries-CDyFXIce.js";import{C as r,D as t}from"./ResponsivePopover.stories-BgKTriRc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./index-BVc7ik8a.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./copy-ClYjzaDz.js";import"./copy-FG9bHXhV.js";import"./GitHub-Mark-BVG-IHke.js";import"./TableOfContent-BNFLd8cv.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./index-Mf30Azwl.js";import"./index-PLRKK6I8.js";import"./ListItemStandard-BBXUErcD.js";import"./settings-BjOnEk3Y.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <ResponsivePopover
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
