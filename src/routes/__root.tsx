import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header } from '../components/Header/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Header />
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})