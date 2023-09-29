import Element from '../core/Element';
import BasePage from './BasePage';

const pagination = new Element('.pagination-nav__label');



class GettingStartedPage extends BasePage {

  get pagination() {
    return pagination;
  }

  async open() {
    await super.open('docs/gettingstarted');
  }
}

export default new GettingStartedPage();
