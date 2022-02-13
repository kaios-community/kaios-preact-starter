import { Theme } from './models/Settings';

export type ThemeConfig = {
  id: Theme;
  values: {
    [key: string]: string;
    appBgColor: string;
    accentColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
  };
};

export const themes: ThemeConfig[] = [
  {
    id: Theme.Light,
    values: {
      appBgColor: '#ffffff',
      accentColor: '#AE32A2',
      primaryTextColor: 'rgba(0, 0, 0, 0.88)',
      secondaryTextColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
  {
    id: Theme.Dark,
    values: {
      appBgColor: '#000000',
      accentColor: '#AE32A2',
      primaryTextColor: 'rgba(255, 255, 255, 0.88)',
      secondaryTextColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
];
