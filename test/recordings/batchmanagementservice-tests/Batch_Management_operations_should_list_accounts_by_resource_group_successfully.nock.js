// This file has been autogenerated.

exports.setEnvironment = function () {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[{\"name\":\"batchtestnodesdk\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/nodesdkteststorage\",\"lastKeySync\":\"2016-03-10T23:48:38.9878479Z\"}},\"id\":\"/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'b502918f-0371-4103-b9bf-15241bcb7cd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': 'c6e212ee-9a52-483b-a2b5-4b980084693a',
  'x-ms-correlation-request-id': 'c6e212ee-9a52-483b-a2b5-4b980084693a',
  'x-ms-routing-request-id': 'CENTRALUS:20160310T235018Z:c6e212ee-9a52-483b-a2b5-4b980084693a',
  date: 'Thu, 10 Mar 2016 23:50:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[{\"name\":\"batchtestnodesdk\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/nodesdkteststorage\",\"lastKeySync\":\"2016-03-10T23:48:38.9878479Z\"}},\"id\":\"/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'b502918f-0371-4103-b9bf-15241bcb7cd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': 'c6e212ee-9a52-483b-a2b5-4b980084693a',
  'x-ms-correlation-request-id': 'c6e212ee-9a52-483b-a2b5-4b980084693a',
  'x-ms-routing-request-id': 'CENTRALUS:20160310T235018Z:c6e212ee-9a52-483b-a2b5-4b980084693a',
  date: 'Thu, 10 Mar 2016 23:50:17 GMT',
  connection: 'close' });
 return result; }]];