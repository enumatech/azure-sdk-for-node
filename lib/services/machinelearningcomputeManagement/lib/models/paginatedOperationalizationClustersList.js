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

/**
 * Paginated list of operationalization clusters.
 */
class PaginatedOperationalizationClustersList extends Array {
  /**
   * Create a PaginatedOperationalizationClustersList.
   * @member {string} [nextLink] A continuation link (absolute URI) to the next
   * page of results in the list.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PaginatedOperationalizationClustersList
   *
   * @returns {object} metadata of PaginatedOperationalizationClustersList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PaginatedOperationalizationClustersList',
      type: {
        name: 'Composite',
        className: 'PaginatedOperationalizationClustersList',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationalizationClusterElementType',
                  type: {
                    name: 'Composite',
                    className: 'OperationalizationCluster'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PaginatedOperationalizationClustersList;
