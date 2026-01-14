import{j as o}from"./iframe-B1b_brho.js";import{useMDXComponents as s}from"./index-D7Qzgic5.js";import{M as i,C as m}from"./blocks-CVoG47OJ.js";import"./Tag-Ch3HOxAY.js";import"./index-KKxhZSNI.js";import{C as c}from"./ControlsWithNote-ChVliCHp.js";import{D as a}from"./DocsHeader-BQ9AtgTJ.js";import{F as d}from"./CommandsAndQueries-CtGN4dkM.js";import{C as r,D as t}from"./ResponsivePopover.stories-BSPf2Qka.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cn-hRts7.js";import"./sys-enter-2-dderIbO6.js";import"./alert-Bjr3m2l0.js";import"./index-Dk0QMB33.js";import"./index-8EjJ8GJV.js";import"./Link-Pv2BqkKv.js";import"./copy-BELXr-QP.js";import"./copy-Dph3WiPG.js";import"./GitHub-Mark-CJ3BuCOd.js";import"./TableOfContent-DsWGhJxF.js";import"./index-D5FuCmER.js";import"./index-BVeNd2GI.js";import"./index-Bk9hFp20.js";import"./index-h6jImvMY.js";import"./index-8w0MsWgV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC0Swz4-.js";import"./addCustomCSSWithScoping-Dg_rT4l9.js";import"./index-BIOacvM6.js";import"./index-FvgLRY5G.js";import"./ListItemStandard-CeVIH9EC.js";import"./settings-7z4AIWo7.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
