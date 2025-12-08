import{j as e,e as m}from"./iframe-D5yYeuyx.js";import{useMDXComponents as a}from"./index-OOr887th.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BwZUgw5J.js";import{A as d}from"./ArgTypesWithNote-BWLYGPag.js";import{C as f}from"./ControlsWithNote-Dhu05JtX.js";import{D as M}from"./DocsHeader-sLoGcPV0.js";import{F as I}from"./CommandsAndQueries-CJKRIq4o.js";import{C as o,D as r,B as i}from"./Button.stories-B6WN56ZT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJODyOkI.js";import"./information-CqfzA4ZI.js";import"./sys-enter-2-Cgd8Rk78.js";import"./alert-uMczVQtd.js";import"./Tag-BZtJl-N7.js";import"./index-pGOyFusy.js";import"./index-BMwlOPBB.js";import"./Link-DSfaPzX5.js";import"./copy-lqBg0hMZ.js";import"./copy-BbBddowJ.js";import"./GitHub-Mark-BlwYDJaN.js";import"./TableOfContent-CQ1XpZMC.js";import"./index-Cu6PwiO-.js";import"./index-CWkadQ1i.js";import"./index-BiamOLpW.js";import"./index-n-gjro57.js";import"./index-DFcCzRoG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IcjKSza1.js";import"./addCustomCSSWithScoping-DupGCqhX.js";import"./ai-CW1N2HnQ.js";import"./ai-BqjRsdTb.js";import"./navigation-down-arrow-CLdsbi01.js";import"./stop-DMYpkorK.js";import"./stop-Bb8racj6.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-UR8Qxv08.js";import"./SplitButton-GOkqKUVc.js";import"./slim-arrow-down-BglCXS9Y.js";import"./slim-arrow-down-DAbWlapP.js";import"./index-DXBFysKF.js";import"./index-DJanRyqu.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
