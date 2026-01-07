import{j as o}from"./iframe-CfxMerL-.js";import{useMDXComponents as s}from"./index-VbSVpo3U.js";import{M as i,C as m}from"./blocks-MJ_5uOZ-.js";import"./Tag-BNqMWY4P.js";import"./index-BI2nwMUJ.js";import{C as c}from"./ControlsWithNote-ChDAbAVV.js";import{D as a}from"./DocsHeader-DdlowqXa.js";import{F as d}from"./CommandsAndQueries-Dg2B8ke5.js";import{C as r,D as t}from"./Popover.stories-uXXD-lTb.js";import"./preload-helper-PPVm8Dsz.js";import"./information-V-ZI-MUr.js";import"./sys-enter-2-BPqtZ6Ae.js";import"./alert-BY-nhKm6.js";import"./index-B0xbheog.js";import"./index-BYZXhHpQ.js";import"./Link-BitnWoH9.js";import"./copy-_RJCCudE.js";import"./copy-B6ViSnKB.js";import"./GitHub-Mark-Dty9IhH0.js";import"./TableOfContent-B6X3MkW3.js";import"./index-DP6bCfzy.js";import"./index-IP6CGDwM.js";import"./index-BTQ4bVGw.js";import"./index-DTz3tRU0.js";import"./index-DjUM5b1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CC5ToBw2.js";import"./addCustomCSSWithScoping-El6BaIIi.js";import"./settings-DEtPc8Wj.js";import"./index-BRkWBZ5K.js";import"./index-BPqtDCmb.js";import"./ListItemStandard-BVYApwgA.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
