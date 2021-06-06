import editButton from "../images/Edit_button.svg"
import addButton from "../images/plus.svg"
import api from "../utils/api"
import {useContext, useState, useEffect} from "react"
import Card from "./Card"
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete}) => {
  const [cards, setCards] = useState([])
  const {name, avatar, about} = useContext(CurrentUserContext)
  const currentUserId = useContext(CurrentUserContext)._id

  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
      setCards(cardsData)
    })
    .catch(err => console.log(err))
  }, [])

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUserId);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err))
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch(err => console.log(err))
  }

  return (
  <main className="content">
    <section className="profile">
      <div className="profile__data">
        <div className="avatar"
        onClick={onEditAvatar}
        style={{ backgroundImage: `url(${avatar})` }}
        >
          <div className="avatar__cover">
          <img className="avatar__edit-button-img"
          src={editButton}
          alt="редактирование аватара" />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{name}</h1>
          <button className="profile__edit-button"
          onClick={onEditProfile}
          aria-label="редактировать"
          type="button">
            <img className="profile__edit-button-img"
            src={editButton}
            alt="редактирование профиля" />
          </button>
          <p className="profile__subtitle">{about}</p>
        </div>
      </div>
      <button
      onClick={onAddPlace}
      type="button"
      className="profile__add-button"
      aria-label="добавить">
        <img
        className="profile__add-button-img"
        src={addButton}
        alt="добавление контента" />
      </button>
    </section>

    <section className="elements">
      {cards.map((card) => (
        <Card
        card={card}
        onCardClick={onCardClick}
        key={card._id}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete} />
      ))}
    </section>
  </main>
  )
}

export default Main
