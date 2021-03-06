# SalestreamApi.TaskApi

All URIs are relative to *https://api-us.salestream.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leadIdTaskPost**](TaskApi.md#leadIdTaskPost) | **POST** /lead/{id}/task | 
[**leadIdTaskTaskIdDelete**](TaskApi.md#leadIdTaskTaskIdDelete) | **DELETE** /lead/{id}/task/{taskId} | 
[**leadIdTaskTaskIdPut**](TaskApi.md#leadIdTaskTaskIdPut) | **PUT** /lead/{id}/task/{taskId} | 


<a name="leadIdTaskPost"></a>
# **leadIdTaskPost**
> SuccessResponse leadIdTaskPost(id, opts)



Create task

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.TaskApi();
var id = "id_example"; // String | lead id
var opts = {
  'createTask': new SalestreamApi.CreateTask() // CreateTask | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdTaskPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **createTask** | [**CreateTask**](CreateTask.md)|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="leadIdTaskTaskIdDelete"></a>
# **leadIdTaskTaskIdDelete**
> SuccessResponse leadIdTaskTaskIdDelete(id, taskId)



Delete task

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.TaskApi();
var id = "id_example"; // String | lead id
var taskId = "taskId_example"; // String | task id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdTaskTaskIdDelete(id, taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **taskId** | **String**| task id | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="leadIdTaskTaskIdPut"></a>
# **leadIdTaskTaskIdPut**
> SuccessResponse leadIdTaskTaskIdPut(id, taskId, opts)



Update task

### Example
```javascript
var SalestreamApi = require('salestream_api');
var defaultClient = SalestreamApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new SalestreamApi.TaskApi();
var id = "id_example"; // String | lead id
var taskId = "taskId_example"; // String | task id
var opts = {
  'updateTask': new SalestreamApi.UpdateTask() // UpdateTask | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.leadIdTaskTaskIdPut(id, taskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| lead id | 
 **taskId** | **String**| task id | 
 **updateTask** | [**UpdateTask**](UpdateTask.md)|  | [optional] 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

