import{j as t}from"./iframe-yI-Wg8Yu.js";import{useMDXComponents as c}from"./index-CxvvrXjD.js";import{A as o}from"./ArgTypesWithNote-CDfWD-8j.js";import{C as l}from"./ControlsWithNote-B3XqlkRL.js";import{D as g}from"./DocsHeader-BoRDyxWL.js";import{F as x}from"./Footer-BemjN3C9.js";import"./CommandsAndQueries-DwKUywP6.js";import"./PageNotFound-CBU2IUWB.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-HNp4GQzu.js";import{C as i,D as r}from"./NavigationLayout.stories-BHUlZ0Cv.js";import{S as m,a as s,b as d}from"./index-DWQMUXwF.js";import{S as p}from"./chain-link-BZ_CtPh7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrEz3lFQ.js";import"./information-BheeN2Jq.js";import"./sys-enter-2-Cz9qa-qG.js";import"./alert-CEw8OaPM.js";import"./Tag-Br4lHrdC.js";import"./index-B7JluNCD.js";import"./index-DzsGzp3s.js";import"./Link-C6y8N-8D.js";import"./copy-CaZOJ66E.js";import"./copy-CzvsuiXE.js";import"./GitHub-Mark-DVoCZ3vP.js";import"./TableOfContent-BbIaZttf.js";import"./index-CVU3jLpA.js";import"./index-Bdq6p_tF.js";import"./index-D8b50e5F.js";import"./index-xjCs2iot.js";import"./index-J93pLR5V.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZnAazyk.js";import"./addCustomCSSWithScoping-BNZ7UTaQ.js";import"./Illustrations-CgcUDXre.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-tclRW8Bs.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./menu-DgDctugW.js";import"./home-C1Wqrffn.js";import"./calendar-BE1OSiDI.js";import"./history-CXMRLdGz.js";import"./background-B0Fb-ti-.js";import"./action-settings-BIAUZO5I.js";import"./locked-Dpug8ADx.js";import"./index-B-4SS3LK.js";import"./query-CzSBusdE.js";import"./ButtonBadge-DyDBR5U-.js";import"./ListItemStandard-ukU4a9WM.js";import"./search-BzaSKHXb.js";import"./overflow-BmEKR8Ky.js";import"./navigation-right-arrow-BH82ZZ1S.js";import"./navigation-right-arrow-B2TA0-_n.js";import"./navigation-down-arrow-BuFUK5Hw.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
