import{j as e,B as s}from"./iframe-Btp5V8Z0.js";import{useMDXComponents as f}from"./index-BiuvjkCM.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-3iq6MjE7.js";import"./Tag-BV9BFAPZ.js";import"./index-CP5vX4Iw.js";import{C as u}from"./ControlsWithNote-SxhoP9GN.js";import{D as S}from"./DocsHeader-CpoVDOG1.js";import{F as v}from"./CommandsAndQueries-ytOuH94-.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-TjgLOlNC.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-4GcSx-5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D6meyH0P.js";import"./sys-enter-2-DFu1S1AE.js";import"./alert-Ble7Zr5g.js";import"./index-Byqgf8K2.js";import"./index-dzmgvIYj.js";import"./Link-DrqLISlX.js";import"./copy-bhaIxfjj.js";import"./copy-BjvlOXfT.js";import"./GitHub-Mark-BYtt88Wv.js";import"./TableOfContent-Q8v-GGeS.js";import"./index-MTTfL1A6.js";import"./index-DfXM2ykx.js";import"./index-jYjWydQt.js";import"./index-4wRER8Ea.js";import"./index-cFxIHlDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOasFR1W.js";import"./addCustomCSSWithScoping-BYe08cUl.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-Dz6tpSEr.js";import"./Option-DXRWtWSV.js";import"./ListItemBaseTemplate--uvy-kc0.js";import"./Select-CxUvCZuJ.js";import"./InvisibleMessage-BApXsmDb.js";import"./slim-arrow-down-DVukQiW-.js";import"./slim-arrow-down-j9pUzMGy.js";import"./ResponsivePopoverCommon.css-BQy8rUfs.js";import"./ValueStateMessage.css-LOPut24L.js";import"./search-DvzWYvbM.js";import"./Input-aWxLYUOH.js";import"./Suggestions.css-CYbXagSM.js";import"./SuggestionItem-zI-P11G7.js";import"./i18n-defaults-Ca0KLLzw.js";import"./Person-Bk5r7PMP.js";import"./index-XGPworLT.js";import"./less-Cbt4luUN.js";import"./index-DF00z-Xe.js";import"./ListItemStandard-DKFwa_4E.js";import"./ButtonBadge-BhAhA_U7.js";import"./overflow-BiX-fPl_.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:d}),`
`,e.jsx(S,{of:d,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:h}),`
`,e.jsx(a,{children:k}),`
`,e.jsx(n.h3,{id:"all-features",children:"All Features"}),`
`,e.jsx(n.p,{children:"A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"embedded-back-navigation",children:"Embedded Back Navigation"}),`
`,e.jsx(n.p,{children:"ShellBar with embedded back navigation button in the start area."}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h3,{id:"trial-example",children:"Trial Example"}),`
`,e.jsx(n.p,{children:"ShellBar configured for trial environments with trial tags and remaining days indicator."}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h3,{id:"multiple-productive-instances",children:"Multiple Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple productive system instances with region indicators."}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"multiple-non-productive-instances",children:"Multiple Non-Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple non-productive system instances with system and region tags."}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"open-a-popover-on-shellbaritem-click",children:"Open a Popover on ShellBarItem click"}),`
`,e.jsxs(n.p,{children:["To open a popover with the ",e.jsx(n.code,{children:"ShellBarItem"})," you can use the ",e.jsx(n.code,{children:"detail.targetRef"})," property of the ",e.jsx(n.code,{children:"onClick"})," event."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ShellBarComponent = () => {
  const popoverRef = useRef<PopoverDomRef>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleShellBarItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverRef.current!.opener = e.detail.targetRef;
    setPopoverOpen(true);
  };
  return (
    <>
      <ShellBar>
        <ShellBarItem onClick={handleShellBarItemClick} icon="add" text="add" />
      </ShellBar>
      <Popover
        ref={popoverRef}
        open={popoverOpen}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Hello there!
      </Popover>
    </>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"shellbar-with-shellbarbranding-slot",children:"ShellBar with ShellBarBranding slot"}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(a,{children:B}),`
`,e.jsx(n.h2,{id:"shellbaritem",children:"ShellBarItem"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:l}),`
`,e.jsx(n.h2,{id:"shellbarspacer",children:"ShellBarSpacer"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:p}),`
`,e.jsx(n.h2,{id:"shellbarsearch-experimental",children:"ShellBarSearch (experimental)"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:m}),`
`,e.jsx(n.h2,{id:"shellbarbranding-experimental",children:"ShellBarBranding (experimental)"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:c}),`
`,e.jsx(v,{})]})}function Me(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{Me as default};
