import{j as o}from"./iframe-HnZ_h-uU.js";import{useMDXComponents as i}from"./index-BURirfl-.js";import{M as p,C as a}from"./blocks-84IuUUPT.js";import"./Tag-Dnn5BILw.js";import"./index-C_zCHPn3.js";import{C as m}from"./ControlsWithNote-B7a3dgFK.js";import{D as c}from"./DocsHeader-BMTYwKRR.js";import{F as h}from"./CommandsAndQueries-TIuZdWtI.js";import{C as s,D as e}from"./Toast.stories-BnJZ2hgD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DhzyP3Ow.js";import"./sys-enter-2-CmThXCww.js";import"./alert-DNZ33ksz.js";import"./index-Dnf0ia5k.js";import"./index-ChCH3Q4v.js";import"./Link-fOI_Un9H.js";import"./copy-BVSsMmEy.js";import"./copy-CvLuzzlZ.js";import"./GitHub-Mark-21BK48In.js";import"./TableOfContent-BmnBt7yn.js";import"./index-A-RKt-jh.js";import"./index-iyAoRrYN.js";import"./index-Cx7Ty6ev.js";import"./index-DT74FBWM.js";import"./index-D2dUbzgM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5FHIatV.js";import"./addCustomCSSWithScoping-R6q4RVyA.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
`,o.jsx(c,{of:s,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:e}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(h,{})]})}function R(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{R as default};
