const Helper = require('../shared_libs/helper.js')

class ProtractorPage {
  constructor () {
    this.helper = new Helper()
    this.referencesButton = $('#drop4')
    this.faqButton = $('a[href="#/faq"]')
    this.titleFaq = $('#faq')
  }

  visitUrl (link) {
    return browser.get(link)
  }

  accessFAQ () {
    this.helper.elementIsClickable(this.referencesButton)
    this.referencesButton.click()
    this.helper.elementIsVisible(this.faqButton)
    return this.faqButton.click()
  }
}

module.exports = ProtractorPage