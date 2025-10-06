import{j as e,e as m}from"./iframe-HvCg7yUW.js";import{useMDXComponents as a}from"./index-CE4Hfwqi.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-D8Z2Dyw_.js";import{A as d}from"./ArgTypesWithNote-D6lUgtb1.js";import{C as f}from"./ControlsWithNote-C4sDrxAq.js";import{D as M}from"./DocsHeader-CP6cDlJa.js";import{F as I}from"./CommandsAndQueries-DUi4l31N.js";import{C as o,D as r,B as i}from"./Button.stories-lKReD3RH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DuAmAsky.js";import"./information-CCnVD-2j.js";import"./sys-enter-2-X1IC7sb7.js";import"./alert-Dmmp7J4K.js";import"./Tag-BplAIBUz.js";import"./index-7L-T-PBR.js";import"./index-DPhzHQJ0.js";import"./Link-Bg-vZYST.js";import"./copy-DKrfWEvD.js";import"./copy-DBsC0j81.js";import"./GitHub-Mark-vmmzZbgB.js";import"./TableOfContent-BCbq4pBF.js";import"./index-iO1m8u6x.js";import"./index-BaM0OdR1.js";import"./index-DmLJcEoD.js";import"./index-D5kiTLsH.js";import"./index-DpfgSJii.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQB1q1h5.js";import"./addCustomCSSWithScoping-Bswf-IYk.js";import"./ai-DcLkAIf7.js";import"./ai-B1to3Izm.js";import"./navigation-down-arrow-DkCY0Nj4.js";import"./stop-BI6PCcWq.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-CjUk5mOq.js";import"./slim-arrow-down-DFyEtKyA.js";import"./slim-arrow-down-BCCxnCSI.js";import"./index-b3fBFOxP.js";import"./index-D2F7jWEb.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
`,e.jsx(M,{of:o,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function AIButton(props) {
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
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(l,{children:u}),`
`,e.jsx(t.h2,{id:"buttonstate",children:"ButtonState"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,e.jsx(I,{}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function ie(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{ie as default};
