import{j as o}from"./iframe-BThE7jKf.js";import{useMDXComponents as s}from"./index-B2RJGRd4.js";import{M as i,C as m}from"./blocks-Dnvf3bz-.js";import"./Tag-9-1VZojo.js";import"./index-CTUpkleH.js";import{C as c}from"./ControlsWithNote-CRhelvga.js";import{D as a}from"./DocsHeader-_LhGhGyx.js";import{F as d}from"./CommandsAndQueries-D1tgAUE5.js";import{C as r,D as t}from"./Popover.stories-CrHHLXWZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CcuaLhCB.js";import"./sys-enter-2-DHGMesz_.js";import"./alert-DuPQa3D0.js";import"./index-Dg0PU8qR.js";import"./index-DcLqsBQ7.js";import"./Link-BAiulGQ4.js";import"./copy-CPScwyuO.js";import"./copy-CbUREYSb.js";import"./GitHub-Mark-1WIkjLpH.js";import"./TableOfContent-DHJ-ZZsu.js";import"./index-BDRlpx-X.js";import"./index-Di66tdVG.js";import"./index-cpbfvu6C.js";import"./index-i-aKPvBx.js";import"./index-DLO7Rqwk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbRZFTjL.js";import"./addCustomCSSWithScoping-BhW-iIae.js";import"./settings-TqXR43qR.js";import"./index-HDPq3XGJ.js";import"./index-BHuibshv.js";import"./ListItemStandard-Cfqfrlti.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
