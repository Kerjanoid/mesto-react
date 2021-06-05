class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  editProfile(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData['profile-titel'],
        about: userData['profile-subtitel']
      })
    })
      .then(this._checkResponse)
  }

  editAvatar(userAvatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatar['avatar-url']
      })
    })
      .then(this._checkResponse);
  }

  addCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData['picture-titel'],
        link: cardData['picture-url']
      })
    })
      .then(this._checkResponse)
  }

  removeCard(cardID) {
    return fetch(`${this._baseUrl}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  changeLikeCardStatus(cardId, isLiked) {
    const putOptions = {
      headers: this._headers,
      method:'PUT',
    }
    const delOptions = {
      headers: this._headers,
      method:'DELETE',
    }
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, isLiked ? delOptions : putOptions)
      .then(this._checkResponse)
  }
}

export default new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-23`,
  headers: {
    authorization: '9dfdfed6-d744-4da1-85f3-1945f42ba2db',
    'Content-Type': 'application/json'
  }
})
