import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className="error-page">
      <h2 className="error-page__code">404</h2>
      <p className="error-page__message">Página no encontrada</p>
      <Link to="/" className="error-page__link">Volver al inicio</Link>
    </div>
  )
}

export default Error