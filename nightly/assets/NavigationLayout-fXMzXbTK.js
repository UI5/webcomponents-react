import{j as t}from"./iframe-QfBB5oxv.js";import{u as c,M as l,C as g,a as x,D as o}from"./blocks-BNoxk89Z.js";import{A as a}from"./ArgTypesWithNote-DQz_ZqZg.js";import{C as S}from"./ControlsWithNote-CpNK55OJ.js";import{D as v}from"./DocsHeader-CobLgORO.js";import{F as f}from"./Footer-Djb8KmT2.js";import"./CommandsAndQueries-CHXq-8GX.js";import"./PageNotFound-BF3CKwDf.js";import{S as h}from"./SubcomponentsSection-BVy4lpQe.js";import{C as i,D as r}from"./NavigationLayout.stories-JyZEFplt.js";import{S as m,a as s,b as d}from"./index-SJ2ioAXl.js";import{S as p}from"./chain-link-D0mF7pU2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXwzMtEr.js";import"./information-DnhNkDB3.js";import"./sys-enter-2-BMzcK94M.js";import"./alert-Djbx4OhD.js";import"./Tag-jV4rQ7he.js";import"./index-C23APlHe.js";import"./index-BP6rOJzd.js";import"./Link-CjKrRSzJ.js";import"./copy-B-tqVZcU.js";import"./copy-Ddev0qyd.js";import"./GitHub-Mark-C9In8ohp.js";import"./TableOfContent-F4sRBeye.js";import"./index-B0PZpUdZ.js";import"./index-CMW9Znni.js";import"./index-CKPcWxBG.js";import"./index-qK3ZRsrU.js";import"./index-mR2WMj9r.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4b8nEvCn.js";import"./addCustomCSSWithScoping-BzEIPtCm.js";import"./Illustrations-B1Eex0pq.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DGS2ZoqR.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./menu-C6nq9GxX.js";import"./home-CVH_7Lgn.js";import"./calendar-B2UcG0fm.js";import"./history-DHHLobCx.js";import"./background-CEUWe-On.js";import"./action-settings-9bsXcFHB.js";import"./locked-CWHs5PjF.js";import"./index-CZ08iLR-.js";import"./query-CzSBusdE.js";import"./ButtonBadge-BdlRu3WU.js";import"./ListItemStandard-CYJdKcUD.js";import"./search-BJu14OgE.js";import"./overflow-BtybP9KS.js";import"./navigation-right-arrow-Ce-DclTe.js";import"./navigation-right-arrow-C22SmqFg.js";import"./navigation-down-arrow-DINT9BlU.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:i}),`
`,t.jsx(v,{of:i}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(g,{of:r}),`
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
`,t.jsx(S,{of:r}),`
`,t.jsx(x,{children:h}),`
`,t.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,t.jsx(o,{of:m}),`
`,t.jsx(a,{metaOf:i,of:m}),`
`,t.jsx(e.h2,{id:"sidenavigationitem",children:"SideNavigationItem"}),`
`,t.jsx(o,{of:s}),`
`,t.jsx(a,{metaOf:i,of:s}),`
`,t.jsx(e.h2,{id:"sidenavigationsubitem",children:"SideNavigationSubItem"}),`
`,t.jsx(o,{of:d}),`
`,t.jsx(a,{metaOf:i,of:d}),`
`,t.jsx(e.h2,{id:"sidenavigationgroup",children:"SideNavigationGroup"}),`
`,t.jsx(o,{of:p}),`
`,t.jsx(a,{metaOf:i,of:p}),`
`,t.jsx(f,{})]})}function ht(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ht as default};
