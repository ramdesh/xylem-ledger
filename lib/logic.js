'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.rdeshapriya.xylem.ChangeDeviceToken} changeDeviceToken
 * @transaction
 */
function onChangeDeviceToken(changeDeviceToken) {
    var assetRegistry;
    var id = changeDeviceToken.relatedDevice.deviceId;
    return getAssetRegistry('org.rdeshapriya.xylem.Device')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(device) {
            device.token = changeDeviceToken.newToken;
            return assetRegistry.update(device);
        });
}