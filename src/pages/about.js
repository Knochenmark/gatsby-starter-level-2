import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About() {
  return (
    <Layout>
      <SEO title="About Me" />
      <h1>About Me</h1>
      <p>This is the About Me page stub</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}
