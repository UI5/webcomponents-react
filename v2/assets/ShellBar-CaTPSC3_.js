import{j as e,E as s}from"./iframe-CFWpN4R7.js";import{useMDXComponents as f}from"./index-dB03iz0B.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-Aj9mLxPA.js";import"./Tag-B06DXZI6.js";import"./index-BhKFh4UU.js";import{C as u}from"./ControlsWithNote-C70Tw8LD.js";import{D as S}from"./DocsHeader-DGz5p46N.js";import{F as v}from"./Footer-DJewOY_X.js";import"./CommandsAndQueries-CCwXwUid.js";import"./PageNotFound-CLSfRNnq.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-iNuqDx1n.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-B7PkZlbk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./index-nHUwJst8.js";import"./index-lnQyu4TM.js";import"./Link-RyF9dh8t.js";import"./copy-BFI66KPL.js";import"./copy-DSqUQhHe.js";import"./GitHub-Mark-DdMj_2nh.js";import"./TableOfContent-5EAtsXjY.js";import"./index-B803YP9c.js";import"./index-CeR8RWqv.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-apIU8mMH.js";import"./query-CzSBusdE.js";import"./ButtonBadge-B3ZZrnCm.js";import"./ListItemStandard-R5Hu6p8-.js";import"./search-BP7xzUOx.js";import"./overflow-CsPL3juo.js";import"./Search-DkTNi6NP.js";import"./Option-DnxME5E6.js";import"./ListItemBaseTemplate-YeqUv09f.js";import"./Select-Ck1JeGEi.js";import"./InvisibleMessage-Be8DiyGj.js";import"./ResponsivePopoverCommon.css-gi_-nTdf.js";import"./ValueStateMessage.css-BXLDmzuy.js";import"./Input-C-H0NyPN.js";import"./Suggestions.css-DHcwzhot.js";import"./SuggestionItem-CemVcQIM.js";import"./Person-Bk5r7PMP.js";import"./index-BM3hZRzv.js";import"./less-BZ4m5AVI.js";const k=`## Design-Compliant Examples

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
