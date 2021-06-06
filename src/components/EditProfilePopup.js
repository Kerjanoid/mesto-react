import PopupWithForm from "./PopupWithForm"
import {useContext, useEffect, useState} from "react"
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup ({isOpen, onClose, closePopupByClickOutside, onUpdateUser}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    })
  }


  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      closePopupByClickOutside={closePopupByClickOutside}
      handleSubmit={handleSubmit}
      buttonText="Сохранить"
      >
        <label className="popup__form-field">
          <input className="popup__input-field popup__input-field_type_title"
          required
          placeholder="Введите имя"
          type="text"
          name="profile-title"
          minLength="2"
          maxLength="40"
          onChange={handleNameChange}
          value={name || ''}
          />
          <span className="popup__error" id="profile-title-error" />
        </label>
        <label className="popup__form-field">
          <input
          className="popup__input-field popup__input-field_type_subtitle"
          required
          placeholder="Введите профессию"
          type="text"
          name="profile-subtitle"
          minLength="2"
          maxLength="200"
          onChange={handleDescriptionChange}
          value={description || ''}
          />
          <span className="popup__error" id="profile-subtitle-error" />
        </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup
