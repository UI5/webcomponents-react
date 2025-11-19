import{j as t}from"./iframe-BdLp08tI.js";import{useMDXComponents as c}from"./index-L7M025bj.js";import{A as o}from"./ArgTypesWithNote-BOuoHlVV.js";import{C as l}from"./ControlsWithNote-BfK2jDz_.js";import{D as g}from"./DocsHeader-Bpb7xGNC.js";import{F as x}from"./CommandsAndQueries-A8ohCY01.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-BcH5lj54.js";import{C as i,D as r}from"./NavigationLayout.stories-DvdR9Nn7.js";import{S as m,a as s,b as d}from"./index-CRCDDinj.js";import{S as p}from"./chain-link-DlI2wqyA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9cC8h2E.js";import"./information-BztpBEmn.js";import"./sys-enter-2-B36Zfbw2.js";import"./alert-YtyMWuog.js";import"./Tag-BYLKYo9E.js";import"./index-DEh5uPtQ.js";import"./index-bbxcO9wp.js";import"./Link-PkVO0OYZ.js";import"./copy-DopTx9Hm.js";import"./copy-CAz8pLUN.js";import"./GitHub-Mark-BOGIoyWh.js";import"./TableOfContent-BpoRcaPd.js";import"./index-DgCb8EoK.js";import"./index-6N8J-kdE.js";import"./index-Bq5n3ghu.js";import"./index-vBihh2Vl.js";import"./index-BjKyj7T0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oSO4QDvk.js";import"./addCustomCSSWithScoping-D7d3eFNt.js";import"./index-Bim7HqfC.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./menu-DMyB2NLR.js";import"./home-Bm7klAdW.js";import"./calendar-AsHzBcRG.js";import"./history-Dy7tER-3.js";import"./background-F45Fasz1.js";import"./action-settings-YQH7eu99.js";import"./locked-CZPx9aw4.js";import"./index-BiZoy8U1.js";import"./ListItemStandard-NrFCjmp4.js";import"./ButtonBadge-DFG3_SNU.js";import"./search-B-Vov-ss.js";import"./overflow-CDddtty7.js";import"./slim-arrow-down-VvEv069w.js";import"./slim-arrow-down-Jk0gqFeP.js";import"./i18n-defaults-k5o3Svb4.js";import"./navigation-right-arrow-DFVpmM_Z.js";import"./navigation-right-arrow-Dd0lHwSB.js";import"./navigation-down-arrow-BWuNqmxj.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
