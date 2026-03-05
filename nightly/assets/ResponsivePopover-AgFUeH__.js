import{j as o}from"./iframe-Dp_0Yhmg.js";import{useMDXComponents as s}from"./index-BMV3GZRz.js";import{M as i,C as m}from"./blocks-CKlkgOe3.js";import"./Tag-CNZu_-1j.js";import"./index-nFX3Pl_S.js";import{C as c}from"./ControlsWithNote-D6Km52lx.js";import{D as a}from"./DocsHeader-Be3330dq.js";import{F as d}from"./Footer-Pq4yDBwS.js";import"./CommandsAndQueries-DDLi5yBU.js";import"./PageNotFound-BsRlbC58.js";import{C as r,D as t}from"./ResponsivePopover.stories-BJ10R6JI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gl9SwVgW.js";import"./sys-enter-2-0WtHGlhQ.js";import"./alert-Bcw4Fg6E.js";import"./index-DjJhZI7Y.js";import"./index-Cu_XsrMy.js";import"./Link-DcMDvp4G.js";import"./copy-D_yWWCiw.js";import"./copy-BMHKKbyO.js";import"./GitHub-Mark-CsyT0Cam.js";import"./TableOfContent-aahjcOKG.js";import"./index-DpBR8FGa.js";import"./index-DXry597q.js";import"./index-DzgaNcC5.js";import"./index-C5vcogVt.js";import"./index-T5J1jf5G.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCqFx9Uj.js";import"./addCustomCSSWithScoping-CZYJlNXb.js";import"./Illustrations-bZxTgUi1.js";import"./i18n-defaults-C7ICj5-E.js";import"./index-D8f-xZlT.js";import"./index-BmzNDvvc.js";import"./ListItemStandard-B-TzNdgp.js";import"./settings-O9lrexvt.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
