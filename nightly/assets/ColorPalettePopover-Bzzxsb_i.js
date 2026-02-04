import{j as o}from"./iframe-CIYL-5q3.js";import{useMDXComponents as i}from"./index-CWXxkQxH.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BmH4wjlj.js";import"./Tag-Bj-YRcmn.js";import"./index-DpooF_Dp.js";import{C as x}from"./ControlsWithNote-Dlv8q78z.js";import{D as u}from"./DocsHeader-B-zxc7Yp.js";import{F as h}from"./CommandsAndQueries-DjZZVJII.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Rj98fZnd.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D1WfB4RU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-24sGxR45.js";import"./sys-enter-2-CbyVzbEB.js";import"./alert-BzxY5xRy.js";import"./index-ExTvjT1c.js";import"./index-fAH3q00h.js";import"./Link-C09fzDpl.js";import"./copy-7k_JqbqN.js";import"./copy-Cls5Qy9v.js";import"./GitHub-Mark-Cx0oNQ9m.js";import"./TableOfContent-B3rsoWUf.js";import"./index-BUhE9jhW.js";import"./index-ywBu0MNL.js";import"./index-OosLgrWy.js";import"./index-CMG3T6cu.js";import"./index-DTrWp4X_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cia2o1gw.js";import"./addCustomCSSWithScoping-CnnSu9RY.js";import"./ResponsivePopoverCommon.css-CfiWzak8.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
