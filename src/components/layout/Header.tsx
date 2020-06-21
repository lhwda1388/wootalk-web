import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/signin">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </nav>
    </header>
  )
}

export default Header
