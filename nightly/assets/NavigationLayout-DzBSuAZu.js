import{j as t}from"./iframe-COKmt9GX.js";import{useMDXComponents as c}from"./index-CzY2e8So.js";import{A as o}from"./ArgTypesWithNote-B1d80Kwh.js";import{C as l}from"./ControlsWithNote-GGi7HBIW.js";import{D as g}from"./DocsHeader-Cr0putdn.js";import{F as x}from"./CommandsAndQueries-DSaWGMGq.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-BC1CQ7iN.js";import{C as i,D as r}from"./NavigationLayout.stories-BklnM8BW.js";import{S as m,a as s,b as d}from"./index-C8f6P9KS.js";import{S as p}from"./chain-link-Bg4nITLe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C27X2XUm.js";import"./information-CfFvhrkY.js";import"./sys-enter-2-BMhsQaT7.js";import"./alert-Cbc0R2SK.js";import"./Tag-DloN_KbF.js";import"./index-WnbZc56M.js";import"./index-DjGJsOok.js";import"./Link-BA2-5m1C.js";import"./copy-aXFxWRJ8.js";import"./copy-CyMKHNyy.js";import"./GitHub-Mark-CWHMnGQ2.js";import"./TableOfContent-BJyZaqmf.js";import"./index-CQHeIIHf.js";import"./index-C6DL1JMC.js";import"./index-BVPy0Kvc.js";import"./index-CfIzOoJC.js";import"./index-D5ATbVNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXoeJUKj.js";import"./addCustomCSSWithScoping-CbQo03JJ.js";import"./index-D2zxLzyi.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./menu-DMgMymEm.js";import"./home-IU9_gi2N.js";import"./calendar-CGUKX-mp.js";import"./history-Db4ezwk9.js";import"./background-BTtW9DDT.js";import"./action-settings-6c0ttCUT.js";import"./locked-1TntnBmG.js";import"./index-Dd7qwT_9.js";import"./ListItemStandard-BPKpO2-G.js";import"./ButtonBadge-4vG82ej0.js";import"./search-BQUJKycP.js";import"./overflow-CWkLeE-v.js";import"./slim-arrow-down-5YiILlYo.js";import"./slim-arrow-down-B87n6-mS.js";import"./i18n-defaults-Begitp65.js";import"./navigation-right-arrow-BoUWLgXr.js";import"./navigation-right-arrow-CZWnArrm.js";import"./navigation-down-arrow-RRwxkr-f.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
