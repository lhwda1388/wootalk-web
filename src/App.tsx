import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import SignInPage from '@/pages/signin'
import SignUpPage from '@/pages/signup'
import HomePage from '@/pages/home'
import AppRoute from '@/components/common/AppRoute'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  a { text-decoration: none; }

`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <AppRoute path="/" exact={true} component={HomePage} />
        <AppRoute path="/signin" component={SignInPage} />
        <AppRoute path="/signup" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
