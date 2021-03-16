import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import websites from './websites';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: calc(50vw - 160px);

  /* Fake padding-right */
  &::after {
    content: '';
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(50vw - 160px);
    height: 1px;
  }

  > button {
    margin-right: 40px;
  }

  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;

export default function CardList() {
  return (
    <Page>
      <Grid>
        {websites.map((website, index) => (
          <Card
            key={website.description}
            hexa={website.hexa}
            title={website.title}
            description={website.description}
            image={website.image}
          />
        ))}
      </Grid>
    </Page>
  );
}
