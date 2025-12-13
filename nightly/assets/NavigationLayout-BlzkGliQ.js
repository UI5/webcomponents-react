import{j as t}from"./iframe-vf7s2VGb.js";import{useMDXComponents as c}from"./index-DKJSAVnl.js";import{A as o}from"./ArgTypesWithNote-Cf4abk5p.js";import{C as l}from"./ControlsWithNote-BkwogRCo.js";import{D as g}from"./DocsHeader-CHUqOFdO.js";import{F as x}from"./CommandsAndQueries-DWofsexW.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-B4oFLz5c.js";import{C as i,D as r}from"./NavigationLayout.stories-DRLVQoLD.js";import{S as m,a as s,b as d}from"./index-CXZEYr6g.js";import{S as p}from"./chain-link-BkIl0QBA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHeHce3N.js";import"./information-9NSJvKF7.js";import"./sys-enter-2-CiXorCdU.js";import"./alert-La4PIswz.js";import"./Tag-P1WqKFay.js";import"./index-Bt_xSHJX.js";import"./index-Edovokrc.js";import"./Link-CPCmvFzf.js";import"./copy-C7B_femg.js";import"./copy-CaZ5zeDJ.js";import"./GitHub-Mark-COPjXt9x.js";import"./TableOfContent-DB8nqPOD.js";import"./index-DxKE5xNM.js";import"./index-BPodtacB.js";import"./index-Dj1d2O3_.js";import"./index-BuDcKrDV.js";import"./index-rjrZsjeS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLGPl5RO.js";import"./addCustomCSSWithScoping-B77_-I85.js";import"./index-lsyyPbYb.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./menu-DPKqg7wv.js";import"./home-B2XwdgIl.js";import"./calendar-Dd4gy5Vx.js";import"./history-ewTEHU0Q.js";import"./background-ByCjhG5p.js";import"./action-settings-DKJ3JSD_.js";import"./locked-D8mNT0At.js";import"./index-Ci_d-ew0.js";import"./ListItemStandard-C9Uuxqqd.js";import"./ButtonBadge-BRXn6jih.js";import"./search-BomG_F_N.js";import"./overflow-DKlbERyk.js";import"./slim-arrow-down-B-lEbC2Q.js";import"./slim-arrow-down-Z0YsYWn6.js";import"./i18n-defaults-uALom2Bu.js";import"./navigation-right-arrow-C8gBdEec.js";import"./navigation-right-arrow-wCDGslCm.js";import"./navigation-down-arrow-ywnaOS8H.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
