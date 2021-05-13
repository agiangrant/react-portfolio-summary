import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from 'components/nav/NavBar';
import PortfolioSummary from 'components/portfolio/PortfolioSummary';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '@fluentui/react';

// used to style body and html with the current theme
const StyledGlobal = createGlobalStyle`
  html, body, #root {
    height: 100%;
    ${({ theme }) => `
        background-color: ${theme.colors.background};
        color: ${theme.colors.defaultFont};
      `}
  }
`;

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <React.Fragment>
      <StyledGlobal theme={theme}></StyledGlobal>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <NavBar/>
          <PortfolioSummary/>
        </StyledApp>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
