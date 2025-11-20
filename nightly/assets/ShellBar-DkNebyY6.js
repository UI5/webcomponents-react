import{j as e,e as s}from"./iframe-CwFVqG2B.js";import{useMDXComponents as f}from"./index-DLCucreN.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BPmtq9pk.js";import"./Tag-BAaIxfbN.js";import"./index-Dun977o4.js";import{C as u}from"./ControlsWithNote-BOame1rn.js";import{D as S}from"./DocsHeader-BLFXiIJM.js";import{F as v}from"./CommandsAndQueries-CPEglOxS.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-C-g-lhZy.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-DqG65HsH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BBSRrLZV.js";import"./sys-enter-2-D4JTR3Iq.js";import"./alert-vk5CGtWZ.js";import"./index-CCtj0faG.js";import"./index-BdiKbL49.js";import"./Link-LJw1ucv9.js";import"./copy-DFplFJsA.js";import"./copy-BGYvKTCJ.js";import"./GitHub-Mark-CX4tnN_g.js";import"./TableOfContent-890WGvsJ.js";import"./index-graRZSxK.js";import"./index-B1OrttLk.js";import"./index-CMU9Wk5L.js";import"./index-Cs50Favg.js";import"./index-DS4oeWmb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BQrnNeIO.js";import"./addCustomCSSWithScoping-C4aLMSRb.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./Search-BuZxpwrn.js";import"./Option-Cb-NFj1X.js";import"./ListItemBaseTemplate-CDbPPmc-.js";import"./Select-sAAnT16U.js";import"./InvisibleMessage-LF_vPXeD.js";import"./slim-arrow-down-B8qjkohF.js";import"./slim-arrow-down-CSjJ9Oz6.js";import"./ResponsivePopoverCommon.css-55yd8Lsl.js";import"./ValueStateMessage.css-BXXM_drL.js";import"./search-BWgRffie.js";import"./Input-BRFISGyi.js";import"./Suggestions.css-D3s2RFDk.js";import"./SuggestionItem-Cbtk-40h.js";import"./i18n-defaults-k5o3Svb4.js";import"./Person-Bk5r7PMP.js";import"./index-Iapdt60L.js";import"./less-aP6DHpwq.js";import"./index-BnvegAbp.js";import"./ListItemStandard-DP9SjAAJ.js";import"./ButtonBadge-C1N6JXc-.js";import"./overflow-CBVUHhIL.js";const k=`## Design-Compliant Examples

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
