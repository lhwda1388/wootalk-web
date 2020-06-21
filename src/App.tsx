import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import HomePage from './pages/home'
import AppRoute from './components/common/AppRoute'
import Layout from './components/layout'
import Layout2 from './components/layout/Layout2'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path="/" exact={true} component={HomePage} layout={Layout2} />
        <AppRoute path="/signin" component={SignInPage} layout={Layout} />
        <AppRoute path="/signup" component={SignUpPage} layout={Layout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
