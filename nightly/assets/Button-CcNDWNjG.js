import{j as e,e as m}from"./iframe-CISvTVNI.js";import{useMDXComponents as a}from"./index-bSkbOjqc.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-B14xai8l.js";import{A as d}from"./ArgTypesWithNote-CXmAtiY_.js";import{C as f}from"./ControlsWithNote-DYexAoru.js";import{D as M}from"./DocsHeader-CX-pVqlb.js";import{F as I}from"./CommandsAndQueries-CBtnfpxG.js";import{C as o,D as r,B as i}from"./Button.stories-C2-f2IZj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DomH80TU.js";import"./information-B2fXauVA.js";import"./sys-enter-2-BkEj79Au.js";import"./alert-Cia20ulM.js";import"./Tag-C1M5Bqsq.js";import"./index-CE7xV3os.js";import"./index-DqP6b12u.js";import"./Link-B3c0gcH0.js";import"./copy-cY1exCnP.js";import"./copy-DUVHDUg7.js";import"./GitHub-Mark-DafCxuoq.js";import"./TableOfContent-DqGQszUP.js";import"./index-B3k5G3FE.js";import"./index-CTfs7RBW.js";import"./index-BNjAQDaE.js";import"./index-BZLJStFD.js";import"./index-4s-xol72.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D02o7Sag.js";import"./addCustomCSSWithScoping-B4qcl2al.js";import"./ai-BZ7Dym0H.js";import"./ai-DMMxCG7X.js";import"./navigation-down-arrow-DmaxrwH-.js";import"./stop-mL5SaVe-.js";import"./stop-7bjrE9Bu.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-UR8Qxv08.js";import"./SplitButton-BsI1Ckg8.js";import"./slim-arrow-down-BCtidmgu.js";import"./slim-arrow-down-D3jugRKw.js";import"./index-B5ENDUWQ.js";import"./index-DAneW4f3.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
