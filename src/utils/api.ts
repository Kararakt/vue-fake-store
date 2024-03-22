export class Api {
  constructor(
    private readonly _baseUrl: string,
    private readonly _headers: Headers
  ) {}

  private async _makeRequest(url: string, options: RequestInit) {
    const res = await fetch(url, options);

    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  }

  getProducts() {
    return this._makeRequest(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    });
  }
}
