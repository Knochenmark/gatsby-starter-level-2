import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import TextLink from './links/text-link';
import { mq } from './_shared/media';
import { StyledH1 } from './_shared/styled-headings';
import { flexCenter } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledPostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.gt.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const StyledPostContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-content-color);
  border-radius: var(--radius);
`;
const StyledBlogLinkContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const RecentPosts = ({ data }) => {
  console.log(data);

  const recentPosts = data.map(post => {
    const { title, tags, description, date } = post.node.frontmatter;
    return (
      <StyledPostContainer key={title}>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{date}</span>
      </StyledPostContainer>
    );
  });

  return (
    <StyledSection id="blog">
      <StyledH1>Latest Blog Posts</StyledH1>
      <StyledPostsContainer>{recentPosts}</StyledPostsContainer>
      <StyledBlogLinkContainer>
        <TextLink label="View All Posts" link="/blog" />
      </StyledBlogLinkContainer>
    </StyledSection>
  );
};

RecentPosts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RecentPosts;
