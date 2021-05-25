import editButton from "../images/Edit_button.svg"
import addButton from "../images/plus.svg"
import { containerSelector, templateElement, editProfile, editAvatar,
    formProfElement,formPicElement, formAvatarElement, userNameInput,
    userProfessionInput, addPicture, subtitleSelector, nameSelector,
    avatarSelector, popupProfileSelector, popupCardSelector, popupImageSelector,
    popupAvatarSelector, popupDeleteAgreementSelector, validationConfig, popupEditAvatar } from "../utils/constants.js"

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardDelete}) => {

    return (
    <main className="content">
        <section className="profile">
            <div className="profile__data">
                <div className="avatar"
                onClick={onEditAvatar}
                >
                    <div className="avatar__cover">
                        <img className="avatar__edit-button-img" 
                        src={editButton}
                        alt="редактирование аватара" />
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Славян</h1>
                    <button className="profile__edit-button"
                    onClick={onEditProfile}
                    aria-label="редактировать"
                    type="button">
                        <img className="profile__edit-button-img"
                        src={editButton}
                        alt="редактирование профиля" />
                    </button>
                <p className="profile__subtitle">Горе веб-разработчик</p>
                </div>
            </div>
            <button
            onClick={onAddPlace}
            type="button"
            className="profile__add-button"
            aria-label="добавить">
                <img
                className="profile__add-button-img"
                src={addButton}
                alt="добавление контента" />
            </button>
        </section>

        <section className="elements">

        </section>
    </main>
    )
}

export default Main