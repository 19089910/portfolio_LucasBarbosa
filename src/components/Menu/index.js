import React from 'react'
import { Link } from 'react-scroll'

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}
