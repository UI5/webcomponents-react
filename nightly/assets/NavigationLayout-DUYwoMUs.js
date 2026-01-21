import{j as t}from"./iframe-DYduXZhN.js";import{useMDXComponents as c}from"./index-Ci2-DdjO.js";import{A as o}from"./ArgTypesWithNote-DK7FwOQr.js";import{C as l}from"./ControlsWithNote-zRR9InYP.js";import{D as g}from"./DocsHeader-C05AbQAg.js";import{F as x}from"./CommandsAndQueries-B9zetcQ0.js";import{S}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as f,a as h,D as a}from"./blocks-D9jMBEgy.js";import{C as i,D as r}from"./NavigationLayout.stories-BCOEw5ND.js";import{S as m,a as s,b as d}from"./index-DextzSXJ.js";import{S as p}from"./chain-link-BPkzcGYd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOwVehE_.js";import"./information-B4rZhRQI.js";import"./sys-enter-2-DdBtSqFS.js";import"./alert-Cbu3hZ-F.js";import"./Tag-DIRdIcZz.js";import"./index-DKd7eJ-2.js";import"./index-C__H6VdM.js";import"./Link-BLFGRSbE.js";import"./copy-P_NWQCS6.js";import"./copy-CkIF2sdc.js";import"./GitHub-Mark-CU_qsXHg.js";import"./TableOfContent-DYx4HAfY.js";import"./index-Cz134k4C.js";import"./index-9BFlmr8a.js";import"./index-BEkPqhUo.js";import"./index-BT55sXhr.js";import"./index-CrQhdGHw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tYCFSQM4.js";import"./addCustomCSSWithScoping-BvPW-C09.js";import"./index-nJJP4hMG.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./menu-K0x1xynI.js";import"./home-DFnkl0Qi.js";import"./calendar-I90xg5FC.js";import"./history-BfkkP2jH.js";import"./background-BDTl0pPm.js";import"./action-settings-DZRcXYiR.js";import"./locked-_Wzs0IYp.js";import"./index-BRnB8bh1.js";import"./ListItemStandard-9qFWIUAt.js";import"./ButtonBadge-DTh_Qngk.js";import"./search-B1ocM5J2.js";import"./overflow-CGcxIo4a.js";import"./slim-arrow-down-BYh391LH.js";import"./slim-arrow-down-H6l6KWk5.js";import"./i18n-defaults-i0ThFMss.js";import"./navigation-right-arrow-0ntcsXEn.js";import"./navigation-right-arrow-CliMCU6T.js";import"./navigation-down-arrow-0eA3UtLx.js";function u(n){const e={code:"code",h2:"h2",pre:"pre",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(v,{of:i}),`
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
