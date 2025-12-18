import{j as o}from"./iframe-Bn2VcNjM.js";import{useMDXComponents as s}from"./index-B8O2NRso.js";import{M as i,C as m}from"./blocks-DxdZj58t.js";import"./Tag-CP1g89nG.js";import"./index-DP2Vk4N-.js";import{C as c}from"./ControlsWithNote-BRoD9fSY.js";import{D as a}from"./DocsHeader-C1nuuftr.js";import{F as d}from"./CommandsAndQueries-Duu3Cv2i.js";import{C as r,D as t}from"./Popover.stories-DL_T1-Vr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BknIne9K.js";import"./sys-enter-2-BaImGntK.js";import"./alert-B1eI2qVm.js";import"./index-BmvAtQRx.js";import"./index-DwYiaS9z.js";import"./Link-BGC1cQo4.js";import"./copy-Is4R2zLj.js";import"./copy-BNtdn9f6.js";import"./GitHub-Mark-CvaDqKX7.js";import"./TableOfContent-DDKyKiLG.js";import"./index-CPtlwBkZ.js";import"./index-DtkUQ_fK.js";import"./index-FmeoD5BD.js";import"./index-DzdCI7N0.js";import"./index-DQbgfd5S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2LahRfeL.js";import"./addCustomCSSWithScoping-I5ABusfy.js";import"./settings-afU_X4y-.js";import"./index-B8fEAJyK.js";import"./index-CxElvdDf.js";import"./ListItemStandard-BTqMzjs9.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
