export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _makeRequest(url, options) {
    return fetch(url, options).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getProducts() {
    return this._makeRequest(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    });
  }
}
