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
 * The response of the list hybrid connection operation.
 */
class HybridConnectionListResult extends Array {
  /**
   * Create a HybridConnectionListResult.
   * @member {string} [nextLink] Link to the next set of results. Not empty if
   * value contains incomplete list hybrid connection operation.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HybridConnectionListResult
   *
   * @returns {object} metadata of HybridConnectionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HybridConnectionListResult',
      type: {
        name: 'Composite',
        className: 'HybridConnectionListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HybridConnectionElementType',
                  type: {
                    name: 'Composite',
                    className: 'HybridConnection'
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

module.exports = HybridConnectionListResult;
