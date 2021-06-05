import editButton from "../images/Edit_button.svg"
import addButton from "../images/plus.svg"
import api from "../utils/api"
import {useContext, useState} from "react"
import Card from "./Card"
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike}) => {
  const [cards, setCards] = useState([])
  const {name, avatar, about} = useContext(CurrentUserContext)
  const currentUserId = useContext(CurrentUserContext)._id

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUserId);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
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
        onCardLike={handleCardLike} />
      ))}
    </section>
  </main>
  )
}

export default Main
