import closeButton from "../images/Close_Icon.svg"
import "../pages/index.css"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import EditProfilePopup from "./EditProfilePopup"
import EditAvatarPopup from "./EditAvatarPopup"
import AddCardPopup from "./AddCardPopup"
import PopupConfirm from "./PopupConfirm"
import ImagePopup from "./ImagePopup"
import {useState} from "react"
import { containerSelector } from "../utils/constants"

function App() {
  
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({isOpened: false})

  const handleCardClick = ({link, name, isOpened}) => {
    setSelectedCard({
      link,
      name,
      isOpened: !isOpened,
    })
  }

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
  function handleConfirmClick() {
    setIsConfirmPopupOpen(!isConfirmPopupOpen)
  }

  //Закрытие всех попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsConfirmPopupOpen(false)
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
        onCardDelete={handleConfirmClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        closePopupByClickOutside={closePopupByClickOutside}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        closePopupByClickOutside={closePopupByClickOutside}
      />
      <AddCardPopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        closePopupByClickOutside={closePopupByClickOutside}
      />
      <PopupConfirm
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        closePopupByClickOutside={closePopupByClickOutside}
      />
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
        closePopupByClickOutside={closePopupByClickOutside}
      />

    </div>
  )
}

export default App
