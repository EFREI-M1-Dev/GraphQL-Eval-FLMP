import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import AuthLayout from '../pages/auth/AuthLayout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
  {
    path: '/login',
    element: <AuthLayout />,
  },
])

export default router
