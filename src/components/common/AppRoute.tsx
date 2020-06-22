import React, { ComponentType, ReactNode } from 'react'
import { Route, RouteComponentProps, RouteChildrenProps } from 'react-router-dom'
import DefaultLayout from '../layout/index'

type AppRouteProps = {
  component?: ComponentType<RouteComponentProps<any>> | ComponentType<any> | any
  render?: (props: RouteComponentProps<any>) => ReactNode
  children?: ((props: RouteChildrenProps<any>) => ReactNode) | ReactNode
  path?: string | string[]
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
  layout?: ComponentType<any>
  private?: boolean
}
function AppRoute(props: AppRouteProps) {
  const { component: RouteComponent, layout: Layout, ...rest } = props
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Layout === null || Layout === undefined) {
          return (
            <DefaultLayout>
              <RouteComponent {...props} />
            </DefaultLayout>
          )
        } else {
          return (
            <Layout>
              <RouteComponent {...props} />
            </Layout>
          )
        }
      }}
    />
  )
}

export default AppRoute
