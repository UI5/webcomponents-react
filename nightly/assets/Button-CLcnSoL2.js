import{j as e,B as m}from"./iframe-DK_3t7HQ.js";import{useMDXComponents as a}from"./index-Bn4DIwe1.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-BYCX_D4a.js";import{A as d}from"./ArgTypesWithNote-DW9lquye.js";import{C as f}from"./ControlsWithNote-B-eT4P9R.js";import{D as M}from"./DocsHeader-D3DJ0Uby.js";import{F as I}from"./CommandsAndQueries-8GqG6vck.js";import{C as o,D as r,B as i}from"./Button.stories--IQrY4dr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DM6dIB46.js";import"./information-MEtG0nZR.js";import"./sys-enter-2-DcwCthWV.js";import"./alert-CP9vtKnc.js";import"./Tag-CMm3ArFn.js";import"./index-DGhVTpl9.js";import"./index-BD65A0G0.js";import"./Link-s9SylKhD.js";import"./copy-ChDGHLIN.js";import"./copy-Cen_7za9.js";import"./GitHub-Mark-8Lbicbrm.js";import"./TableOfContent-B9G4Qsdi.js";import"./index-DcvukCsl.js";import"./index-W3t_MBGP.js";import"./index-BLsgqlPC.js";import"./index-Bw6wQW8K.js";import"./index-BlpaDNQk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyNtnc-C.js";import"./addCustomCSSWithScoping-BS7bnaiL.js";import"./ai-BtnOgbaZ.js";import"./ai-DxS1oMtE.js";import"./navigation-down-arrow-B8-P8g3_.js";import"./stop-BVeCAHFP.js";import"./stop-C8M6UfAv.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-Db4GyH3B.js";import"./slim-arrow-down-BB5WzEh_.js";import"./slim-arrow-down-DAUAvb4X.js";import"./index-BjrIvalW.js";import"./index-njhUUlEq.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
