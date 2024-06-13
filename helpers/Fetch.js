import logger from '@wdio/logger';

const log = logger('FETCH');

class Fetch {
  /**
   *
   * @param {string | URL} url
   * @param {RequestInit} options
   */
  static async #request(url, options) {
    log.info(`Request url: ${url}`, JSON.stringify(options, null, 2));
    const response = await fetch(url, options);
    if (!response.ok) {
      log.error('Request error', JSON.stringify(response, null, 2));
      throw new Error('Request error');
    }
    return response;
  }

  /**
   *
   * @param {*} data
   */
  static parseBody(data) {
    if (data instanceof FormData) return data;
    const body = data ? JSON.stringify(data) : null;
    return body;
  }

  /**
   *
   * @param {string | URL} url
   * @param {RequestInit} options
   */
  static async get(url, options = {}) {
    const response = await Fetch.#request(
      url,
      {
        ...options,
        method: 'GET',
      },
    );

    return response;
  }

  /**
   *
   * @param {string | URL} url
   * @param {*} data
   * @param {RequestInit} options
   */
  static async post(url, data, options = {}) {
    const body = Fetch.parseBody(data);
    const response = await Fetch.#request(
      url,
      {
        ...options,
        body,
        method: 'POST',
      },
    );

    return response;
  }

  /**
   *
   * @param {string | URL} url
   * @param {*} data
   * @param {RequestInit} options
   */
  static async put(url, data, options = {}) {
    const body = Fetch.parseBody(data);
    const response = await Fetch.#request(
      url,
      {
        ...options,
        body,
        method: 'PUT',
      },
    );

    return response;
  }

  /**
   *
   * @param {string | URL} url
   * @param {*} data
   * @param {RequestInit} options
   */
  static async patch(url, data, options = {}) {
    const body = Fetch.parseBody(data);
    const response = await Fetch.#request(
      url,
      {
        ...options,
        body,
        method: 'PATCH',
      },
    );

    return response;
  }

  /**
   *
   * @param {string | URL} url
   * @param {RequestInit} options
   */
  static async delete(url, options = {}) {
    const response = await Fetch.#request(
      url,
      {
        ...options,
        method: 'DELETE',
      },
    );

    return response;
  }
}

export default Fetch;
