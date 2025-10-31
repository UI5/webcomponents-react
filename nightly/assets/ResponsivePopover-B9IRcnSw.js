import{j as o}from"./iframe-Do6vb0_F.js";import{useMDXComponents as s}from"./index-CjAG28Zi.js";import{M as i,C as m}from"./blocks-BSmhBV8W.js";import"./Tag-Bm_1Oa-G.js";import"./index-DFaXcVzr.js";import{C as c}from"./ControlsWithNote-Yo9YxzeI.js";import{D as a}from"./DocsHeader-CLVKUgBk.js";import{F as d}from"./CommandsAndQueries-DNVLBibD.js";import{C as r,D as t}from"./ResponsivePopover.stories-BceCcCiJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-kf1Y_V0y.js";import"./sys-enter-2-Dgg9scSJ.js";import"./alert-eluNIvxZ.js";import"./index-CziNROS9.js";import"./index-CRpB2mc_.js";import"./Link-DfSClIn0.js";import"./copy-6yP1MdvU.js";import"./copy-CtSFAv-a.js";import"./GitHub-Mark-BQKgzCKu.js";import"./TableOfContent-DFD41kkG.js";import"./index-Bn7jdYPg.js";import"./index-CjAZJ6mP.js";import"./index-B7DmSRaZ.js";import"./index-euaiQ6-T.js";import"./index-BKzdQw4A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-x3ovOdYp.js";import"./addCustomCSSWithScoping-DMyk9VX6.js";import"./index-iowTYD53.js";import"./index-DvB6BGuZ.js";import"./ListItemStandard-Dz67dIqH.js";import"./settings-ChvCVI1H.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
