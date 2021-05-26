import closeButton from "../images/Close_Icon.svg"

function PopupWithForm ({name, title, isOpen, onClose, children, closePopupByClickOutside}) {
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }
    return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}
    onMouseUp={closePopupByClickOutside}>
        <div className="popup__content">
        <button type="button"
        className="popup__close-button"
        aria-label="закрыть"
        onClick={onClose}
        >
            <img className="popup__close-button-img"
            src={closeButton}
            alt="закрыть"
            />
        </button>
        <form className={`popup__form popup__form_${name}`}
        name={name}
        onSubmit={handleSubmit}
        noValidate
        >
            <h2 className="popup__title">{title}</h2>
            {children}
        </form>
        </div>
    </div>
    )
}
  
export default PopupWithForm