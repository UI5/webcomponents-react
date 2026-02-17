import{j as t}from"./iframe-utVLPk6_.js";import{useMDXComponents as c}from"./index-_7Ivp6Lr.js";import{A as o}from"./ArgTypesWithNote-Lrl6kiDJ.js";import{C as l}from"./ControlsWithNote-CFk9VQAH.js";import{D as g}from"./DocsHeader-DRXDpR5s.js";import{F as x}from"./CommandsAndQueries-BVodeffY.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-CRxaTikh.js";import{C as i,D as r}from"./NavigationLayout.stories-CGxA1rr1.js";import{S as m,a as s,b as d}from"./index-MqnSvZhZ.js";import{S as p}from"./chain-link-fXJ8FOkT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJmgWra1.js";import"./information-D-kuCoWP.js";import"./sys-enter-2-ClJM_7Cf.js";import"./alert-CrgSVEE-.js";import"./Tag-LOOaBowr.js";import"./index-B4YNNEZt.js";import"./index-w9tOLOey.js";import"./Link-BwFR1FvL.js";import"./copy-DBgY1S6V.js";import"./copy-lkIY5Hce.js";import"./GitHub-Mark-Bu1IhQYF.js";import"./TableOfContent-Ca9dsvZH.js";import"./index-C5CeUqLr.js";import"./index-vwTPEa24.js";import"./index-CQTFiQOO.js";import"./index-BNJRxg3C.js";import"./index-Bt2MbZdo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP35uBwA.js";import"./addCustomCSSWithScoping-ByL_YC7i.js";import"./index-D8af2pYm.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./menu-yrRVn7WQ.js";import"./home-CoZ4VZnV.js";import"./calendar-BQkIWjQa.js";import"./history-D6om2EYj.js";import"./background-BuJYSjHV.js";import"./action-settings-BFHGP-cN.js";import"./locked-cDZp2bIG.js";import"./index-hY030Tl3.js";import"./ListItemStandard-BjnDf0fW.js";import"./ButtonBadge-p2k0PWzT.js";import"./search-D8f0VpTh.js";import"./overflow-Duc6dJmx.js";import"./slim-arrow-down-BfxVVO5J.js";import"./slim-arrow-down-CGFNdOyS.js";import"./i18n-defaults-Ca0KLLzw.js";import"./navigation-right-arrow-CElFKq2C.js";import"./navigation-right-arrow-Dfc9Wtwu.js";import"./navigation-down-arrow-CSxEN5wN.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
