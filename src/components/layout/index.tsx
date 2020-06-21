import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
