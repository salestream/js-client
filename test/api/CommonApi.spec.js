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
    instance = new SalestreamApi.CommonApi();
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

  describe('CommonApi', function() {
    describe('emailAddressesGet', function() {
      it('should call emailAddressesGet successfully', function(done) {
        //uncomment below and update the code to test emailAddressesGet
        //instance.emailAddressesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leadStatusesGet', function() {
      it('should call leadStatusesGet successfully', function(done) {
        //uncomment below and update the code to test leadStatusesGet
        //instance.leadStatusesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('membersGet', function() {
      it('should call membersGet successfully', function(done) {
        //uncomment below and update the code to test membersGet
        //instance.membersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('opportunityStatusesGet', function() {
      it('should call opportunityStatusesGet successfully', function(done) {
        //uncomment below and update the code to test opportunityStatusesGet
        //instance.opportunityStatusesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('phoneNumbersGet', function() {
      it('should call phoneNumbersGet successfully', function(done) {
        //uncomment below and update the code to test phoneNumbersGet
        //instance.phoneNumbersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
