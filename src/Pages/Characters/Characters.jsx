import { useState, useEffect } from 'react'
import './Characters.css'
import CardCharacter from '../../Components/CardCharacter/CardCharacter.jsx'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const requests = Array.from({ length: 20 }, (_, i) =>
      fetch(`https://rickandmortyapi.com/api/character?page=${i + 1}`)
        .then(res => {
          if (!res.ok) throw new Error('Error al obtener los personajes')
          return res.json()
        })
    )

    Promise.all(requests)
      .then(pages => {
        const allResults = pages.flatMap(page => page.results)
        setCharacters(allResults)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="status-message">Cargando personajes...</div>
  if (error) return <div className="status-message status-message--error">Error: {error}</div>

  return (
    <div className="containerPage">
      {characters.map(character => (
        <CardCharacter
          key={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          status={character.status}
          gender={character.gender}
        />
      ))}
    </div>
  )
}

export default Characters