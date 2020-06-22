import React, { ReactNode } from 'react'
import styled from 'styled-components'

const ContainerWrap = styled.div`
  width: 100%;
`

type ContainerProps = {
  children: ReactNode
}

function Container(props: ContainerProps) {
  return <ContainerWrap>{props.children}</ContainerWrap>
}

export default Container
