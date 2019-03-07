# SalestreamApi.LeadOpportunityApi

All URIs are relative to *https://api-us.salestream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leadIdOpportunityGet**](LeadOpportunityApi.md#leadIdOpportunityGet) | **GET** /lead/{id}/opportunity | 
[**leadIdOpportunityOpportunityIdDelete**](LeadOpportunityApi.md#leadIdOpportunityOpportunityIdDelete) | **DELETE** /lead/{id}/opportunity/{opportunityId} | 
[**leadIdOpportunityOpportunityIdPut**](LeadOpportunityApi.md#leadIdOpportunityOpportunityIdPut) | **PUT** /lead/{id}/opportunity/{opportunityId} | 
[**leadIdOpportunityPost**](LeadOpportunityApi.md#leadIdOpportunityPost) | **POST** /lead/{id}/opportunity | 


<a name="leadIdOpportunityGet"></a>
# **leadIdOpportunityGet**
> SuccessResponse leadIdOpportunityGet(id)



get lead opportunities

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadOpportunityApi();
var id = "id_example"; // String | lead id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdOpportunityGet(id, callback);
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

<a name="leadIdOpportunityOpportunityIdDelete"></a>
# **leadIdOpportunityOpportunityIdDelete**
> SuccessResponse leadIdOpportunityOpportunityIdDelete(id, opportunityId)



Update opportunity

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadOpportunityApi();
var id = "id_example"; // String | lead id
var opportunityId = "opportunityId_example"; // String | opportunity id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdOpportunityOpportunityIdDelete(id, opportunityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **opportunityId** | **String**| opportunity id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdOpportunityOpportunityIdPut"></a>
# **leadIdOpportunityOpportunityIdPut**
> SuccessResponse leadIdOpportunityOpportunityIdPut(id, opportunityId, opts)



Update opportunity

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadOpportunityApi();
var id = "id_example"; // String | lead id
var opportunityId = "opportunityId_example"; // String | opportunity id
var opts = {
  'createOpportunity': new SalestreamApi.CreateOpportunity() // CreateOpportunity | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdOpportunityOpportunityIdPut(id, opportunityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **opportunityId** | **String**| opportunity id | 
 **createOpportunity** | [**CreateOpportunity**](CreateOpportunity.md)|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="leadIdOpportunityPost"></a>
# **leadIdOpportunityPost**
> SuccessResponse leadIdOpportunityPost(id, opts)



Create opportunity

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.LeadOpportunityApi();
var id = "id_example"; // String | lead id
var opts = {
  'createOpportunity': new SalestreamApi.CreateOpportunity() // CreateOpportunity | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdOpportunityPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **createOpportunity** | [**CreateOpportunity**](CreateOpportunity.md)|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

