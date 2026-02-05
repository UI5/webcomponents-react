import{j as e,B as m}from"./iframe-jDeV-G8S.js";import{useMDXComponents as a}from"./index-Da3DrjVc.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BVLmp_0m.js";import{A as d}from"./ArgTypesWithNote-NM8bWZmT.js";import{C as f}from"./ControlsWithNote-C35I74bz.js";import{D as M}from"./DocsHeader-BEeUsDIt.js";import{F as I}from"./CommandsAndQueries-S46eotFY.js";import{C as o,D as r,B as i}from"./Button.stories-D_MD7GBo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNzR_fzc.js";import"./information-CBKKlcN3.js";import"./sys-enter-2-D5f8NC37.js";import"./alert-Dk2Mtfik.js";import"./Tag-CoiXaVSg.js";import"./index-C8jlh6dJ.js";import"./index-BZOVbKF_.js";import"./Link-C8Q8wVMF.js";import"./copy-DP9Msd6b.js";import"./copy-DEHDDsgd.js";import"./GitHub-Mark-DPA3dP3A.js";import"./TableOfContent-CtJkDOHV.js";import"./index-DYm7h2BG.js";import"./index-DJMOMMru.js";import"./index-DhmB-gDR.js";import"./index-GOQBvCdy.js";import"./index--p5n_M0a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeVQuTnR.js";import"./addCustomCSSWithScoping-DNXKFIA9.js";import"./ai-DOK3MWXt.js";import"./ai-BzoECP6K.js";import"./navigation-down-arrow-CQCklFQ2.js";import"./stop-BxeQvpzu.js";import"./stop-DJiaukOv.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-j-IoYmGi.js";import"./SplitButton-DQ5uWnj_.js";import"./slim-arrow-down-BnGG1iQc.js";import"./slim-arrow-down-Vg8N0Q0I.js";import"./index-DshWsOa9.js";import"./index-nTJQ2-FH.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function se(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{se as default};
