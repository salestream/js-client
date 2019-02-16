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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SalestreamApi) {
      root.SalestreamApi = {};
    }
    root.SalestreamApi.CreateTask = factory(root.SalestreamApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CreateTask model module.
   * @module model/CreateTask
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateTask</code>.
   * @alias module:model/CreateTask
   * @class
   * @param _date {Number} 
   * @param userId {String} 
   */
  var exports = function(_date, userId) {
    var _this = this;

    _this['date'] = _date;
    _this['userId'] = userId;
  };

  /**
   * Constructs a <code>CreateTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTask} obj Optional instance to populate.
   * @return {module:model/CreateTask} The populated <code>CreateTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Number');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('desc')) {
        obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} desc
   */
  exports.prototype['desc'] = undefined;



  return exports;
}));


