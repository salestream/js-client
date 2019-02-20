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
    define(['ApiClient', 'model/CreateTask', 'model/ErrorResponse', 'model/SuccessResponse', 'model/UpdateTask'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateTask'), require('../model/ErrorResponse'), require('../model/SuccessResponse'), require('../model/UpdateTask'));
  } else {
    // Browser globals (root is window)
    if (!root.SalestreamApi) {
      root.SalestreamApi = {};
    }
    root.SalestreamApi.TaskApi = factory(root.SalestreamApi.ApiClient, root.SalestreamApi.CreateTask, root.SalestreamApi.ErrorResponse, root.SalestreamApi.SuccessResponse, root.SalestreamApi.UpdateTask);
  }
}(this, function(ApiClient, CreateTask, ErrorResponse, SuccessResponse, UpdateTask) {
  'use strict';

  /**
   * Task service.
   * @module api/TaskApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TaskApi. 
   * @alias module:api/TaskApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the leadIdTaskPost operation.
     * @callback module:api/TaskApi~leadIdTaskPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create task
     * @param {String} id lead id
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTask} opts.createTask 
     * @param {module:api/TaskApi~leadIdTaskPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdTaskPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['createTask'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdTaskPost");
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
        '/lead/{id}/task', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadIdTaskTaskIdDelete operation.
     * @callback module:api/TaskApi~leadIdTaskTaskIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete task
     * @param {String} id lead id
     * @param {String} taskId task id
     * @param {module:api/TaskApi~leadIdTaskTaskIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdTaskTaskIdDelete = function(id, taskId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdTaskTaskIdDelete");
      }

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling leadIdTaskTaskIdDelete");
      }


      var pathParams = {
        'id': id,
        'taskId': taskId
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
        '/lead/{id}/task/{taskId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the leadIdTaskTaskIdPut operation.
     * @callback module:api/TaskApi~leadIdTaskTaskIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update task
     * @param {String} id lead id
     * @param {String} taskId task id
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateTask} opts.updateTask 
     * @param {module:api/TaskApi~leadIdTaskTaskIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    this.leadIdTaskTaskIdPut = function(id, taskId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateTask'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leadIdTaskTaskIdPut");
      }

      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling leadIdTaskTaskIdPut");
      }


      var pathParams = {
        'id': id,
        'taskId': taskId
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
        '/lead/{id}/task/{taskId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
