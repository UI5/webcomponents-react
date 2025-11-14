import{j as e,e as m}from"./iframe-DytFdpZ5.js";import{useMDXComponents as a}from"./index-ClxT7adU.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-CgPOjV91.js";import{A as d}from"./ArgTypesWithNote-anIi2dUG.js";import{C as f}from"./ControlsWithNote-C2rpM6wx.js";import{D as M}from"./DocsHeader-CT5_ghM5.js";import{F as I}from"./CommandsAndQueries-LDofsUzK.js";import{C as o,D as r,B as i}from"./Button.stories-CDKnFREv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-BQbcyx.js";import"./information-QfKl2uvK.js";import"./sys-enter-2-Dtt133YD.js";import"./alert-C-riVNTC.js";import"./Tag-wRQS4rBi.js";import"./index-BUF8RolX.js";import"./index-DxeYPnJs.js";import"./Link-C5pcYLCj.js";import"./copy-ErzRP1ZV.js";import"./copy-HK9b5mhG.js";import"./GitHub-Mark-D9IcF53z.js";import"./TableOfContent-oPJRBwfF.js";import"./index-CrrPqcew.js";import"./index-BWneS7co.js";import"./index-DcBMC71h.js";import"./index-BqVVjC2y.js";import"./index-BCsSmGRP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEqUMQtt.js";import"./addCustomCSSWithScoping-DZk4ZVKY.js";import"./ai-CHO_CRpp.js";import"./ai-N3RTa9ar.js";import"./navigation-down-arrow-P9bJyD1t.js";import"./stop-Bb1gbUgi.js";import"./stop-_mLsRZTN.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-LNoaTEUu.js";import"./SplitButton-R5GY8czf.js";import"./slim-arrow-down-DnRA-MRh.js";import"./slim-arrow-down-DwpoKzJW.js";import"./index-C6MQ06RA.js";import"./index-CuXR1SjJ.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
