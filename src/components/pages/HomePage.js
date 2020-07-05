import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import React from 'react';

const HomePage = () => (
  <div>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <h1>HomePage</h1>
    <Link to="/about">About</Link>
  </div>
);

export default HomePage;
