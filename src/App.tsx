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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

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
