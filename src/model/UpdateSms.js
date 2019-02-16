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
    define(['ApiClient', 'model/Text'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Text'));
  } else {
    // Browser globals (root is window)
    if (!root.SalestreamApi) {
      root.SalestreamApi = {};
    }
    root.SalestreamApi.UpdateSms = factory(root.SalestreamApi.ApiClient, root.SalestreamApi.Text);
  }
}(this, function(ApiClient, Text) {
  'use strict';



  /**
   * The UpdateSms model module.
   * @module model/UpdateSms
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateSms</code>.
   * @alias module:model/UpdateSms
   * @class
   * @param phoneId {String} 
   * @param detailId {String} 
   * @param message {module:model/Text} 
   */
  var exports = function(phoneId, detailId, message) {
    var _this = this;

    _this['phoneId'] = phoneId;
    _this['detailId'] = detailId;
    _this['message'] = message;
  };

  /**
   * Constructs a <code>UpdateSms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSms} obj Optional instance to populate.
   * @return {module:model/UpdateSms} The populated <code>UpdateSms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('phoneId')) {
        obj['phoneId'] = ApiClient.convertToType(data['phoneId'], 'String');
      }
      if (data.hasOwnProperty('detailId')) {
        obj['detailId'] = ApiClient.convertToType(data['detailId'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], Text);
      }
      if (data.hasOwnProperty('draft')) {
        obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
      }
      if (data.hasOwnProperty('schedule')) {
        obj['schedule'] = ApiClient.convertToType(data['schedule'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} phoneId
   */
  exports.prototype['phoneId'] = undefined;
  /**
   * @member {String} detailId
   */
  exports.prototype['detailId'] = undefined;
  /**
   * @member {module:model/Text} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Boolean} draft
   */
  exports.prototype['draft'] = undefined;
  /**
   * @member {Number} schedule
   */
  exports.prototype['schedule'] = undefined;



  return exports;
}));


