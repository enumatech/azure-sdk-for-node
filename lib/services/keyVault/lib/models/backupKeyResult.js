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
 * @class
 * Initializes a new instance of the BackupKeyResult class.
 * @constructor
 * The backup key result, containing the backup blob.
 *
 * @member {buffer} [value] The backup blob containing the backed up key.
 *
 */
class BackupKeyResult {
  constructor() {
  }

  /**
   * Defines the metadata of BackupKeyResult
   *
   * @returns {object} metadata of BackupKeyResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupKeyResult',
      type: {
        name: 'Composite',
        className: 'BackupKeyResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Base64Url'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupKeyResult;