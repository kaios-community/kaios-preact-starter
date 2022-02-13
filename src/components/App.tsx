import kebabcase from 'lodash.kebabcase';
import { Fragment, h } from 'preact';
import { Route, Router } from 'preact-router';
import { useEffect } from 'preact/hooks';
import { SettingsProvider, useSettings } from '../contexts';
import { TextSize } from '../models';
import Home from '../routes/Home';
import { themes } from '../themes';

export function AppWrapper() {
  return (
    <div id="preact_root">
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </div>
  );
}

function App() {
  const { settings } = useSettings();

  useEffect(() => {
    const theme = themes.find((a) => a.id === settings.theme) || themes[0];
    for (const id in theme.values) {
      document.documentElement.style.setProperty(`--${kebabcase(id)}`, theme.values[id]);
    }

    const fontSize = {
      [TextSize.Smallest]: 9,
      [TextSize.Small]: 10,
      [TextSize.Medium]: 11,
      [TextSize.Large]: 12,
      [TextSize.Largest]: 13,
    };
    document.documentElement.style.setProperty(
      '--base-font-size',
      `${fontSize[settings.textSize]}px`
    );
  }, [settings]);

  return (
    <Router>
      <Route path="/" component={Home} default={true} />
    </Router>
  );
}
