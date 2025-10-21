import{j as e,e as m}from"./iframe-BOeFyVYO.js";import{useMDXComponents as a}from"./index-CHR9lzRO.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DZQepsVR.js";import{A as d}from"./ArgTypesWithNote-OEhLdRuq.js";import{C as f}from"./ControlsWithNote-CSbCHJ4U.js";import{D as M}from"./DocsHeader-CjbZqD9f.js";import{F as I}from"./CommandsAndQueries-B3uiYPSD.js";import{C as o,D as r,B as i}from"./Button.stories-BHUTu1so.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPvTgMMp.js";import"./information-23pj5EQa.js";import"./sys-enter-2-DAsPAd7c.js";import"./alert-CPkxh21N.js";import"./Tag-B2OWKeSz.js";import"./index-BcGyynfr.js";import"./index-BJHUXRax.js";import"./Link-gq5MBZLl.js";import"./copy-C5PW1t1z.js";import"./copy-BJhtqyDJ.js";import"./GitHub-Mark-DymZ9Jyi.js";import"./TableOfContent-vIMd20js.js";import"./index-BA2TdYHr.js";import"./index-C7pCL8XU.js";import"./index-BVr_O3zx.js";import"./index-CFpQMsbP.js";import"./index-XsNappkK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuyMWw-2.js";import"./addCustomCSSWithScoping-5MrgBdkN.js";import"./ai-Cuc_At0c.js";import"./ai-Bq_wgwRs.js";import"./navigation-down-arrow-Df9I5Mue.js";import"./stop-D94wIgMH.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-yR1rAOI2.js";import"./slim-arrow-down-XGqqmupf.js";import"./slim-arrow-down-CWRIGuGt.js";import"./index-DTKnd6ka.js";import"./index-g508yyw1.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
