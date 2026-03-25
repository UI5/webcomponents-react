import{j as t,A as m}from"./iframe-iYU5spAk.js";import{useMDXComponents as a}from"./index-BzD2IrSQ.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BI7QxqeB.js";import{A as d}from"./ArgTypesWithNote-DRIPy1P-.js";import{C as f}from"./ControlsWithNote-DYiwBMQ2.js";import{D as M}from"./DocsHeader-_GpZrLV2.js";import{F as I}from"./Footer-BTHx_eA0.js";import"./CommandsAndQueries-BRXiW4dn.js";import"./PageNotFound-C8n2TUKE.js";import{C as o,D as r,B as i}from"./Button.stories-KndbtX5l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cq3_Xc9J.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./Tag-BusGuvh6.js";import"./index-DUNXsDMC.js";import"./index-DqeVDsPv.js";import"./Link-DNrZNopF.js";import"./copy-CLCoEAhJ.js";import"./copy-DCVJQWNc.js";import"./GitHub-Mark-oclh5OA_.js";import"./TableOfContent-ZERqextU.js";import"./index-B2lbw_UO.js";import"./index-BWMAVmh3.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-NuQQ2nrL.js";import"./ai-BLIkxWZR.js";import"./navigation-down-arrow-CaKxhXWN.js";import"./stop-7VTN_8vf.js";import"./stop-8zRvWQPQ.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-CBE2ZSaT.js";import"./index-oCVpyOOx.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:o}),`
`,t.jsx(M,{of:o,experimental:!0}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function AIButton(props) {
  const generationIdRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<ButtonDomRef>(null);
  const [buttonState, setButtonState] = useState("generate");
  const [menuOpen, setMenuOpen] = useState(false);

  const startGeneration = () => {
    generationIdRef.current = setTimeout(() => {
      setButtonState("revise");
    }, 3000);
  };

  const handleClick: ButtonPropTypes["onClick"] = (e) => {
    const btn = e.target;

    setMenuOpen(false);
    switch (btn.state) {
      case "generate":
        setButtonState("generating");
        startGeneration();
        break;
      case "generating":
        if (generationIdRef.current) {
          clearTimeout(generationIdRef.current);
          generationIdRef.current = null;
        }
        setButtonState("generate");
        break;
      case "revise":
        setMenuOpen(true);
        break;
    }
  };

  const handleMenuItemClick: MenuPropTypes["onItemClick"] = (e) => {
    if (e.detail.text === "Regenerate") {
      setButtonState("generating");
      startGeneration();
    }
  };

  return (
    <>
      <Button
        {...props}
        onClick={handleClick}
        state={buttonState}
        ref={buttonRef}
      >
        <ButtonState name="generate" text="Generate" icon={aiIcon} />
        <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
        <ButtonState
          name="revise"
          text="Revise"
          icon={aiIcon}
          endIcon={navDownIcon}
        />
      </Button>
      {menuOpen && (
        <Menu
          opener={buttonRef.current}
          open
          onItemClick={handleMenuItemClick}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MenuItem text="Regenerate" />
          <MenuSeparator />
          <MenuItem text="Fix Spelling & Grammar" />
          <MenuItem text="Change Tone">
            <MenuItem text="Option 1" />
            <MenuItem text="Option 2" />
            <MenuItem text="Option 3" />
          </MenuItem>
          <MenuItem text="Adjust Length">
            <MenuItem text="Shorten text" />
            <MenuItem text="Lengthen text" />
          </MenuItem>
          <MenuItem text="Bulleted List" />
          <MenuItem text="Translate">
            <MenuItem text="English" />
            <MenuItem text="German" />
            <MenuItem text="Spanish" />
          </MenuItem>
        </Menu>
      )}
    </>
  );
}
`})})]}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(f,{of:r}),`
`,t.jsx(l,{children:u}),`
`,t.jsx(e.h2,{id:"buttonstate",children:"ButtonState"}),`
`,t.jsx(x,{of:i}),`
`,t.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,t.jsx(I,{}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{})})]})}function at(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{at as default};
