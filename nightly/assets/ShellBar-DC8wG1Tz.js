import{j as e,e as s}from"./iframe-BCh37-GP.js";import{useMDXComponents as f}from"./index-E1HFg4gZ.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CS5FlooX.js";import"./Tag-B_Qpe0TE.js";import"./index-DKQ6JIGw.js";import{C as u}from"./ControlsWithNote-VGyFb7bj.js";import{D as S}from"./DocsHeader-Oc-YoLFw.js";import{F as v}from"./CommandsAndQueries-BaHr-COi.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-CTTNbWU8.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BwobSGVL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-3OCHA3NQ.js";import"./sys-enter-2-C8D5BzD8.js";import"./alert-DXLNWSuU.js";import"./index-DTOYUFlO.js";import"./index-Bv89sSp1.js";import"./Link-BSH3TTIl.js";import"./copy-CWitJF73.js";import"./copy-7yIahvRv.js";import"./GitHub-Mark-CS_ef1g-.js";import"./TableOfContent-CDzDz3nz.js";import"./index-JFrdX4G8.js";import"./index-CTMnj1ho.js";import"./index-BonVTnTn.js";import"./index-OKdWlUZi.js";import"./index-DMXHNrMi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCrrvnNY.js";import"./addCustomCSSWithScoping-5ena9gAo.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./Search-B1vB0_Mr.js";import"./Option-PulQRzr2.js";import"./ListItemBaseTemplate-DK7kW4zT.js";import"./Select-Nz2Hcbg2.js";import"./InvisibleMessage-DkbocxqO.js";import"./slim-arrow-down-CGh4l6r9.js";import"./slim-arrow-down-BmoCgPng.js";import"./ResponsivePopoverCommon.css-Dj0T0ryX.js";import"./ValueStateMessage.css-BPaxhl46.js";import"./search-gAzNtjKC.js";import"./Input-BV2Kpufx.js";import"./Suggestions.css-d96Y8STr.js";import"./SuggestionItem-BQ2GorAX.js";import"./i18n-defaults-k5o3Svb4.js";import"./Person-Bk5r7PMP.js";import"./index-CZ6TAeEd.js";import"./less-Bxijlz1Z.js";import"./index-j2ofIJ-B.js";import"./ListItemStandard-Bb53oDTA.js";import"./ButtonBadge-BMqlwZWU.js";import"./overflow-DxF3YQxm.js";const k=`## Design-Compliant Examples

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
