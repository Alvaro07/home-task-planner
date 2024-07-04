import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './App.scss'

function App(): JSX.Element {
  return (
    <section className="main-wrap">
      <header className="main-header">
        <nav>
          <ul className="navigation">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </section>
  )
}

export default App
