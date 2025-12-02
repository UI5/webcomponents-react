import{j as t}from"./iframe-Dy0Vcyg3.js";import{useMDXComponents as c}from"./index-D0O3WS9u.js";import{A as o}from"./ArgTypesWithNote-Drg-C9gV.js";import{C as l}from"./ControlsWithNote-Kr0mR6A3.js";import{D as g}from"./DocsHeader-CdFYNUpk.js";import{F as x}from"./CommandsAndQueries-BbCratpG.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-DQpqsYLC.js";import{C as i,D as r}from"./NavigationLayout.stories-CKNMT2dn.js";import{S as m,a as s,b as d}from"./index-DSmwMoo8.js";import{S as p}from"./chain-link-CI3U02Kw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nlWOetEC.js";import"./information-BWURtjFA.js";import"./sys-enter-2-D7LiZd3_.js";import"./alert-CoPtJvs8.js";import"./Tag-DXMLJOuX.js";import"./index-DLHjFZTm.js";import"./index-0ZDpj1Mu.js";import"./Link-DNkb161-.js";import"./copy-C3vqrGXf.js";import"./copy-BxlHwQsP.js";import"./GitHub-Mark-F715STOU.js";import"./TableOfContent-CImz-8VI.js";import"./index-BMTL_1tu.js";import"./index-BRFe_2UD.js";import"./index-DKPC3_SO.js";import"./index-D_r2NSA0.js";import"./index-C5s5hQAS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-01L-n9vL.js";import"./addCustomCSSWithScoping-nI6ifFmX.js";import"./index-B_Yj2XLA.js";import"./parameters-bundle.css-BaExaGb0.js";import"./menu-BsdMzBrf.js";import"./home-Cu1b-xmh.js";import"./calendar-BZauvdKH.js";import"./history-DWOCoO9E.js";import"./background-OdRgOhnL.js";import"./action-settings-D4SUPP-7.js";import"./locked-CLNkVXC2.js";import"./index-CseVAj7I.js";import"./ListItemStandard-QXpolB0M.js";import"./ButtonBadge-D6jhX7Wu.js";import"./search-DbROQcpj.js";import"./overflow-CCC6fNVt.js";import"./slim-arrow-down-tdJshJ_8.js";import"./slim-arrow-down-KQetxSCA.js";import"./i18n-defaults-k5o3Svb4.js";import"./navigation-right-arrow-CK8BM-ml.js";import"./navigation-right-arrow-DGzC3PDm.js";import"./navigation-down-arrow-C202Rycb.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
