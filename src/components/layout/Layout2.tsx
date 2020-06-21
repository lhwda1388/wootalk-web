import React, { ReactNode } from 'react'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

function Layout2(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  )
}

export default Layout2
