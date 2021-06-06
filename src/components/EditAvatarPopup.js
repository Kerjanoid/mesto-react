import PopupWithForm from "./PopupWithForm"
import {useRef} from "react"
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditAvatarPopup ({isOpen, onClose, closePopupByClickOutside, onUpdateAvatar}) {
  const avatarRef = useRef(null)
  function handleSubmit(e) {
    e.preventDefault()
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    })
    e.target.reset()
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      closePopupByClickOutside={closePopupByClickOutside}
      handleSubmit={handleSubmit}
      buttonText="Сохранить"
      >
        <label className="popup__form-field">
          <input
            className="popup__input-field popup__input-field_type_title"
            required
            placeholder="Ссылка на изорбажение"
            type="url"
            defaultValue=""
            name="avatar-url"
            minLength="2"
            maxLength="200"
            ref={avatarRef}
          />
          <span className="popup__error" id="avatar-url-error" />
        </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
