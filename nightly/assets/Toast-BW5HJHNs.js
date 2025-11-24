import{j as o}from"./iframe-OLMvr6Lt.js";import{useMDXComponents as i}from"./index-CdriUjbp.js";import{M as p,C as a}from"./blocks-CZhft-YU.js";import"./Tag-isczvwSi.js";import"./index-DNJgsZvx.js";import{C as m}from"./ControlsWithNote-BAfS_2Z4.js";import{D as c}from"./DocsHeader-X3VRZZZM.js";import{F as h}from"./CommandsAndQueries-CxvYWHkR.js";import{C as s,D as e}from"./Toast.stories-CF_foEaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CW-9LDCP.js";import"./sys-enter-2-8-HPbBwq.js";import"./alert-Bd52_kq-.js";import"./index-DCyx6v--.js";import"./index-3TabIQwt.js";import"./Link-B3ocEkmU.js";import"./copy-C301CBEV.js";import"./copy-CFwp5FgG.js";import"./GitHub-Mark-Br86eOTM.js";import"./TableOfContent-DdQVKol7.js";import"./index-DbPvBsUu.js";import"./index-D6OGtnN7.js";import"./index-D7Vb79r0.js";import"./index-C0KzuGfV.js";import"./index-DP7V--vt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-8TAtZbXi.js";import"./addCustomCSSWithScoping-D8XhS4Ox.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
