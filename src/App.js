import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HomePage, AboutPage, AdminPage } from './components/pages';

import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Helmet>
        <title>React Seminar #3</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  );
}

export default App;
