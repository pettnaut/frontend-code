import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './screens/Home';
import Layout from './layout/Layout';
import NotFound from './notfound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
