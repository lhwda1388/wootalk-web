import React, { ComponentType, ReactNode } from 'react'
import { Route, RouteComponentProps, RouteChildrenProps } from 'react-router-dom'

type AppRouteProps = {
  component?: ComponentType<RouteComponentProps<any>> | ComponentType<any> | any
  render?: (props: RouteComponentProps<any>) => ReactNode
  children?: ((props: RouteChildrenProps<any>) => ReactNode) | ReactNode
  path?: string | string[]
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
  layout: ComponentType<any>
  private?: boolean
}
function AppRoute(props: AppRouteProps) {
  const { component: RouteComponent, layout: Layout, ...rest } = props
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <RouteComponent {...props}></RouteComponent>
        </Layout>
      )}
    />
  )
}

export default AppRoute
