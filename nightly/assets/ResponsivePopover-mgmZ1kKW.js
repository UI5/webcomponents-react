import{j as o}from"./iframe-sx-xxOBR.js";import{useMDXComponents as s}from"./index-BuQKvIRW.js";import{M as i,C as m}from"./blocks-aDd-3g3c.js";import"./Tag-CA4Gam3K.js";import"./index-Dp445doz.js";import{C as c}from"./ControlsWithNote-Dys_kNkz.js";import{D as a}from"./DocsHeader-DBvR3GMa.js";import{F as d}from"./CommandsAndQueries-kGwhyxXS.js";import{C as r,D as t}from"./ResponsivePopover.stories-DiX_IclM.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C7RaeOmw.js";import"./sys-enter-2-CEfOZp2B.js";import"./alert-DrhbDEmw.js";import"./index-FBk0AP6g.js";import"./index-DWVCty5U.js";import"./Link-Bcw7GIzc.js";import"./copy-B68zP34L.js";import"./copy-XBbKngNP.js";import"./GitHub-Mark-DF9OCdIq.js";import"./TableOfContent-CU3p1ulK.js";import"./index-DWZ78BHI.js";import"./index-C5D1K9-k.js";import"./index-CHQv5ZFl.js";import"./index-CHIAWjx6.js";import"./index-CGT84HkW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-PUGMtL6z.js";import"./addCustomCSSWithScoping-ByQ6RofR.js";import"./index-D-8sThiq.js";import"./index-BJvovWPi.js";import"./ListItemStandard-Ctu0x0fN.js";import"./settings-GTb4An8K.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
