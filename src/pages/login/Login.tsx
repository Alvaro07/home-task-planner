import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../composables/useAuth.tsx'

const Login: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    login()
    navigate(location.state.location)
  }

  return (
    <section>
      <button onClick={handleClick}>Login</button>
    </section>
  )
}

export default Login
