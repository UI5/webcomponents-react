import{j as o}from"./iframe-rmPOfAEk.js";import{useMDXComponents as i}from"./index-OsAdl3Cq.js";import{M as p,C as m}from"./blocks-v63_T-Iu.js";import"./Tag-OMAKRCyN.js";import"./index-D5lEazYO.js";import{C as a}from"./ControlsWithNote-D_cpWhLk.js";import{D as c}from"./DocsHeader-DAYxAS3q.js";import{F as h}from"./Footer-CYSIA4uy.js";import"./CommandsAndQueries-DjjDgYFy.js";import"./PageNotFound-DRbJUQ3U.js";import{C as r,D as s}from"./Toast.stories-BupBv1Hf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cw3g4evs.js";import"./sys-enter-2-DOLwXwFm.js";import"./alert-Bcs9t0my.js";import"./index-NT5PBuFY.js";import"./index-B-iV9gR7.js";import"./Link-CL9BwqUh.js";import"./copy-Cu1XAvBt.js";import"./copy-DYpkXBzp.js";import"./GitHub-Mark-CukNb3-C.js";import"./TableOfContent-BjAe7E2K.js";import"./index-Xi7qAWgh.js";import"./index-CE8iCloJ.js";import"./index-g6c80OWk.js";import"./index-DUTk5K7T.js";import"./index-DTuZFVSS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJhSo9M3.js";import"./addCustomCSSWithScoping-CZ8_VPk_.js";import"./Illustrations-DRh478fB.js";import"./i18n-defaults-C7ICj5-E.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
`,o.jsx(c,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(a,{of:s}),`
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
`,o.jsx(h,{})]})}function G(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{G as default};
