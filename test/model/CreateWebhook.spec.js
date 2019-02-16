/**
 * Salestream API
 * Salestream API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SalestreamApi);
  }
}(this, function(expect, SalestreamApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SalestreamApi.CreateWebhook();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateWebhook', function() {
    it('should create an instance of CreateWebhook', function() {
      // uncomment below and update the code to test CreateWebhook
      //var instance = new SalestreamApi.CreateWebhook();
      //expect(instance).to.be.a(SalestreamApi.CreateWebhook);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new SalestreamApi.CreateWebhook();
      //expect(instance).to.be();
    });

    it('should have the property fallbackUrl (base name: "fallback_url")', function() {
      // uncomment below and update the code to test the property fallbackUrl
      //var instance = new SalestreamApi.CreateWebhook();
      //expect(instance).to.be();
    });

    it('should have the property errorUrl (base name: "error_url")', function() {
      // uncomment below and update the code to test the property errorUrl
      //var instance = new SalestreamApi.CreateWebhook();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instance = new SalestreamApi.CreateWebhook();
      //expect(instance).to.be();
    });

    it('should have the property retryAttempts (base name: "retry_attempts")', function() {
      // uncomment below and update the code to test the property retryAttempts
      //var instance = new SalestreamApi.CreateWebhook();
      //expect(instance).to.be();
    });

  });

}));
