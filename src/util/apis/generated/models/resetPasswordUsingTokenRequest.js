/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ResetPasswordUsingTokenRequest class.
 * @constructor
 * @member {string} newPassword The new password. Needs to be at least 8
 * characters long and contain at least one lower- and one uppercase letter.
 * 
 * @member {string} token The reset password token that was sent to the user
 * 
 */
function ResetPasswordUsingTokenRequest() {
}

/**
 * Defines the metadata of ResetPasswordUsingTokenRequest
 *
 * @returns {object} metadata of ResetPasswordUsingTokenRequest
 *
 */
ResetPasswordUsingTokenRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResetPasswordUsingTokenRequest',
    type: {
      name: 'Composite',
      className: 'ResetPasswordUsingTokenRequest',
      modelProperties: {
        newPassword: {
          required: true,
          serializedName: 'new_password',
          type: {
            name: 'String'
          }
        },
        token: {
          required: true,
          serializedName: 'token',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ResetPasswordUsingTokenRequest;