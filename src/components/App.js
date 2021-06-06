import "../pages/index.css"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import PopupWithForm from "./PopupWithForm"
import EditProfilePopup from "./EditProfilePopup"
import EditAvatarPopup from "./EditAvatarPopup"
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

  useEffect(() => {
    api.getUserInformation().then((userData) => {
      setCurrentUser(userData)
    })
    .catch(err => console.log(err))
  }, [])

  //Обработчики открытия попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  //Обработчик информации о пользователе
  const handleUpdateUser = (userData) => {
    api.editProfile(userData)
      .then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
      .catch(err => console.log(err))
  }

  //Обработчик информации об аватаре
  const handleUpdateAvatar = (userAvatar) => {
    api.editAvatar(userAvatar)
      .then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
      .catch(err => console.log(err))
  }

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
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          closePopupByClickOutside={closePopupByClickOutside}
          onUpdateUser={handleUpdateUser}
        >
        </EditProfilePopup>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          closePopupByClickOutside={closePopupByClickOutside}
          onUpdateAvatar={handleUpdateAvatar}
        >
        </EditAvatarPopup>
        <PopupWithForm
          name="new-picture"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          closePopupByClickOutside={closePopupByClickOutside}
          buttonText="Создать"
          >
            <label className="popup__form-field">
              <input className="popup__input-field popup__input-field_type_pic-title"
              required
              placeholder="Название"
              type="text"
              defaultValue=""
              name="picture-title"
              minLength="2"
              maxLength="40"
              />
              <span className="popup__error" id="picture-title-error" />
            </label>
            <label className="popup__form-field">
              <input
              className="popup__input-field popup__input-field_type_pic-link"
              required
              placeholder="Ссылка на изорбажение"
              type="url"
              defaultValue=""
              name="picture-url"
              minLength="2"
              maxLength="200"
              />
              <span className="popup__error" id="picture-url-error" />
            </label>
      </PopupWithForm>
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
