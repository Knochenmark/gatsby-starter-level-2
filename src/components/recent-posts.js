import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import TextLink from './links/text-link';
import TagList from './tag-list';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledImageContainer } from './_shared/styled-image-container';
import { flexCenter } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';
import { StyledTextSection } from './_shared/styled-text-section';

const StyledPostsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  margin-top: 2.5rem;

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledPostContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);

  & .gatsby-image-wrapper {
    max-height: 300px;
  }
`;
const StyledDateOverlay = styled.div`
  pointer-events: none;
  z-index: 1;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 3rem;
  width: 3rem;
  color: var(--title-color);
  background: var(--bg-code);
  align-items: center;
  border-radius: var(--radius);
  font-weight: 500;
  line-height: 1rem;
`;
const StyledTitleLink = styled(Link)`
  text-decoration: none;

  &:hover h2 {
    color: var(--primary-color);
  }
`;
const StyledBlogLinkContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;
const StyledPostText = styled(StyledTextSection)`
  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`;

const RecentPosts = ({ data }) => {
  const recentPosts = data.map((post) => {
    const { title, tags, description, date } = post.node.frontmatter;
    const coverImage = post.node.frontmatter.cover_image
      ? post.node.frontmatter.cover_image.childImageSharp.fluid
      : null;

    const link = `/blog` + post.node.fields.slug;

    const month = new Date(date).toLocaleDateString('en-EN', { month: 'short' });
    const day = new Date(date).toLocaleDateString('en-EN', { day: '2-digit' });

    return (
      <StyledPostContainer key={title}>
        <StyledDateOverlay>
          <span>{month}</span>
          <span>{day}</span>
        </StyledDateOverlay>
        <Link to={link} aria-label={`recent post ${title}`}>
          <StyledImageContainer>{coverImage && <Img fluid={coverImage} />}</StyledImageContainer>
        </Link>
        <TagList tags={tags} />
        <StyledTitleLink to={link}>
          <StyledH2>{title}</StyledH2>
        </StyledTitleLink>
        <StyledPostText>
          <p>{description}</p>
        </StyledPostText>
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
