import{j as t,A as m}from"./iframe-DNoxABv1.js";import{useMDXComponents as a}from"./index-DQAMMhq5.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-CIhTxD7j.js";import{A as d}from"./ArgTypesWithNote-Cc8pN54_.js";import{C as f}from"./ControlsWithNote-CkiiUodH.js";import{D as M}from"./DocsHeader-BCqO4hZN.js";import{F as I}from"./Footer-CRUbKNtZ.js";import"./CommandsAndQueries-DUw_qZ-D.js";import"./PageNotFound-DExHfP7X.js";import{C as o,D as r,B as i}from"./Button.stories-BMYheRIQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-I7XZadEI.js";import"./information-BBbHiJJj.js";import"./sys-enter-2-CL00FEGT.js";import"./alert-8k6AaqYY.js";import"./Tag-C_8TAHAf.js";import"./index-Kl-B_MHz.js";import"./index-DAoAOn92.js";import"./Link-4KtEWIlR.js";import"./copy-DWlPDnmg.js";import"./copy-BoMvLlry.js";import"./GitHub-Mark-CIM-w4tw.js";import"./TableOfContent-BxuLiWq8.js";import"./index-B0My9-lL.js";import"./index-BfoP-fai.js";import"./index-KaiTFuVE.js";import"./index-BEeVgB1o.js";import"./index-DVs60LFY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CQViNCUD.js";import"./addCustomCSSWithScoping-CvyaWJf_.js";import"./Illustrations-eHdiuTwk.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-96v-D_ZK.js";import"./ai-C-8Xgh8F.js";import"./navigation-down-arrow-D0ahPAv-.js";import"./stop-BjXzEOMP.js";import"./stop-Bw-u5thi.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-DAqs15-E.js";import"./index-BoZ5DN26.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:o}),`
`,t.jsx(M,{of:o,experimental:!0}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function AIButton(props) {
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
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(f,{of:r}),`
`,t.jsx(l,{children:u}),`
`,t.jsx(e.h2,{id:"buttonstate",children:"ButtonState"}),`
`,t.jsx(x,{of:i}),`
`,t.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,t.jsx(I,{}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{})})]})}function at(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{at as default};
