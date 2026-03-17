import{j as e,E as s}from"./iframe-BQ3gAAxx.js";import{useMDXComponents as f}from"./index-B1lAiT1q.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-n6pvGDI_.js";import"./Tag-eC6SmQhc.js";import"./index-DjTon6of.js";import{C as u}from"./ControlsWithNote-B-fhqDT5.js";import{D as S}from"./DocsHeader-Z5QcYM_8.js";import{F as v}from"./Footer-wX_u0Ai_.js";import"./CommandsAndQueries-wegYoAqu.js";import"./PageNotFound-CYbLq2oD.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-WxrXvfdR.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-4YFm7giO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D7DVbQHJ.js";import"./sys-enter-2-QGEZX0U8.js";import"./alert-BvhbOdWs.js";import"./index-C6vnN5EE.js";import"./index-BlPBwMrJ.js";import"./Link-Cgpq4OBn.js";import"./copy-BsssbeKE.js";import"./copy-Da1BKYtz.js";import"./GitHub-Mark-D64eVcYS.js";import"./TableOfContent-ByjnoHjI.js";import"./index-D6YjU4up.js";import"./index-CLyjGvZV.js";import"./index-C1GISjTX.js";import"./index-C1cP6C82.js";import"./index-C8VczBe0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D1UPUp-J.js";import"./addCustomCSSWithScoping-KaZd0g7m.js";import"./Illustrations-YW4WoylE.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-yKjnoZ0k.js";import"./query-CzSBusdE.js";import"./ButtonBadge-DUITOeGF.js";import"./ListItemStandard-BG1UM3jC.js";import"./search-DthOj9WJ.js";import"./overflow-ZgJ5tvbd.js";import"./Search-BAO6Sleu.js";import"./Option-VW9rfUnY.js";import"./ListItemBaseTemplate-DzmYLBj9.js";import"./Select-D89U3SMw.js";import"./InvisibleMessage-BdaiEMNx.js";import"./ResponsivePopoverCommon.css-CC0bbdzt.js";import"./ValueStateMessage.css-BlOapXyA.js";import"./Input-DB2wpgtE.js";import"./Suggestions.css-CcnsH7PN.js";import"./SuggestionItem-Z2Xj9ATz.js";import"./Person-Bk5r7PMP.js";import"./index-l5pE6pVW.js";import"./less-Ru56gMhO.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function De(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{De as default};
