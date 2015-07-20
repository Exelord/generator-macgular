'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./home.po');
  });

  it('should include navbar', function() {
    expect(page.navbar.isPresent()).toBe(true);
  });

  it('should show an angular logo', function () {
    expect(page.angular.getAttribute('src')).toMatch('assets/images/angular.png');
  });

});
