import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Tag from '../components/tags';

export default function About() {
  return (
    <Layout>
      <SEO title="Tags" />
      <h1>All Tags</h1>
      <Tag />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}
