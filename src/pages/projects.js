import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects Page</h1>
      <p>This is the Projects page stub</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Projects;
