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
    define(['ApiClient', 'model/ErrorResponse', 'model/SuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/SuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SalestreamApi) {
      root.SalestreamApi = {};
    }
    root.SalestreamApi.WebhookApi = factory(root.SalestreamApi.ApiClient, root.SalestreamApi.ErrorResponse, root.SalestreamApi.SuccessResponse);
  }
}(this, function(ApiClient, ErrorResponse, SuccessResponse) {
  'use strict';

  /**
   * Webhook service.
   * @module api/WebhookApi
   * @version 1.0.0
   */

  /**
   * Constructs a new WebhookApi. 
   * @alias module:api/WebhookApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webhookDelete operation.
     * @callback module:api/WebhookApi~webhookDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete webhook
     * @param {module:api/WebhookApi~webhookDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.webhookDelete = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/webhook', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhookGet operation.
     * @callback module:api/WebhookApi~webhookGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get webhook
     * @param {module:api/WebhookApi~webhookGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.webhookGet = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/webhook', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhookPost operation.
     * @callback module:api/WebhookApi~webhookPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create webhook
     * @param {String} url 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fallbackUrl 
     * @param {String} opts.errorUrl 
     * @param {Number} opts.timeout 
     * @param {Number} opts.retryAttempts 
     * @param {module:api/WebhookApi~webhookPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.webhookPost = function(url, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'url' is set
      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling webhookPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'url': url,
        'fallback_url': opts['fallbackUrl'],
        'error_url': opts['errorUrl'],
        'timeout': opts['timeout'],
        'retry_attempts': opts['retryAttempts']
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/webhook', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhookRegisterPost operation.
     * @callback module:api/WebhookApi~webhookRegisterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register webhook resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.resource 
     * @param {Array.<String>} opts.fields 
     * @param {module:api/WebhookApi~webhookRegisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.webhookRegisterPost = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'resource': opts['resource'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/webhook/register', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webhookUnregisterPost operation.
     * @callback module:api/WebhookApi~webhookUnregisterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister webhook resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.resource 
     * @param {module:api/WebhookApi~webhookUnregisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.webhookUnregisterPost = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'resource': opts['resource']
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/webhook/unregister', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
