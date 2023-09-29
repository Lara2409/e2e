/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
import {waitUntilUrlContains} from '../core/browser';

export default class BasePage {
  async open(path) {
    await browser.url(`${browser.options.baseUrl}/${path}`);
    await waitUntilUrlContains(path);
  }
}
