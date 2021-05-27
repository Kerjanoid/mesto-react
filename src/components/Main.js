import editButton from "../images/Edit_button.svg"
import addButton from "../images/plus.svg"
import api from "../utils/api"
import {useEffect, useState} from "react"
import Card from "./Card"

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {
  const [userName, setUserName] = useState("")
  const [userDescription, setUserDescription] = useState("")
  const [userAvatar, setUserAvatar] = useState("")
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getUserInformation().then(({avatar, about, name}) => {
      setUserAvatar(avatar)
      setUserDescription(about)
      setUserName(name)
    })
    .catch((err)=>{
      console.log(err)
    })
    api.getInitialCards().then((data) => {
      setCards(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
  <main className="content">
    <section className="profile">
      <div className="profile__data">
        <div className="avatar"
        onClick={onEditAvatar}
        style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <div className="avatar__cover">
          <img className="avatar__edit-button-img"
          src={editButton}
          alt="редактирование аватара" />
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button"
          onClick={onEditProfile}
          aria-label="редактировать"
          type="button">
            <img className="profile__edit-button-img"
            src={editButton}
            alt="редактирование профиля" />
          </button>
          <p className="profile__subtitle">{userDescription}</p>
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
        key={card._id} />
      ))}
    </section>
  </main>
  )
}

export default Main
