import { Outlet, NavLink } from 'react-router-dom'
import './Layout.css'

const setActive = ({ isActive }) => (isActive ? 'link-active' : 'link-pasive')

export default function Layout() {
  return (
    <div className="wrapper">
      <header style={{ display: 'flex', gap: '4rem' }}>
        <NavLink to="/albums" className={setActive}>
          Albums
        </NavLink>
        <NavLink to="/users" className={setActive}>
          Users
        </NavLink>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <hr></hr>
        <div className="info">
          <div>Сreated by: Danila Kandybovich</div>
          <div>BSU: 2022</div>
        </div>
      </footer>
    </div>
  )
}
