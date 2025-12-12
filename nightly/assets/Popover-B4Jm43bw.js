import{j as o}from"./iframe-CA3Ho9Q5.js";import{useMDXComponents as s}from"./index-BSP_ypsD.js";import{M as i,C as m}from"./blocks-duj_cvae.js";import"./Tag-C7EDP0wF.js";import"./index-B2KbXcP2.js";import{C as c}from"./ControlsWithNote-DvkiAanr.js";import{D as a}from"./DocsHeader-Cfs20M5C.js";import{F as d}from"./CommandsAndQueries-CpnGQ0tY.js";import{C as r,D as t}from"./Popover.stories-Bm6aZ8nq.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0PKU0zc.js";import"./sys-enter-2-BzmXGgFI.js";import"./alert-DOfQq82s.js";import"./index-QQ_2tXfB.js";import"./index-Cj36scYa.js";import"./Link-B9lvI_mX.js";import"./copy-sPmVFkhH.js";import"./copy-Cirx0xPf.js";import"./GitHub-Mark-BkqTNzcC.js";import"./TableOfContent-Bhgz5xwr.js";import"./index-CS7zB70b.js";import"./index-B1DuQcex.js";import"./index-Vj9BxWeO.js";import"./index-DJDcB98R.js";import"./index-CnX6lHZc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CziqpW1M.js";import"./addCustomCSSWithScoping-CmwUGghA.js";import"./settings-sBnL1p2q.js";import"./index-DWY9VANS.js";import"./index-CnEeNT_m.js";import"./ListItemStandard-DKlWXx6n.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
