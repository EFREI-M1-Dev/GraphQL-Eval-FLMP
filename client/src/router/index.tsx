import { createBrowserRouter } from 'react-router-dom'

/* components */
import Home from '../pages/Home'
import Register from '../pages/auth/Register.tsx'
import Login from '../pages/auth/Login.tsx'
import Article from '../pages/article/index.tsx'
import RedirectIfNotLogged from '../components/others/RedirectIfNotLogged.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/article/:id',
    element: <Article />,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },

  /* auth */
  {
    path: '/login',
    element: (
      <RedirectIfNotLogged>
        <Login />
      </RedirectIfNotLogged>
    ),
  },
  {
    path: '/register',
    element: (
      <RedirectIfNotLogged>
        <Register />
      </RedirectIfNotLogged>
    ),
  },
])

export default router
