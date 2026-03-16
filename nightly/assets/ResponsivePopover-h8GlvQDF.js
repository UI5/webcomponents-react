import{j as o}from"./iframe-BDg7FSoj.js";import{useMDXComponents as s}from"./index-CfS6z3MT.js";import{M as i,C as m}from"./blocks-D274WTCA.js";import"./Tag-D7GKpW6g.js";import"./index-BfRGPCU-.js";import{C as c}from"./ControlsWithNote-hta_rmOq.js";import{D as a}from"./DocsHeader-Br2gHYWL.js";import{F as d}from"./Footer-DcSScdvn.js";import"./CommandsAndQueries-BgLg0c2t.js";import"./PageNotFound-Cz7A_GPz.js";import{C as r,D as t}from"./ResponsivePopover.stories-CGG-uoww.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DD__sQ7N.js";import"./sys-enter-2-Dp2sy9f7.js";import"./alert-C6BvEboW.js";import"./index-DKaIOimk.js";import"./index-CtXj8tW6.js";import"./Link-DweKFefr.js";import"./copy-Dwmjmk6r.js";import"./copy-LtMPx_h3.js";import"./GitHub-Mark-BXWTi3jp.js";import"./TableOfContent-LJE63-X7.js";import"./index-ClFnafIK.js";import"./index-Ca5wJMxN.js";import"./index-YYn2-nAM.js";import"./index-Cr06KJoh.js";import"./index-Cs36UH1Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CX4riDWF.js";import"./addCustomCSSWithScoping-DjKpxhL9.js";import"./Illustrations-BhEYUAiS.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-_v6E_SiW.js";import"./index-CiGBzV4y.js";import"./ListItemStandard-C9BXoiP3.js";import"./settings-CjYJ2CHk.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
