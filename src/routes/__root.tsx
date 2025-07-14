import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '../components/Header/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})