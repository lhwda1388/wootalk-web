import React, { ReactNode } from 'react'
import Container from './Container'

type NoLayoutProps = {
  children: ReactNode
}

function NoLayout(props: NoLayoutProps) {
  const { children } = props
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}

export default NoLayout
