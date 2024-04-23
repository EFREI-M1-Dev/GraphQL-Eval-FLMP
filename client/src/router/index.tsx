import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
])

export default router
