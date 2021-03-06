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
    instance = new SalestreamApi.LeadOpportunityApi();
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

  describe('LeadOpportunityApi', function() {
    describe('leadIdOpportunityGet', function() {
      it('should call leadIdOpportunityGet successfully', function(done) {
        //uncomment below and update the code to test leadIdOpportunityGet
        //instance.leadIdOpportunityGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leadIdOpportunityOpportunityIdDelete', function() {
      it('should call leadIdOpportunityOpportunityIdDelete successfully', function(done) {
        //uncomment below and update the code to test leadIdOpportunityOpportunityIdDelete
        //instance.leadIdOpportunityOpportunityIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leadIdOpportunityOpportunityIdPut', function() {
      it('should call leadIdOpportunityOpportunityIdPut successfully', function(done) {
        //uncomment below and update the code to test leadIdOpportunityOpportunityIdPut
        //instance.leadIdOpportunityOpportunityIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leadIdOpportunityPost', function() {
      it('should call leadIdOpportunityPost successfully', function(done) {
        //uncomment below and update the code to test leadIdOpportunityPost
        //instance.leadIdOpportunityPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
