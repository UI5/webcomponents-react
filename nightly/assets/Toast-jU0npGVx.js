import{j as o}from"./iframe-DsgKHrOc.js";import{useMDXComponents as i}from"./index-R1G5OZPs.js";import{M as p,C as a}from"./blocks-CQue4LlW.js";import"./Tag-BTAP7zi_.js";import"./index-B3N-7g7X.js";import{C as m}from"./ControlsWithNote-DxYVNC-M.js";import{D as c}from"./DocsHeader-D2x9pX3j.js";import{F as h}from"./CommandsAndQueries-D_2jUbP4.js";import{C as s,D as e}from"./Toast.stories-DzZvRhuh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-ls1iI2xZ.js";import"./sys-enter-2-BOSLgeP2.js";import"./alert-BH6ifEnA.js";import"./index-0Q75H94O.js";import"./index-BdUiiHhG.js";import"./Link-DoHEtv1B.js";import"./copy-8lJxP5He.js";import"./copy-DlTApuN1.js";import"./GitHub-Mark-CHR7-lS9.js";import"./TableOfContent-C_-5gYZu.js";import"./index-DNMfu1Bq.js";import"./index-CnrY0exf.js";import"./index-Dm9AGWV-.js";import"./index-BomSeR7F.js";import"./index-W4kN-wgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BfAO3hVt.js";import"./addCustomCSSWithScoping-CsuAJYaG.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
