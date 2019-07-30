const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect
const ProtractorPage = require('../page_objects/protractorPage')
const protractor = new ProtractorPage()

Given('que acesso o site protractor.org', async function () {
  await protractor.baseUrl('/')
});

When('entro na opção de FAQ', async function () {
  await protractor.accessFAQ()
});

Then('visualizo textos de dúvidas referente a ferramenta', async function () {
  protractor.waitTitleFaqIsVisible()
  await expect(protractor.titleFaq.getText())
    .to.eventually.equal('FAQ')
});
