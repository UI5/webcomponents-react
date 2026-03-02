import{j as e,B as m}from"./iframe-BYdzMGmT.js";import{useMDXComponents as a}from"./index-Cj6hKPa8.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-Cj5RS3Jv.js";import{A as d}from"./ArgTypesWithNote-CO4ZUMmD.js";import{C as f}from"./ControlsWithNote-BPNG-KVJ.js";import{D as M}from"./DocsHeader-hmTZgC9w.js";import{F as I}from"./CommandsAndQueries-B5lWQhG8.js";import{C as o,D as r,B as i}from"./Button.stories-f7dizgXn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhYrs86x.js";import"./information-BG-owH3g.js";import"./sys-enter-2-CtufiL4W.js";import"./alert-C-RhncMU.js";import"./Tag-DG55Z9om.js";import"./index-DonwXZ8V.js";import"./index-DAUDNesr.js";import"./Link-BofMtgPA.js";import"./copy-BDPB19MZ.js";import"./copy-CWbk9K2V.js";import"./GitHub-Mark-D3tonyZi.js";import"./TableOfContent-BYp35ZjE.js";import"./index-DnPstsP7.js";import"./index-DjVw4D0h.js";import"./index-DA47VMXK.js";import"./index-fFMR_gyI.js";import"./index-CkYce0wJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_-sXQeTV.js";import"./addCustomCSSWithScoping-Cw5UObAf.js";import"./ai-BuMGep7V.js";import"./ai-CWwqfgdo.js";import"./navigation-down-arrow-CgevP1zB.js";import"./stop-We4teCql.js";import"./stop-D-l3Oj0p.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-ggYa4myW.js";import"./slim-arrow-down-ZQK8hEoe.js";import"./slim-arrow-down-EzV-h7vN.js";import"./index-B81Inlus.js";import"./index-BPCS3-Ov.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
