import{j as e,A as l}from"./iframe-DoasxszC.js";import{u as a,M as p,C as u,a as m,D as d}from"./blocks-DBX_G92C.js";import{A as c}from"./ArgTypesWithNote-C6YZamB9.js";import{C as h}from"./ControlsWithNote-B6cTbFDY.js";import{D as g}from"./DocsHeader-BFtvyrC2.js";import{F as S}from"./Footer-BMRkHXkr.js";import"./CommandsAndQueries-Bg5oLjv_.js";import"./PageNotFound-DlCPYtCu.js";import{C as i,D as s,W as r}from"./Wizard.stories-DxbqdVgO.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkq6_nAR.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./Tag-DCvAsOsB.js";import"./index-DUsiHM8W.js";import"./index-CY9OUOeY.js";import"./Link-CvHgBQZc.js";import"./copy-DxyiXEXB.js";import"./copy-Bp1X0rrX.js";import"./GitHub-Mark-B2tTDOGy.js";import"./TableOfContent-BL-dDNDX.js";import"./index-BuSM4uik.js";import"./index-C3bV2_l1.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./product-DLUQ2mTh.js";import"./index-D8ci1hZC.js";import"./index-BLz5gwPO.js";import"./Input-xqXXZk7V.js";import"./ResponsivePopoverCommon.css-ClOyFMHE.js";import"./ValueStateMessage.css-CQfpuydp.js";import"./Suggestions.css-DgSzBLOP.js";import"./parameters-bundle.css-DMPIvP1N.js";function o(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i}),`
`,e.jsx(g,{of:i,since:"0.12.0"}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(u,{of:s,sourceState:"none"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const WizardComponent = () => {
  const [selected, setSelected] = useState('1');
  const [disabled, setDisabled] = useState<Record<string, boolean>>({ '2': true, '3': true, '4': true });
  const [hidden, setHidden] = useState<Record<string, boolean>>({ step3Btn: true, finalizeBtn: true });
  const goToStep2 = () => {
    setDisabled((prev) => {
      const { '2': _omit, ...rest } = prev;
      return rest;
    });
    setSelected('2');
  };
  const goToStep3 = () => {
    setDisabled((prev) => {
      const { '3': _omit, ...rest } = prev;
      return rest;
    });
    setSelected('3');
  };
  const handleStep2Completed = (e) => {
    if (e.target.checked) {
      setHidden((prev) => {
        const { step3Btn: _omit, ...rest } = prev;
        return rest;
      });
    }
  };
  const finalizeWizard = () => {
    alert('Wizard is now completed!');
  };
  const handlePriceInput = (e) => {
    if (e.target.value) {
      setHidden((prev) => {
        const { finalizeBtn: _omit, ...rest } = prev;
        return rest;
      });
    }
  };
  const handleStepChange = (e) => {
    setSelected(e.detail.step.dataset.step);
    args.onStepChange(e);
  };

  return (
    <Wizard {...args} onStepChange={handleStepChange}>
      <WizardStep icon={productIcon} titleText="Product Type" selected={selected === '1'} data-step={'1'}>
        <Title>1. Product Type</Title>
        <MessageStrip design={MessageStripDesign.Information}>
          The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work
          with.
        </MessageStrip>
        <Label wrappingType={WrappingType.None}>
          Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada
          diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit
          amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla
          tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce
          quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis
          metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor
          et, varius quam. Aliquam erat volutpat
        </Label>
        <Button design={ButtonDesign.Emphasized} onClick={goToStep2}>
          Step 2
        </Button>
      </WizardStep>
      <WizardStep
        icon={hintIcon}
        titleText="Product Information"
        disabled={disabled['2']}
        selected={selected === '2'}
        data-step={'2'}
      >
        <Title>2. Product Information</Title>
        <Label wrappingType={WrappingType.None}>
          Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse
          arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis
          ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet
          dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula,
          quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie
          aliquet dui. Donec pulvinar, sapien
        </Label>
        <CheckBox onChange={handleStep2Completed} text="Step Completed" />
        <br />
        {!hidden['step3Btn'] && (
          <Button design={ButtonDesign.Emphasized} onClick={goToStep3}>
            Step 3
          </Button>
        )}
      </WizardStep>
      <WizardStep
        icon={leadIcon}
        titleText="Pricing"
        disabled={disabled['3']}
        selected={selected === '3'}
        data-step={'3'}
      >
        <Title>3. Pricing</Title>
        <Label wrappingType={WrappingType.None}>
          Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse
          arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis
          ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet
          dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula,
          quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie
          aliquet dui. Donec pulvinar, sapien
        </Label>
        <Input placeholder="Item Price" onInput={handlePriceInput} />
        {Br}
        {!hidden['finalizeBtn'] && (
          <Button design={ButtonDesign.Emphasized} onClick={finalizeWizard}>
            Finalize
          </Button>
        )}
      </WizardStep>
    </Wizard>
  );
};
`})})]}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(m,{children:f}),`
`,e.jsx(t.h2,{id:"wizardstep",children:"WizardStep"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(c,{metaOf:i,hideHTMLPropsNote:!0,exclude:l,of:r}),`
`,e.jsx(S,{})]})}function re(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{re as default};
