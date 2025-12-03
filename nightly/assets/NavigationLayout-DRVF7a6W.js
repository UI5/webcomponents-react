import{j as t}from"./iframe-CJRlzZgA.js";import{useMDXComponents as c}from"./index-CbUzkcD0.js";import{A as o}from"./ArgTypesWithNote-haRI0WKx.js";import{C as l}from"./ControlsWithNote-m4NXE0Lk.js";import{D as g}from"./DocsHeader-CYhP0NKu.js";import{F as x}from"./CommandsAndQueries-BJK9fmCd.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-QclREKVQ.js";import{C as i,D as r}from"./NavigationLayout.stories-BH207hfy.js";import{S as m,a as s,b as d}from"./index-p1Xt0y3i.js";import{S as p}from"./chain-link-DFbssMup.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3EVM4WW.js";import"./information-CTfPsGYk.js";import"./sys-enter-2-DT64nekl.js";import"./alert-D_x5VnX_.js";import"./Tag-D6uzQqkN.js";import"./index-CEi9QmXA.js";import"./index-CgUHdFlG.js";import"./Link-0WAKzVuH.js";import"./copy-DJuCUsOV.js";import"./copy-Dm16cUhk.js";import"./GitHub-Mark-DrwbB2D9.js";import"./TableOfContent-CbWMIbhM.js";import"./index-DLQSfTW2.js";import"./index-CEHRPvSv.js";import"./index-DNJOtG7U.js";import"./index-B-KWFPaJ.js";import"./index-DBGTLlVz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ckhrx5tI.js";import"./addCustomCSSWithScoping-CXI5gvd5.js";import"./index-_T2NKKrj.js";import"./parameters-bundle.css-BaExaGb0.js";import"./menu-Br3p_KcF.js";import"./home-Be6FKD7W.js";import"./calendar-C2HaJR0e.js";import"./history-DPBLn_vy.js";import"./background-GeIgxu_S.js";import"./action-settings-D9DpoyFL.js";import"./locked-BSOS063w.js";import"./index-DhMeb5-N.js";import"./ListItemStandard-e2XpTMq4.js";import"./ButtonBadge-DoH5pajL.js";import"./search-4YK-bgMe.js";import"./overflow-Bmi34IQ9.js";import"./slim-arrow-down-BXVf3KJB.js";import"./slim-arrow-down-DiV8d_6M.js";import"./i18n-defaults-k5o3Svb4.js";import"./navigation-right-arrow-Qe6XxWFz.js";import"./navigation-right-arrow-SD2DKsNp.js";import"./navigation-down-arrow-DkHsoxHK.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
