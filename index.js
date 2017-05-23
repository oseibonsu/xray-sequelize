var AWSXRay = require('aws-xray-sdk');
var mysql = require('mysql');
module.exports = AWSXRay.captureMySQL(mysql);
