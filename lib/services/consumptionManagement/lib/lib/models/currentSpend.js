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
 * The current amount of cost which is being tracked for a budget.
 *
 */
class CurrentSpend {
  /**
   * Create a CurrentSpend.
   * @member {number} [amount] The total amount of cost which is being tracked
   * by the budget.
   * @member {string} [unit] The unit of measure for the budget amount.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CurrentSpend
   *
   * @returns {object} metadata of CurrentSpend
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CurrentSpend',
      type: {
        name: 'Composite',
        className: 'CurrentSpend',
        modelProperties: {
          amount: {
            required: false,
            readOnly: true,
            serializedName: 'amount',
            type: {
              name: 'Number'
            }
          },
          unit: {
            required: false,
            readOnly: true,
            serializedName: 'unit',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CurrentSpend;