/* eslint-disable no-unused-vars */
const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlDocumentPage = require('./pages/vl-document.page');

describe('vl-document', async () => {
  const vlDocumentPage = new VlDocumentPage(driver);

  before(() => {
    return vlDocumentPage.load();
  });

  it('', async () => {
  });
});
