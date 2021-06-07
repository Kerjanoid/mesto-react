import "../pages/index.css"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import EditProfilePopup from "./EditProfilePopup"
import EditAvatarPopup from "./EditAvatarPopup"
import AddPlacePopup from "./AddPlacePopup"
import ImagePopup from "./ImagePopup"
import {useEffect, useState} from "react"
import api from "../utils/api"
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [selectedCard, setSelectedCard] = useState({isOpened: false})
  const [cards, setCards] = useState([])
  const [waiting, setWaiting] = useState(null)
  const [buttonDisable, setButtonDisable] = useState(false)

  useEffect(() => {
    api.getUserInformation().then((userData) => {
      setCurrentUser(userData)
    })
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
      setCards(cardsData)
    })
    .catch(err => console.log(err))
  }, [])

  //Обработчики открытия попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    setButtonDisable(false)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    setButtonDisable(false)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    setButtonDisable(false)
  }

  //Обработчик информации о пользователе
  const handleUpdateUser = (userData) => {
    api.editProfile(userData)
      .then((data) => {
      setCurrentUser(data)
      setWaiting(null)
      closeAllPopups()
    })
      .catch(err => console.log(err))
      setButtonDisable(true)
      setWaiting('Сохранение...')
  }

  //Обработчик информации об аватаре
  const handleUpdateAvatar = (userAvatar) => {
    api.editAvatar(userAvatar)
      .then((data) => {
      setCurrentUser(data)
      setWaiting(null)
      closeAllPopups()
    })
      .catch(err => console.log(err))
      setButtonDisable(true)
      setWaiting('Сохранение...')
  }

  //Обработчик лайков
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
    })
    .catch(err => console.log(err))
  }

  //Обработчик удаления карточки
  const handleCardDelete = (card) => {
    api.removeCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id))
    })
    .catch(err => console.log(err))
  }

  //Обработчик добавления карточки
  const handleAddPlaceSubmit = (newCard) => {
    api.addCard(newCard).then((newCard) => {
      setCards([newCard, ...cards])
      setWaiting(null)
      closeAllPopups()
    })
      .catch(err => console.log(err))
      setButtonDisable(true)
      setWaiting('Добавление...')
  }

  //Обработчик клика по карточке
  const handleCardClick = ({link, name, isOpened}) => {
    setSelectedCard({
    link,
    name,
    isOpened: !isOpened,
    })
  }

  //Закрытие всех попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({isOpened: false})
  }

  //Закрытие попапа по клику вне формы
  const closePopupByClickOutside = (evt) => {
    if (evt.target.classList.contains('popup_opened')){
      closeAllPopups()
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          closePopupByClickOutside={closePopupByClickOutside}
          onUpdateUser={handleUpdateUser}
          waiting={waiting || 'Сохранить'}
          isDisable={buttonDisable}
        >
        </EditProfilePopup>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          closePopupByClickOutside={closePopupByClickOutside}
          onUpdateAvatar={handleUpdateAvatar}
          waiting={waiting || 'Сохранить'}
          isDisable={buttonDisable}
        >
        </EditAvatarPopup>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          closePopupByClickOutside={closePopupByClickOutside}
          onAddPlace={handleAddPlaceSubmit}
          waiting={waiting || 'Добавить'}
          isDisable={buttonDisable}
        >
        </AddPlacePopup>
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
          closePopupByClickOutside={closePopupByClickOutside}
        />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
