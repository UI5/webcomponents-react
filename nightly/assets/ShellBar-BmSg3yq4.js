import{j as e,B as s}from"./iframe-DVaoJynC.js";import{useMDXComponents as f}from"./index-D8trWAUj.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-CrqJ-Z31.js";import"./Tag--1vn2ouf.js";import"./index-CpBbNRGM.js";import{C as u}from"./ControlsWithNote-Dec-XbEd.js";import{D as S}from"./DocsHeader-BO9-P8hQ.js";import{F as v}from"./CommandsAndQueries-DmxPE0MZ.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-DIHrf0BV.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BwXNCe2i.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BslaWIIc.js";import"./sys-enter-2-iJEMuBvO.js";import"./alert-DlPbm_nn.js";import"./index-DW_Y2aM_.js";import"./index-1ngZk4Q4.js";import"./Link-Q_Ld2CqF.js";import"./copy-Cqk7ClFa.js";import"./copy-DE_2j5FQ.js";import"./GitHub-Mark-8g40nlnE.js";import"./TableOfContent-Dtb5vAem.js";import"./index-CrdrDGzw.js";import"./index-xNxGNywP.js";import"./index-qrdXuh6V.js";import"./index-DDgoCywP.js";import"./index-dYIL-oMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-V3cCpaGB.js";import"./addCustomCSSWithScoping-CedcLW5T.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./Search-DOZRXDNg.js";import"./Option-CxhLxOlt.js";import"./ListItemBaseTemplate-COydBmQa.js";import"./Select-DWMoFafZ.js";import"./InvisibleMessage-6n9UFl41.js";import"./slim-arrow-down-Bug18Bzw.js";import"./slim-arrow-down-DblcDTH-.js";import"./ResponsivePopoverCommon.css-a0LTy8oR.js";import"./ValueStateMessage.css-CxQEDxip.js";import"./search-3HfcIClY.js";import"./Input-DJnlitcX.js";import"./Suggestions.css-gCSTg-U6.js";import"./SuggestionItem-VJ7PiMQr.js";import"./i18n-defaults-Begitp65.js";import"./Person-Bk5r7PMP.js";import"./index-DpV1kB7w.js";import"./less-J5QHLwwU.js";import"./index-L4-ax-zm.js";import"./ListItemStandard-dJtbJvai.js";import"./ButtonBadge-BzQ5ERYc.js";import"./overflow-ENIDUCTl.js";const k=`## Design-Compliant Examples

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
