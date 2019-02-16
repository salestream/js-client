# SalestreamApi.LeadContactApi

All URIs are relative to *https://rest-dev.salestream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leadIdContactsContactIdDelete**](LeadContactApi.md#leadIdContactsContactIdDelete) | **DELETE** /lead/{id}/contacts/{contactId} | 
[**leadIdContactsContactIdGet**](LeadContactApi.md#leadIdContactsContactIdGet) | **GET** /lead/{id}/contacts/{contactId} | 
[**leadIdContactsContactIdPut**](LeadContactApi.md#leadIdContactsContactIdPut) | **PUT** /lead/{id}/contacts/{contactId} | 
[**leadIdContactsGet**](LeadContactApi.md#leadIdContactsGet) | **GET** /lead/{id}/contacts | 
[**leadIdContactsPost**](LeadContactApi.md#leadIdContactsPost) | **POST** /lead/{id}/contacts | 


<a name="leadIdContactsContactIdDelete"></a>
# **leadIdContactsContactIdDelete**
> SuccessResponse leadIdContactsContactIdDelete(id, contactId)



delete lead contact

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadContactApi();
var id = "id_example"; // String | lead id
var contactId = "contactId_example"; // String | contact id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdContactsContactIdDelete(id, contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **contactId** | **String**| contact id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdContactsContactIdGet"></a>
# **leadIdContactsContactIdGet**
> SuccessResponse leadIdContactsContactIdGet(id, contactId)



get lead contact

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadContactApi();
var id = "id_example"; // String | lead id
var contactId = "contactId_example"; // String | contactId id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdContactsContactIdGet(id, contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **contactId** | **String**| contactId id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdContactsContactIdPut"></a>
# **leadIdContactsContactIdPut**
> SuccessResponse leadIdContactsContactIdPut(id, contactId, opts)



update lead contact

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadContactApi();
var id = "id_example"; // String | lead id
var contactId = "contactId_example"; // String | contact id
var opts = {
  'name': "name_example", // String | 
  'title': "title_example", // String | 
  'details': new SalestreamApi.CreateContactDetails() // [CreateContactDetails] | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdContactsContactIdPut(id, contactId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **contactId** | **String**| contact id | 
 **name** | **String**|  | [optional] 
 **title** | **String**|  | [optional] 
 **details** | [**[CreateContactDetails]**](CreateContactDetails.md)|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

<a name="leadIdContactsGet"></a>
# **leadIdContactsGet**
> SuccessResponse leadIdContactsGet(id)



get lead contacts

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadContactApi();
var id = "id_example"; // String | lead id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdContactsGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdContactsPost"></a>
# **leadIdContactsPost**
> SuccessResponse leadIdContactsPost(id, name, opts)



Create lead contact

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadContactApi();
var id = "id_example"; // String | lead id
var name = "name_example"; // String | 
var opts = {
  'title': "title_example", // String | 
  'details': new SalestreamApi.CreateContactDetails() // [CreateContactDetails] | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdContactsPost(id, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **name** | **String**|  | 
 **title** | **String**|  | [optional] 
 **details** | [**[CreateContactDetails]**](CreateContactDetails.md)|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

