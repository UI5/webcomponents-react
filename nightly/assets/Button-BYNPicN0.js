import{j as e,B as m}from"./iframe-DwhXZ5O1.js";import{useMDXComponents as a}from"./index-Dr45Q_rW.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-EKNE_kOu.js";import{A as d}from"./ArgTypesWithNote-CyWVuzny.js";import{C as f}from"./ControlsWithNote-CSn4DPAH.js";import{D as M}from"./DocsHeader-BRx7RPE6.js";import{F as I}from"./CommandsAndQueries-CZ-0KT78.js";import{C as o,D as r,B as i}from"./Button.stories-BIHZGwQj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0PXwN3M.js";import"./information-BtytWan6.js";import"./sys-enter-2-PzhKRuDm.js";import"./alert-Ul17j7cb.js";import"./Tag-CK1DTCaY.js";import"./index-DzVbmGXs.js";import"./index-BwctDZ8k.js";import"./Link-jbv8jxOr.js";import"./copy-CZT2prev.js";import"./copy-CMcdSlV7.js";import"./GitHub-Mark-vT3R4NCR.js";import"./TableOfContent-VIGMqgxX.js";import"./index-C5LjiSCx.js";import"./index-DsUvOdfw.js";import"./index-D0dcM15D.js";import"./index-EBvmFTXF.js";import"./index-CczjdlqU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjLi0LGT.js";import"./addCustomCSSWithScoping-BuPMXfqj.js";import"./ai-DQIkIrl0.js";import"./ai-6j41AaVp.js";import"./navigation-down-arrow-D_-UgM8Y.js";import"./stop-Bm2p7nLW.js";import"./stop-a1Cy5oFs.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-j-IoYmGi.js";import"./SplitButton-Zpqq2942.js";import"./slim-arrow-down-DdhS0vfb.js";import"./slim-arrow-down-D11Ifl1b.js";import"./index-BnMIE33E.js";import"./index-CqIHmPzz.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
