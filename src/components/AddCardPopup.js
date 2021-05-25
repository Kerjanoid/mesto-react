import PopupWithForm from "./PopupWithForm";

function AddCardPopup ({isOpen, onClose, closePopupByClickOutside}) {
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
    <PopupWithForm
    name="new-picture"
    title="Новое место"
    isOpen={isOpen}
    onClose={onClose}
    handleSubmit={handleSubmit}
    closePopupByClickOutside={closePopupByClickOutside}
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
        <button
        className="popup__submit-button"
        type="submit"
        aria-label="создать">Создать</button>
    </PopupWithForm>
    )
}
  
export default AddCardPopup
