import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup ({isOpen, onClose, closePopupByClickOutside}) {
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
    <PopupWithForm
    name="edit-avatar"
    title="Обновить аватар"
    isOpen={isOpen}
    onClose={onClose}
    handleSubmit={handleSubmit}
    closePopupByClickOutside={closePopupByClickOutside}
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
        <button
        className="popup__submit-button"
        type="submit"
        aria-label="сохранить">Сохранить</button>
    </PopupWithForm>
    )
}
  
export default EditAvatarPopup
