import{j as e,e as m}from"./iframe-Dt3EMGkV.js";import{useMDXComponents as a}from"./index-B20WHrxF.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BHc609zj.js";import{A as d}from"./ArgTypesWithNote-DCBsRlY0.js";import{C as f}from"./ControlsWithNote-C8ZAtGvJ.js";import{D as M}from"./DocsHeader-BFCSvIjI.js";import{F as I}from"./CommandsAndQueries-B8G4x6Z0.js";import{C as o,D as r,B as i}from"./Button.stories-DMLMatVF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4o5lIxTZ.js";import"./information-CdIvcuNT.js";import"./sys-enter-2-DUO5Ca52.js";import"./alert-AiSO8uTO.js";import"./Tag-BlFr4TrL.js";import"./index-BTxuEF3n.js";import"./index-B13Eko7E.js";import"./Link-BFnbyO9N.js";import"./copy-CKK4O4gq.js";import"./copy-CTtd4S6z.js";import"./GitHub-Mark-lQb1Kumq.js";import"./TableOfContent-BrPxZHd0.js";import"./index-DwsDjCru.js";import"./index-DYPFLkL0.js";import"./index-3ZVLHlpm.js";import"./index-ChSomlCw.js";import"./index-CGnaTP2m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DIflbpx1.js";import"./addCustomCSSWithScoping--L6xjApc.js";import"./ai-B0dHo8QM.js";import"./ai-1FfGYFT5.js";import"./navigation-down-arrow-CM9oa_p2.js";import"./stop-qZEB5Z0M.js";import"./stop-BKs4QNzp.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-LNoaTEUu.js";import"./SplitButton-BatDAlU_.js";import"./slim-arrow-down-BCpPF8dH.js";import"./slim-arrow-down-pu6c9dFU.js";import"./index-D5Y11OKW.js";import"./index-Dc_qir5R.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
