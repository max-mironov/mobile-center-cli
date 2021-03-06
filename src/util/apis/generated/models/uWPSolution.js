/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the UWPSolution class.
 * @constructor
 * @member {string} path The path to the UWP solution
 * 
 * @member {array} configurations The possible configurations detected for the
 * UWP solution
 * 
 */
function UWPSolution() {
}

/**
 * Defines the metadata of UWPSolution
 *
 * @returns {object} metadata of UWPSolution
 *
 */
UWPSolution.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UWPSolution',
    type: {
      name: 'Composite',
      className: 'UWPSolution',
      modelProperties: {
        path: {
          required: true,
          serializedName: 'path',
          type: {
            name: 'String'
          }
        },
        configurations: {
          required: true,
          serializedName: 'configurations',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = UWPSolution;
