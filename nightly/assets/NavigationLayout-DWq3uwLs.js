import{j as t}from"./iframe-a0uMhM0K.js";import{useMDXComponents as c}from"./index-BsqnGYZV.js";import{A as o}from"./ArgTypesWithNote-8mH8UpU7.js";import{C as l}from"./ControlsWithNote-BEMOWWen.js";import{D as g}from"./DocsHeader-DMGbHFDw.js";import{F as x}from"./Footer-UprvpWI8.js";import"./CommandsAndQueries-Daj0tnDY.js";import"./PageNotFound-C4t5kuHt.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-GWXZJNmq.js";import{C as i,D as r}from"./NavigationLayout.stories-DtvqrWap.js";import{S as m,a as s,b as d}from"./index-DPJMCfme.js";import{S as p}from"./chain-link-Dv_eM8xG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfgNdjah.js";import"./information-DnAoFJ5t.js";import"./sys-enter-2-DG20pJAR.js";import"./alert-CaXXBJy4.js";import"./Tag-BaNCkHdE.js";import"./index-C3E6FzVb.js";import"./index-BsmCDa7r.js";import"./Link-C9XRs14a.js";import"./copy-CkZlrlAS.js";import"./copy-Ba79n2H6.js";import"./GitHub-Mark-Cu6FwiBG.js";import"./TableOfContent-D-FWXZzb.js";import"./index-Dk4guAK8.js";import"./index-CqObD5eZ.js";import"./index-BwlpwmJL.js";import"./index-1tRSjVgF.js";import"./index-CSZ4nu-Y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-F25ehqhC.js";import"./addCustomCSSWithScoping-DssrUnNY.js";import"./Illustrations-Do7SV7fL.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CzAflKZW.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./menu-D2nnTwQg.js";import"./home-BMSfwO4Z.js";import"./calendar-CCOdhEF_.js";import"./history-TIiGl_pB.js";import"./background-DBxpN_EX.js";import"./action-settings-D6rZ7IMV.js";import"./locked-DVi4Vix4.js";import"./index-Yaw3xuPv.js";import"./query-CzSBusdE.js";import"./ButtonBadge-BboRfFMz.js";import"./ListItemStandard-B1cxGoSI.js";import"./search-DE2omvPC.js";import"./overflow-BHtQiObe.js";import"./navigation-right-arrow-DlOUO2TW.js";import"./navigation-right-arrow-DE4TJjHn.js";import"./navigation-down-arrow-KRMhOoWK.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
`,t.jsx(g,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(f,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function NavigationLayoutComponent(props) {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [mode, setMode] = useState(props.mode);
  const navigationLayoutRef = useRef<NavigationLayoutDomRef>(null);

  const handleSelectionChange: SideNavigationPropTypes['onSelectionChange'] = (e) => {
    setSelectedContent(e.detail.item.text);
  };

  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);

  return (
    <div style={{ position: 'relative', height: '800px' }}>
      <NavigationLayout
        {...props}
        ref={navigationLayoutRef}
        mode={mode}
        header={
          <ShellBar
            startButton={
              <Button
                icon={menuIcon}
                onClick={() => {
                  if (navigationLayoutRef.current?.isSideCollapsed()) {
                    setMode(NavigationLayoutMode.Expanded);
                  } else {
                    setMode(NavigationLayoutMode.Collapsed);
                  }
                }}
              />
            }
            primaryTitle="UI5 Web Components for React"
            secondaryTitle="The Best Run SAP"
          />
        }
        sideContent={
          <SideNavigation slot="sideContent" onSelectionChange={handleSelectionChange}>
            <SideNavigationItem text="Home" icon="home" />
            <SideNavigationGroup text="Group 1" expanded>
              <SideNavigationItem text="Item 1" icon="locate-me" expanded>
                <SideNavigationSubItem text="Sub Item 1" />
                <SideNavigationSubItem text="Sub Item 2" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 2" icon="calendar" expanded>
                <SideNavigationSubItem text="Sub Item 3" />
                <SideNavigationSubItem text="Sub Item 4" />
              </SideNavigationItem>
              <SideNavigationItem text="Item 3" icon="activity-assigned-to-goal" expanded>
                <SideNavigationSubItem text="Sub Item 5" />
                <SideNavigationSubItem text="Sub Item 6" />
              </SideNavigationItem>
            </SideNavigationGroup>
            <SideNavigationGroup text="Group 2" expanded>
              <SideNavigationItem text="Item 4" icon="history" />
              <SideNavigationItem text="Item 5" icon="source-code" />
              <SideNavigationItem text="Item 6" icon="background" />
            </SideNavigationGroup>

            <SideNavigationItem
              slot="fixedItems"
              text="Legal"
              href="https://www.sap.com/about/legal/impressum.html"
              target="_blank"
              icon="compare"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Privacy"
              href="https://www.sap.com/about/legal/privacy.html"
              target="_blank"
              icon="locked"
            />
            <SideNavigationItem
              slot="fixedItems"
              text="Terms of Use"
              href="https://www.sap.com/terms-of-use"
              target="_blank"
              icon="document-text"
            />
          </SideNavigation>
        }
      >
        <div style={{ padding: '1rem' }}>
          <div>
            <Title>{selectedContent}</Title>
            <br />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          </div>
        </div>
      </NavigationLayout>
    </div>
  );
}
`})})]}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx(h,{children:S}),`
`,t.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(o,{metaOf:i,of:m}),`
`,t.jsx(e.h2,{id:"sidenavigationitem",children:"SideNavigationItem"}),`
`,t.jsx(a,{of:s}),`
`,t.jsx(o,{metaOf:i,of:s}),`
`,t.jsx(e.h2,{id:"sidenavigationsubitem",children:"SideNavigationSubItem"}),`
`,t.jsx(a,{of:d}),`
`,t.jsx(o,{metaOf:i,of:d}),`
`,t.jsx(e.h2,{id:"sidenavigationgroup",children:"SideNavigationGroup"}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(o,{metaOf:i,of:p}),`
`,t.jsx(x,{})]})}function Nt(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{Nt as default};
