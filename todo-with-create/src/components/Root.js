import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'
import store, { history } from './store'

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:filter" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Root
