import{j as e,e as m}from"./iframe-C7IxwDmR.js";import{useMDXComponents as a}from"./index-CbSg1oVF.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-3mjErVLE.js";import{A as d}from"./ArgTypesWithNote-BaoIym4o.js";import{C as f}from"./ControlsWithNote-C41TO-UY.js";import{D as M}from"./DocsHeader-DhPkElVc.js";import{F as I}from"./CommandsAndQueries-D3KUBOYC.js";import{C as o,D as r,B as i}from"./Button.stories-DV3cAOYI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BN5pmzGS.js";import"./information-wiA8vfAE.js";import"./sys-enter-2-j2JxX-0l.js";import"./alert-Cm08TFjk.js";import"./Tag-C9e9pWXA.js";import"./index-Btmndd9w.js";import"./index-BiORqeCW.js";import"./Link-CCpfCikN.js";import"./copy-DGGR9tPZ.js";import"./copy-D-VhlFxG.js";import"./GitHub-Mark-B8gHwPzX.js";import"./TableOfContent-BnKOdT6F.js";import"./index-CfKFL4Pe.js";import"./index-DScPik_c.js";import"./index-CHmX3iCn.js";import"./index-DifvSs4M.js";import"./index-C1RQfiDX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-me-lZqyi.js";import"./addCustomCSSWithScoping-Ddb1r2sC.js";import"./ai-Bvn5QPCA.js";import"./ai-X6-WTIAw.js";import"./navigation-down-arrow-pKD6UD3T.js";import"./stop-CQ2XclYO.js";import"./stop-BrgB4B5e.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-LNoaTEUu.js";import"./SplitButton-DabaDIbN.js";import"./slim-arrow-down-TXkhd4Mj.js";import"./slim-arrow-down-BNmOcvZN.js";import"./index-Cp59r1Jc.js";import"./index-DQCdmDEJ.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
