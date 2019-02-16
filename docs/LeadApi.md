# SalestreamApi.LeadApi

All URIs are relative to *https://rest-dev.salestream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leadIdGet**](LeadApi.md#leadIdGet) | **GET** /lead/{id} | 
[**leadIdPut**](LeadApi.md#leadIdPut) | **PUT** /lead/{id} | 
[**leadPost**](LeadApi.md#leadPost) | **POST** /lead | 
[**leadSearchPost**](LeadApi.md#leadSearchPost) | **POST** /lead/search | 


<a name="leadIdGet"></a>
# **leadIdGet**
> leadIdGet(id)



Get lead

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadApi();
var id = "id_example"; // String | lead id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.leadIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="leadIdPut"></a>
# **leadIdPut**
> SuccessResponse leadIdPut(id, opts)



Update lead

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadApi();
var id = "id_example"; // String | lead id
var opts = {
  'company': "company_example", // String | 
  'url': "url_example", // String | 
  'description': "description_example", // String | 
  'contacts': new SalestreamApi.CreateLeadContacts(), // [CreateLeadContacts] | 
  'addresses': new SalestreamApi.CreateLeadAddresses(), // [CreateLeadAddresses] | 
  'customFields': null, // Object | 
  'status': "status_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **company** | **String**|  | [optional] 
 **url** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **contacts** | [**[CreateLeadContacts]**](CreateLeadContacts.md)|  | [optional] 
 **addresses** | [**[CreateLeadAddresses]**](CreateLeadAddresses.md)|  | [optional] 
 **customFields** | [**Object**](Object.md)|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

<a name="leadPost"></a>
# **leadPost**
> SuccessResponse leadPost(company, opts)



Create lead

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadApi();
var company = "company_example"; // String | 
var opts = {
  'url': "url_example", // String | 
  'description': "description_example", // String | 
  'contacts': new SalestreamApi.CreateLeadContacts(), // [CreateLeadContacts] | 
  'addresses': new SalestreamApi.CreateLeadAddresses(), // [CreateLeadAddresses] | 
  'customFields': null, // Object | 
  'status': "status_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadPost(company, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **String**|  | 
 **url** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **contacts** | [**[CreateLeadContacts]**](CreateLeadContacts.md)|  | [optional] 
 **addresses** | [**[CreateLeadAddresses]**](CreateLeadAddresses.md)|  | [optional] 
 **customFields** | [**Object**](Object.md)|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: application/json

<a name="leadSearchPost"></a>
# **leadSearchPost**
> leadSearchPost(opts)



Search for leads

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadApi();
var opts = {
  'searchString': "searchString_example", // String | 
  'columns': "columns_example" // [String] | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.leadSearchPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchString** | **String**|  | [optional] 
 **columns** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, application/json
 - **Accept**: Not defined

