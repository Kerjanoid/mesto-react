import PopupWithForm from "./PopupWithForm";

function PopupConfirm ({isOpen, onClose, closePopupByClickOutside}) {
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
    <PopupWithForm
    name="delete-agreement"
    title="Вы уверены?"
    isOpen={isOpen}
    onClose={onClose}
    handleSubmit={handleSubmit}
    closePopupByClickOutside={closePopupByClickOutside}
    >
        <button
        className="popup__submit-button popup__submit-button_agreement"
        type="submit"
        aria-label="да">Да</button>
    </PopupWithForm>
    )
}
  
export default PopupConfirm
