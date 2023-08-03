'use client'
import { useState } from 'react'
import '../navbar/Navbar.css'

export function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const headerClasses = 'main-header place-center' + (toggleMenu ? ' is-active' : '')

  const handleToggleMenu = () => setToggleMenu(!toggleMenu)

  return (
    <header className={headerClasses}>
      <nav className="nav container">
        <a href="#" className="title">
          Mac mini
        </a>
        <div className="place-center space">
          <ul id="main-menu" className="main-menu">
            <li className="item">
              <a href="#" className="link">
                Descripción
              </a>
            </li>
            <li className="item">
              <a href="#" className="link">
                Por qué la Mac
              </a>
            </li>
            <li className="item">
              <a href="#" className="link">
                Especificaciones
              </a>
            </li>
          </ul>
          <button className="menu-button" onClick={handleToggleMenu}></button>
          <a href="#" className="button tiny">
            Comprar
          </a>
        </div>
      </nav>
    </header>
  )
}
