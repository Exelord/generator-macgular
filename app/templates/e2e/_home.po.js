/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var HomePage = function() {
  this.navbar = element(by.tagName('nav'));
  this.angular = element(by.tagName('img'));
};

module.exports = new HomePage();
