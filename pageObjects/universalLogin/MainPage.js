import { $, expect } from '@wdio/globals';
import { LINKS } from './MainSelectors.js';
import Page from '../page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
  async visit_swager() {
    await $(LINKS.swagger).click();
  }

}

export default new MainPage();
