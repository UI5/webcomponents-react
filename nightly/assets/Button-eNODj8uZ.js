import{j as e,B as m}from"./iframe-e2ulr1yw.js";import{useMDXComponents as a}from"./index-PtYZPZtM.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-Cdk7qnv2.js";import{A as d}from"./ArgTypesWithNote-NZc-885H.js";import{C as f}from"./ControlsWithNote-C1zRYBYO.js";import{D as M}from"./DocsHeader-BgtU4XVD.js";import{F as I}from"./CommandsAndQueries-Do207XX8.js";import{C as o,D as r,B as i}from"./Button.stories-CkjOFHGf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Eon1qDJA.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./Tag-CbLqF2IE.js";import"./index-BSw3xQau.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./copy-CBKO5Y7R.js";import"./copy-CcaF1jLX.js";import"./GitHub-Mark-DD0-3nfQ.js";import"./TableOfContent-eq2ptewm.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./ai-DOCtnpxn.js";import"./ai-DPZpOizV.js";import"./navigation-down-arrow-CmGlfloc.js";import"./stop-CjLH_kgx.js";import"./stop-CifD8GUa.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-T8uZ4u4a.js";import"./slim-arrow-down-BTy2_7_G.js";import"./slim-arrow-down-87FbM80e.js";import"./index-siUSAJJz.js";import"./index-CWPBQ-RM.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
