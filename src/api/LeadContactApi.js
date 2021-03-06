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
    define(['ApiClient', 'model/CreateContact', 'model/ErrorResponse', 'model/SuccessResponse', 'model/UpdateContact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateContact'), require('../model/ErrorResponse'), require('../model/SuccessResponse'), require('../model/UpdateContact'));
  } else {
    // Browser globals (root is window)
    if (!root.SalestreamApi) {
      root.SalestreamApi = {};
    }
    root.SalestreamApi.LeadContactApi = factory(root.SalestreamApi.ApiClient, root.SalestreamApi.CreateContact, root.SalestreamApi.ErrorResponse, root.SalestreamApi.SuccessResponse, root.SalestreamApi.UpdateContact);
  }
}(this, function(ApiClient, CreateContact, ErrorResponse, SuccessResponse, UpdateContact) {
  'use strict';

  /**
   * LeadContact service.
   * @module api/LeadContactApi
   * @version 1.0.0
   */

  /**
   * Constructs a new LeadContactApi. 
   * @alias module:api/LeadContactApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the leadIdContactsContactIdDelete operation.
     * @callback module:api/LeadContactApi~leadIdContactsContactIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete lead contact
     * @param {String} id lead id
     * @param {String} contactId contact id
     * @param {module:api/LeadContactApi~leadIdContactsContactIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdContactsContactIdDelete = function(id, contactId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdContactsContactIdDelete");
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling leadIdContactsContactIdDelete");
      }


      var pathParams = {
        'id': id,
        'contactId': contactId
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
        '/lead/{id}/contacts/{contactId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadIdContactsContactIdGet operation.
     * @callback module:api/LeadContactApi~leadIdContactsContactIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get lead contact
     * @param {String} id lead id
     * @param {String} contactId contactId id
     * @param {module:api/LeadContactApi~leadIdContactsContactIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdContactsContactIdGet = function(id, contactId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdContactsContactIdGet");
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling leadIdContactsContactIdGet");
      }


      var pathParams = {
        'id': id,
        'contactId': contactId
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
        '/lead/{id}/contacts/{contactId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadIdContactsContactIdPut operation.
     * @callback module:api/LeadContactApi~leadIdContactsContactIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update lead contact
     * @param {String} id lead id
     * @param {String} contactId contact id
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateContact} opts.updateContact 
     * @param {module:api/LeadContactApi~leadIdContactsContactIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdContactsContactIdPut = function(id, contactId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateContact'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdContactsContactIdPut");
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling leadIdContactsContactIdPut");
      }


      var pathParams = {
        'id': id,
        'contactId': contactId
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
        '/lead/{id}/contacts/{contactId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadIdContactsGet operation.
     * @callback module:api/LeadContactApi~leadIdContactsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get lead contacts
     * @param {String} id lead id
     * @param {module:api/LeadContactApi~leadIdContactsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdContactsGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdContactsGet");
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
      var accepts = ['application/json'];
      var returnType = SuccessResponse;

      return this.apiClient.callApi(
        '/lead/{id}/contacts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadIdContactsPost operation.
     * @callback module:api/LeadContactApi~leadIdContactsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create lead contact
     * @param {String} id lead id
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateContact} opts.createContact 
     * @param {module:api/LeadContactApi~leadIdContactsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdContactsPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['createContact'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdContactsPost");
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
        '/lead/{id}/contacts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
