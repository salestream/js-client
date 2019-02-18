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
    root.SalestreamApi.UpdateOpportunity = factory(root.SalestreamApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The UpdateOpportunity model module.
   * @module model/UpdateOpportunity
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UpdateOpportunity</code>.
   * @alias module:model/UpdateOpportunity
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>UpdateOpportunity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateOpportunity} obj Optional instance to populate.
   * @return {module:model/UpdateOpportunity} The populated <code>UpdateOpportunity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('est_close_date')) {
        obj['est_close_date'] = ApiClient.convertToType(data['est_close_date'], 'Number');
      }
      if (data.hasOwnProperty('assignee')) {
        obj['assignee'] = ApiClient.convertToType(data['assignee'], 'String');
      }
      if (data.hasOwnProperty('confidence')) {
        obj['confidence'] = ApiClient.convertToType(data['confidence'], 'Number');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Number} est_close_date
   */
  exports.prototype['est_close_date'] = undefined;
  /**
   * @member {String} assignee
   */
  exports.prototype['assignee'] = undefined;
  /**
   * @member {Number} confidence
   */
  exports.prototype['confidence'] = undefined;
  /**
   * @member {String} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;



  return exports;
}));


