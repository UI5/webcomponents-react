import{j as e,B as m}from"./iframe-COmYM7FM.js";import{useMDXComponents as a}from"./index-nJK3ZT8W.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DAY1TuCU.js";import{A as d}from"./ArgTypesWithNote-Plez4xF8.js";import{C as f}from"./ControlsWithNote-D0uv15nF.js";import{D as M}from"./DocsHeader-CST8qEMS.js";import{F as I}from"./CommandsAndQueries-BOWLtTE6.js";import{C as o,D as r,B as i}from"./Button.stories-ChxH_TZ4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8dZG1YHw.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./Tag-C7vo2194.js";import"./index-DFr8Hmr1.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./copy-Dq2e23NG.js";import"./copy-CXZAgH3a.js";import"./GitHub-Mark-qFlD-nLv.js";import"./TableOfContent-tjnC9ti3.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";import"./ai-CDukXjg7.js";import"./ai-BfY1fwqj.js";import"./navigation-down-arrow-DPdzdZ9F.js";import"./stop-DNpKWXoE.js";import"./stop-CisE-W_o.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./SplitButton-BqPjnEGH.js";import"./slim-arrow-down-LiCVxuMd.js";import"./slim-arrow-down-jGOJjhpo.js";import"./index-DTMHIuzw.js";import"./index-DmmTe_xB.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
