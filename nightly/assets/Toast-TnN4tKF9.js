import{j as o}from"./iframe-B7JRtnJ_.js";import{useMDXComponents as i}from"./index-BPvgxWCZ.js";import{M as p,C as a}from"./blocks-De_aBrmo.js";import"./Tag-BKx3QN9f.js";import"./index-D4cnUaLM.js";import{C as m}from"./ControlsWithNote-DgPjGzi5.js";import{D as c}from"./DocsHeader-G7O3GL-a.js";import{F as h}from"./CommandsAndQueries-Q6uRMqWv.js";import{C as s,D as e}from"./Toast.stories-BuDsLDcA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CsJaoifg.js";import"./sys-enter-2-ZCQT486r.js";import"./alert-B325SdK2.js";import"./index-VZQHlfm7.js";import"./index-DoEzIHzx.js";import"./Link-CTrIksmS.js";import"./copy-D7cIngW2.js";import"./copy-C1tv-pSG.js";import"./GitHub-Mark-JTvzvp0g.js";import"./TableOfContent-CnHAVL07.js";import"./index-Bxt1rtVG.js";import"./index-DptOKZBu.js";import"./index-Ch21QDGf.js";import"./index-B10alG5K.js";import"./index-DCbqd4CK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CpyU0bSl.js";import"./addCustomCSSWithScoping-COHCvbrD.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
