import{j as e,e as m}from"./iframe-DpsLP052.js";import{useMDXComponents as a}from"./index-_rtImS1W.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-PRfqR2eX.js";import{A as d}from"./ArgTypesWithNote-Dti3GkVM.js";import{C as f}from"./ControlsWithNote-BB6ixV-z.js";import{D as M}from"./DocsHeader-DmvPzofP.js";import{F as I}from"./CommandsAndQueries-B3V0wcrs.js";import{C as o,D as r,B as i}from"./Button.stories-4vw1uZQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFgF6Hw1.js";import"./information-NX8J3kcU.js";import"./sys-enter-2-DlH7FC2F.js";import"./alert-BDCJXtoD.js";import"./Tag-C7F6-79_.js";import"./index-BB8Wt2y3.js";import"./index-Cb94JCFH.js";import"./Link-lhnFzeWI.js";import"./copy-BNMQiwjZ.js";import"./copy-LcJtQKoV.js";import"./GitHub-Mark-CKuNC7Db.js";import"./TableOfContent-zs7QCM0s.js";import"./index-DfDXcGgq.js";import"./index-82Uo0cXy.js";import"./addCustomCSSWithScoping-3Nlci0j7.js";import"./index-DCyO76rI.js";import"./index-BfX04KMA.js";import"./index-DZ1ovLuc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D03GatZl.js";import"./ai-CCcEyaJ6.js";import"./ai-uQEnM22t.js";import"./navigation-down-arrow-DD5HAM7_.js";import"./stop-ENfVACiR.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-CWG6j5uB.js";import"./slim-arrow-down-DWqLlwo-.js";import"./slim-arrow-down-DDNi_5CI.js";import"./index-wgZyPQ95.js";import"./index-qsZUv5Wm.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
