/* eslint-disable no-unused-vars */
const VlDocument = require('../components/vl-document');
const {Page, Config} = require('vl-ui-core').Test;

class VlDocumentPage extends Page {
  async _getDocument(selector) {
    return new VlDocument(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-document.html');
  }
}

module.exports = VlDocumentPage;
