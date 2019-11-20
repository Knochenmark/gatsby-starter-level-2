import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Me</h1>
    <p>This is the Contact page stub</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ContactPage;
