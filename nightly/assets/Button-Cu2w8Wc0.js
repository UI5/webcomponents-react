import{j as e,B as m}from"./iframe-CeYK60h5.js";import{useMDXComponents as a}from"./index-CyuETzTv.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BIKTnw0B.js";import{A as d}from"./ArgTypesWithNote-DSM9iQ9w.js";import{C as f}from"./ControlsWithNote-BC1HLgT2.js";import{D as M}from"./DocsHeader-CLOsrio_.js";import{F as I}from"./CommandsAndQueries-CFbtJHwM.js";import{C as o,D as r,B as i}from"./Button.stories-JO-gp4T7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT0V1rC-.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./Tag-C54M4ldZ.js";import"./index-C9AaKYqF.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./copy-Ow-aeN6u.js";import"./copy-CiRkqTCy.js";import"./GitHub-Mark-DqVF3KiZ.js";import"./TableOfContent-CmoLNGGQ.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./ai-DPdW6uSj.js";import"./ai-B7-Jyd5T.js";import"./navigation-down-arrow-DKptDBWM.js";import"./stop-yes-86rU.js";import"./stop-BGM-lzAH.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-CzKjrJ5N.js";import"./slim-arrow-down-B3EB9Tld.js";import"./slim-arrow-down-CVGDx6dI.js";import"./index-B1uDsj45.js";import"./index-ohkFEBlc.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
