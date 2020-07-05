import { Link } from 'react-router-dom';
import React from 'react';

const LoadingPage = () => (
  <div>
    <h1>Loading....</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export default LoadingPage;
