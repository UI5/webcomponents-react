import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { getTheme, setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { Avatar, Button, Label, Option, Select, ShellBar } from '@ui5/webcomponents-react';
import { useState } from 'preact/hooks';

const THEMES = [
  { title: 'OS Adaptive Horizon', value: 'sap_horizon_auto' },
  { title: 'Morning Horizon (Light)', value: 'sap_horizon' },
  { title: 'Evening Horizon (Dark)', value: 'sap_horizon_dark' },
  { title: 'OS Adaptive High Contrast Horizon', value: 'sap_horizon_hc_auto' },
  { title: 'Horizon High Contrast Black', value: 'sap_horizon_hcb' },
  { title: 'Horizon High Contrast White', value: 'sap_horizon_hcw' },
];

export function App() {
  const [count, setCount] = useState(0);
  const [theme, setCurrentTheme] = useState(() => getTheme());

  return (
    <>
      <ShellBar
        logo={
          <img
            src="https://raw.githubusercontent.com/UI5/webcomponents-react/main/assets/ui5-logo.svg"
            alt="UI5 Web Components for React logo"
          />
        }
        primaryTitle="UI5 Web Components for React - Preact Template"
        profile={<Avatar icon={employeeIcon} />}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', maxWidth: '20rem' }}>
        <Label for="theme-select">Theme</Label>
        <Select
          id="theme-select"
          value={theme}
          onChange={(e) => {
            const nextTheme = e.detail.selectedOption.value;
            if (nextTheme) {
              setCurrentTheme(nextTheme);
              void setTheme(nextTheme);
            }
          }}
        >
          {THEMES.map(({ title, value }) => (
            <Option key={value} value={value}>
              {title}
            </Option>
          ))}
        </Select>
        <Label>Interactivity</Label>
        <Button design="Emphasized" onClick={() => setCount((prev) => prev + 1)}>
          Count is {count}
        </Button>
      </div>
    </>
  );
}
