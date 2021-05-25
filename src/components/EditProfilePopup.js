import PopupWithForm from "./PopupWithForm";

function EditProfilePopup ({isOpen, onClose, closePopupByClickOutside}) {
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
    <PopupWithForm
    name="edit-profile"
    title="Редактировать профиль"
    isOpen={isOpen}
    onClose={onClose}
    handleSubmit={handleSubmit}
    closePopupByClickOutside={closePopupByClickOutside}
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
        <button
        className="popup__submit-button"
        type="submit"
        aria-label="сохранить">Сохранить</button>
    </PopupWithForm>
    )
}
  
export default EditProfilePopup

