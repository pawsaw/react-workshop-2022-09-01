import React, { useContext } from 'react';
import { Theme } from './Theme';

const ThemeContext = React.createContext<Theme>({
  primaryColor: 'black',
});

export interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
