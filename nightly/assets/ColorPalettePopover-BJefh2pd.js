import{j as o}from"./iframe-1ixiCrn4.js";import{useMDXComponents as s}from"./index-2ZsnEyB9.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CwvJzyWa.js";import"./Tag-DxuCzySC.js";import"./index-DCoPFbKG.js";import{C as x}from"./ControlsWithNote-DcVOmk8S.js";import{D as u}from"./DocsHeader-6S2w5SCy.js";import{F as h}from"./Footer-BCWgdeK4.js";import"./CommandsAndQueries-Bsuql65l.js";import"./PageNotFound-C5oFz4Y3.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CW_ESGBt.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Bk0dxIpQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CNHKSbA7.js";import"./sys-enter-2-0xYCNe_8.js";import"./alert-tzZ5a9nx.js";import"./index-DPL6_Akv.js";import"./index-hCYkbxY8.js";import"./Link-342TA0WQ.js";import"./copy-VAE-BhfP.js";import"./copy-D9dip1OG.js";import"./GitHub-Mark-nNo9p1X2.js";import"./TableOfContent-BapB0lYb.js";import"./index-Bwh9lIWA.js";import"./index-CfOzkRmu.js";import"./index-D3khTefu.js";import"./index-D-IU78TD.js";import"./index-DQdp7GQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMCl2W9z.js";import"./addCustomCSSWithScoping-BlChbTB-.js";import"./Illustrations-BCjcVikr.js";import"./i18n-defaults-CFWtSmu6.js";import"./ResponsivePopoverCommon.css-D3Qzl4EB.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(u,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:r}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:["You can open and close the ",o.jsx(e.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"})," and ",o.jsx(e.code,{children:"opener"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(l,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function $(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{$ as default};
