/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The Azure event log entries are of type EventData
 *
 */
class EventData {
  /**
   * Create a EventData.
   * @member {object} [authorization]
   * @member {string} [authorization.action] the permissible actions. For
   * instance: microsoft.support/supporttickets/write
   * @member {string} [authorization.role] the role of the user. For instance:
   * Subscription Admin
   * @member {string} [authorization.scope] the scope.
   * @member {object} [claims] key value pairs to identify ARM permissions.
   * @member {string} [caller] the email address of the user who has performed
   * the operation, the UPN claim or SPN claim based on availability.
   * @member {string} [description] the description of the event.
   * @member {string} [id] the Id of this event as required by ARM for RBAC. It
   * contains the EventDataID and a timestamp information.
   * @member {string} [eventDataId] the event data Id. This is a unique
   * identifier for an event.
   * @member {string} [correlationId] the correlation Id, usually a GUID in the
   * string format. The correlation Id is shared among the events that belong
   * to the same uber operation.
   * @member {object} [eventName] the event name. This value should not be
   * confused with OperationName. For practical purposes, OperationName might
   * be more appealing to end users.
   * @member {string} [eventName.value] the invariant value.
   * @member {string} [eventName.localizedValue] the locale specific value.
   * @member {object} [category] the event category.
   * @member {string} [category.value] the invariant value.
   * @member {string} [category.localizedValue] the locale specific value.
   * @member {object} [httpRequest] the HTTP request info. Usually includes the
   * 'clientRequestId', 'clientIpAddress' (IP address of the user who initiated
   * the event) and 'method' (HTTP method e.g. PUT).
   * @member {string} [httpRequest.clientRequestId] the client request id.
   * @member {string} [httpRequest.clientIpAddress] the client Ip Address
   * @member {string} [httpRequest.method] the Http request method.
   * @member {string} [httpRequest.uri] the Uri.
   * @member {string} level the event level. Possible values include:
   * 'Critical', 'Error', 'Warning', 'Informational', 'Verbose'
   * @member {string} [resourceGroupName] the resource group name of the
   * impacted resource.
   * @member {object} [resourceProviderName] the resource provider name of the
   * impacted resource.
   * @member {string} [resourceProviderName.value] the invariant value.
   * @member {string} [resourceProviderName.localizedValue] the locale specific
   * value.
   * @member {string} [resourceId] the resource uri that uniquely identifies
   * the resource that caused this event.
   * @member {object} [resourceType] the resource type
   * @member {string} [resourceType.value] the invariant value.
   * @member {string} [resourceType.localizedValue] the locale specific value.
   * @member {string} [operationId] It is usually a GUID shared among the
   * events corresponding to single operation. This value should not be
   * confused with EventName.
   * @member {object} [operationName] the operation name.
   * @member {string} [operationName.value] the invariant value.
   * @member {string} [operationName.localizedValue] the locale specific value.
   * @member {object} [properties] the set of <Key, Value> pairs (usually a
   * Dictionary<String, String>) that includes details about the event.
   * @member {object} [status] a string describing the status of the operation.
   * Some typical values are: Started, In progress, Succeeded, Failed,
   * Resolved.
   * @member {string} [status.value] the invariant value.
   * @member {string} [status.localizedValue] the locale specific value.
   * @member {object} [subStatus] the event sub status. Most of the time, when
   * included, this captures the HTTP status code of the REST call. Common
   * values are: OK (HTTP Status Code: 200), Created (HTTP Status Code: 201),
   * Accepted (HTTP Status Code: 202), No Content (HTTP Status Code: 204), Bad
   * Request(HTTP Status Code: 400), Not Found (HTTP Status Code: 404),
   * Conflict (HTTP Status Code: 409), Internal Server Error (HTTP Status Code:
   * 500), Service Unavailable (HTTP Status Code:503), Gateway Timeout (HTTP
   * Status Code: 504)
   * @member {string} [subStatus.value] the invariant value.
   * @member {string} [subStatus.localizedValue] the locale specific value.
   * @member {date} eventTimestamp the timestamp of when the event was
   * generated by the Azure service processing the request corresponding the
   * event. It in ISO 8601 format.
   * @member {date} submissionTimestamp the timestamp of when the event became
   * available for querying via this API. It is in ISO 8601 format. This value
   * should not be confused eventTimestamp. As there might be a delay between
   * the occurrence time of the event, and the time that the event is submitted
   * to the Azure logging infrastructure.
   * @member {string} [subscriptionId] the Azure subscription Id usually a
   * GUID.
   * @member {string} [tenantId] the Azure tenant Id
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventData
   *
   * @returns {object} metadata of EventData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventData',
      type: {
        name: 'Composite',
        className: 'EventData',
        modelProperties: {
          authorization: {
            required: false,
            serializedName: 'authorization',
            type: {
              name: 'Composite',
              className: 'SenderAuthorization'
            }
          },
          claims: {
            required: false,
            serializedName: 'claims',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          caller: {
            required: false,
            serializedName: 'caller',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          eventDataId: {
            required: false,
            serializedName: 'eventDataId',
            type: {
              name: 'String'
            }
          },
          correlationId: {
            required: false,
            serializedName: 'correlationId',
            type: {
              name: 'String'
            }
          },
          eventName: {
            required: false,
            serializedName: 'eventName',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          category: {
            required: false,
            serializedName: 'category',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          httpRequest: {
            required: false,
            serializedName: 'httpRequest',
            type: {
              name: 'Composite',
              className: 'HttpRequestInfo'
            }
          },
          level: {
            required: true,
            serializedName: 'level',
            type: {
              name: 'Enum',
              allowedValues: [ 'Critical', 'Error', 'Warning', 'Informational', 'Verbose' ]
            }
          },
          resourceGroupName: {
            required: false,
            serializedName: 'resourceGroupName',
            type: {
              name: 'String'
            }
          },
          resourceProviderName: {
            required: false,
            serializedName: 'resourceProviderName',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          resourceType: {
            required: false,
            serializedName: 'resourceType',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          operationId: {
            required: false,
            serializedName: 'operationId',
            type: {
              name: 'String'
            }
          },
          operationName: {
            required: false,
            serializedName: 'operationName',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          subStatus: {
            required: false,
            serializedName: 'subStatus',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          eventTimestamp: {
            required: true,
            serializedName: 'eventTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          submissionTimestamp: {
            required: true,
            serializedName: 'submissionTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          subscriptionId: {
            required: false,
            serializedName: 'subscriptionId',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventData;