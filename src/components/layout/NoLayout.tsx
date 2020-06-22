import React, { ReactNode } from 'react'

type NoLayoutProps = {
  children: ReactNode
}

function NoLayout(props: NoLayoutProps) {
  const { children } = props
  return (
    <>
      <div className="container">{children}</div>
    </>
  )
}

export default NoLayout
