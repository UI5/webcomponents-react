import{j as t}from"./iframe-DwhXZ5O1.js";import{useMDXComponents as c}from"./index-Dr45Q_rW.js";import{A as o}from"./ArgTypesWithNote-CyWVuzny.js";import{C as l}from"./ControlsWithNote-CSn4DPAH.js";import{D as g}from"./DocsHeader-BRx7RPE6.js";import{F as x}from"./CommandsAndQueries-CZ-0KT78.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-EKNE_kOu.js";import{C as i,D as r}from"./NavigationLayout.stories-CbLyF5GB.js";import{S as m,a as s,b as d}from"./index-QZiZKknb.js";import{S as p}from"./chain-link-DSG9wEZt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0PXwN3M.js";import"./information-BtytWan6.js";import"./sys-enter-2-PzhKRuDm.js";import"./alert-Ul17j7cb.js";import"./Tag-CK1DTCaY.js";import"./index-DzVbmGXs.js";import"./index-BwctDZ8k.js";import"./Link-jbv8jxOr.js";import"./copy-CZT2prev.js";import"./copy-CMcdSlV7.js";import"./GitHub-Mark-vT3R4NCR.js";import"./TableOfContent-VIGMqgxX.js";import"./index-C5LjiSCx.js";import"./index-DsUvOdfw.js";import"./index-D0dcM15D.js";import"./index-EBvmFTXF.js";import"./index-CczjdlqU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjLi0LGT.js";import"./addCustomCSSWithScoping-BuPMXfqj.js";import"./index-HJM87aGA.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./menu-BYRBdGAe.js";import"./home-BIf9y9BQ.js";import"./calendar-BAGyVWCw.js";import"./history-h3JpBQbQ.js";import"./background-UdBAKS-Y.js";import"./action-settings-iQhBEbTT.js";import"./locked-ORm9IBGo.js";import"./index-D9R_3S1e.js";import"./ListItemStandard-F-hxCo2t.js";import"./ButtonBadge-Bdn6Gk3T.js";import"./search-yfQZs8E5.js";import"./overflow-Ddxbkgn3.js";import"./slim-arrow-down-DdhS0vfb.js";import"./slim-arrow-down-D11Ifl1b.js";import"./i18n-defaults-Begitp65.js";import"./navigation-right-arrow-6VwOC1wR.js";import"./navigation-right-arrow-CCnD2Vrj.js";import"./navigation-down-arrow-D_-UgM8Y.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
