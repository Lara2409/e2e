import {When} from '@wdio/cucumber-framework';
import GettingStartedPage from '../pageobjects/GettingStartedPage';

const pages = new Map([  
  ['Getting Started Page', GettingStartedPage],  
]);

When(/^I open the ([^"]*)$/, async (page) => {
  await pages.get(page).open();
});

When(/^I click on pagination$/, async () => {
  const pag = GettingStartedPage.pagination;

  await pag.isDisplayed();
  await pag.scrollIntoView();
  await pag.moveTo();
});
