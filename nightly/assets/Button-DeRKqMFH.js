import{j as e,B as m}from"./iframe-B9-Lkkb_.js";import{useMDXComponents as a}from"./index-BHB6dH51.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DiSlIEhk.js";import{A as d}from"./ArgTypesWithNote-Cb0OTo-a.js";import{C as f}from"./ControlsWithNote-PyqqQ_Jp.js";import{D as M}from"./DocsHeader-DZYYDVx7.js";import{F as I}from"./CommandsAndQueries-DLAu90uX.js";import{C as o,D as r,B as i}from"./Button.stories-DGVdXJNm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bp8duZh7.js";import"./information-D0Z0JvqI.js";import"./sys-enter-2-CI12jhXR.js";import"./alert-BH05V2Qa.js";import"./Tag-CCKiiuhz.js";import"./index-GyCUx3PS.js";import"./index-Uzak41NI.js";import"./Link-C6rFWX_2.js";import"./copy-BJcno2nj.js";import"./copy-Cr6zYfEo.js";import"./GitHub-Mark-B_QQB5Xp.js";import"./TableOfContent-SR1Jk1Pe.js";import"./index-B__WJxOt.js";import"./index-B3mrOTgf.js";import"./index-Cw3xsh9-.js";import"./index-DkC2gP8p.js";import"./index-BetvcNL1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee--tlCK9Sx.js";import"./addCustomCSSWithScoping-dvkvBHTK.js";import"./ai-Cju8ob-U.js";import"./ai-OrDGJsI6.js";import"./navigation-down-arrow-CTvkFjXS.js";import"./stop-BM5mBlFQ.js";import"./stop-vEXomdsz.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-D3bWHLOT.js";import"./slim-arrow-down-Cwc8ylhp.js";import"./slim-arrow-down-BSwFrx-6.js";import"./index-7PtboBhF.js";import"./index-B8-tLGs4.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
