import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme } from './theme/theme';
import GlobalStyles from './theme/global';
import CardList from './CardList';
import Background from '../../../../../../images/suggestor/Sri-Lanka-tourim.jpg';


export default function ResultListLanding() {
  return (
    <div style={{height: "650px",backgroundImage: `url(${Background})` }}>
      <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <CardList />
    </ThemeProvider>
    </div>
  );
}