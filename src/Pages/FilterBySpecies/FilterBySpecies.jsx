import { useState, useEffect } from 'react'
import './FilterBySpecies.css'
import CardCharacter from '../../Components/CardCharacter/CardCharacter.jsx'

const SPECIES_OPTIONS = ['Human', 'Alien', 'Robot', 'Mythological Creature', 'Animal', 'unknown']

const FilterBySpecies = () => {
  const [allCharacters, setAllCharacters] = useState([])
  const [selectedSpecies, setSelectedSpecies] = useState('Human')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const requests = Array.from({ length: 20 }, (_, i) =>
      fetch(`https://rickandmortyapi.com/api/character?page=${i + 1}`)
        .then(res => {
          if (!res.ok) throw new Error('Error al obtener personajes')
          return res.json()
        })
    )

    Promise.all(requests)
      .then(pages => {
        const allResults = pages.flatMap(page => page.results)
        setAllCharacters(allResults)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filteredCharacters = allCharacters.filter(
    character => character.species === selectedSpecies
  )

  if (loading) return <div className="status-message">Cargando personajes...</div>
  if (error) return <div className="status-message status-message--error">Error: {error}</div>

  return (
    <div className="filter-page">
      <div className="filter-controls">
        <label htmlFor="species-select">Filtrar por especie:</label>
        <select
          id="species-select"
          value={selectedSpecies}
          onChange={e => setSelectedSpecies(e.target.value)}
          className="filter-select"
        >
          {SPECIES_OPTIONS.map(species => (
            <option key={species} value={species}>{species}</option>
          ))}
        </select>
      </div>

      {filteredCharacters.length === 0 ? (
        <p className="status-message">No se encontraron personajes de especie "{selectedSpecies}".</p>
      ) : (
        <div className="containerPage">
          {filteredCharacters.map(character => (
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
      )}
    </div>
  )
}

export default FilterBySpecies