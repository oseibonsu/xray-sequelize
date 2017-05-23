var AWSXRay = require('aws-xray-sdk');
module.exports = AWSXRay.captureMySQL(require('mysql'));
