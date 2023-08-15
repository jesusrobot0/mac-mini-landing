'use client'

import { KeyboardEvent, useState } from 'react'
import '../navbar/Navbar.css'

export function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const headerClasses = 'main-header place-center' + (toggleMenu ? ' is-active' : '')

  const handleToggleMenu = () => setToggleMenu(!toggleMenu)

  const handleCloseMenu = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      setToggleMenu(!toggleMenu)
    }
  }

  return (
    <header className={headerClasses} onKeyDown={handleCloseMenu}>
      <nav className="nav container">
        <a href="#description" className="title">
          Mac mini
        </a>
        <div className="place-center space">
          <ul id="main-menu" className="main-menu">
            <li className="item">
              <a href="#description" className="link" onClick={handleToggleMenu}>
                Descripción
              </a>
            </li>
            <li className="item">
              <a href="#why-mac" className="link" onClick={handleToggleMenu}>
                Por qué la Mac
              </a>
            </li>
            <li className="item">
              <a href="#specs" className="link" onClick={handleToggleMenu}>
                Especificaciones
              </a>
            </li>
          </ul>
          <button
            className="menu-button"
            onClick={handleToggleMenu}
            aria-label="Menu Button"
          ></button>
          <a href="#" className="button tiny">
            Comprar
          </a>
        </div>
      </nav>
      <div className="main-overlay" onClick={handleToggleMenu}></div>
    </header>
  )
}
