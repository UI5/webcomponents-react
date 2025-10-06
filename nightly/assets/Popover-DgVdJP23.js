import{j as o}from"./iframe-BcULqSVx.js";import{useMDXComponents as s}from"./index-DimjqcOY.js";import{M as i,C as m}from"./blocks-SeGv6FI8.js";import"./Tag-DE8sZ6fR.js";import"./index-CMCy2tRg.js";import{C as c}from"./ControlsWithNote-vHgKyDQ4.js";import{D as a}from"./DocsHeader-rcaw3yWJ.js";import{F as d}from"./CommandsAndQueries-Bjxahy8c.js";import{C as r,D as t}from"./Popover.stories-CXZ-B43c.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C0qTg3A6.js";import"./sys-enter-2-hVsohqhg.js";import"./alert-CRlYmZ6n.js";import"./index-D0A2Ruup.js";import"./index-CEmXgIma.js";import"./Link-D2-7Bb71.js";import"./copy-DixMi52h.js";import"./copy-DrZjSCYt.js";import"./GitHub-Mark-CX2aPwNN.js";import"./TableOfContent-BwCnFx1q.js";import"./index-DfNAKNyC.js";import"./index-Bht3WMEt.js";import"./index-Cd7o7phm.js";import"./index-nOLHZmf_.js";import"./index-72f5Qi1p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYesK5yK.js";import"./addCustomCSSWithScoping-DZ8lcGy4.js";import"./settings-DQ2ylyfP.js";import"./index-ANJkbmQy.js";import"./index-DbHuW_um.js";import"./ListItemStandard-BtQP2CZp.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
