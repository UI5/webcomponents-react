import{j as o}from"./iframe-B9oS8Tdw.js";import{useMDXComponents as i}from"./index-DBcwplNT.js";import{M as s,C as m}from"./blocks-n99WgqUD.js";import"./Tag-C4hdjWJC.js";import"./index-Bpds4hIG.js";import{C as c}from"./ControlsWithNote-CU7GlRfQ.js";import{D as a}from"./DocsHeader-D3xSEYm1.js";import{F as d}from"./Footer-B2MFyv0P.js";import"./CommandsAndQueries-NcZGCQIw.js";import"./PageNotFound-CdK5m3jv.js";import{C as r,D as t}from"./Popover.stories-Cp0pLHmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BlcYwQMc.js";import"./sys-enter-2-DdkiI-3L.js";import"./alert-D212h0_R.js";import"./index-BYYicg2U.js";import"./index-0NZf9e3S.js";import"./Link-BttQiJAm.js";import"./copy-C9Ot4HgH.js";import"./copy-Bqdwh9J4.js";import"./GitHub-Mark-B_hr1EaH.js";import"./TableOfContent-D0gNO-3P.js";import"./index-C2K37CCg.js";import"./index-DzuQRrNG.js";import"./index-MP9MDZQa.js";import"./index-CIPzfYgd.js";import"./index-XdY2VQGh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CKo2xI1N.js";import"./addCustomCSSWithScoping-BjXuQDKZ.js";import"./Illustrations-Hb5RsbMM.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-DIaK4Die.js";import"./index-GvbFIdTy.js";import"./index-B7hwJ3qq.js";import"./ListItemStandard-BgNSnN8f.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...i(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
