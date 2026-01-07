import{j as t}from"./iframe-BZdybOkV.js";import{useMDXComponents as c}from"./index-BK2w2T2j.js";import{A as o}from"./ArgTypesWithNote-BF8XFaT6.js";import{C as l}from"./ControlsWithNote-N2Edy_L7.js";import{D as g}from"./DocsHeader-BhxEfJQ0.js";import{F as x}from"./CommandsAndQueries-6n7MF1sx.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-CP8RdzkU.js";import{C as i,D as r}from"./NavigationLayout.stories-BaAlc9vh.js";import{S as m,a as s,b as d}from"./index-BBsrSCyN.js";import{S as p}from"./chain-link-DlzL8aK-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DK3P8KDJ.js";import"./information-jzJbJB_1.js";import"./sys-enter-2-DNIkITIL.js";import"./alert-CQPwWPwe.js";import"./Tag-BzbxKur3.js";import"./index-BZ_ngRjy.js";import"./index-S-6P9mRF.js";import"./Link-ko8YnVxU.js";import"./copy-CNB7hovH.js";import"./copy-CIp50y-g.js";import"./GitHub-Mark-DWF2R_nS.js";import"./TableOfContent-BXnsnagM.js";import"./index-BIP_3DrI.js";import"./index-QZaRYYY3.js";import"./index-DrYECb-G.js";import"./index-Ceagbcxz.js";import"./index-DEm1B2JB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-s2glcktZ.js";import"./addCustomCSSWithScoping-DEKm0mwm.js";import"./index-DfhZwclc.js";import"./parameters-bundle.css-B37gDvcF.js";import"./menu-8EmAlFpx.js";import"./home-C0Cj3w7X.js";import"./calendar-BA81Ztmt.js";import"./history-CD3uGllL.js";import"./background-DmzH1-tg.js";import"./action-settings-CWaSdQd7.js";import"./locked-DfXqkK1c.js";import"./index-B-XXGM93.js";import"./ListItemStandard-BqswipPZ.js";import"./ButtonBadge-CmHzIBBH.js";import"./search-DQ_kvzkN.js";import"./overflow-ywlAvBNY.js";import"./slim-arrow-down-CDOwWRZe.js";import"./slim-arrow-down-BbBe3zkt.js";import"./i18n-defaults-BoKY-OR9.js";import"./navigation-right-arrow-CVnmAike.js";import"./navigation-right-arrow-YVh7qiaT.js";import"./navigation-down-arrow--7f146sQ.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
