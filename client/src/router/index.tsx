import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Register from "../pages/auth/Register.tsx";
import Login from "../pages/auth/Login.tsx";

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
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  }
])

export default router
