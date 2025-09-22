import{j as t}from"./iframe-DBihyX6B.js";import{useMDXComponents as c}from"./index-7EvsRGh_.js";import{A as o}from"./ArgTypesWithNote-Bjbyo3i4.js";import{C as l}from"./ControlsWithNote-BKeRG1wh.js";import{D as g}from"./DocsHeader-DqvqKIEn.js";import{F as x}from"./CommandsAndQueries-CFIgGEta.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-4x6sD7LX.js";import{C as i,D as r}from"./NavigationLayout.stories-BgLg31K4.js";import{S as m,a as s,b as d}from"./index-Cv2UaME4.js";import{S as p}from"./chain-link-B2-Bi4uJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLEor5QI.js";import"./information-5R3zdDEl.js";import"./sys-enter-2-DGkUJwI9.js";import"./alert-DQd1blb9.js";import"./Tag-DcWV-u9n.js";import"./index-d0ALq1QU.js";import"./index-tKXjFGfd.js";import"./Link-DylgBeIF.js";import"./copy-aRdQKEdI.js";import"./copy-Bf9mIKpj.js";import"./GitHub-Mark-ByGXXCjK.js";import"./TableOfContent-CBdAmSq8.js";import"./index-Bht8mt-d.js";import"./index-BXD3v3ss.js";import"./addCustomCSSWithScoping-CH8klGw7.js";import"./index-HwCsdfjY.js";import"./index-BYBUQOBO.js";import"./index-CCW-kbw5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ZTIhRr7S.js";import"./index-KqMM-h1d.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./menu-CmTMsy-Q.js";import"./home-BuuiECJk.js";import"./calendar-EgcxwEpA.js";import"./history-BOmwnFwL.js";import"./background-DUyHIOQ2.js";import"./action-settings-DaNvZlq4.js";import"./locked-TSdHZ0pZ.js";import"./index-DJv7nzHZ.js";import"./ListItemStandard-lLD0mBZ9.js";import"./ButtonBadge-d3PAmtAw.js";import"./search-DT-SE7sw.js";import"./overflow-k5ygKStw.js";import"./overflow-CQ0ZZ5SC.js";import"./slim-arrow-down-CzguZyVL.js";import"./slim-arrow-down-I06sys84.js";import"./i18n-defaults-BS8OTJAB.js";import"./navigation-right-arrow-DghbmXJJ.js";import"./navigation-right-arrow-CfUGm-OO.js";import"./navigation-down-arrow-B0A4GYRi.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
`,t.jsx(x,{})]})}function ht(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(u,{...n})}):u(n)}export{ht as default};
