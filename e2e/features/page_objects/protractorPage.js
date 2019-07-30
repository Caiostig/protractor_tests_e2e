const Helper = require('../shared_libs/helper.js')

class ProtractorPage {
  constructor () {
    this.helper = new Helper()
    this.referencesButton = $('#drop4')
    this.faqButton = $('a[href="#/faq"]')
    this.titleFaq = $('#faq')
  }

  visit (url) {
    return browser.get(url)
  }

  accessFAQ () {
    this.helper.elementIsClickable(this.referencesButton)
    this.referencesButton.click()
    this.helper.elementIsVisible(this.faqButton)
    return this.faqButton.click()
  }

  waitTitleFaqIsVisible() {
    this.helper.elementIsVisible(this.titleFaq)
  }
}
module.exports = ProtractorPage
