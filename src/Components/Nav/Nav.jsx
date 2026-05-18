import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/characters">Todos los personajes</Link></li>
        <li><Link to="/filter">Filtrar por especie</Link></li>
      </ul>
    </nav>
  )
}

export default Nav