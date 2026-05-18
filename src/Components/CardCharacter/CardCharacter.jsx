import './CardCharacter.css'

const CardCharacter = ({ name, image, species, status, gender }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <div className="card__content">
        <h3 className="card__name">{name}</h3>
        <p className="card__info"><span>Especie:</span> {species}</p>
        <p className="card__info"><span>Estado:</span> {status}</p>
        <p className="card__info"><span>Género:</span> {gender}</p>
      </div>
    </div>
  )
}

export default CardCharacter