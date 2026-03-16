import{j as o}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as s}from"./index-JegEFivd.js";import{M as i,C as m}from"./blocks-DoFVSa5q.js";import"./Tag-C3CTuin_.js";import"./index-_SHIyctb.js";import{C as c}from"./ControlsWithNote-BP9lHm3C.js";import{D as a}from"./DocsHeader-CD39QVXA.js";import{F as d}from"./Footer-Cg75ltPq.js";import"./CommandsAndQueries-Dlnf61eM.js";import"./PageNotFound-BZ_kgysZ.js";import{C as r,D as t}from"./ResponsivePopover.stories-hxXgoHrS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./index-ByjlU9SJ.js";import"./index-BIHxokcD.js";import"./Link-BR4DnOSS.js";import"./copy-Dye7Zr7r.js";import"./copy-BJgUS9X2.js";import"./GitHub-Mark-Bbgzio7S.js";import"./TableOfContent--cHXPcXI.js";import"./index-CiSOiezA.js";import"./index-nLMQvitA.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-BRxQsxgX.js";import"./index-C49P15Ym.js";import"./ListItemStandard-CuB6Oo--.js";import"./settings--DDZpuL8.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
