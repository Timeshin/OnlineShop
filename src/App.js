import React, { Component, lazy, Suspense } from 'react';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Header from './components/header/header';

const ProductsList = lazy(() => import('./components/PLP/ProductsList'))

class App extends Component {
  render() {
    return (
      <Suspense fallback={<span>Loading...</span>}>
        <Header/>
        <Switch>
          <Route path="/:name" component={ProductsList} />
        </Switch>
      </Suspense>
    )
  }
}

export default withRouter(App)