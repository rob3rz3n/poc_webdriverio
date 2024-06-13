import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../../pageObjects/universalLogin/MainPage.js';

// eslint-disable-next-line no-unused-vars
Given(/^I am on the (\w+) page$/, async (page) => {
  const url = 'https://parabank.parasoft.com/parabank/services.htm';
  await MainPage.open(url);
});

When(/^I visit the swagger$/, async () => {
  await MainPage.visit_swager();
});
