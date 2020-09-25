const VlDocument = require('../components/vl-document');
const {Page, Config} = require('vl-ui-core').Test;

class VlDocumentPage extends Page {
  async getDocument() {
    return new VlDocument(this.driver, 'vl-document');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-document.html');
  }
}

module.exports = VlDocumentPage;
