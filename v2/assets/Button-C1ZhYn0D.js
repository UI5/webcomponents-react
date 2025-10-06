import{j as e,e as m}from"./iframe-CIFZFrG2.js";import{useMDXComponents as a}from"./index-CzlgAQtr.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-ClculhSc.js";import{A as d}from"./ArgTypesWithNote-DOGRr1g7.js";import{C as f}from"./ControlsWithNote-Cqnimieu.js";import{D as M}from"./DocsHeader-B-FvOM3P.js";import{F as I}from"./CommandsAndQueries-BlZNZtUo.js";import{C as o,D as r,B as i}from"./Button.stories-DCURK4yf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9QNJxWD.js";import"./information-C9kryg9s.js";import"./sys-enter-2-Dnan1hPQ.js";import"./alert-OVbD1hF6.js";import"./Tag-C9R72Ii-.js";import"./index-Ddm49m6x.js";import"./index-BRYLHUCr.js";import"./Link-C5_8cjV3.js";import"./copy-CixeL1ex.js";import"./copy-CVO7dQ0j.js";import"./GitHub-Mark-CaXEtJVV.js";import"./TableOfContent-Db9cMdlQ.js";import"./index-D2ynVlET.js";import"./index-Raa53yj5.js";import"./index-CyeOYd2G.js";import"./index-CysqO__p.js";import"./index--ZLvsvkR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CxDbWVSp.js";import"./addCustomCSSWithScoping-Bq-MB79n.js";import"./ai-CsZesfNJ.js";import"./ai-6JaAfpxp.js";import"./navigation-down-arrow-DNMDmuFC.js";import"./stop-DLSN8cXW.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-D-IMEECJ.js";import"./slim-arrow-down-CuXz1j7I.js";import"./slim-arrow-down-2FoyFrsV.js";import"./index-CZajDJJf.js";import"./index-M1czw77P.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
