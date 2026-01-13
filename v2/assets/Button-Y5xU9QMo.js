import{j as e,e as m}from"./iframe-M6Wvc0fq.js";import{useMDXComponents as a}from"./index-Jmw_4WZV.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-9PHEB2Ze.js";import{A as d}from"./ArgTypesWithNote-DD7X9XvZ.js";import{C as f}from"./ControlsWithNote-DsI0yJ_c.js";import{D as M}from"./DocsHeader-M7v8s38F.js";import{F as I}from"./CommandsAndQueries--8Ahr2u6.js";import{C as o,D as r,B as i}from"./Button.stories-BEUina_h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-NAUCyd.js";import"./information-Cj4hRV-U.js";import"./sys-enter-2-CYdmpg8V.js";import"./alert-BNoNYb7g.js";import"./Tag-DEHlwQE8.js";import"./index-CNLcYPCr.js";import"./index-_LwCcPZx.js";import"./Link-DpL14GXS.js";import"./copy-XDqr6iKY.js";import"./copy-ClXhTaxL.js";import"./GitHub-Mark-_pFNYc1m.js";import"./TableOfContent-C_C39Km7.js";import"./index-CUPsZJD9.js";import"./index-C-FSsThx.js";import"./index-0vFd8GUO.js";import"./index-BinHysAW.js";import"./index-CWMf0NSb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Y-KB0uhX.js";import"./addCustomCSSWithScoping-B-5QqUkV.js";import"./ai-B3h8__R_.js";import"./ai-FbzZ-a9i.js";import"./navigation-down-arrow-B2uCLQJV.js";import"./stop-L4quMcne.js";import"./stop-I_1J9iDh.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-j-IoYmGi.js";import"./SplitButton-FoQvygSw.js";import"./slim-arrow-down-CW8gGJol.js";import"./slim-arrow-down-Cv1cFJAK.js";import"./index-nMWrW7iK.js";import"./index-CyQM533H.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
