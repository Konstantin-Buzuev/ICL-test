import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'

export default class MainRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Redirect to="/home" component={HomePage} />
      </Switch>
    )
  }
}
