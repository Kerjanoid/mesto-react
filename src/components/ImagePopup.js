import closeButton from "../images/Close_Icon.svg"

const ImagePopup = ({isOpen, onClose, closePopupByClickOutside}) => {
    return (
    <div className={`popup popup_view-picture ${isOpen ? "popup_opened" : ""}`}>
        <figure className="popup__view-window">
            <button type="button"
            className="popup__close-button"
            aria-label="закрыть"
            onClick={onClose}
            closePopupByClickOutside={closePopupByClickOutside}
            >
                <img className="popup__close-button-img" src={closeButton} alt="закрыть" />
            </button>
            <img className="popup__huge-picture" src={addButton} alt=" " />
            <figcaption className="popup__figcaption"></figcaption>
        </figure>
    </div>
    )
}
  
export default ImagePopup