const Card = ({card, onCardClick}) => {
  const handleClick = () => {
    onCardClick(card)
  }
  
  return(
  <article className="element">
    <img className="element__img"
    onClick={handleClick}
    src={card.link}
    alt={card.name} />
    <div className="element__options">
      <h2 className="element__title">{card.name}</h2>
      <div className="element__like-block">
        <button className="element__like"
        aria-label="лайк"
        type="button" />
        <p className="element__like-counter">{card.likes.length}</p>
      </div>
    </div>
    <button
    type="button"
    className="element__trash-button"
    aria-label="удалить" />
  </article>
  )
}

export default Card
