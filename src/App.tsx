import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import ThemeContext from './utils/ThemeContext';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Global from './styles/global';
import Routes from './routes';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function handleToggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
        <ThemeProvider theme={theme}>
          <ThemeContext.Provider value={handleToggleTheme}>
            <Routes />
            <Global />
          </ThemeContext.Provider>
        </ThemeProvider>
  );
}

export default App;
