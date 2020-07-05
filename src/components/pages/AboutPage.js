import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import React from 'react';

const AboutPage = () => (
  <div>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <h1>AboutPage</h1>
    <Link to="/">Home</Link>
  </div>
);

export default AboutPage;
