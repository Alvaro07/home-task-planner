import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom'
import App from '../App.tsx'
import Home from '../pages/home/Home.tsx'
import About from '../pages/about/About.tsx'
import Login from '../pages/login/Login.tsx'
import { useAuth } from '../composables/useAuth.tsx'

const ProtectedRouter = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ location }} />
  }

  return children
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: (
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        ),
      },
      {
        path: '/about',
        element: (
          <ProtectedRouter>
            <About />
          </ProtectedRouter>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])

export default router
