import{j as t}from"./iframe-e2ulr1yw.js";import{useMDXComponents as c}from"./index-PtYZPZtM.js";import{A as o}from"./ArgTypesWithNote-NZc-885H.js";import{C as l}from"./ControlsWithNote-C1zRYBYO.js";import{D as g}from"./DocsHeader-BgtU4XVD.js";import{F as x}from"./CommandsAndQueries-Do207XX8.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-Cdk7qnv2.js";import{C as i,D as r}from"./NavigationLayout.stories-CAlCRUBl.js";import{S as m,a as s,b as d}from"./index-DHIUlSU4.js";import{S as p}from"./chain-link-D3v0DxCJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Eon1qDJA.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./Tag-CbLqF2IE.js";import"./index-BSw3xQau.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./copy-CBKO5Y7R.js";import"./copy-CcaF1jLX.js";import"./GitHub-Mark-DD0-3nfQ.js";import"./TableOfContent-eq2ptewm.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./index-DwY1Q_zU.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./menu-DzLTD6Ks.js";import"./home-hqV8n8j2.js";import"./calendar-B7pOAwKu.js";import"./history-CU_lvb_g.js";import"./background-C5UYSjVO.js";import"./action-settings-6_S4U4sS.js";import"./locked-DOLVBm6k.js";import"./index-Byh7DmYP.js";import"./ListItemStandard-Zbea8WPI.js";import"./ButtonBadge-Cg5aMNsd.js";import"./search-C83miTbK.js";import"./overflow-BnN7lcph.js";import"./slim-arrow-down-BTy2_7_G.js";import"./slim-arrow-down-87FbM80e.js";import"./i18n-defaults-Ca0KLLzw.js";import"./navigation-right-arrow-Dwj_O4Hl.js";import"./navigation-right-arrow-BzujGep6.js";import"./navigation-down-arrow-CmGlfloc.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
`,t.jsx(x,{})]})}function ft(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ft as default};
