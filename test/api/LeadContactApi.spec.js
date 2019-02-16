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
    instance = new SalestreamApi.LeadContactApi();
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

  describe('LeadContactApi', function() {
    describe('leadIdContactsContactIdDelete', function() {
      it('should call leadIdContactsContactIdDelete successfully', function(done) {
        //uncomment below and update the code to test leadIdContactsContactIdDelete
        //instance.leadIdContactsContactIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leadIdContactsContactIdGet', function() {
      it('should call leadIdContactsContactIdGet successfully', function(done) {
        //uncomment below and update the code to test leadIdContactsContactIdGet
        //instance.leadIdContactsContactIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leadIdContactsContactIdPut', function() {
      it('should call leadIdContactsContactIdPut successfully', function(done) {
        //uncomment below and update the code to test leadIdContactsContactIdPut
        //instance.leadIdContactsContactIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leadIdContactsGet', function() {
      it('should call leadIdContactsGet successfully', function(done) {
        //uncomment below and update the code to test leadIdContactsGet
        //instance.leadIdContactsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leadIdContactsPost', function() {
      it('should call leadIdContactsPost successfully', function(done) {
        //uncomment below and update the code to test leadIdContactsPost
        //instance.leadIdContactsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));