import "../pages/index.css"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"
import {useState} from "react"

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({isOpened: false})

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
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      closePopupByClickOutside={closePopupByClickOutside}
      buttonText="Сохранить"
      >
        <label className="popup__form-field">
          <input className="popup__input-field popup__input-field_type_title"
          required
          placeholder="Введите имя"
          type="text" defaultValue=""
          name="profile-title"
          minLength="2"
          maxLength="40"
          />
          <span className="popup__error" id="profile-title-error" />
        </label>
        <label className="popup__form-field">
          <input
          className="popup__input-field popup__input-field_type_subtitle"
          required
          placeholder="Введите профессию"
          type="text"
          defaultValue=""
          name="profile-subtitle"
          minLength="2"
          maxLength="200"
          />
          <span className="popup__error" id="profile-subtitle-error" />
        </label>
      </PopupWithForm>
      <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      closePopupByClickOutside={closePopupByClickOutside}
      buttonText="Сохранить"
      >
        <label className="popup__form-field">
          <input className="popup__input-field popup__input-field_type_title"
          required
          placeholder="Ссылка на изорбажение"
          type="url"
          defaultValue=""
          name="avatar-url"
          minLength="2"
          maxLength="40"
          />
          <span className="popup__error" id="avatar-url-error" />
        </label>
      </PopupWithForm>
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
  )
}

export default App
