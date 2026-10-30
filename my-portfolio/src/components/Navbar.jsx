import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience & Education' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="navbar navbar-expand-lg bg-body border-bottom sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand fw-semibold" onClick={close}>
          {profile.name}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="main-nav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="main-nav" className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-lg-3">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className="nav-link"
                  onClick={close}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
                <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}