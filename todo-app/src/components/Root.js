import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'

const history = createHashHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/(:filter)" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)
