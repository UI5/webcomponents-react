import{j as e,e as m}from"./iframe-Bn2VcNjM.js";import{useMDXComponents as a}from"./index-B8O2NRso.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DxdZj58t.js";import{A as d}from"./ArgTypesWithNote-CIvhFlxo.js";import{C as f}from"./ControlsWithNote-BRoD9fSY.js";import{D as M}from"./DocsHeader-C1nuuftr.js";import{F as I}from"./CommandsAndQueries-Duu3Cv2i.js";import{C as o,D as r,B as i}from"./Button.stories-SPxepvE5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DP2Vk4N-.js";import"./information-BknIne9K.js";import"./sys-enter-2-BaImGntK.js";import"./alert-B1eI2qVm.js";import"./Tag-CP1g89nG.js";import"./index-BmvAtQRx.js";import"./index-DwYiaS9z.js";import"./Link-BGC1cQo4.js";import"./copy-Is4R2zLj.js";import"./copy-BNtdn9f6.js";import"./GitHub-Mark-CvaDqKX7.js";import"./TableOfContent-DDKyKiLG.js";import"./index-CPtlwBkZ.js";import"./index-DtkUQ_fK.js";import"./index-FmeoD5BD.js";import"./index-DzdCI7N0.js";import"./index-DQbgfd5S.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2LahRfeL.js";import"./addCustomCSSWithScoping-I5ABusfy.js";import"./ai-D-S8-A5g.js";import"./ai-DgnIsOE6.js";import"./navigation-down-arrow-CvLpJA3c.js";import"./stop-JiHLAeGK.js";import"./stop-BrRaTQ8d.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-UR8Qxv08.js";import"./SplitButton-BPy6kuH1.js";import"./slim-arrow-down-pvLvaCi8.js";import"./slim-arrow-down-CUDCAHka.js";import"./index-BFTWiUJU.js";import"./index-CZs-zrCU.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
