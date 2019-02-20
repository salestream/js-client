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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateLead', 'model/ErrorResponse', 'model/InlineObject', 'model/SuccessResponse', 'model/UpdateLead'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateLead'), require('../model/ErrorResponse'), require('../model/InlineObject'), require('../model/SuccessResponse'), require('../model/UpdateLead'));
  } else {
    // Browser globals (root is window)
    if (!root.SalestreamApi) {
      root.SalestreamApi = {};
    }
    root.SalestreamApi.LeadApi = factory(root.SalestreamApi.ApiClient, root.SalestreamApi.CreateLead, root.SalestreamApi.ErrorResponse, root.SalestreamApi.InlineObject, root.SalestreamApi.SuccessResponse, root.SalestreamApi.UpdateLead);
  }
}(this, function(ApiClient, CreateLead, ErrorResponse, InlineObject, SuccessResponse, UpdateLead) {
  'use strict';

  /**
   * Lead service.
   * @module api/LeadApi
   * @version 1.0.0
   */

  /**
   * Constructs a new LeadApi. 
   * @alias module:api/LeadApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the leadIdGet operation.
     * @callback module:api/LeadApi~leadIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get lead
     * @param {String} id lead id
     * @param {module:api/LeadApi~leadIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.leadIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/lead/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadIdPut operation.
     * @callback module:api/LeadApi~leadIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update lead
     * @param {String} id lead id
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLead} opts.updateLead 
     * @param {module:api/LeadApi~leadIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdPut = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateLead'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdPut");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/lead/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadPost operation.
     * @callback module:api/LeadApi~leadPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create lead
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateLead} opts.createLead 
     * @param {module:api/LeadApi~leadPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['createLead'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/lead', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadSearchPost operation.
     * @callback module:api/LeadApi~leadSearchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for leads
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/LeadApi~leadSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.leadSearchPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/lead/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
