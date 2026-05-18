import { useEffect, useState } from 'react'
import './CharacterDetail.css'
import { useNavigate, useParams } from 'react-router-dom'

const STATUS_COLORS = {
  Alive: '#97ce4c',
  Dead: '#e74c3c',
  unknown: '#8888aa',
}

const CharacterDetail = () => {
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        if (!response.ok) throw new Error('Personaje no encontrado')
        return response.json()
      })
      .then(data => {
        setCharacter(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="container-page"><p className="detail-status">Cargando personaje...</p></div>
  if (error) return <div className="container-page"><p className="detail-status detail-status--error">Error: {error}</p></div>

  const statusColor = STATUS_COLORS[character.status] || STATUS_COLORS.unknown

  return (
    <div className="detail-page container-page">
      <div className="detail-card">
        <img src={character.image} alt={character.name} className="detail-image" />
        <div className="detail-info">
          <h2 className="detail-name">{character.name}</h2>
          <span className="detail-badge" style={{ backgroundColor: statusColor }}>
            {character.status}
          </span>
          <ul className="detail-list">
            <li><span className="detail-label">Especie:</span> {character.species}</li>
            <li><span className="detail-label">Género:</span> {character.gender}</li>
            <li><span className="detail-label">Origen:</span> {character.origin?.name}</li>
            <li><span className="detail-label">Ubicación:</span> {character.location?.name}</li>
            <li><span className="detail-label">Episodios:</span> {character.episode?.length}</li>
          </ul>
          <button className="detail-back-btn" onClick={() => navigate(-1)}>
            ← Volver
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail