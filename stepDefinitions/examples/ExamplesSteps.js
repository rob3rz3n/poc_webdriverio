import { Then } from '@wdio/cucumber-framework';
import { userStatus } from '../../data/mockUserStatus.js';
import FetchInterceptor from '../../helpers/FetchInterceptor.js';

Then(/^I can intercept a request$/, async () => {
  const URLINTERCEPTED = 'https://parabank.parasoft.com/parabank/services/bank/swagger.yaml';
  await FetchInterceptor.get(URLINTERCEPTED, { statusCode: 200, body: userStatus.arrears });
  //const logs = await browser.getLogs('performance');
  //console.log(JSON.stringify(logs, null, 2));
});
