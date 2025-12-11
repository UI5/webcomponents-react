import{j as t}from"./iframe-BO0jLSss.js";import{useMDXComponents as c}from"./index-DKYRdGJC.js";import{A as o}from"./ArgTypesWithNote-yeLyCaG-.js";import{C as l}from"./ControlsWithNote-2-KFiyR7.js";import{D as g}from"./DocsHeader-DfVL_kuq.js";import{F as x}from"./CommandsAndQueries-CgQBaZ0f.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-B4u3eIrx.js";import{C as i,D as r}from"./NavigationLayout.stories-Bp829CaO.js";import{S as m,a as s,b as d}from"./index-DoswmQyS.js";import{S as p}from"./chain-link-D2i0S80y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CblgVrgk.js";import"./information-D3uCnnkd.js";import"./sys-enter-2-wxpj1ZiR.js";import"./alert-BevRZGbf.js";import"./Tag-GPe-hxqe.js";import"./index-Cxn0-wv1.js";import"./index-CpvGRbxq.js";import"./Link-C1ayfMxn.js";import"./copy-C0cKcgNP.js";import"./copy-D8dGmaRo.js";import"./GitHub-Mark-CDemERz7.js";import"./TableOfContent-BGsE7-dd.js";import"./index-DelbaEfh.js";import"./index-ZGr5TJVA.js";import"./index-CEuImug1.js";import"./index-MgaH4Bh7.js";import"./index-CQJ8H28h.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3DyNz5yK.js";import"./addCustomCSSWithScoping-tlJvF9vw.js";import"./index-CPkTjzaO.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./menu-CEcNRPnD.js";import"./home-DGbqKsiY.js";import"./calendar-DknzjbG0.js";import"./history-CJ9CqjT9.js";import"./background-BtNlroSR.js";import"./action-settings-rqr9hanf.js";import"./locked-DGdEhwyl.js";import"./index-t2hC8GnP.js";import"./ListItemStandard-Dn6AUPyj.js";import"./ButtonBadge-CWh7JEjd.js";import"./search-m-hv9Mu0.js";import"./overflow-1XdbunpB.js";import"./slim-arrow-down-BpthopxW.js";import"./slim-arrow-down-BTwGuTkB.js";import"./i18n-defaults-uALom2Bu.js";import"./navigation-right-arrow-B6KhF_y0.js";import"./navigation-right-arrow-BWB9l_WM.js";import"./navigation-down-arrow-rNIcSUzY.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
