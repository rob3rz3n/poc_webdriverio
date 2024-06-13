import logger from '@wdio/logger';
import { browser } from '@wdio/globals';

const log = logger('FETCH_INTERCEPTOR');

class FetchInterceptor {
  /**
   *
   * @param {string | RegExp} url
   * @param {*} data
   * @param {import('webdriverio').MockFilterOptions | { body?: any }} options
   */
  static async #request(url, options = {}) {
    try {
      log.info(
        `Intercept url: ${url}`,
        JSON.stringify(options, null, 2),
      );
      const response = await browser.mock(url, options);
      if (options.body) response.respond(options.body);
      return response;
    } catch (error) {
      log.error('Intercept error', error);
      throw error;
    }
  }

  /**
   *
   * @param {string | RegExp} url
   * @param {import('webdriverio').MockFilterOptions | { body?: any }} options
   */
  static async get(url, options = {}) {
    const response = await FetchInterceptor.#request(
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
   * @param {string | RegExp} url
   * @param {import('webdriverio').MockFilterOptions | { body?: any }} options
   */
  static async post(url, options = {}) {
    const response = await FetchInterceptor.#request(
      url,
      {
        ...options,
        method: 'POST',
      },
    );

    return response;
  }

  /**
   *
   * @param {string | RegExp} url
   * @param {import('webdriverio').MockFilterOptions | { body?: any }} options
   */
  static async put(url, options = {}) {
    const response = await FetchInterceptor.#request(
      url,
      {
        ...options,
        method: 'PUT',
      },
    );

    return response;
  }

  /**
   *
   * @param {string | RegExp} url
   * @param {import('webdriverio').MockFilterOptions | { body?: any }} options
   */
  static async patch(url, options = {}) {
    const response = await FetchInterceptor.#request(
      url,
      {
        ...options,
        method: 'PATCH',
      },
    );

    return response;
  }

  /**
   *
   * @param {string | RegExp} url
   * @param {import('webdriverio').MockFilterOptions | { body?: any }} options
   */
  static async delete(url, options = {}) {
    const response = await FetchInterceptor.#request(
      url,
      {
        ...options,
        method: 'DELETE',
      },
    );

    return response;
  }
}

export default FetchInterceptor;
