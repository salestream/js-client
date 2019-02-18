# SalestreamApi.ActivityApi

All URIs are relative to *https://rest-dev.salestream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leadIdActivityEmailEmailIdDelete**](ActivityApi.md#leadIdActivityEmailEmailIdDelete) | **DELETE** /lead/{id}/activity/email/{emailId} | 
[**leadIdActivityEmailEmailIdPut**](ActivityApi.md#leadIdActivityEmailEmailIdPut) | **PUT** /lead/{id}/activity/email/{emailId} | 
[**leadIdActivityEmailPost**](ActivityApi.md#leadIdActivityEmailPost) | **POST** /lead/{id}/activity/email | 
[**leadIdActivityGet**](ActivityApi.md#leadIdActivityGet) | **GET** /lead/{id}/activity | 
[**leadIdActivityNoteNoteIdDelete**](ActivityApi.md#leadIdActivityNoteNoteIdDelete) | **DELETE** /lead/{id}/activity/note/{noteId} | 
[**leadIdActivityNoteNoteIdPut**](ActivityApi.md#leadIdActivityNoteNoteIdPut) | **PUT** /lead/{id}/activity/note/{noteId} | 
[**leadIdActivityNotePost**](ActivityApi.md#leadIdActivityNotePost) | **POST** /lead/{id}/activity/note | 
[**leadIdActivitySmsPost**](ActivityApi.md#leadIdActivitySmsPost) | **POST** /lead/{id}/activity/sms | 
[**leadIdActivitySmsSmsIdDelete**](ActivityApi.md#leadIdActivitySmsSmsIdDelete) | **DELETE** /lead/{id}/activity/sms/{smsId} | 
[**leadIdActivitySmsSmsIdPut**](ActivityApi.md#leadIdActivitySmsSmsIdPut) | **PUT** /lead/{id}/activity/sms/{smsId} | 


<a name="leadIdActivityEmailEmailIdDelete"></a>
# **leadIdActivityEmailEmailIdDelete**
> SuccessResponse leadIdActivityEmailEmailIdDelete(id, emailId)



delete email

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var emailId = "emailId_example"; // String | email id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivityEmailEmailIdDelete(id, emailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **emailId** | **String**| email id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdActivityEmailEmailIdPut"></a>
# **leadIdActivityEmailEmailIdPut**
> SuccessResponse leadIdActivityEmailEmailIdPut(id, emailId, opts)



update email

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var emailId = "emailId_example"; // String | email id
var opts = {
  'emailId': "emailId_example", // String | 
  'to': "to_example", // [String] | 
  'cc': "cc_example", // [String] | 
  'bcc': "bcc_example", // [String] | 
  'subject': "subject_example", // String | 
  'message': "message_example", // String | 
  'draft': true, // Boolean | 
  'reminderEnabled': true, // Boolean | 
  'reminderDate': 56, // Number | 
  'schedule': 56 // Number | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivityEmailEmailIdPut(id, emailId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **emailId** | **String**| email id | 
 **emailId** | **String**|  | [optional] 
 **to** | [**[String]**](String.md)|  | [optional] 
 **cc** | [**[String]**](String.md)|  | [optional] 
 **bcc** | [**[String]**](String.md)|  | [optional] 
 **subject** | **String**|  | [optional] 
 **message** | **String**|  | [optional] 
 **draft** | **Boolean**|  | [optional] 
 **reminderEnabled** | **Boolean**|  | [optional] 
 **reminderDate** | **Number**|  | [optional] 
 **schedule** | **Number**|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

<a name="leadIdActivityEmailPost"></a>
# **leadIdActivityEmailPost**
> SuccessResponse leadIdActivityEmailPost(id, emailId, to, subject, message, opts)



create activity

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var emailId = "emailId_example"; // String | 
var to = "to_example"; // [String] | 
var subject = "subject_example"; // String | 
var message = "message_example"; // String | 
var opts = {
  'cc': "cc_example", // [String] | 
  'bcc': "bcc_example", // [String] | 
  'draft': true, // Boolean | 
  'reminderEnabled': true, // Boolean | 
  'reminderDate': 56, // Number | 
  'schedule': 56 // Number | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivityEmailPost(id, emailId, to, subject, message, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **emailId** | **String**|  | 
 **to** | [**[String]**](String.md)|  | 
 **subject** | **String**|  | 
 **message** | **String**|  | 
 **cc** | [**[String]**](String.md)|  | [optional] 
 **bcc** | [**[String]**](String.md)|  | [optional] 
 **draft** | **Boolean**|  | [optional] 
 **reminderEnabled** | **Boolean**|  | [optional] 
 **reminderDate** | **Number**|  | [optional] 
 **schedule** | **Number**|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

<a name="leadIdActivityGet"></a>
# **leadIdActivityGet**
> SuccessResponse leadIdActivityGet(id, opts)



get lead activity

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var opts = {
  'after': "after_example", // String | after token
  'before': "before_example" // String | before token
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivityGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **after** | **String**| after token | [optional] 
 **before** | **String**| before token | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdActivityNoteNoteIdDelete"></a>
# **leadIdActivityNoteNoteIdDelete**
> SuccessResponse leadIdActivityNoteNoteIdDelete(id, noteId)



delete note

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var noteId = "noteId_example"; // String | note id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivityNoteNoteIdDelete(id, noteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **noteId** | **String**| note id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdActivityNoteNoteIdPut"></a>
# **leadIdActivityNoteNoteIdPut**
> SuccessResponse leadIdActivityNoteNoteIdPut(id, noteId, opts)



udpate note

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var noteId = "noteId_example"; // String | note id
var opts = {
  'note': "note_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivityNoteNoteIdPut(id, noteId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **noteId** | **String**| note id | 
 **note** | **String**|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

<a name="leadIdActivityNotePost"></a>
# **leadIdActivityNotePost**
> SuccessResponse leadIdActivityNotePost(id, note)



create note

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var note = "note_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivityNotePost(id, note, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **note** | **String**|  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

<a name="leadIdActivitySmsPost"></a>
# **leadIdActivitySmsPost**
> SuccessResponse leadIdActivitySmsPost(id, opts)



create sms

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var opts = {
  'phoneId': "phoneId_example", // String | 
  'detailId': "detailId_example", // String | 
  'message': "message_example", // String | 
  'draft': true, // Boolean | 
  'schedule': 56 // Number | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivitySmsPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **phoneId** | **String**|  | [optional] 
 **detailId** | **String**|  | [optional] 
 **message** | **String**|  | [optional] 
 **draft** | **Boolean**|  | [optional] 
 **schedule** | **Number**|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

<a name="leadIdActivitySmsSmsIdDelete"></a>
# **leadIdActivitySmsSmsIdDelete**
> SuccessResponse leadIdActivitySmsSmsIdDelete(id, smsId)



delete sms

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var smsId = "smsId_example"; // String | sms id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivitySmsSmsIdDelete(id, smsId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **smsId** | **String**| sms id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdActivitySmsSmsIdPut"></a>
# **leadIdActivitySmsSmsIdPut**
> SuccessResponse leadIdActivitySmsSmsIdPut(id, smsId, phoneId, detailId, message, opts)



create sms

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.ActivityApi();
var id = "id_example"; // String | lead id
var smsId = "smsId_example"; // String | sms id
var phoneId = "phoneId_example"; // String | 
var detailId = "detailId_example"; // String | 
var message = "message_example"; // String | 
var opts = {
  'draft': true, // Boolean | 
  'schedule': 56 // Number | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdActivitySmsSmsIdPut(id, smsId, phoneId, detailId, message, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **smsId** | **String**| sms id | 
 **phoneId** | **String**|  | 
 **detailId** | **String**|  | 
 **message** | **String**|  | 
 **draft** | **Boolean**|  | [optional] 
 **schedule** | **Number**|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

