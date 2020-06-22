import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import HomePage from './pages/home'
import AppRoute from './components/common/AppRoute'
import NoLayout from './components/layout/NoLayout'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path="/" exact={true} component={HomePage} />
        <AppRoute path="/signin" component={SignInPage} layout={NoLayout} />
        <AppRoute path="/signup" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
