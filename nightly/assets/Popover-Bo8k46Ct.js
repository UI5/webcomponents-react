import{j as o}from"./iframe-EDZrvS0_.js";import{useMDXComponents as i}from"./index-D_Zuzn6o.js";import{M as s,C as m}from"./blocks-CJ57z4uw.js";import"./Tag-Cv2B1DS4.js";import"./index-Bz0BV9YI.js";import{C as c}from"./ControlsWithNote-Jg7jsBfN.js";import{D as a}from"./DocsHeader-BlRpJkzJ.js";import{F as d}from"./Footer-BqU25DvW.js";import"./CommandsAndQueries-DeBGirNK.js";import"./PageNotFound-BnvHWpv6.js";import{C as r,D as t}from"./Popover.stories-DaDnOLC7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CAvj8-k7.js";import"./sys-enter-2-Eez9oUbi.js";import"./alert-nmCIz_tp.js";import"./index-DezAYIwY.js";import"./index-CZdLboFr.js";import"./Link-B5fvjtF5.js";import"./copy-DNtWNSim.js";import"./copy-Duyva9GD.js";import"./GitHub-Mark-BxmMkbzC.js";import"./TableOfContent-CKHhbrGg.js";import"./index-D6CBwRDo.js";import"./index-cZywnC0F.js";import"./index-bU8se7-X.js";import"./index-C-NT2IXI.js";import"./index-dnOa7Ewn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_EBjNmUx.js";import"./addCustomCSSWithScoping-2V-LQLPO.js";import"./Illustrations-Cp5J5qhx.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-CN-5jPNW.js";import"./index-BUog9t61.js";import"./index-Bvx781mh.js";import"./ListItemStandard-CnWB-RIw.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
