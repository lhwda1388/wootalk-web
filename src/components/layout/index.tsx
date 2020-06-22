import React, { ReactNode } from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

type LayoutProps = {
  children: ReactNode
}

function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
