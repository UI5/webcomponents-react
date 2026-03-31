import{j as o}from"./iframe-D2WvPMQO.js";import{u as s,M as i,C as m}from"./blocks-Cy8tSwuN.js";import"./Tag-77Zcvr-C.js";import"./index-iukRSAfG.js";import{C as c}from"./ControlsWithNote-W2MnsLWm.js";import{D as a}from"./DocsHeader-Dn8n_uow.js";import{F as d}from"./Footer-CcjLnWXZ.js";import"./CommandsAndQueries-GHyhdZ5z.js";import"./PageNotFound--xUWQamC.js";import{C as r,D as t}from"./ResponsivePopover.stories-BdZV_6RP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8cZAxRB.js";import"./sys-enter-2-dY36Ay86.js";import"./alert-C9lTQ0KQ.js";import"./index-35M5Bral.js";import"./index-itXLTY8o.js";import"./Link-B9O6M9m0.js";import"./copy-DMwbApOt.js";import"./copy-DEDrq7eG.js";import"./GitHub-Mark-DoIHarqw.js";import"./TableOfContent-BVPApRYH.js";import"./index-CEhSDieG.js";import"./index-CNWb7VVG.js";import"./index-D85ZyHtS.js";import"./index-BHdhu-GL.js";import"./index-PtvYek1_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BEnkyBc2.js";import"./addCustomCSSWithScoping-qrEX4tTM.js";import"./Illustrations-T5lVOB-y.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-BCj0VUVv.js";import"./index-D6RCLh_r.js";import"./ListItemStandard-D9P5PrOT.js";import"./settings-BKHPv5fF.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
`,o.jsx(d,{})]})}function K(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{K as default};
