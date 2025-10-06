import{j as e,e as m}from"./iframe-BB4qEXD6.js";import{useMDXComponents as a}from"./index-Du8_Rn8P.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-CR8KOJrJ.js";import{A as d}from"./ArgTypesWithNote-D2ttIe6k.js";import{C as f}from"./ControlsWithNote-DYMuD7l3.js";import{D as M}from"./DocsHeader-BS7EOXT_.js";import{F as I}from"./CommandsAndQueries-DRsaMJRB.js";import{C as o,D as r,B as i}from"./Button.stories-Bpbbgzm1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdTPxxL_.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./Tag-Da7QnCDv.js";import"./index-Dpli1QB-.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./copy-6zx3_vtS.js";import"./copy-BVMnHcDg.js";import"./GitHub-Mark-BhVT2185.js";import"./TableOfContent-WiDutKKz.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";import"./ai-BaEFPyyV.js";import"./ai-CvgCMJUs.js";import"./navigation-down-arrow-VkG8_yjV.js";import"./stop-BeUS5Zo5.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-B3lrbbNu.js";import"./slim-arrow-down-BARLwaMW.js";import"./slim-arrow-down-BddUJ-KN.js";import"./index-tSyuC38E.js";import"./index-CQ8bv114.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
