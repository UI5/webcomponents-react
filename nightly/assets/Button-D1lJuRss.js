import{j as e,e as m}from"./iframe-D3k-2Qmx.js";import{useMDXComponents as a}from"./index-BSBCExsS.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-bv8Dsnai.js";import{A as d}from"./ArgTypesWithNote-DoPB3xUv.js";import{C as f}from"./ControlsWithNote-Q6ZOBFdr.js";import{D as M}from"./DocsHeader-cryOFXwi.js";import{F as I}from"./CommandsAndQueries-DsxWaHqI.js";import{C as o,D as r,B as i}from"./Button.stories-B3PLTDrf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-By3VOOwb.js";import"./information-Bs4ke0_q.js";import"./sys-enter-2-C1RuQ14F.js";import"./alert-CgXiLrEU.js";import"./Tag-9PM7-eum.js";import"./index-aLtq1xU9.js";import"./index-CU7B0Jzs.js";import"./Link-CTDi8zx_.js";import"./copy-BIO46Laf.js";import"./copy-Ba7LzWJS.js";import"./GitHub-Mark-D7iv6mYV.js";import"./TableOfContent-HbhTBcUN.js";import"./index-B4561E-8.js";import"./index-7likbAae.js";import"./index-CcT0HfRf.js";import"./index-ne93MLaG.js";import"./index-DsyKOjMu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVKdFd1t.js";import"./addCustomCSSWithScoping-BuaXJWbP.js";import"./ai-BiGwEhQW.js";import"./ai-uwzug8pp.js";import"./navigation-down-arrow-CqNaGyR0.js";import"./stop-DkhlzwMR.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-AzlDiDCd.js";import"./slim-arrow-down-BNqq3rWg.js";import"./slim-arrow-down-DdlDKMGS.js";import"./index-DPcONyZW.js";import"./index-BrLxGooo.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
