import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomePage = () => (
  <div>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <h1>HomePage</h1>
    <Link to="/about">About</Link>
  </div>
);

const AboutPage = () => (
  <div>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <h1>AboutPage</h1>
    <Link to="/">Home</Link>
  </div>
);

function App() {
  return (
    <div>
      <Helmet>
        <title>React Seminar #3</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
