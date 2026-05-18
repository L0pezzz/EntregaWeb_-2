import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="home__overlay"></div>

      <div className="home__content">
        <div className="home__badge">Temporadas 1 - 7</div>

        <h1 className="home__title">
          Rick <span>&</span> Morty
        </h1>

        <p className="home__subtitle">
          Explora el universo infinito de Rick and Morty.
          Descubre todos los personajes de la serie y fíltralos por especie.
        </p>
      </div>

      <div className="home__developer">
        <div className="home__developer-card">
          <img src='/foto.jpg' alt="Louis Feliphe Torres López" className="home__developer-photo" />
          <div className="home__developer-info">
            <div className="home__developer-badge">Desarrollador</div>
            <h3 className="home__developer-name">Louis Feliphe Torres López</h3>
            <p className="home__developer-detail">Universidad de la Amazonia</p>
            <p className="home__developer-detail">Ingeniería — 7mo Semestre</p>
            <p className="home__developer-detail">Programación Web</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home