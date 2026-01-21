import{j as o}from"./iframe-CdfVheEM.js";import{useMDXComponents as i}from"./index-Bn3z_2-D.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-B64qhbcn.js";import"./Tag-BOnQq-w3.js";import"./index-Xx3LO7hZ.js";import{C as x}from"./ControlsWithNote-ymOcXJzc.js";import{D as u}from"./DocsHeader-D-n3nLR0.js";import{F as h}from"./CommandsAndQueries-DnpuXHMh.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BkWtKG05.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D5w5zIEY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CDNUd2FJ.js";import"./sys-enter-2-m6urcdRb.js";import"./alert-DAUraGPR.js";import"./index-BkqNBKqG.js";import"./index-D71kNSph.js";import"./Link-CAF8tfZ3.js";import"./copy-D1qMC6Gw.js";import"./copy-CQYljM5l.js";import"./GitHub-Mark-D2-w_B2G.js";import"./TableOfContent-3FLTfRIs.js";import"./index-Bh5HGBh3.js";import"./index-BBHuJoK3.js";import"./index-BnJ9pgT-.js";import"./index-D1Nbk9KW.js";import"./index-BdSIKWOt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUCJFgFK.js";import"./addCustomCSSWithScoping-csKwFrn6.js";import"./ResponsivePopoverCommon.css-DcZbPFvu.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
`,o.jsx(h,{})]})}function Q(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{Q as default};
