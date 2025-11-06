import{j as t}from"./iframe-DVlTfEM-.js";import{useMDXComponents as c}from"./index-k_8IF_2O.js";import{A as o}from"./ArgTypesWithNote-Bud3d1vT.js";import{C as l}from"./ControlsWithNote-CYH0qfSp.js";import{D as g}from"./DocsHeader-Bith4eJa.js";import{F as x}from"./CommandsAndQueries-BkPdYDds.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-DrSp3MOM.js";import{C as i,D as r}from"./NavigationLayout.stories-J2sHRNdd.js";import{S as m,a as s,b as d}from"./index-B7GAKEgn.js";import{S as p}from"./chain-link-um1ybaur.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cikr51XZ.js";import"./information-CmhnSrRB.js";import"./sys-enter-2-ty4GJ2q8.js";import"./alert-MBG6abBg.js";import"./Tag-BNH48-R1.js";import"./index-CyKhe59o.js";import"./index-VtIqKiJ-.js";import"./Link-B2NzUiP2.js";import"./copy-D5yGLqiE.js";import"./copy-Do4831X0.js";import"./GitHub-Mark-BDp2e9GW.js";import"./TableOfContent-Dm46pPOt.js";import"./index-D8q9J4Er.js";import"./index-D5QdPm5n.js";import"./index-I1wK0hXe.js";import"./index-gAu6pc3o.js";import"./index-B-srII_E.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuLQb_Od.js";import"./addCustomCSSWithScoping-DyDcwna5.js";import"./index-DiQJFiGO.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./menu-Bplab7ur.js";import"./home-C_GfiPI2.js";import"./calendar-D8Q6gyhr.js";import"./history-8WiLMJEo.js";import"./background-ZVUsiDSk.js";import"./action-settings-Dm1ygWS7.js";import"./locked-B0vhWGKA.js";import"./index-rwMzDdyg.js";import"./ListItemStandard-C3KQCuJV.js";import"./ButtonBadge-C3D0SxOf.js";import"./search-BeI08D0B.js";import"./overflow-Tum5VxKn.js";import"./slim-arrow-down-CiXqYYHt.js";import"./slim-arrow-down-Cl15R1ZF.js";import"./i18n-defaults-DGnw9SAb.js";import"./navigation-right-arrow-Dfp0sj6x.js";import"./navigation-right-arrow-DYueMaPq.js";import"./navigation-down-arrow-BUDUl4ig.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
