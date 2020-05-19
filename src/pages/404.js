import styled from '@emotion/styled';
import React from 'react';
import SmileyDead from '../assets/smiley-dead.svg';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { flexCenter } from '../components/_shared/styled-mixins';
import { StyledSection } from '../components/_shared/styled-section';

const Styled404Section = styled(StyledSection)`
  min-height: 100vh;
`;
const StyledIntroduction = styled.div`
  color: var(--primary-color);
  margin-left: 3px;
  font-weight: normal;
`;
const Styled404Text = styled.h1`
  ${flexCenter};
  font-size: 15vh;
  margin: 0;

  & > svg {
    fill: currentColor;
    height: 10vh;
    width: 10vh;
    margin: 0 0.5rem;
  }
`;
const StyledDescription = styled.p`
  padding: 0 0.5rem;
  margin: 0;
`;

const NotFoundPage = () => (
  <Layout menuLinks={blogMenuLinks}>
    <Styled404Section>
      <SEO title="404: Not found" />
      <StyledIntroduction>Oops!...It happened again</StyledIntroduction>
      <Styled404Text>
        4<SmileyDead />4
      </Styled404Text>
      <StyledDescription>Sorry, we couldn't find the page you were looking for.</StyledDescription>
      <TextLink label="Take me home" link="/" />
    </Styled404Section>
  </Layout>
);

export default NotFoundPage;
