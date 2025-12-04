import{j as o}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as s}from"./index-D0JiuHQ4.js";import{M as i,C as m}from"./blocks-BjYhsAle.js";import"./Tag-DTGJG_3A.js";import"./index-D7exUdgR.js";import{C as c}from"./ControlsWithNote-AZb4CeHf.js";import{D as a}from"./DocsHeader-Ck2be5Yc.js";import{F as d}from"./CommandsAndQueries-DJtqUE3T.js";import{C as r,D as t}from"./ResponsivePopover.stories-C7y6ra2r.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./index-BryeGZHH.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./copy-65kpRtEk.js";import"./copy-BYLHU9Z4.js";import"./GitHub-Mark-DKAUGK9x.js";import"./TableOfContent-DpdaqcN6.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";import"./index-D_tUOp4t.js";import"./index-CmB-uMll.js";import"./ListItemStandard-BlHk0Rap.js";import"./settings-ue12HTO0.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
