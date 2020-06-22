import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrap = styled.header`
  position: relative;
  background-color: #24292e;
  height: 50px;
  .navbar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    a {
      padding: 0 5px;
      color: #eee;
    }
  }
`

function Header() {
  return (
    <HeaderWrap>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/signup">Sign up</Link>
      </nav>
    </HeaderWrap>
  )
}

export default Header
