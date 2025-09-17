import{j as e,e as m}from"./iframe-_UyBg_Hl.js";import{useMDXComponents as a}from"./index-DEEVvvo3.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-CYzyNaRH.js";import{A as d}from"./ArgTypesWithNote-C1nFc48y.js";import{C as f}from"./ControlsWithNote-DidTIApO.js";import{D as M}from"./DocsHeader-DCW0zQrG.js";import{F as I}from"./CommandsAndQueries-0B2XTB0a.js";import{C as o,D as r,B as i}from"./Button.stories-a1PFxsqk.js";import"./preload-helper-D9Z9MdNV.js";import"./index-5woB_pVn.js";import"./information-DYJp_bgk.js";import"./sys-enter-2-Bc61YsW4.js";import"./alert-Vjb3s5VB.js";import"./Tag-CQlNZs2z.js";import"./index-CCQAf2jY.js";import"./index-DXgH8OvD.js";import"./Link-5ArX67S2.js";import"./copy-DGzjElTh.js";import"./copy-BX3zmcvZ.js";import"./GitHub-Mark-BeciDiIt.js";import"./TableOfContent-Dd45oQBu.js";import"./index-DpskCw-c.js";import"./index-e_5k1_Nn.js";import"./addCustomCSSWithScoping-BV_2mez6.js";import"./index-LcJnWxTb.js";import"./index-x1moOr2G.js";import"./index-CbWaderx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-SEMy8FFe.js";import"./ai-ByGWQnU0.js";import"./ai-eWM-wCV9.js";import"./navigation-down-arrow-CqYoF-4_.js";import"./stop-CIiWH4Hi.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-Chce_F9i.js";import"./SplitButton-663846eO.js";import"./slim-arrow-down-BtfHa_9S.js";import"./slim-arrow-down-qdV-4r_r.js";import"./index-BlhFMoIK.js";import"./index-IqF4cgnD.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
