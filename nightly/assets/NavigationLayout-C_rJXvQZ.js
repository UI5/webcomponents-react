import{j as t}from"./iframe-DDMtxVo3.js";import{useMDXComponents as c}from"./index-DJVQNbCr.js";import{A as o}from"./ArgTypesWithNote-8mOqU2BY.js";import{C as l}from"./ControlsWithNote-BTWSyMXk.js";import{D as g}from"./DocsHeader-BIZ9rjwC.js";import{F as x}from"./CommandsAndQueries-GL7iyaCL.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-CloLtOA5.js";import{C as i,D as r}from"./NavigationLayout.stories-B5saEMgk.js";import{S as m,a as s,b as d}from"./index-DROWQPK9.js";import{S as p}from"./chain-link-DS0Atc3T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DsF6G_NH.js";import"./information-CyNj2j11.js";import"./sys-enter-2-Go-dkBfP.js";import"./alert-jQ4OjDPb.js";import"./Tag-YMrSkp2O.js";import"./index-DtIsK-ZK.js";import"./index-ayjT0mLt.js";import"./Link-D3MGth0a.js";import"./copy-BHzUH3vb.js";import"./copy-BTGdlJRd.js";import"./GitHub-Mark-BOZXbKPz.js";import"./TableOfContent-C7oul5sD.js";import"./index-rp8XBFdR.js";import"./index-BHqqB-9b.js";import"./index-BbSpKNs2.js";import"./index-DIh6sAKH.js";import"./index-BeupWmR_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IIlbXN7B.js";import"./addCustomCSSWithScoping-CwVVs2bm.js";import"./index-C3sCpnZM.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./menu-1hzIkV9-.js";import"./home-CkHdyylx.js";import"./calendar-PJzciQ_i.js";import"./history-CxbzA0Uq.js";import"./background-CUH7vKnR.js";import"./action-settings-NzBiXSLQ.js";import"./locked-WQgTZeSH.js";import"./index-DAJqKMB-.js";import"./ListItemStandard-CvaRS6qD.js";import"./ButtonBadge-D4QSFU0o.js";import"./search-heL87HkG.js";import"./overflow-D1-O-RDg.js";import"./slim-arrow-down-C-tgvolj.js";import"./slim-arrow-down-B9fX2pE_.js";import"./i18n-defaults-k5o3Svb4.js";import"./navigation-right-arrow-rputrWNy.js";import"./navigation-right-arrow-BdCl3OJM.js";import"./navigation-down-arrow-DhowEsmp.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
