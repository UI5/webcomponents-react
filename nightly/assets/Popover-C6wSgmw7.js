import{j as o}from"./iframe-HvCg7yUW.js";import{useMDXComponents as s}from"./index-CE4Hfwqi.js";import{M as i,C as m}from"./blocks-D8Z2Dyw_.js";import"./Tag-BplAIBUz.js";import"./index-DuAmAsky.js";import{C as c}from"./ControlsWithNote-C4sDrxAq.js";import{D as a}from"./DocsHeader-CP6cDlJa.js";import{F as d}from"./CommandsAndQueries-DUi4l31N.js";import{C as r,D as t}from"./Popover.stories-DxT1EmhO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CCnVD-2j.js";import"./sys-enter-2-X1IC7sb7.js";import"./alert-Dmmp7J4K.js";import"./index-7L-T-PBR.js";import"./index-DPhzHQJ0.js";import"./Link-Bg-vZYST.js";import"./copy-DKrfWEvD.js";import"./copy-DBsC0j81.js";import"./GitHub-Mark-vmmzZbgB.js";import"./TableOfContent-BCbq4pBF.js";import"./index-iO1m8u6x.js";import"./index-BaM0OdR1.js";import"./index-DmLJcEoD.js";import"./index-D5kiTLsH.js";import"./index-DpfgSJii.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQB1q1h5.js";import"./addCustomCSSWithScoping-Bswf-IYk.js";import"./settings-Ds6Qr-yr.js";import"./index-Dm7NKhPt.js";import"./index-Bw2I8p5D.js";import"./ListItemStandard-BsRZsB4W.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
