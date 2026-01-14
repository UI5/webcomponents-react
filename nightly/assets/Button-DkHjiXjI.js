import{j as e,e as m}from"./iframe-DsoLxTrs.js";import{useMDXComponents as a}from"./index-BYp40d_0.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BdFCA8eW.js";import{A as d}from"./ArgTypesWithNote-C7GYzjFB.js";import{C as f}from"./ControlsWithNote-DpDkKRs4.js";import{D as M}from"./DocsHeader-CDZJIivq.js";import{F as I}from"./CommandsAndQueries-CnpygbQ5.js";import{C as o,D as r,B as i}from"./Button.stories-XdmpMl-0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgqU0bHc.js";import"./information-Dif64wGJ.js";import"./sys-enter-2-CF1sb48s.js";import"./alert-DcNO-1uE.js";import"./Tag-CTTSF-tU.js";import"./index-CNxSz0Hc.js";import"./index-BUCXDqHN.js";import"./Link-B3HsQBkt.js";import"./copy-rhZFmAqL.js";import"./copy-BFj7VYi7.js";import"./GitHub-Mark-CCJSy1Iz.js";import"./TableOfContent-CLxSJm3z.js";import"./index-DoD5C1cK.js";import"./index-CgwlM72N.js";import"./index-_wPX9_fg.js";import"./index-CcP8H8eG.js";import"./index-DUtNsIlX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CN1rIyKa.js";import"./addCustomCSSWithScoping-Bri9Hmu_.js";import"./ai-C007Zao0.js";import"./ai-DYKRXAPt.js";import"./navigation-down-arrow-CfyMbTT9.js";import"./stop-Dbx5-kGu.js";import"./stop-CW0DekZB.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-j-IoYmGi.js";import"./SplitButton-nQOo8Xlw.js";import"./slim-arrow-down-DCGoLBPd.js";import"./slim-arrow-down-CMk67T2s.js";import"./index-BdqsodaP.js";import"./index-BjmUn7DV.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
