const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlDocumentPage = require('./pages/vl-document.page');

describe('vl-document', async () => {
  const vlDocumentPage = new VlDocumentPage(driver);

  before(() => {
    return vlDocumentPage.load();
  });

  it('Als gebruiker kan ik het document type bekijken', async () => {
    const document = await vlDocumentPage.getDocument();
    await assert.eventually.equal(document.getType(), 'PDF');
  });

  it('Als gebruiker kan ik de document titel bekijken', async () => {
    const document = await vlDocumentPage.getDocument();
    await assert.eventually.equal(document.getTitle(), 'Hubert en Jan van Eyck, Vlaamse Primitieven');
  });

  it('Als gebruiker kan ik de document metadata bekijken', async () => {
    const document = await vlDocumentPage.getDocument();
    await assert.eventually.equal(document.getMetadata(), 'PDF - 580 kB');
  });

  it('Als gebruiker kan ik het document downloaden', async () => {
    const document = await vlDocumentPage.getDocument();
    await document.download();
  });
});
