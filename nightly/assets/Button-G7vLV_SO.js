import{j as e,e as m}from"./iframe-C1nqIrP9.js";import{useMDXComponents as a}from"./index-rFzs5Is7.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-CkwZnBbM.js";import{A as d}from"./ArgTypesWithNote-dxV9hfu6.js";import{C as f}from"./ControlsWithNote-_vRKtIKH.js";import{D as M}from"./DocsHeader-s-CNDN7O.js";import{F as I}from"./CommandsAndQueries-D6-GYIyC.js";import{C as o,D as r,B as i}from"./Button.stories-uYCJgQIa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYNCR5qY.js";import"./information-BrOplxTY.js";import"./sys-enter-2-pukb5ZDW.js";import"./alert-DP5_e-py.js";import"./Tag-BljHH2ny.js";import"./index-BswWmSbc.js";import"./index-Dr-3VGmd.js";import"./Link-BNKugdyP.js";import"./copy-0xK9UJop.js";import"./copy-DSaYeTfs.js";import"./GitHub-Mark-DI3rHrSl.js";import"./TableOfContent-B3QrgLEN.js";import"./index-DJt8uYMe.js";import"./index-BaOK2woW.js";import"./index-DKOFmGpQ.js";import"./index-BIr8DdOC.js";import"./index-SO3IILH_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CASN5sm0.js";import"./addCustomCSSWithScoping-C0k6xtW8.js";import"./ai-DceKVFFV.js";import"./ai-Cj0HEtXa.js";import"./navigation-down-arrow-COzuuEtq.js";import"./stop-BLgZOtBu.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-B6nV8fgY.js";import"./slim-arrow-down-B2Ijjnqs.js";import"./slim-arrow-down-Bps0sYcn.js";import"./index-BHf1zFLS.js";import"./index-b4kn1H7s.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
