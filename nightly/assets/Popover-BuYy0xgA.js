import{j as o}from"./iframe-DXIHBwMx.js";import{useMDXComponents as s}from"./index-DxplZHhB.js";import{M as i,C as m}from"./blocks-q4g2VrtR.js";import"./Tag-tdzXLFPn.js";import"./index-CeX4wAvR.js";import{C as c}from"./ControlsWithNote-C_Gk4SYm.js";import{D as a}from"./DocsHeader-BBm2Da5F.js";import{F as d}from"./CommandsAndQueries-Bq7v73lL.js";import{C as r,D as t}from"./Popover.stories-WLgJvUzD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gul-J4WB.js";import"./sys-enter-2-6IAFnl06.js";import"./alert-B38L7NYF.js";import"./index-DVpq5CSs.js";import"./index-DkkEQ9_P.js";import"./Link-BvSaBL9U.js";import"./copy-1AUJX5e3.js";import"./copy-yrZW5TrM.js";import"./GitHub-Mark-C0TAXpUX.js";import"./TableOfContent-8Km75nCb.js";import"./index-J54q0dgd.js";import"./index-8pDI1Lay.js";import"./index-Dl76_vfU.js";import"./index-DPgFjJws.js";import"./index-Bv3_HAKL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BcuYxUko.js";import"./addCustomCSSWithScoping-p2bq4BQn.js";import"./settings-VW8oUHKP.js";import"./index-Ltqvt3ql.js";import"./index-DeY_iIAn.js";import"./ListItemStandard-BA8y93oi.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
