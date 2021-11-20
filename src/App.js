import React, { Component, Suspense } from 'react';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Header from './components/Header';
import { routes } from "./components/routes"

class App extends Component {
  render() {
    return (
      <Suspense fallback={<span>Loading...</span>}>
        <Header/>
        <Switch>
          {
            routes.map(({path, component}) => 
              <Route key={path} path={path} component={component} />
            )
          }
        </Switch>
      </Suspense>
    )
  }
}

export default withRouter(App)