import{j as e,B as m}from"./iframe-gbBUxptC.js";import{useMDXComponents as a}from"./index-BaGM4qgt.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BtAmmb_9.js";import{A as d}from"./ArgTypesWithNote-tEbDNICp.js";import{C as f}from"./ControlsWithNote-fzSXxYPC.js";import{D as M}from"./DocsHeader-BiMMxbix.js";import{F as I}from"./CommandsAndQueries-BmjJVETk.js";import{C as o,D as r,B as i}from"./Button.stories-R6tjrYQM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-a6vq6nFR.js";import"./information-RQmI2RmD.js";import"./sys-enter-2-BfzFGSW6.js";import"./alert-BAR71iQk.js";import"./Tag-DXmb03WA.js";import"./index-DTWmKJf_.js";import"./index-FjtRLsYm.js";import"./Link-BqgTlNng.js";import"./copy-DVkPUjJ_.js";import"./copy-CmUJgJe8.js";import"./GitHub-Mark-DTnt1VPs.js";import"./TableOfContent-CTFQyASA.js";import"./index-CAL1VzDv.js";import"./index-C5e2Rf9k.js";import"./index-ClLX1AfH.js";import"./index-n6dTxbQI.js";import"./index-CHg7n_fg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cfhz7n7-.js";import"./addCustomCSSWithScoping-BVowAJ0u.js";import"./ai-CjgnhBHm.js";import"./ai-BhtQrTFM.js";import"./navigation-down-arrow-C8MDIXaq.js";import"./stop-DFc4BjXf.js";import"./stop-NXx9LSBM.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-BWoWFLnb.js";import"./slim-arrow-down-DtVtSqjI.js";import"./slim-arrow-down-PxErebVm.js";import"./index-rJwjbXu5.js";import"./index-myX69kRW.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
