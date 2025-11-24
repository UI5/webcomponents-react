import{j as e,e as m}from"./iframe-ChLklOsd.js";import{useMDXComponents as a}from"./index-C8O_9vrB.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DJtWS-rM.js";import{A as d}from"./ArgTypesWithNote-BEdHazNn.js";import{C as f}from"./ControlsWithNote-BKZjeS7U.js";import{D as M}from"./DocsHeader-Bz6VW3Ao.js";import{F as I}from"./CommandsAndQueries-BJfqhrRX.js";import{C as o,D as r,B as i}from"./Button.stories-Cv1YqmKF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3GBtHew.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./Tag-DfUNsarH.js";import"./index-k8fk5wba.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./copy-CpkWUnUU.js";import"./copy-e7lZwdk_.js";import"./GitHub-Mark-B8B_KMCt.js";import"./TableOfContent-DlI8e9kq.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";import"./ai-D7oxQqQW.js";import"./ai-Fs_kG7k_.js";import"./navigation-down-arrow-KDgf9JO_.js";import"./stop-DEnO1cKw.js";import"./stop-hAZJQe8B.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-LNoaTEUu.js";import"./SplitButton-BpklUlCF.js";import"./slim-arrow-down-3G2_d1HL.js";import"./slim-arrow-down-C0sKTfFd.js";import"./index-DZywyMYK.js";import"./index-DsR2Et7K.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
