import{j as e,B as s}from"./iframe-D6FNTQkK.js";import{useMDXComponents as f}from"./index-B6bRqhkI.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import{C as u}from"./ControlsWithNote-CNMsE99D.js";import{D as S}from"./DocsHeader-BE8561TB.js";import{F as v}from"./CommandsAndQueries-BXb9AdOB.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DlZJA1bw.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CmBy59fT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./index-C8Bzh-c-.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./copy-B-xyKazw.js";import"./copy-CV5IiNGP.js";import"./GitHub-Mark-BP1lV9_Z.js";import"./TableOfContent-BUkQ1Gls.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./Search-Bgidl4fD.js";import"./Option-Bp3m08uY.js";import"./ListItemBaseTemplate-BwKCfdZC.js";import"./Select-BsOhyv3Y.js";import"./InvisibleMessage-CuNZ9Vpq.js";import"./slim-arrow-down-BcGJUmQm.js";import"./slim-arrow-down-CHkc3XG4.js";import"./ResponsivePopoverCommon.css-DwSQpbCL.js";import"./ValueStateMessage.css-B-79kasT.js";import"./search-DL-DObMq.js";import"./Input-CWaYFEE0.js";import"./Suggestions.css-BX_6fSbp.js";import"./SuggestionItem-DmIAT0hW.js";import"./i18n-defaults-Begitp65.js";import"./Person-Bk5r7PMP.js";import"./index-CtNicNZp.js";import"./less-By2gp0Gl.js";import"./index-Czh7Gz-S.js";import"./ListItemStandard-khyxx9eu.js";import"./ButtonBadge-DuRfAbTE.js";import"./overflow-vwfxXjJc.js";const k=`## Design-Compliant Examples

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
